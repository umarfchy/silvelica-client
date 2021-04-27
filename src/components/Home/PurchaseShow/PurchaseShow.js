import React from "react";
import PurchaseCard from "../PurchaseCard/PurchaseCard";

const PurchaseShow = () => {
  return (
    <section
      style={{
        backgroundColor: "#2b2b2ff1",
        borderBottom: "0.1rem solid #2b2b2f",
      }}
      className="row container mx-auto gx-4"
    >
      <PurchaseCard></PurchaseCard>
      <PurchaseCard></PurchaseCard>
      <PurchaseCard></PurchaseCard>
      <PurchaseCard></PurchaseCard>
      <PurchaseCard></PurchaseCard>
      <PurchaseCard></PurchaseCard>
      <PurchaseCard></PurchaseCard>
      <PurchaseCard></PurchaseCard>
    </section>
  );
};

export default PurchaseShow;
