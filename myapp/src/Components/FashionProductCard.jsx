import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { TiShoppingCart } from "react-icons/ti";


const FashionProductCard = (props) => {
  return (
    <div className="fashion-card">
      <img src={props.image} alt="" />
      <Text className="Prodbrand" as={"p"}>
        {props.brand}
      </Text>
      <Text className="Prodname" as={"p"}>
        {props.name}
      </Text>
      <Box display={"flex"} justifyContent={"space-evenly"} alignItems={"center"}>
        <Text className="Proddisc" as={"p"}>{`Discount: ${props.discount}`}</Text>
        <Text className="Prodmrp" as={"p"}> {`M.R.P:  ₹ ${props.mrp}`}</Text>
      </Box>
      <hr  />
      <Box marginTop={"15px"} display={"flex"} gap={"30px"} alignItems={"center"}>
        <Button display={"flex"} gap={"10px"} id="atc" ><Text>ADD TO CART</Text> <TiShoppingCart/> </Button>
        <Text className="Prodprice" as={"p"}>₹ {props.price}</Text>
      </Box>
    </div>
  );
};

export default FashionProductCard;
