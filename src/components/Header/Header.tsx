import React from "react";
import { Link } from "react-router-dom";

import IMGpokeball from "../../images/pokeball.png";
import "./index.scss";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to={"/"}>
          <div className="header-logo">
            <h1 className="header-logo__title">Pokemon</h1>
            <img
              className="header-logo__img"
              src={IMGpokeball}
              alt="pokeball"
            />
          </div>
        </Link>
      </div>
    </header>
  );
};
