import React from "react";
import "./SofaClassic.css";
import sofaClassicImg from "./../../../Images/furnitureForShow/classic-and-afforable.png";

const SofaClassic = () => {
  return (
    <div className="sofaMain container">
      <div className="sofaSideInfo">
        <h2>Classic As Always</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas qui
          debitis sit nemo esse doloribus sunt est expedita! Nihil ea corrupti
          quisquam, commodi perferendis debitis nesciunt qui corporis soluta
          reiciendis.
        </p>
      </div>
      <img src={sofaClassicImg} alt="" className="sofaSideImg" />
    </div>
  );
};

export default SofaClassic;
