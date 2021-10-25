import { useEffect, useState } from "react";

import {CloudListTable} from "../components/CloudList";
import {ClouFilter} from "../components/CloudFilter"
import useCloudList from "../hooks/useCloudListHook";
import ReactPaginate from "react-paginate";
import useCloudFilters from "../hooks/useCloudFilters";

import "./routedPage.css";


export const CloudListPage = () => {
  const {cloudList, pageInfo, filterEntity, fetchCloudList, filterCloudList} = useCloudList();
  const [currentPage, setCurrentPage] = useState(1);
  const {providers, regions, fetchCloudFilters} = useCloudFilters();

  useEffect(() => {
    const fetch = async () =>{
      await fetchCloudFilters();
    };
    fetch();
  }, [])

  useEffect(() => {
      const fetch = async () =>{
          if(filterEntity != undefined){
            filterEntity && await filterCloudList(currentPage, filterEntity);
          }
          else await fetchCloudList(currentPage);
      };
      fetch();
  }, [currentPage])

  const handlePageClick = (selectedItem: { selected: number }) =>{
      setCurrentPage(selectedItem.selected + 1);
  }


  return (
    <div className="row no-gutters">
      <div className="col-4 form-border">
        <ClouFilter
          providers={providers}
          regions={regions}
          handleSubmit={filterCloudList}
        />
      </div>
      <div className="col-1"></div>
      <div className="col-6">
        <CloudListTable
          cloudList = {cloudList}
        />
        <ReactPaginate
              previousLabel = {"Previous"} 
              pageCount={pageInfo.total_pages +1}
              nextLabel={"Next"}
              breakLabel={"..."} 
              pageRangeDisplayed={2}
              marginPagesDisplayed={2}
              onPageChange={handlePageClick}
              containerClassName={"pagination div-center"}
              activeClassName={"active"}
              nextLinkClassName={"pagination-next-content"}
              nextClassName={"pagination-arrow-next"}
              previousClassName={"pagination-arrow-previous"}
              previousLinkClassName={"pagination-previous-content"}
              disabledClassName={"pagination-previous-next-disabled"}
              >
        </ReactPaginate>
      </div>
      </div>
  );
};
