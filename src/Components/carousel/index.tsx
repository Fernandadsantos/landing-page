import React, { useState } from "react";
import { CarouselProps } from "../../interfaces";
import CardModel from "../cardModel";
import BlockQuoteModel from "../blockQuote";
import arrow from "../../assets/Arrow.png";
import "./style.css";

export default function Carousel(props: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? props.data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === props.data.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <CardModel backgroundColor="dark" height="625px" width="100%">
      <div className="carousel-container">
        <div className="carousel-testimonial">
          <BlockQuoteModel
            quote={props.data[currentIndex % props.data.length].quote}
            name={props.data[currentIndex % props.data.length].name}
            title={props.data[currentIndex % props.data.length].title}
          />
          <BlockQuoteModel
            quote={props.data[(currentIndex + 1) % props.data.length].quote}
            name={props.data[(currentIndex + 1) % props.data.length].name}
            title={props.data[(currentIndex + 1) % props.data.length].title}
          />
          <BlockQuoteModel
            quote={props.data[(currentIndex + 2) % props.data.length].quote}
            name={props.data[(currentIndex + 2) % props.data.length].name}
            title={props.data[(currentIndex + 2) % props.data.length].title}
          />
        </div>

        <div className="carousel-controler">
          <button onClick={prevSlide} className="carousel-prev">
            <img src={arrow} alt="seta para esquerda" />
          </button>
          <div className="carousel-indicators">
            {props.data.map((obj, index) => (
              <span
                key={index}
                className={index === currentIndex ? "active" : ""}
                onClick={() => setCurrentIndex(index)}
              >
                &#9679;
              </span>
            ))}
          </div>
          <button onClick={nextSlide} className="carousel-next">
            <img src={arrow} alt="seta para direita" />
          </button>
        </div>
      </div>
    </CardModel>
  );
}
