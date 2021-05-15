import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

//page body show section
import LuxuryDivan from "../LuxuryDivan/LuxuryDivan";
import SofaClassic from "../SofaClassic/SofaClassic";
import TrendyChair from "../TrendyChair/TrendyChair";

//purchase card showcase
import PurchaseShowChair from "../PurchaseShowChair/PurchaseShowChair";
import PurchaseShowSofa from "../PurchaseShowSofa/PurchaseShowSofa";

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
