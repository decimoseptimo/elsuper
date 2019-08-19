import React, { useRef, useState, useMemo } from "react"
import Slider from "react-slick"
import Image from "gatsby-image"
import Asd from "../image"
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"

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
    // lazyLoad: 'progressive',
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          // arrows: true,
        },
      },
    ],
    beforeChange: (oldIndex, index) => {
      setActiveThumb(index)
    },
  }

  const thumbsWidth = "90px"
  const thumbsXGutter = "1.5rem"
  const thumbsYGutter = "1.2rem"
  const sliderMaxWidth = null
  const desktopBreakpoint = "1050px"

  const updateSlide = index => {
    setActiveThumb(index)
    sliderRef.current.slickGoTo(index, true)
  }

  return (
    <div className="productGallery">
      <div className="col col-thumbs">
        <div className="thumbs">
          {images.map((value, index) => (
            <div
              key={index}
              onMouseOver={() => updateSlide(index)}
              className={`image ${activeThumb == index ? "active" : ""}`}
            >
              <Image
                fluid={value.childImageSharp.fluid}
                alt={value.title}
                key={index}
              />
            </div>
          ))}
        </div>
      </div>
      {useMemo(
        () => (
          <div className="col col-slider">
            <Slider className="slider" ref={sliderRef} {...settings}>
              {images.map((value, index) => (
                <div className="slide" key={index}>
                  <Image fluid={value.childImageSharp.fluid} />
                  {/*<img src={value.childImageSharp.fluid.src} />*/}
                </div>
              ))}
            </Slider>
            {/*<Asd/>*/}
          </div>
        ),
        []
      )}

      <style jsx>{`
        .productGallery {
          display: flex;
          flex-flow: row nowrap;
          // border: 2px solid blue;
        }

        .col {
          flex: 1;
        }

        .col-thumbs {
          display: none;
          width: 100%;
          flex: 0 0 ${thumbsWidth};
        }

        .col-slider {
          flex: 1 1 auto;
          width: 100%;
        }

        .thumbs {
          padding-right: ${thumbsXGutter};
        }

        .thumbs .image {
          padding: 1px;
          width: 100%;
          margin-bottom: ${thumbsYGutter};
        }

        .thumbs .active {
          box-shadow: 0 1px 2px #ddd;
          border: 1px solid #999;
          padding: 0;
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
          max-width: ${sliderMaxWidth || "none" };
          // overflow: hidden;
          width: 100%;
        }

        .slick-slider * {
          outline: none;
        }
      `}</style>
    </div>
  )
}

export default ProductGallery
