import { Box, Button, Text } from "@chakra-ui/react";
import axios from "axios";
import Carousel from "nuka-carousel"
import React, { useEffect, useState } from "react";

const WomensMultiProdCarousel = () => {
  const [multiData, setmultiData] = useState([]);

  useEffect(() => {
    axios
      .get("https://mybasket.onrender.com/category/womens?page=1&limit=20")
      .then((res) => {
        setmultiData(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <div>
      <Carousel renderBottomCenterControls={"disabled"} slidesToShow={7}>
        {multiData &&
          multiData.map((item) => {
            return (
              <Box className="multi_product_carousel_prod" key={item._id}>
                <img src={item.item_img} alt="" />
                <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
                  <Text>{item.item_name} </Text>
                </Box>
                <Box>                 
                  <Text marginBottom={"2%"} fontSize={"xs"} fontWeight={"bold"} color={"green"}>
                    {item.discount}
                  </Text>
                </Box>
                <hr />
                <Box
                  display={"flex"}
                  justifyContent={"space-around"}
                  alignItems={"baseline"}
                >
                  <Text fontSize={"lg"}>₹ {item.item_disc_price}</Text>
                  <Text textDecoration={"line-through"}>
                    ₹ {item.item_mrp}
                  </Text>
                  <Button>View</Button>
                </Box>
              </Box>
            );
          })}
      </Carousel>
    </div>
  );
};

export default WomensMultiProdCarousel;
