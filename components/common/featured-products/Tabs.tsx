'use client';
import React, {FC, useState} from 'react';
import {ButtonBack, ButtonNext, Carousel, Slide, Slider} from "react-scroll-snap-anime-slider";
import ProductCard from "@/components/ui/product-card/ProductCard";
import {IProductSimple} from "@/types/data";

type Props = {
  recommendedProducts: IProductSimple[];
}

const Tabs: FC<Props> = ({recommendedProducts}) => {
  const [visibleSlides, setVisibleSlides] = useState(4);

  const handleResize = () => {
    if (window.innerWidth < 500) {
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
    <>

      <div className="tabs">
        <div className="item active">Recommended</div>

        <div className="item">On sale</div>

        <div className="item">Bestsellers</div>
      </div>

      <div className="inner-tabs products-list list-products">
        <Carousel totalSlides={recommendedProducts.length} visibleSlides={visibleSlides}>
          <Slider>
            {recommendedProducts.map((product, index) => (
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
    </>
  );
}

export default Tabs;
