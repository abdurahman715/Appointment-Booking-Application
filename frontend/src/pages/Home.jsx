import React from "react";
import Header from "../componants/Header";
import SpecialityMenu from "../componants/SpecialityMenu";
import TopDoctors from "../componants/TopDoctors";

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopDoctors />
    </div>
  );
};

export default Home;
