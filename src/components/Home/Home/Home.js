import React from "react";
import Header from "../Header/Header";
import LuxuryDivan from "../LuxuryDivan/LuxuryDivan";
import PurchaseShowChair from "../PurchaseShowChair/PurchaseShowChair";
import PurchaseShowSofa from "../PurchaseShowSofa/PurchaseShowSofa";
import SofaClassic from "../SofaClassic/SofaClassic";
import TrendyChair from "../TrendyChair/TrendyChair";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <LuxuryDivan></LuxuryDivan>
      <SofaClassic></SofaClassic>
      <TrendyChair></TrendyChair>
      <PurchaseShowSofa></PurchaseShowSofa>
      <PurchaseShowChair></PurchaseShowChair>
    </div>
  );
};

export default Home;
