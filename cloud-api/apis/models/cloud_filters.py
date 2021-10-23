from apis.common import dataprovider
from apis.dtos import cloud_filters_dto

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