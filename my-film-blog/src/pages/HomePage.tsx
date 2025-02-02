import React from "react";
import Navbar from "../components/Navbar";
import ViewMovie from "../components/HomePage/SelectFilmCarousel";
import Header from "../components/HomePage/Header";

const HomePage: React.FC = () => {
  return (
    <>
    <div>
    <Navbar /> 
      <Header/> 
        <ViewMovie /> 
   
    </div>
    </>
  );
};

export default HomePage;