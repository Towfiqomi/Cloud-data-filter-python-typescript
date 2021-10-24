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
            const providerList = data.providers.map(function (provider: any) {
                return {
                    label: provider,
                    value: provider
                };
              });
            setProviders(providerList);
        }
        if (data.regions){
            const regionList = data.regions.map(function (region: any) {
                return {
                    label: region.replace(/(^\w|\s\w)/g, (regionLabel : string) => regionLabel.toUpperCase()),
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