import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const HomeI = () => {
  return (
    <div>
      <Box className="home-category-btn-div">
        <Link to="/category/electronics">
          <Button>
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/6e3e1efa83bc56c3.png?q=100"
              alt=""
            />
            <Text as={"p"}>Electronics</Text>
          </Button>
        </Link>
        <Link to="/category/fashion">
          <Button>
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/a11d5d13e54bf964.png?q=100"
              alt=""
            />
            <Text as={"p"}>Fashion</Text>
          </Button>
        </Link>
        <Link to="/category/tv&appliances">
          <Button>
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/b3e1225e6bda1c9e.png?q=100"
              alt=""
            />
            <Text as={"p"}>TV & Appliances</Text>
          </Button>
        </Link>
        <Link to="/category/beauty">
          <Button>
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/5f09b2d254acb48a.png?q=100"
              alt=""
            />
            <Text as={"p"}>Beauty</Text>
          </Button>
        </Link>
        <Link to="/category/grocery">
          <Button>
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/d154c0b4d536c1cf.png?q=100"
              alt=""
            />
            <Text as={"p"}>Grocery</Text>
          </Button>
        </Link>
        <Link to="/category/Mobile&tablets">
          <Button>
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/e2268d56d09df684.png?q=100"
              alt=""
            />
            <Text as={"p"}>Mobiles and Tablets</Text>
          </Button>
        </Link>
      </Box>
    </div>
  );
};

export default HomeI;
