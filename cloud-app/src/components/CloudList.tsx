import { useEffect, useState } from 'react';
import "../components/CloudList.css"
import useCloudList from "../hooks/useCloudListHook"
import ReactPaginate from "react-paginate"
import {CloudData, PageInfo} from "../types";



interface Props{
  cloudList : CloudData,
}

export const CloudListTable : any = ({cloudList} : Props) => {
    return (
        <div className="div-center">
            <div className="">
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
                <tbody key={index}>
                  <tr>
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