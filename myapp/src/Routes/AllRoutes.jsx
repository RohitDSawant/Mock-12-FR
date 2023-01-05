import React from "react";
import { Route, Routes } from "react-router-dom";
import Fashions from "../Pages/Fashions";
import Grocery from "../Pages/Grocery";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import Mens from "../Pages/Mens";
import SignupPage from "../Pages/SignupPage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/order" />
        <Route path="/cart" />
        <Route path="/category/electronics" />
        <Route path="/category/tv&appliances" />
        <Route path="/category/beauty" />
        <Route path="/category/grocery" element={<Grocery />} />
        <Route path="/category/mobiles&tablets" />
        <Route path="/category/fashion" element={<Fashions/>}/>
        <Route path="/category/fashion/mens" element={<Mens />} />
        <Route path="/category/" />
      </Routes>
    </div>
  );
};

export default AllRoutes;
