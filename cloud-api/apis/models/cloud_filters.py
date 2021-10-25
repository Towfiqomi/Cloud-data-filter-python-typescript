import re
from apis.common import dataprovider
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
    return {
        "regions" : region_list,
        "providers": cloud_filters_dto.CloudProvider.list()
    }

def is_match(regex, text):
    pattern = re.compile(regex)
    return pattern.search(text) is not None

def region_filter(cloud_list, region):
    filtered_data = []
    for i in range(len(cloud_list["clouds"])):
        is_match = is_match(region, cloud_list["clouds"][i]["geo_region"])
        if(is_match):
            filtered_data.append(cloud_list["clouds"][i])
    return filtered_data


def provider_filter(cloud_list, provider):
    filtered_data = []
    for i in range(len(cloud_list["clouds"])):
        isMatch = is_match(provider, cloud_list["clouds"][i]["cloud_name"])
        if(isMatch):
            filtered_data.append(cloud_list["clouds"][i])
    return filtered_data


async def get_filtered_cloud_list(
        filters: cloud_filters_dto.CloudFilters,
        current_page: int,
        page_size:int
    )-> cloud_list_dto.PaginatedCloudList:
    cloud_list = await dataprovider.get_full_cloud_list()
    
    filterd_cloud_list=[]
    
    if filters.provider:
        filterd_cloud_list = provider_filter(cloud_list, filters.provider)
        
    
    index_of_last_cloud = current_page * page_size
    index_of_first_cloud = index_of_last_cloud - page_size
    final_filterd_cloud_list = filterd_cloud_list[index_of_first_cloud:index_of_last_cloud]
    total = len(filterd_cloud_list)
    
    return {
        "clouds": final_filterd_cloud_list,
        "pageInfo": {
            "total": total,
            "hasNextPage": True if total > page_size else False,
            "total_pages": total / page_size,
            "filtered_data" : True
        },
    }
