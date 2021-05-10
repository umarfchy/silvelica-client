import React from "react";
// import "./LuxuryDivan.css";
import luxuryDivanImg from "./../../../Images/furnitureForShow/luxury-divan.png";

const LuxuryDivan = () => {
  return (
    <div
      style={{
        backgroundColor: "#2b2b2ff1",
        borderBottom: "0.1rem solid #2b2b2f",
      }}
      className="container row d-flex align-items-center mx-auto"
    >
      <div className="col-md-6 col-sm-12">
        <img src={luxuryDivanImg} alt="" className="img-fluid" />
      </div>
      <div className="col-md-6 col-sm-12 text-justify">
        <h3 className="mb-4 text-white text-center">Luxury That Defines You</h3>
        <p className="text-white  px-2">
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
