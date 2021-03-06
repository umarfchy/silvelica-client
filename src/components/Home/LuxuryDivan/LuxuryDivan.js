import React from "react";
import { useMediaPredicate } from "react-media-hook";
// import "./LuxuryDivan.css";
import luxuryDivanImg from "./../../../Images/furnitureForShow/luxury-divan.png";

const LuxuryDivan = () => {
  const isMobile = useMediaPredicate("(max-width: 480px)");
  return (
    <div
      style={{
        backgroundColor: "rgba(43, 43, 47, 1)",
        borderBottom: "0.1rem solid #000",
      }}
      className="container row d-flex align-items-center mx-auto"
    >
      <div className="col-md-6 col-sm-12">
        <img
          style={
            isMobile
              ? {
                  padding: "0 1rem",
                }
              : { width: "28rem" }
          }
          src={luxuryDivanImg}
          alt=""
          className="img-fluid"
        />
      </div>
      <div className="col-md-6 col-sm-12 text-justify">
        <h3 className="mb-4 text-white text-center">Luxury That Defines You</h3>
        <p
          style={{
            color: "rgba(255, 255, 255, 0.7)",
          }}
          className="px-2"
        >
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
