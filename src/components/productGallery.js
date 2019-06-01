import React, { useRef, useState } from "react"
import Slider from "react-slick"
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css"

const ProductGallery = props => {
  const images = props.images
  const sliderRef = useRef(null)
  const [activeThumb, setActiveThumb] = useState(0)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // rtl: true,
    initialSlide: activeThumb,
    arrows: false,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          arrows: false,
        },
      },
    ],
    afterChange: index => {
      if (activeThumb != index) {
        setActiveThumb(index)
      }
    },
  }

  const thumbsWidth = "90px"
  const thumbsXGutter = "1.5rem"
  const thumbsYGutter = "1.2rem"
  const sliderMaxWidth = "450px"
  const desktopBreakpoint = "450px"

  const updateSlide = index => {
    setActiveThumb(index)
    sliderRef.current.slickGoTo(index, true)
  }

  return (
    <div className="productGallery">
      <div className="col col-thumbs">
        <div className="thumbs">
          {images.map((value, index) => (
            <img
              onMouseOver={() => updateSlide(index)}
              src={value}
              alt={value}
              key={index}
              className={activeThumb == index ? "active" : null}
            />
          ))}
        </div>
      </div>
      <div className="col col-slider">
        <Slider className="slider" ref={sliderRef} {...settings}>
          {images.map((value, index) => (
            <div className="slide" key={index}>
              <img src={value} alt={value} />
            </div>
          ))}
        </Slider>
      </div>

      <style jsx>{`
        .productGallery {
          display: flex;
          flex-flow: row nowrap;
          // border: 2px solid blue;
        }

        .col {
          flex: 1;
          // border: 2px solid orange;
        }

        .col-thumbs {
          // background: green;
          display: none;
          width: 100%;
          flex: 0 0 ${thumbsWidth};
        }

        .col-slider {
          flex: 1;
          width: 100%;
        }

        .thumbs {
          padding-right: ${thumbsXGutter};
        }

        .thumbs img {
          width: 100%;
          margin-bottom: ${thumbsYGutter};
        }

        .thumbs .active {
          // box-shadow: 0 1px 8px #ddd;
          outline: 4px solid #eee;
        }

        .slide img {
          width: 100%;
        }

        @media screen and (min-width: ${desktopBreakpoint}) {
          .col-thumbs {
            display: block;
          }

          .col-slider {
            width: calc(100% - ${thumbsWidth});
          }
        }
      `}</style>
      <style jsx global>{`
        .slick-slider.slider {
          max-width: ${sliderMaxWidth};
          // overflow: hidden;
          width: 100%;
        }
      `}</style>
    </div>
  )
}

export default ProductGallery
