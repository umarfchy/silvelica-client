import React from "react";
import trendyChairImg from "./../../../Images/furnitureForShow/go-with-the-trend-1.png";

const PurchaseCard = () => {
  return (
    <div
      style={{
        color: "white",
        width: "19rem",
        height: "15rem",
        background: "rgba(0, 0, 0, 0.9)",
        border: "1px solid rgba(255, 255, 255, .5)",
      }}
      className="row"
    >
      {/* image container div */}
      <div
        style={{ borderRight: "1px solid rgba(255, 255, 255, .5)" }}
        className="col-sm-6 col-md-6 d-flex justify-content-center align-items-center"
      >
        <img src={trendyChairImg} alt="" className="img-fluid" />
      </div>

      {/* information container div */}
      <div className="col-sm-6 col-md-6 d-flex flex-column justify-content-between align-items-center">
        <div
          style={{
            height: "10rem",
            marginTop: ".5rem",
            textAlign: "justify",
          }}
        >
          <h6 className="text-center">Lorem ipsum dolor sit.</h6>
          <small>Lorem ipsum dolor sit amet consectetur.</small>
        </div>
        <div
          style={{ width: "8rem" }}
          className="d-flex align-items-center justify-content-between my-2"
        >
          <h6 className="my-auto mr-3">$500</h6>
          <button
            style={{
              borderRadius: "0",
              fontSize: "0.8rem",
              fontWeight: "bold",
            }}
            className="btn btn-info mx-auto"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCard;
