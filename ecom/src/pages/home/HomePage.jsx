import React from "react";

import Layoout from "../../components/Layout/Layoout";
import HeroSection from "../../components/heroSection/HeroSection";
import Category from "../../components/category/Category";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";

import Testimonial from "../../components/testimonial/Testimonial";

const HomePage = () => {
  return (
    <Layoout>
      <HeroSection />
      <Category />
      <HomePageProductCard />
      <Testimonial />
    </Layoout>
  );
};

export default HomePage;
