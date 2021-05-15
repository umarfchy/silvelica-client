import React from "react";
import "./HeaderMain.css";

const HeaderMain = () => {
  return (
    <header className="headerContainer container">
      <h3 className="headerText">Furniture That Matters</h3>
      <button
        className="headerActionBtn"
        onClick={() => (window.location.href = "#sofaSection")}
      >
        Order Now ➔
      </button>
    </header>
  );
};

export default HeaderMain;
