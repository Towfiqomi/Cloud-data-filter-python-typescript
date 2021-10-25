import { useState } from "react";
import { CloudFilters, CloudData, PageInfo, CloudFiltersDataEntity } from "../types";
import axios from "axios";

const useCloudList = (): {
  cloudList: CloudData;
  pageInfo : PageInfo;
  fetchCloudList:(current_page : number)=> Promise<void>;
  filterCloudList: (current_page : number, filter_entity : CloudFiltersDataEntity) => Promise<void>
} => {
  const [cloudList, setCloudList] = useState<CloudData>({
      clouds : []
  });
  const [pageInfo, setPageInfo] = useState<PageInfo>({
    total : 0,
    hasNextPage : false,
    total_pages : 0
  })

  const fetchCloudList = async (current_page : number): Promise<void> => {
    try {
        const {data} = await axios.get<CloudData>(`http://localhost:5000/v1/cloud/list?current_page=${current_page}&page_size=10`);
        if (data) {
            setCloudList(data);
        }
        if (data.pageInfo){
          setPageInfo(data.pageInfo)
        }
      } catch (error) {
      }
  };

  const filterCloudList = async (current_page : number, filter_entity : CloudFiltersDataEntity): Promise<void> => {
    try {
        const {data} = await axios.post<CloudData>(
          `http://localhost:5000/v1/cloud/filters?current_page=${current_page}&page_size=10`,
          filter_entity
        );
        if (data) {
            setCloudList(data);
        }
        if (data.pageInfo){
          setPageInfo(data.pageInfo)
        }
      } catch (error) {
      }
  };

  return {
    cloudList,
    pageInfo,
    fetchCloudList,
    filterCloudList
  };
};

export default useCloudList;