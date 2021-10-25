import { useEffect, useState } from 'react';
import "../components/CloudList.css"
import useCloudList from "../hooks/useCloudListHook"
import ReactPaginate from "react-paginate"
 
export const CloudList : any = () => {
    const {cloudList, pageInfo, fetchCloudList} = useCloudList();
    const [currentPage, setCurrentPage] = useState(1)
    
    useEffect(() => {
        const fetch = async () =>{
          await fetchCloudList(currentPage);
        };
        fetch()
    }, [currentPage])

    const handlePageClick = (selectedItem: { selected: number }) =>{
      setCurrentPage(selectedItem.selected + 1)
    }
  
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
            <ReactPaginate
              previousLabel = {"Previous"} 
              pageCount={pageInfo.total_pages +1}
              nextLabel={"Next"}
              breakLabel={"..."} 
              pageRangeDisplayed={5}
              marginPagesDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={"pagination div-center"}
              activeClassName={"active"}
              nextLinkClassName={"pagination-next-content sui-text-b5"}
              nextClassName={"pagination-arrow-next"}
              previousClassName={"pagination-arrow-previous"}
              previousLinkClassName={"pagination-previous-content sui-text-b5"}
              disabledClassName={"pagination-previous-next-disabled"}
              >
            </ReactPaginate>
          </div>
      </div>
    );
  };