import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PurchaseCard from "../PurchaseCard/PurchaseCard";

//chair images
import chair1 from "./../../../Images/chairForSell/chair1.jpg";
import chair2 from "./../../../Images/chairForSell/chair2.jpg";
import chair3 from "./../../../Images/chairForSell/chair3.jpg";
import chair4 from "./../../../Images/chairForSell/chair4.jpg";
import chair5 from "./../../../Images/chairForSell/chair5.jpg";
import chair6 from "./../../../Images/chairForSell/chair6.jpg";
import chair7 from "./../../../Images/chairForSell/chair7.jpg";
import chair8 from "./../../../Images/chairForSell/chair8.jpg";
import chair9 from "./../../../Images/chairForSell/chair9.jpg";

const chariInfo = [
  {
    title: "Flemingo Red",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic beatae accusamus voluptates, reiciendis amet fugiat.",
    img: chair1,
    price: 100,
  },
  {
    title: "Studio Style",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic beatae accusamus voluptates, reiciendis amet fugiat.",
    img: chair2,
    price: 200,
  },
  {
    title: "Cute Pink",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic beatae accusamus voluptates, reiciendis amet fugiat.",
    img: chair3,
    price: 250,
  },
  {
    title: "Simple White",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic beatae accusamus voluptates, reiciendis amet fugiat.",
    img: chair4,
    price: 110,
  },
  {
    title: "House Norm",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic beatae accusamus voluptates, reiciendis amet fugiat.",
    img: chair5,
    price: 137,
  },
  {
    title: "Luxury Chair",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic beatae accusamus voluptates, reiciendis amet fugiat.",
    img: chair6,
    price: 500,
  },
  {
    title: "Porch Beauti",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic beatae accusamus voluptates, reiciendis amet fugiat.",
    img: chair7,
    price: 380,
  },
  {
    title: "Gray Glimmer",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic beatae accusamus voluptates, reiciendis amet fugiat.",
    img: chair8,
    price: 247,
  },
  {
    title: "Gray Norm",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic beatae accusamus voluptates, reiciendis amet fugiat.",
    img: chair9,
    price: 194,
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
      className="container"
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
        {chariInfo.map(info => (
          <PurchaseCard info={info} />
        ))}
      </Carousel>
    </section>
  );
};

export default PurchaseShow;
