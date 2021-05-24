import React from "react";
import Fade from "react-reveal/Fade";

//hooks
import { useSelector } from "react-redux";

//page body show section
import About from "../About/About";
import Contact from "../Contact/Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import LuxuryDivan from "../LuxuryDivan/LuxuryDivan";
import SofaClassic from "../SofaClassic/SofaClassic";
import TrendyChair from "../TrendyChair/TrendyChair";

//purchase card showcase
import PurchaseShowChair from "../PurchaseShowChair/PurchaseShowChair";
import PurchaseShowSofa from "../PurchaseShowSofa/PurchaseShowSofa";

const Home = () => {
  console.log(useSelector(state => state.user));

  return (
    <div>
      <Header></Header>
      <Fade bottom duration={2500} distance="40px">
        <LuxuryDivan></LuxuryDivan>
      </Fade>
      <Fade bottom duration={2600} distance="70px">
        <SofaClassic></SofaClassic>
      </Fade>
      <Fade bottom duration={2700} distance="110px">
        <TrendyChair></TrendyChair>
      </Fade>
      <Fade bottom duration={2600} distance="40px">
        <PurchaseShowSofa></PurchaseShowSofa>
      </Fade>
      <Fade bottom duration={2500} distance="40px">
        <PurchaseShowChair></PurchaseShowChair>
      </Fade>
      <Fade bottom duration={2500} distance="40px">
        <About></About>
      </Fade>
      <Fade bottom duration={2500} distance="40px">
        <Contact></Contact>
      </Fade>
      <Footer></Footer>
    </div>
  );
};

export default Home;
