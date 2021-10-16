from fastapi import APIRouter

router = APIRouter()

@router.post("/cloud/filters")
def cloud_filters():
    return {"Hello": "World"}