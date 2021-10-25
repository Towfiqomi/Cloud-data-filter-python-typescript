from fastapi import APIRouter
from apis.views import cloud_list, cloud_filters

router = APIRouter()

router.include_router(cloud_list.router, tags=["Cloud List"])
router.include_router(cloud_filters.router, tags=["Cloud Filters"])
