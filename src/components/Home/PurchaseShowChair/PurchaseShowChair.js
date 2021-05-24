import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PurchaseCard from "../PurchaseCard/PurchaseCard";
import chairInfo from "./ChairInfo";
import { useHistory } from "react-router";

const PurchaseShow = () => {
  const history = useHistory();

  const handlePurchase = () => {
    history.push("/success");
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 480 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
    },
  };
  return (
    <section
      style={{
        background: "rgba(43, 43, 47, 1)",
        borderBottom: "1px solid black",
        paddingBottom: "1rem  ",
      }}
    >
      <h3 className="text-center text-white py-2 mx-auto">
        Find Your Favorite Chair
      </h3>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
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
        {chairInfo.map(info => (
          <PurchaseCard info={info} handlePurchase={handlePurchase} />
        ))}
      </Carousel>
    </section>
  );
};

export default PurchaseShow;
