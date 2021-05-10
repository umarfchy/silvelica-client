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
    <section>
      <h3 className="text-center text-white py-3 mx-auto">Carousel Slider</h3>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <PurchaseCard></PurchaseCard>
        <PurchaseCard></PurchaseCard>
        <PurchaseCard></PurchaseCard>
        <PurchaseCard></PurchaseCard>
        <PurchaseCard></PurchaseCard>
      </Carousel>
    </section>
  );
};

export default PurchaseShow;
