import { Box, Select } from "@chakra-ui/react";
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
  console.log(current_path);

  const handleChange = (value) => {
    setCurrentPage(value);
  };

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
        // console.log(res.data);
        setMensData(res.data);
      });
  }, [current_path, currentPage]);

  console.log(currentPage);

  return (
    <div>
      <Box className="mens-section">
        <Box>
            <Box>
              <label htmlFor="">
                <Select>
                  <option value="">Sort By Price</option>
                  <option value="HTL">From:High to Low</option>
                  <option value="LTH">From:Low to High</option>
                </Select>
              </label>
              <br />
              <label htmlFor="">
                <Select>
                  <option value="">Filter By Brand</option>
                  <option value="">ABC</option>
                  <option value="">XYZ</option>
                </Select>
              </label>
            </Box>
        </Box>

        <Box>
          {mensData.length > 0 && mensData.map((ele)=>{
            return(
              <Box key={ele._id} >
                <FashionProductCard 
                image={ele.item_img} 
                brand={ele.item_brand}
                name={ele.item_name}
                price={ele.item_disc_price}
                id= {ele._id}
                discount={ele.discount}
                mrp= {ele.item_mrp}
                />
              </Box>
            )
          })}
        </Box>

        <br />
      </Box>
      <br />
        <Pagination total={totalPages} handleChange={handleChange} />
        <SkeletonFashionProduct/>
    </div>
  );
};

export default Mens;
