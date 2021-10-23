import { useRef, useState } from "react";
import { CloudList } from "../types";
import axios from "axios";

const useCloudList = (): {
  cloudList: CloudList;
  fetchCloudList:()=> Promise<void>;
} => {
  const [cloudList, setCloudList] = useState<CloudList>({
      clouds : []
  });

  const fetchCloudList = async (): Promise<void> => {
    try {
        const {data} = await axios.get<CloudList>("http://localhost:5000/v1/cloud/list");
        if (data) {
            setCloudList(data);
        }
      } catch (error) {
      }
  };

  return {
    cloudList,
    fetchCloudList,
  };
};

export default useCloudList;