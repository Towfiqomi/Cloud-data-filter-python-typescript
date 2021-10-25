from pydantic.main import BaseModel

class UserLocationData(BaseModel):
    ip :str
    country_code: str
    country_name: str
    region_code: str
    region_name: str
    city: str
    zip_code: str
    time_zone: str
    latitude : float
    longitude: float
    metro_code: int