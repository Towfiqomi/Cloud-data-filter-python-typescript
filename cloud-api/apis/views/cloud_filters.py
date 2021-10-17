from fastapi import APIRouter
from apis.dtos import cloud_list_dto, cloud_filters_dto
from apis.models import cloud_filters

router = APIRouter()

@router.post("/cloud/filter", response_model = cloud_list_dto.CloudList)
def cloud_filters(filter: cloud_filters_dto.CloudFilters, 
                filter_data: cloud_filters_dto.CloudFiltersData):
    return {"Hello": "World"}