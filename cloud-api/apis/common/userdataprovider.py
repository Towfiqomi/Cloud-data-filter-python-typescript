import requests
from apis.dtos import user_dtos


async def get_user_location_data() -> user_dtos.UserLocationData:
    URL = "https://freegeoip.app/json/"
    r = requests.get(URL)
    data: user_dtos.UserLocationData = r.json()
    return data
