import { useEffect } from 'react';
import "../components/CloudList.css"
import useCloudList from "../hooks/useCloudListHook"
import _ from "lodash"
 
export const CloudList : any = () => {
    const {cloudList, fetchCloudList} = useCloudList();
    
    useEffect(() => {
        const fetch = async () =>{
          await fetchCloudList();
        };
         fetch()
    }, [])


    return (
      <div className="div-center">
            <div className="mr-0">
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Cloud Name</th>
                  <th>Cloud Description</th>
                  <th>Cloud region</th>
                  <th>Latitude</th>
                  <th>Longitude</th>
                </tr>
              </thead>
              {
                cloudList && cloudList.clouds.map((cloud, index)=>
                <tbody>
                  <tr key={index}>
                    <td>{cloud.cloud_name}</td>
                    <td>{cloud.cloud_description}</td>
                    <td>{cloud.geo_region}</td>
                    <td>{cloud.geo_latitude}</td>
                    <td>{cloud.geo_longitude}</td>
                  </tr>
                </tbody>
                )}
            </table>
          </div>
      </div>
    );
  };