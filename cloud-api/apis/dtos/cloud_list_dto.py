from pydantic.main import BaseModel
from typing import List, Optional


class CloudDetails(BaseModel):
    cloud_description: str
    cloud_name: str
    geo_latitude: float
    geo_longitude: float
    geo_region: str
    distance: Optional[int]


class PageInfo(BaseModel):
    total: int
    hasNextPage: bool
    total_pages: int
    filtered_data: Optional[bool]


class PaginatedCloudList(BaseModel):
    clouds: List[CloudDetails]
    pageInfo: PageInfo


class CloudList(BaseModel):
    clouds: List[CloudDetails]
