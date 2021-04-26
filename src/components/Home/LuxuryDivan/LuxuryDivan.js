import React from "react";
import "./LuxuryDivan.css";
import luxuryDivanImg from "./../../../Images/furnitureForShow/luxury-divan.png";

const LuxuryDivan = () => {
  return (
    <div className="divanMain container">
      <img src={luxuryDivanImg} alt="" className="divanSideImg" />
      <div className="divanSideInfo">
        <h2>Luxury That Defines You</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas qui
          debitis sit nemo esse doloribus sunt est expedita! Nihil ea corrupti
          quisquam, commodi perferendis debitis nesciunt qui corporis soluta
          reiciendis.
        </p>
      </div>
    </div>
  );
};

export default LuxuryDivan;
