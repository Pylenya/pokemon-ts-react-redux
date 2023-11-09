import React from "react";
import { Header } from "../Header/Header";
import { Hero } from "../Hero/Hero";

import "./index.scss";

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
};
export default Home;
