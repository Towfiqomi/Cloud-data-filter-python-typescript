from fastapi import APIRouter
from apis.dtos import cloud_filters_dto
from apis.models import cloud_filters

router = APIRouter()

@router.get("/cloud/filters")
async def get_cloud_filters() -> cloud_filters_dto.CloudFilterBy:
    filters = await cloud_filters.get_cloud_filters()
    return filters
