import React from "react";
import Header from "../Header/Header";
import LuxuryDivan from "../LuxuryDivan/LuxuryDivan";
import PurchaseShow from "../PurchaseShow/PurchaseShow";
import SofaClassic from "../SofaCalssic/SofaClassic";
import TrendyChair from "../TrendyChair/TrendyChair";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <LuxuryDivan></LuxuryDivan>
      <SofaClassic></SofaClassic>
      <TrendyChair></TrendyChair>
      <PurchaseShow></PurchaseShow>
    </div>
  );
};

export default Home;
