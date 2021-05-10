import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PurchaseCard from "../PurchaseCard/PurchaseCard";

const PurchaseShow = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
    },
  };
  return (
    // <section
    //   style={{
    //     backgroundColor: "#2b2b2ff1",
    //     borderBottom: "0.1rem solid #2b2b2f",
    //   }}
    //   className="row container mx-auto pt-5"
    // >
    //   <h3 className="text-center text-white py-3 mx-auto">Carousel Slider</h3>
    <Carousel responsive={responsive}>
      <h2 className="text-white">HI</h2>

      <div>
        <PurchaseCard></PurchaseCard>
      </div>
      <div>
        <PurchaseCard></PurchaseCard>
      </div>
      <div>
        <PurchaseCard></PurchaseCard>
      </div>
      <div>
        <PurchaseCard></PurchaseCard>
      </div>
      <div>
        <PurchaseCard></PurchaseCard>
      </div>
    </Carousel>

    // </section>
  );
};

export default PurchaseShow;
