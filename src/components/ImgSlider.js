import React from 'react'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

function ImgSlider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/images/slider-badag.jpg" alt=""  />
            </Wrap>
            <Wrap>
                <img src="/images/thun.jpg" alt=""  />
            </Wrap>
            <Wrap>
                <img src="/images/soul.jpeg" alt=""  />
            </Wrap>
            <Wrap>
                <img src="/images/captainmar.jpg" alt=""  />
            </Wrap>
            <Wrap>
                <img src="/images/lion.jpg" alt=""   />
            </Wrap>
            <Wrap>
                <img src="/images/blk1.jpg" alt=""   />
            </Wrap>
            <Wrap>
                <img src="/images/spid3.jpg" alt=""  />
            </Wrap>
        </Carousel>
    );
}

export default ImgSlider

const Carousel = styled(Slider)`
    margin-top: 30px;

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(100, 418, 371);
        }
    }

    li.slick-active button:before {
        colorL white;
    }

    .slick-list {
        overflow: visible;
    }

    button {
        z-index: 1;
        size: 75px;
    }


`


const Wrap = styled.div`
    img {
        boarder: 4px solid transparent;
        boarder-radius: 4px;
        aspect-ratio: 16 / 7;
        width: 100%;
        height: 100%;
        max-height: 350px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb( 0 0 0 / 73%) 0px 16px 10px -10px;



    }

`
