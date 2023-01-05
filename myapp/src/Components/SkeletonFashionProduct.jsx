import { Box, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import React from "react";

const SkeletonFashionProduct = () => {
  return (
    <div>
      <Box padding="6" boxShadow="lg" bg="white">
        <Skeleton height={"250px"}  width={"90%"} display={"block"} margin={"auto"}/>
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
      </Box>
    </div>
  );
};

export default SkeletonFashionProduct;
