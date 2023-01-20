import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const MultiCarouselItem = (props) => {
  return (
    <div className="multi_product_carousel_prod">
      <img src={props.img} alt="" />
      <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
        <Text>{props.name} </Text>
      </Box>
      <Box>
        <Text
          marginBottom={"2%"}
          fontSize={"xs"}
          fontWeight={"bold"}
          color={"green"}
        >
          {props.discount}
        </Text>
      </Box>
      <hr />
      <Box
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"baseline"}
      >
        <Text fontSize={"sm"}>₹ {props.price}</Text>
        <Text fontSize={"sm"} textDecoration={"line-through"}>
          ₹ {props.mrp}
        </Text>
        <Button>View</Button>
      </Box>
    </div>
  );
};

export default MultiCarouselItem;
