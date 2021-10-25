import { useState } from "react";
import { CloudFilters, Option } from "../types";
import axios from "axios";
import {toUpperCase} from "../utils/Utils"

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
            const providerList = data.providers.map(function (provider: any) {
                return {
                    label: toUpperCase(provider),
                    value: provider
                };
              });
            setProviders(providerList);
        }
        if (data.regions){
            const regionList = data.regions.map(function (region: any) {
                return {
                    label: toUpperCase(region),
                    value: region
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