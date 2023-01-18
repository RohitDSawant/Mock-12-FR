import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import img1 from "../.././Assets/banner1.jpg";
import img2 from "../.././Assets/banner2.jpg";
import img3 from "../.././Assets/banner3.jpg";
import img4 from "../.././Assets/banner4.jpg";
import img5 from "../.././Assets/banner5.png";
import img6 from "../.././Assets/banner6.png";
import MensMultiProdCarousel from "../Carousel/MensMultiProdCarousel";
import WomensMultiProdCarousel from "../Carousel/WomenMultiProdCarousel";


const HomeII = () => {
  let [banner, setBanner] = useState(0);
  const [currentBanner, setCurrentBanner] = useState(img1);

  const bannerAds = [img1, img2, img3, img4, img5, img6];

  const handleAdd = () => {
    if (banner === 0) {
      setBanner(bannerAds.length - 1);
    } else {
      setBanner((prev) => prev - 1);
    }

    setCurrentBanner(bannerAds[banner]);
  };

  const handleRem = () => {
    if (banner === bannerAds.length - 1) {
      setBanner(0);
    } else {
      setBanner((prev) => prev + 1);
    }
    setCurrentBanner(bannerAds[banner]);
  };

  const handleSrc = (e) => {
    console.log(e.target.src);
  };



  return (
    <div>
      {/* Home Main Carousel =====> */}
      <Box className="carousel-container">
        <Button onClick={handleAdd}> ❮ </Button>
        <Button onClick={handleRem}> ❯ </Button>
        <img onClick={handleSrc} src={currentBanner} alt="" />
      </Box>
      {/* fashion ===> caraousel */}

      <br />
      <Box className="multi_product_carousel">
        <Heading fontSize={"xl"}> Trending in Men's</Heading>
        <br />
        <MensMultiProdCarousel/>
        <br />
        <Heading fontSize={"xl"}> Trending in Women's</Heading>
        <br />
        <WomensMultiProdCarousel/>
      </Box>
    </div>
  );
};

export default HomeII;
