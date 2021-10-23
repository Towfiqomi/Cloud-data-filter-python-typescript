import React from "react";

import {CloudList} from "../components/CloudList";
import {ClouFilter} from "../components/CloudFilter"
import "./routedPage.css"

export const CloudListPage = () => {
  return (
    <div className="container">
      <div className="column form-border">
        <ClouFilter />
      </div>
      <div className="column">
        <CloudList />
      </div>
    </div>
  );
};
