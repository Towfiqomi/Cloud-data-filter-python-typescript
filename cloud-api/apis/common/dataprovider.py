import requests
from apis.dtos.cloud_list_dto import CloudList, PaginatedCloudList
from apis.config import PUBLIC_API


async def get_full_cloud_list() -> CloudList:
    data = requests.get(PUBLIC_API)
    if not data:
        raise Exception(f"Cloud list from public api is not served")
    cloud_list = data.json()
    return cloud_list


async def get_paginated_cloud_list(current_page, page_size) -> PaginatedCloudList:
    cloud_list = await get_full_cloud_list()

    index_of_last_cloud = current_page * page_size
    index_of_first_cloud = index_of_last_cloud - page_size
    limited_cloud_list = cloud_list["clouds"][index_of_first_cloud:index_of_last_cloud]
    total = len(cloud_list["clouds"])
    return {
        "clouds": limited_cloud_list,
        "pageInfo": {
            "total": total,
            "hasNextPage": True if total > page_size else False,
            "total_pages": total / page_size,
        },
    }
