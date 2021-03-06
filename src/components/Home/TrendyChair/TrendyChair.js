import React from "react";
import trendyChairImg from "./../../../Images/furnitureForShow/go-with-the-trend-1.png";
import { useMediaPredicate } from "react-media-hook";

const TrendyChair = () => {
  const isMobile = useMediaPredicate("(max-width: 400px)");

  return (
    <div
      style={{
        backgroundColor: "#2b2b2f",
        borderBottom: "0.1rem solid #000",
        padding: "1rem",
      }}
      className="container row d-flex align-items-center justify-content-center mx-auto pt-4"
    >
      <div className="col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
        <img
          style={
            isMobile
              ? {
                  padding: "0 5rem",
                }
              : { width: "13rem" }
          }
          src={trendyChairImg}
          alt=""
          className="img-fluid mb-2"
        />
      </div>
      <div
        className={
          isMobile
            ? "col-md-6 col-sm-12 text-justify mt-5"
            : "col-md-6 col-sm-12 text-justify"
        }
      >
        <h3 className="mb-4 text-white text-center">Go With The Trend</h3>
        <p
          style={{
            color: "rgba(255, 255, 255, 0.7)",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas qui
          debitis sit nemo esse doloribus sunt est expedita! Nihil ea corrupti
          quisquam, commodi perferendis debitis nesciunt qui corporis soluta
          reiciendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Doloribus consequatur sunt nulla, dolorem iusto corporis?
        </p>
      </div>
    </div>
  );
};

export default TrendyChair;
