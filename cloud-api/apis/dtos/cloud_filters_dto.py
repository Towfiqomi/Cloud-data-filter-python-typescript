from enum import Enum
from pydantic.main import BaseModel
from typing import Optional


class CloudFiltersData(BaseModel):
    geo_latitude : Optional[float]
    geo_longitude : Optional[float]
    geo_region : Optional[str]

class Filter(Enum):
    REGION = "region"
    Distance = "distance"
    Provider = "provider"
    
class CloudFilters(BaseModel):
    filter_key : Filter
    filter_value : CloudFiltersData
    
class GetCloudProvider(Enum):
    @classmethod
    def list(cls):
        return list(map(lambda c: c.value, cls))

class CloudProvider(GetCloudProvider):
    AWS = "aws"
    AZURE = "azure"
    GOOGLE = "google"
    DO = "do"
    UPCLOUD = "upcloud"

class CloudFilterBy(BaseModel):
    regions : list[str]
    providers: CloudProvider
    
    

