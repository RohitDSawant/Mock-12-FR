import { Box, Button } from "@chakra-ui/react";
import React from "react";

function paginationArray(total) {
  return new Array(total).fill(0);
}

const Pagination = ({ total, handleChange }) => {
  let pages = paginationArray(total).map((ele, index) => {
    return <button></button>;
  });
  // console.log(total)
  console.log(pages);
  return (
    <Box className="pagination-div">
      {pages.map((ele, index) => {
        return (
         <div key={index}>
             <Button
            className="pagination-page-button"
            onClick={() => handleChange(index + 1)}
          >
            {index + 1}
          </Button>
         </div>
        );
      })}
    </Box>
  );
};

export default Pagination;
