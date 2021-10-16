from apis.common import dataprovider
from apis.dtos import cloud_list_dto

async def get_cloud_list() -> cloud_list_dto.CloudList:
    cloud_list = await dataprovider.get_cloud_list()
    return cloud_list