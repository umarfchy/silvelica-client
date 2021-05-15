import React from "react";
import { useMediaPredicate } from "react-media-hook";

const PurchaseCard = props => {
  const { title, details, img, price } = props.info;

  const isMobile = useMediaPredicate("(max-width: 480px)");
  const cardParentDivStyle = isMobile
    ? {
        color: "white",
        width: "18rem",
        height: "15rem",
        background: "rgba(0, 0, 0, 0.9)",
        border: "1px solid rgba(255, 255, 255, .5)",
        display: "flex",
        margin: "1rem auto",
      }
    : {
        color: "white",
        width: "19rem",
        height: "15rem",
        margin: "1rem auto",
        background: "rgba(0, 0, 0, 0.9)",
        border: "1px solid rgba(255, 255, 255, .5)",
        display: "flex",
      };

  const cardParentDivClass = isMobile
    ? "col-sm-6 col-md-6 d-flex justify-content-center align-items-center  flex-column"
    : "col-sm-6 col-md-6 d-flex justify-content-center align-items-center";

  return (
    <div style={cardParentDivStyle}>
      {/* image container div */}
      <div
        style={{ borderRight: "1px solid rgba(255, 255, 255, .5)" }}
        className={cardParentDivClass}
      >
        <img
          style={
            isMobile
              ? {
                  width: "10rem",
                  height: "10rem",
                  margin: "auto 3.1rem",
                }
              : {
                  height: "10rem",
                }
          }
          src={img}
          alt=""
          className="img-fluid"
        />
      </div>

      {/* information container div */}
      <div className="col-sm-6 col-md-6 d-flex flex-column justify-content-between align-items-center">
        <div
          style={
            isMobile
              ? { marginTop: "0.5rem" }
              : {
                  height: "10rem",
                  marginTop: ".5rem",
                  textAlign: "justify",
                }
          }
        >
          <h6 className="text-center">{title}</h6>
          <small
            style={{
              color: "rgba(255, 255, 255, 0.8)",
            }}
          >
            {details}
          </small>
        </div>
        <div
          style={{ width: "8rem" }}
          className="d-flex align-items-center justify-content-between my-2"
        >
          <h6 className="my-auto mr-3">${price}</h6>
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
