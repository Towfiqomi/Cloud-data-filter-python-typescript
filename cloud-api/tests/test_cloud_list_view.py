from fastapi.testclient import TestClient
from unittest import mock
import pytest
from apis.main import app
from apis.views import cloud_list
from tests import fixtures

client = TestClient(app)

@pytest.mark.asyncio
@mock.patch("apis.models.cloud_list.get_paginated_cloud_list")
async def test_get_cloud_list_success(mock_model_get_paginated_cloud_list : mock.Mock):
    MOCK_CLOUD_LIST = fixtures.CloudList
    mock_model_get_paginated_cloud_list.return_value = MOCK_CLOUD_LIST
    response = await cloud_list.get_paginated_cloud_list(current_page=1, page_size=10)
    assert response == MOCK_CLOUD_LIST