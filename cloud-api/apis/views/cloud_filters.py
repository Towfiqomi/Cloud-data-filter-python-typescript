from fastapi import APIRouter
from apis.dtos import cloud_filters_dto, cloud_list_dto
from apis.models import cloud_filters

router = APIRouter()

@router.get("/cloud/filters")
async def get_cloud_filters() -> cloud_filters_dto.CloudFilterBy:
    filters = await cloud_filters.get_cloud_filters()
    return filters

@router.post("/cloud/filters")
async def get_filtered_cloud_list(
        filters: cloud_filters_dto.CloudFilters
    ) -> cloud_list_dto.PaginatedCloudList:
    filters = await cloud_filters.get_filtered_cloud_list()
    return filters