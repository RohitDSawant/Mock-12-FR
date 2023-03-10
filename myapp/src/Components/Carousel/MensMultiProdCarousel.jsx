import { Box, Button, Text } from "@chakra-ui/react";
import axios from "axios";
import Carousel from "nuka-carousel";
import React, { useEffect, useState } from "react";
import MultiCarouselItem from "../MultiCarouselItem";

const MensMultiProdCarousel = () => {
  const [mensData, setmensData] = useState([]);

  useEffect(() => {
    axios
      .get("https://mybasket.onrender.com/category/mens?page=3&limit=20")
      .then((res) => {
        setmensData(res.data);
        // console.log(res.data);
      });
  }, []);

  return (
    <div>
      <Carousel renderBottomCenterControls={"disabled"} slidesToShow={7}>
        {mensData &&
          mensData.map((item) => {
            return (
              <Box key={item._id}>
                <MultiCarouselItem
                  img={item.item_img}
                  name={item.item_name}
                  discount={item.discount}
                  price={item.item_disc_price}
                  mrp={item.item_mrp}
                />
              </Box>
            );
          })}
      </Carousel>
    </div>
  );
};

export default MensMultiProdCarousel;
