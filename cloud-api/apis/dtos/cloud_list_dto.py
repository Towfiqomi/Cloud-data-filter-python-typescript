from pydantic.main import BaseModel
from typing import List, NewType, Optional


class CloudDetails(BaseModel):
    cloud_description : str
    cloud_name : str
    geo_latitude : float
    geo_longitude : float
    geo_region : str

class CloudList(BaseModel):
    clouds : List[CloudDetails]