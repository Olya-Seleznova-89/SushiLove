import React from "react";
import Header from "../components/Header";
import logo_style from "../utils/logo_style";
import Footer from "../components/Footer";
import s from "../style/home.module.css";
import CarouselComp from "../components/CarouselComp";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Reviews = () => {
  const { header, footer } = logo_style;

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        top: "5vw",
      }}
    >
      <main>
        <Header logo_style={header} />
        <div>
          <CarouselComp />
        </div>

        <Footer logo_style={footer} />
      </main>
    </div>
  );
};

export default Reviews;
