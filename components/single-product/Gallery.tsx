'use client';

import {ButtonBack, ButtonNext, Carousel, Slide, Slider} from "react-scroll-snap-anime-slider";
import Image from "next/image";
import React from "react";

export default function Gallery({images}: { images: string[] }) {
  return (
    <>
      <div className="gallery__main_block">
        <div className="gallery__main">

          <Carousel totalSlides={images.length} visibleSlides={1}>
            <Slider>
              {images.map((slide, index) => (
                <Slide
                  key={index}
                >
                  <Image
                    priority={index === 0}
                    src={slide} alt={'Product slide'} width={547} height={358}/>
                </Slide>
              ))}
            </Slider>
            <div className={'owl-nav'} style={{textAlign: "center"}}>
              <ButtonBack className={'owl-prev'}>
                <i className="lh-icon-chevron-left-light"></i>
              </ButtonBack>
              <ButtonNext className={'owl-next'}>
                <i className="lh-icon-chevron-right-light"></i>
              </ButtonNext>
            </div>
          </Carousel>
        </div>
      </div>

      <div className="gallery__thumbnails">
        {images.map((slide, index) => (
          <div key={index} className="thumbnails__item image">
            <Image src={slide} alt={'Product slide'} width={56 * 2} height={56 * 2}/>
          </div>
        ))}
      </div>
    </>
  );
}
