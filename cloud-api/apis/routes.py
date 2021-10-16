from fastapi import APIRouter
from apis.views import clouds

router = APIRouter()

router.include_router(clouds.router, tags = ["Clouds"])