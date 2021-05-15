import React from "react";
import sofaClassicImg from "./../../../Images/furnitureForShow/classic-and-afforable.png";
import { useMediaPredicate } from "react-media-hook";

const SofaClassic = () => {
  const isMobile = useMediaPredicate("(max-width: 480px)");
  const mobSectionCls = "container row d-flex mx-auto flex-column-reverse";
  const pcSectionCls = "container row d-flex align-items-center mx-auto";

  return (
    <section
      style={{
        backgroundColor: "#2b2b2f",
        borderBottom: "0.1rem solid #000",
      }}
      className={isMobile ? mobSectionCls : pcSectionCls}
    >
      <div className="col-md-6 col-sm-12 text-justify">
        <h3 className="mb-4 text-white text-center">Classic As Always</h3>
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas qui
          debitis sit nemo esse doloribus sunt est expedita! Nihil ea corrupti
          quisquam, commodi perferendis debitis nesciunt qui corporis soluta
          reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Culpa facilis illo iusto doloribus, temporibus alias.
        </p>
      </div>
      <div className="col-md-3 col-sm-12 mx-auto">
        <img
          style={
            isMobile
              ? {
                  padding: "0 4rem",
                }
              : { width: "400rem" }
          }
          src={sofaClassicImg}
          alt=""
          className="img-fluid"
        />
      </div>
    </section>
  );
};

export default SofaClassic;
