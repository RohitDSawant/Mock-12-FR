import { Box, Heading, Select, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import FashionProductCard from "../Components/FashionProductCard";
import Pagination from "../Components/Pagination";
import SkeletonFashionProduct from "../Components/SkeletonFashionProduct";

const Mens = () => {
  const location = useLocation();
  const current_path = location.pathname.split("/")[3];
  const [mensData, setMensData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortValue, setSortValue] = useState(false)
  // const [sortParams, setSortParams] = useState("")
  // const [isLoading, setIsLoading] = useState(false)


// =========> Page Handler Callback function

  const handleChange = (value) => {
    setCurrentPage(value);
  }


//  ======> HandleSorting

const handleSorting = (e) => {

}


  useEffect(() => {
    axios
      .get(`https://mybasket.onrender.com/category/${current_path}`)
      .then((res) => {
        console.log(res.data.length / 40);
        setTotalPages(res.data.length / 40);
      });
  }, [current_path]);

  useEffect(() => {
    axios
      .get(
        `https://mybasket.onrender.com/category/${current_path}?page=${currentPage}&limit=${40}`
      )
      .then((res) => {
        console.log(res.data);
        setMensData(res.data);
      });
  }, [current_path, currentPage]);

  // console.log(currentPage);
console.log(sortValue);


  return (
    <div>
      <Box className="mens-section">
        <Box className="mens-section-child-a">
          <Box>
            <Box>
              <Heading as={"h3"} size="sm">
                Sort By:
              </Heading>
            </Box>
            <br />
            <Box>
              <input onChange={()=>{setSortValue(!sortValue)}} name="sortValues"  type="radio" />
              <Text>Price High to Low</Text>
            </Box>
            <Box>
              <input onChange={()=>{setSortValue(!sortValue)}} name="sortValues" type="radio" />
              <Text>Price Low to High</Text>
            </Box>
          </Box>
        </Box>

        <Box>
          {mensData.length > 0 &&
            mensData.map((ele) => {
              return (
                <Box key={ele._id} >
                  <FashionProductCard
                    image={ele.item_img}
                    brand={ele.item_brand}
                    name={ele.item_name}
                    price={ele.item_disc_price}
                    id={ele._id}
                    discount={ele.discount}
                    mrp={ele.item_mrp}
                  />
                </Box>
              );
            })}
        </Box>

        <br />
      </Box>
      <br />
      <Pagination total={totalPages} handleChangefun={handleChange} />
      {/* <SkeletonFashionProduct /> */}
    </div>
  );
};

export default Mens;
