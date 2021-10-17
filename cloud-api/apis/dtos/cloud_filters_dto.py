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
    OTHER = "other"
    
class CloudFilters(BaseModel):
    filter : Filter