import React from "react";
import Header from "../Header/Header";
import LuxuryDivan from "../LuxuryDivan/LuxuryDivan";
import PurchaseCard from "../PurchaseCard/PurchaseCard";
import PurchaseShow from "../PurchaseShow/PurchaseShow";
import SofaClassic from "../SofaCalssic/SofaClassic";
import TrendyChair from "../TrendyChair/TrendyChair";

const Home = () => {
  return (
    <div>
      <PurchaseShow></PurchaseShow>
      {/* <Header></Header>
      <LuxuryDivan></LuxuryDivan>
      <SofaClassic></SofaClassic>
      <TrendyChair></TrendyChair> */}
    </div>
  );
};

export default Home;
