from unittest import mock
import pytest
from apis.main import app
from apis.common import dataprovider
from tests import fixtures

@pytest.mark.asyncio
@mock.patch("apis.common.dataprovider.get_paginated_cloud_list")
async def test__model_get_cloud_list_success(mock_model_get_paginated_cloud_list : mock.Mock):
    MOCK_CLOUD_LIST = fixtures.CloudList
    mock_model_get_paginated_cloud_list.return_value = MOCK_CLOUD_LIST
    response = await dataprovider.get_paginated_cloud_list()
    assert response == MOCK_CLOUD_LIST