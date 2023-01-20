import { Box, Button, Text } from "@chakra-ui/react";
import axios from "axios";
import Carousel from "nuka-carousel"
import React, { useEffect, useState } from "react";
import MultiCarouselItem from "../MultiCarouselItem";

const MobilesMultiProdCarousel = () => {

    const [mobileData, setmobileData] = useState([]);

    useEffect(() => {
      axios
        .get("https://mybasket.onrender.com/category/mobiles?page=3&limit=20")
        .then((res) => {
          setmobileData(res.data);
          console.log(res.data);
        });
    }, []);

  return (
    <div>
         <Carousel renderBottomCenterControls={"disabled"} slidesToShow={7}>
        {mobileData &&
          mobileData.map((item) => {
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
  )
}

export default MobilesMultiProdCarousel