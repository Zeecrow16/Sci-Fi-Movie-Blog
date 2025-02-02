import React from "react";
import theabyss from "../../data/Images/theabyss.jpg"
import frankenstein from "../../data/Images/frankenstein.jpg";
import inception from "../../data/Images/inception.jpg";
import "../../styles/Carousel.css"


const ViewMovie: React.FC = () => {
    return (
        <>
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
            <div className="carousel-item active">
                <img 
                src={theabyss} 
                className="d-block w-100" 
                alt="The Abyss Movie" 
                />
                <div className="carousel-caption d-none d-md-block">
                <h5>The Abyss</h5>
                <p>1989</p>
                </div>
            </div>
            <div className="carousel-item">
                <img 
                src={frankenstein} 
                className="d-block w-100"  
                alt="Frankenstein" 
                />
                <div className="carousel-caption d-none d-md-block">
                <h5>Frankenstein</h5>
                <p>1931</p>
                </div>
            </div>
            <div className="carousel-item">
                <img 
                src={inception} 
                className="d-block w-100" 
                alt="Inception"  
                />
                <div className="carousel-caption d-none d-md-block">
                <h5>Inception</h5>
                <p>2010</p>
                </div>
            </div>
            </div>
            <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
            >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
            </button>
            <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
            >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
            </button>
          </div>
        </>
      );
};

export default ViewMovie;