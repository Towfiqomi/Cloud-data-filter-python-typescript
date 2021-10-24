import { useState } from "react";
import { CloudFilters } from "../types";
import axios from "axios";
import {Option} from "../common/Select"

const useCloudFilters = (): {
  regions: Option[];
  providers : Option[];
  fetchCloudFilters:()=> Promise<void>;
} => {
  const [regions, setRegions] = useState<Option[]>([]);
  const [providers, setProviders] = useState<Option[]>([]);

  const fetchCloudFilters = async (): Promise<void> => {
    try {
        const {data} = await axios.get<CloudFilters>(`http://localhost:5000/v1/cloud/filters`);
        if (data.providers) {
            const providerList = data.providers.map(function (item: any) {
                return {
                    label: item,
                    value: item
                };
              });
            setProviders(providerList);
        }
        if (data.regions){
            const regionList = data.regions.map(function (item: any) {
                return {
                    label: item,
                    value: item
                };
              });
            setRegions(regionList)
        }
      } catch (error) {
      }
  };

  return {
    regions,
    providers,
    fetchCloudFilters,
  };
};

export default useCloudFilters;