import React from "react";
import sofaClassicImg from "./../../../Images/furnitureForShow/classic-and-afforable.png";
import { useMediaPredicate } from "react-media-hook";

const SofaClassic = () => {
  const isMobile = useMediaPredicate("(max-width: 400px)");
  const mobSectionCls = "container row d-flex mx-auto flex-column-reverse";
  const pcSectionCls = "container row d-flex align-items-center mx-auto pt-4 ";

  return (
    <section
      style={{
        backgroundColor: "#2b2b2ff1",
        borderBottom: "0.1rem solid #2b2b2f",
      }}
      className={isMobile ? mobSectionCls : pcSectionCls}
    >
      <div className="col-md-6 col-sm-12">
        <h3 className="mb-4 text-white">Classic As Always</h3>
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas qui
          debitis sit nemo esse doloribus sunt est expedita! Nihil ea corrupti
          quisquam, commodi perferendis debitis nesciunt qui corporis soluta
          reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Culpa facilis illo iusto doloribus, temporibus alias.
        </p>
      </div>
      <div className="col-md-3 col-sm-12 mx-auto">
        <img width="400rem" src={sofaClassicImg} alt="" className="img-fluid" />
      </div>
    </section>
  );
};

export default SofaClassic;
