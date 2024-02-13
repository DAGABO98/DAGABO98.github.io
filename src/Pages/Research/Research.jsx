import data from "../../data/index.json";
import classes from "../../App.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function Arrow(props) {
  const icon = props.type === 'next' ? faChevronRight : faChevronLeft;
  let className = props.type === 'next' ? 'nextArrow' : 'prevArrow';

  return (
    <span className={className} onClick={props.onClick}>
      <FontAwesomeIcon icon={icon} />
    </span>
  );
}

const Research = () => {
  return (
    <div
      className={classes.galleryContainer}
      style={{
        marginTop: "5.3rem",
        backgroundColor: "transparent",
        padding: "5rem",
      }}
    >
      <Slider
        {...settings}
        arrows={true}
        accessibility={true}
        prevArrow={<Arrow type="prev" />}
        nextArrow={<Arrow type="next" />}
      >
          {data?.skills?.map((item, index) => (
          <div key={index} className="research--section--card">
            <div className="research--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="research--section--card--content">
              <h3 className="research--section--title">{item.title}</h3>
              <p className="research--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Research;