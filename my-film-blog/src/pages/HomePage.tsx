import React from "react";
import Navbar from "../components/Navbar";
import ViewMovie from "../components/HomePage/SelectFilmCarousel";

const HomePage: React.FC = () => {
  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-900">Welcome</h1>
      <p className="text-lg text-gray-600 mt-4">A Sci-Fi filled adventure of movies from the 1920's till present cinema.</p>
    </div>
    <ViewMovie/>
    </>
  );
};

export default HomePage;