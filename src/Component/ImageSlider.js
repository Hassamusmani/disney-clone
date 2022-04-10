import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Carousel = styled(Slider)`
  margin-top: 2rem;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    
    &:hover {
    opacity: 1;
    transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 1rem;
      color: rgb(150, 150, 150);
    }
  }
  li.slick-active button:before {
    color: #fff;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -7.5rem;
  }
  .slick-next {
    right: -7.5rem;
  }
`;

const Wrap = styled.div`
  border-radius: 0.4rem;
  cursor: pointer;
  position: relative;

  a{
    border-radius: 0.4rem;
    box-shadow: rgb(0 0 0 / 69%) 0 2.6rem 3rem -1rem, rgb(0 0 0 / 73%) 0 1.6rem 1.8rem -1rem;
    cursor: pointer;
    display: block;
    padding: 0.4rem;
    position: relative;

    img{
      width: 100%;
      height: 100%;
    }
    &:hover {
      padding: 0;
      border: 0.4rem solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

const ImageSlider = (props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img src="Assets/Images/slider-badag.jpg" alt="img1" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="Assets/Images/slider-scales.jpg" alt="img1" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="Assets/Images/slider-scale.jpg" alt="img1" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="Assets/Images/slider-badging.jpg" alt="img1" />
        </a>
      </Wrap>
    </Carousel>
  )
}

export default ImageSlider;