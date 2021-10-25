import { useState } from "react";
import {CloudData, PageInfo, CloudFiltersDataEntity } from "../types";
import axios from "axios";
import {API_BASE_URL} from "../config"

const useCloudList = (): {
  cloudList: CloudData;
  pageInfo : PageInfo;
  fetchCloudList:(current_page : number)=> Promise<void>;
  filterCloudList: (current_page : number, filter_entity : CloudFiltersDataEntity) => Promise<void>;
  filterEntity: CloudFiltersDataEntity | undefined;
} => {
  const [cloudList, setCloudList] = useState<CloudData>({
      clouds : []
  });
  const [pageInfo, setPageInfo] = useState<PageInfo>({
    total : 0,
    hasNextPage : false,
    total_pages : 0
  });

  const [filterEntity, setFilterEntity] = useState<CloudFiltersDataEntity>();


  const fetchCloudList = async (current_page : number): Promise<void> => {
    try {
        const {data} = await axios.get<CloudData>(`${API_BASE_URL}/cloud/list?current_page=${current_page}&page_size=10`);
        if (data) {
            setCloudList(data);
        }
        if (data.pageInfo){
          setPageInfo(data.pageInfo);
        }
      } catch (error) {
      }
  };

  const filterCloudList = async (current_page : number, filter_entity : CloudFiltersDataEntity): Promise<void> => {
    setFilterEntity(filter_entity)
    try {
        const {data} = await axios.post<CloudData>(
          `${API_BASE_URL}/cloud/filters?current_page=${current_page}&page_size=10`,
          filter_entity
        );
        if (data) {
            setCloudList(data);
        }
        if (data.pageInfo){
          setPageInfo(data.pageInfo);
        }
      } catch (error) {
      }
  };

  return {
    cloudList,
    pageInfo,
    fetchCloudList,
    filterCloudList,
    filterEntity,
  };
};

export default useCloudList;