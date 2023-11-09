import React from "react";

import loader from "../../images/loader.gif";
import "./index.scss";

export const Loading: React.FC = () => {
  return (
    <div className="loader">
      <img src={loader} alt="loading" />
    </div>
  );
};
