import enum
from pydantic.main import BaseModel
from typing import Optional


class CloudFiltersData(BaseModel):
    geo_latitude : Optional[float]
    geo_longitude : Optional[float]
    geo_region : Optional[str]

class Filter(enum.Enum):
    REGION = "region"
    Distance = "distance"
    Provider = "provider"
    
class CloudFilters(BaseModel):
    filter_key : Filter
    filter_value : str
    
class CloudProvider(enum.Enum):
    AWS = "aws"
    AZURE = "azure"
    GOOGLE = "google"
    DO = "do"
    UPCLOUD="upcloud"

class RegionList(BaseModel):
    region = list[str]