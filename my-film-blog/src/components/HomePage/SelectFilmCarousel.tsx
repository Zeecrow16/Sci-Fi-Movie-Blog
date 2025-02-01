import React from "react";
import blackFriday from "../../data/Images/black-friday.jpg"
import frankenstein from "../../data/Images/frankenstein.jpg";
import metropolis from "../../data/Images/metropolis.jpeg";


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
                <img src={blackFriday} className="d-block w-100" alt="Black Friday Movie" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Black Friday</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={frankenstein} className="d-block w-100" alt="Frankenstein" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Frankenstein</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={metropolis} className="d-block w-100" alt="Metropolis" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Metropolis</h5>
                  <p>Some representative placeholder content for the third slide.</p>
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