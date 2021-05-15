import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PurchaseCard from "../PurchaseCard/PurchaseCard";

//chair images
import sofa1 from "./../../../Images/sofaForSell/sofa1.jpg";
import sofa2 from "./../../../Images/sofaForSell/sofa2.jpg";
import sofa3 from "./../../../Images/sofaForSell/sofa3.jpg";
import sofa4 from "./../../../Images/sofaForSell/sofa4.jpg";
import sofa5 from "./../../../Images/sofaForSell/sofa5.jpg";
import sofa6 from "./../../../Images/sofaForSell/sofa6.jpg";

const chariInfo = [
  {
    title: "Sunside Green",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic beatae accusamus voluptates, reiciendis amet fugiat.",
    img: sofa1,
    price: 300,
  },
  {
    title: "Studio Style",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic beatae accusamus voluptates, reiciendis amet fugiat.",
    img: sofa2,
    price: 200,
  },
  {
    title: "White Vanilla",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic beatae accusamus voluptates, reiciendis amet fugiat.",
    img: sofa3,
    price: 250,
  },
  {
    title: "Daily Gray",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic beatae accusamus voluptates, reiciendis amet fugiat.",
    img: sofa4,
    price: 210,
  },
  {
    title: "Light Green",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic beatae accusamus voluptates, reiciendis amet fugiat.",
    img: sofa5,
    price: 367,
  },
  {
    title: "Craft Red",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic beatae accusamus voluptates, reiciendis amet fugiat.",
    img: sofa6,
    price: 500,
  },
];
const PurchaseShow = () => {
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
      breakpoint: { max: 1024, min: 464 },
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
      id="sofaSection"
      className="container"
    >
      <h3 className="text-center text-white py-2 mx-auto">
        Take The Luxury Settee
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
        {chariInfo.map(info => (
          <PurchaseCard info={info} />
        ))}
      </Carousel>
    </section>
  );
};

export default PurchaseShow;
