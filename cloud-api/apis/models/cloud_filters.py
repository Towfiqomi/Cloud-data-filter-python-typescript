import re
import math
from apis.common import dataprovider, userdataprovider
from apis.dtos import cloud_filters_dto, cloud_list_dto


def get_unique_region_list(cloud_list):
    region_list = []
    for i in range(len(cloud_list["clouds"])):
        if cloud_list["clouds"][i]["geo_region"] not in region_list:
            region_list.append(cloud_list["clouds"][i]["geo_region"])
    return region_list


async def get_cloud_filters() -> cloud_filters_dto.CloudFilterBy:
    cloud_list = await dataprovider.get_full_cloud_list()
    region_list = get_unique_region_list(cloud_list)
    return {"regions": region_list, "providers": cloud_filters_dto.CloudProvider.list()}


def is_match(regex, text):
    pattern = re.compile(regex)
    return pattern.search(text) is not None


def region_filter(cloud_list, region):
    filtered_data = []
    for i in range(len(cloud_list)):
        is_data_match = is_match(region, cloud_list[i]["geo_region"])
        if is_data_match:
            filtered_data.append(cloud_list[i])
    return filtered_data


def provider_filter(cloud_list, provider):
    filtered_data = []
    for i in range(len(cloud_list)):
        is_data_match = is_match(provider, cloud_list[i]["cloud_name"])
        if is_data_match:
            filtered_data.append(cloud_list[i])
    return filtered_data


def deg_to_rad(deg):
    return deg * (math.pi / 180)


def get_distance_from_lat_lon_in_km(lat1, lon1, lat2, lon2):
    R = 6371
    dLat = deg_to_rad(lat2 - lat1)
    dLon = deg_to_rad(lon2 - lon1)
    a = math.sin(dLat / 2) * math.sin(dLat / 2) + math.cos(deg_to_rad(lat1)) * math.cos(
        deg_to_rad(lat2)
    ) * math.sin(dLon / 2) * math.sin(dLon / 2)
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    d = R * c
    return d


async def distance_filter(cloud_list: cloud_list_dto.CloudList):
    user_location_data = await userdataprovider.get_user_location_data()
    for i in range(len(cloud_list)):
        distance = get_distance_from_lat_lon_in_km(
            cloud_list[i]["geo_latitude"],
            cloud_list[i]["geo_longitude"],
            user_location_data["latitude"],
            user_location_data["latitude"],
        )
        cloud_list[i]["distance"] = distance
    newlist = sorted(cloud_list, key=lambda d: d["distance"])
    return newlist


async def filter_switcher(
    filters: cloud_filters_dto.CloudFilters, cloud_list: cloud_list_dto.CloudList
):
    filterd_cloud_list = []

    if filters.provider:
        filterd_cloud_list = provider_filter(cloud_list["clouds"], filters.provider)
    if filters.region:
        filterd_cloud_list = region_filter(cloud_list["clouds"], filters.region)
    if filters.distance == True:
        filterd_cloud_list = await distance_filter(cloud_list["clouds"])
    if filters.provider and filters.region:
        filterd_cloud_list = provider_filter(cloud_list["clouds"], filters.provider)
        filterd_cloud_list = region_filter(filterd_cloud_list, filters.region)
    if filters.region and filters.distance == True:
        filterd_cloud_list = region_filter(cloud_list["clouds"], filters.region)
        filterd_cloud_list = await distance_filter(filterd_cloud_list)
    if filters.provider and filters.distance == True:
        filterd_cloud_list = provider_filter(cloud_list["clouds"], filters.provider)
        filterd_cloud_list = await distance_filter(filterd_cloud_list)
    if filters.provider and filters.distance == True and filters.region:
        filterd_cloud_list = provider_filter(cloud_list["clouds"], filters.provider)
        filterd_cloud_list = region_filter(filterd_cloud_list, filters.region)
        filterd_cloud_list = await distance_filter(filterd_cloud_list)

    return filterd_cloud_list


async def get_filtered_cloud_list(
    filters: cloud_filters_dto.CloudFilters, current_page: int, page_size: int
) -> cloud_list_dto.PaginatedCloudList:
    cloud_list = await dataprovider.get_full_cloud_list()

    filterd_cloud_list = await filter_switcher(filters, cloud_list)

    index_of_last_cloud = current_page * page_size
    index_of_first_cloud = index_of_last_cloud - page_size
    final_filterd_cloud_list = filterd_cloud_list[
        index_of_first_cloud:index_of_last_cloud
    ]
    total = len(filterd_cloud_list)

    return {
        "clouds": final_filterd_cloud_list,
        "pageInfo": {
            "total": total,
            "hasNextPage": True if total > page_size else False,
            "total_pages": total / page_size,
            "filtered_data": True,
        },
    }
