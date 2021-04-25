import React from "react";
import "./LuxuryDivan.css";
import luxuryDivanImg from "./../../../Images/furnitureForShow/luxury-divan.png";

const LuxuryDivan = () => {
  return (
    <div className="divanMain container">
      <img className="divanSideImg" src={luxuryDivanImg} alt="" />
      <div className="divanSideInfo">
        <h2>Luxury That Defines You</h2>
      </div>
    </div>
  );
};

export default LuxuryDivan;
