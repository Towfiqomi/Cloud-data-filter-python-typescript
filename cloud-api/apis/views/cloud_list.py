from fastapi import APIRouter
from apis.dtos import cloud_list_dto
from apis.models import cloud_list

router = APIRouter()

@router.get("/cloud/list", response_model=cloud_list_dto.CloudList)
async def get_cloud_list() -> cloud_list_dto.CloudList:
    list = await cloud_list.get_cloud_list()
    return list