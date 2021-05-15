import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
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
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
