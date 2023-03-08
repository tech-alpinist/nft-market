import React from "react";

import HeroSection from "../components/ui/Hero/HeroSection";

import LiveAuction from "../components/ui/Live-auction/LiveAuction";
import SellerSection from "../components/ui/Seller-section/SellerSection";

import Trending from "../components/ui/Trending-section/Trending";

const Home = () => {
  return (
    <>
      <HeroSection />
      <LiveAuction />
      <SellerSection />
      <Trending />
    </>
  );
};

export default Home;
