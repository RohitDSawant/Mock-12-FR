import { Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Fashions = () => {
  return (
    <div>
      <Box className="fashion-section">
        <Link to={"/category/mens"}>MENS</Link>
        <br />
        <Link to={"/category/womens"}>WOMENS</Link>
        <br />
        <Link to={"/category/kids"}>KIDS</Link>
      </Box>
    </div>
  );
};

export default Fashions;
