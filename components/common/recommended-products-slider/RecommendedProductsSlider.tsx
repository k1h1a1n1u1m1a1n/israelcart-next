'use client';

import React, {useState} from 'react';
import {ButtonBack, ButtonNext, Carousel, Slide, Slider} from "react-scroll-snap-anime-slider";
import ProductCard from "@/components/ui/product-card/ProductCard";
import {IProductSimple} from "@/types/data";


type Props = {
  title: string;
  buttonText?: string;
  products: IProductSimple[];
}

const RecommendedProductsSlider: React.FC<Props> = ({title, buttonText, products}) => {
  const [visibleSlides, setVisibleSlides] = useState(4);

  const handleResize = () => {
    if(window.innerWidth < 500) {
      setVisibleSlides(1);
    } else if (window.innerWidth < 924) {
      setVisibleSlides(2);
    } else if (window.innerWidth < 1100) {
      setVisibleSlides(3);
    } else {
      setVisibleSlides(4);
    }
  }

  React.useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="front_page_slide_block col-full products-grid just-arrived featured_products">
      <div className="title_block">
        {title}
        {
          buttonText && (
            <a href="/new-products/" className="show_more">
              {buttonText}
            </a>
          )
        }
      </div>

      <div className="inner-tabs products-list list-products">
        <Carousel totalSlides={products.length} visibleSlides={visibleSlides}>
          <Slider>
            {products.map((product, index) => (
              <Slide
                key={index}
                innerPaddingDivProps={{style: {padding: 10}}}
                style={{paddingBottom: 90}}
              >
                <ProductCard product={product}/>
              </Slide>
            ))}
          </Slider>
          <div className={'owl-nav'} style={{textAlign: "center"}}>
            <ButtonBack className={'owl-prev'}></ButtonBack>
            <ButtonNext className={'owl-next'}></ButtonNext>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default RecommendedProductsSlider;
