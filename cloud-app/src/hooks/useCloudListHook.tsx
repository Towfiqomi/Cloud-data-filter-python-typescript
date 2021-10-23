import { useState } from "react";
import { CloudList, PageInfo } from "../types";
import axios from "axios";

const useCloudList = (): {
  cloudList: CloudList;
  pageInfo : PageInfo;
  fetchCloudList:(current_page : number)=> Promise<void>;
} => {
  const [cloudList, setCloudList] = useState<CloudList>({
      clouds : []
  });
  const [pageInfo, setPageInfo] = useState<PageInfo>({
    total : 0,
    hasNextPage : false,
    total_pages : 0
  })

  const fetchCloudList = async (current_page : number): Promise<void> => {
    try {
        const {data} = await axios.get<CloudList>(`http://localhost:5000/v1/cloud/list?current_page=${current_page}&page_size=10`);
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
  };
};

export default useCloudList;