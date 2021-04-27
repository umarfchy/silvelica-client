import React from "react";
import Header from "../Header/Header";
import LuxuryDivan from "../LuxuryDivan/LuxuryDivan";
import SofaClassic from "../SofaCalssic/SofaClassic";
import TrendyChair from "../TrendyChair/TrendyChair";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <LuxuryDivan></LuxuryDivan>
      <SofaClassic></SofaClassic>
      <TrendyChair></TrendyChair>
    </div>
  );
};

export default Home;
