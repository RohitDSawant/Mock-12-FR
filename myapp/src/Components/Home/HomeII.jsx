import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Carousel from 'nuka-carousel';
import { useState } from "react";
import img1 from "../.././Assets/banner1.jpg";
import img2 from "../.././Assets/banner2.jpg";
import img3 from "../.././Assets/banner3.jpg";
import img4 from "../.././Assets/banner4.jpg";
import img5 from "../.././Assets/banner5.png";
import img6 from "../.././Assets/banner6.png";
import { useEffect } from "react";
import axios from "axios";

const HomeII = () => {
  let [banner, setBanner] = useState(0);
  const [currentBanner, setCurrentBanner] = useState(img1);
  const [mensData, setmensData] = useState([])

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
      setBanner(0)
    } else {
        setBanner((prev) => prev + 1);
    }
    setCurrentBanner(bannerAds[banner])
  };


  const handleSrc= (e)=> {
    console.log(e.target.src);
  }

  useEffect(()=>{
    axios.get("https://mybasket.onrender.com/category/mens?page=1&limit=25")
    .then((res)=>{
      setmensData(res.data)
      console.log(res.data)
    })
  },[])
  


  return (
    <div>
       {/* Carousel =====> */}

     <Box className="carousel-container">
        <Button onClick={handleAdd}> ❮ </Button>
        
        <Button onClick={handleRem}> ❯ </Button>
        <img onClick={handleSrc} src={currentBanner} alt="" />
      </Box>

      {/* fashion ===> caraousel */}
      <br />
      <Box>
        <Carousel  slidesToShow={10}>
          {mensData && mensData.map((item)=>{
              return (
                <Box>
                    <img src={item.item_img} alt="" />
                    <Heading size={"sm"}></Heading>
                    <Box display={"flex"} gap={"10px"}>
                      <b>Discount price: </b>
                      <Text></Text>
                    </Box>
                    <Box display={"flex"} gap={"10px"}>
                      <b>M.R.P :</b>
                      <Text></Text>
                    </Box>
                    <Box display={"flex"} gap={"10px"}>
                      <b>Discount :</b>
                      <Text></Text>
                    </Box>
                </Box>
              )
          })}
        </Carousel>
      </Box>

    </div>
  );
};

export default HomeII;
