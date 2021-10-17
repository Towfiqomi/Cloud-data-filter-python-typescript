import pytest
from unittest import mock
from tests import fixtures
from apis.common import dataprovider

@pytest.mark.asyncio
@mock.patch("apis.common.dataprovider.get_cloud_list")
async def test_data_proovider_get_cloud_list_success(mock_dataprovider_get_cloud_list : mock.Mock):
    MOCK_CLOUD_LIST = fixtures.CloudList
    mock_dataprovider_get_cloud_list.return_value = MOCK_CLOUD_LIST
    response = await dataprovider.get_cloud_list()
    assert response == MOCK_CLOUD_LIST

@pytest.mark.asyncio
@mock.patch("apis.common.dataprovider.get_cloud_list")
async def test_data_proovider_get_cloud_list_failed(mock_dataprovider_get_cloud_list : mock.Mock):
    mock_exception = Exception(
            "Cloud list from public api is not served"
        )
    with pytest.raises(Exception) as error_info:
        await dataprovider.get_cloud_list()
        assert error_info == mock_exception