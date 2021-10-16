import pytest
from apis.dtos.cloud_list_dto import CloudList

@pytest.fixture
def cloud_list() -> CloudList:
    return {
        "clouds": [
        {
            "cloud_description": "Africa",
            "cloud_name": "aws",
            "geo_latitude": -33.92,
            "geo_longitude": 18.42,
            "geo_region": "africa"
        },
        {
            "cloud_description": "Asia",
            "cloud_name": "azure",
            "geo_latitude": -26.198,
            "geo_longitude": 28.03,
            "geo_region": "asia"
        },
    ]
    }