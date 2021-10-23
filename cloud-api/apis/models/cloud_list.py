from apis.common import dataprovider
from apis.dtos import cloud_list_dto

async def get_cloud_list(current_page: int, page_size: int) -> cloud_list_dto.CloudList:
    cloud_list = await dataprovider.get_cloud_list(current_page, page_size)
    return cloud_list