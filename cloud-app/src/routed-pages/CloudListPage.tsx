import React from "react";

import {CloudList} from "../components/CloudList";
import {ClouFilter} from "../components/CloudFilter"
import "./routedPage.css"

export const CloudListPage = () => {
  return (
    <div className="row no-gutters">
      <div className="col-4 form-border">
        <ClouFilter />
      </div>
      <div className="col-1"></div>
      <div className="col-6">
        <CloudList />
      </div>
      </div>
  );
};
