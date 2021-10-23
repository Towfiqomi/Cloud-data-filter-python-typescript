from fastapi import APIRouter, HTTPException
from apis.dtos import cloud_list_dto
from apis.models import cloud_list

router = APIRouter()

@router.get("/cloud/list", response_model=cloud_list_dto.PaginatedCloudList)
async def get_paginated_cloud_list(current_page: int, page_size:int) -> cloud_list_dto.PaginatedCloudList:
    list = await cloud_list.get_paginated_cloud_list(current_page, page_size)
    if not list:
        return []
    return list