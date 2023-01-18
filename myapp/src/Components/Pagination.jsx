import { Box, Button } from "@chakra-ui/react";
import React from "react";

function paginationArray(total) {
  return new Array(total).fill(0);
}

const Pagination = ({ total, handleChangefun }) => {
  let pages = paginationArray(total).map((ele, index) => {
    return (
      <button
        className="pagination-page-button"
        onClick={() => handleChangefun(index + 1)}
      >
        {index + 1}
      </button>
    );
  });
  // console.log(total)
  // console.log(pages);
  return (
    <Box className="pagination-div">
      {pages}
    </Box>
  );
};

export default Pagination;
