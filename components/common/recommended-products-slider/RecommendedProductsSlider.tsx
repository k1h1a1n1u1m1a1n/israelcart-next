'use client';

import React, {ComponentPropsWithRef, useCallback, useEffect, useState} from 'react';
import ProductCard from "@/components/ui/product-card/ProductCard";
import {IProductSimple} from "@/types/data";


type Props = {
  title: string;
  buttonText?: string;
  products: IProductSimple[];
}

const RecommendedProductsSlider: React.FC<Props> = ({title, buttonText, products}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({align: 'start', slidesToScroll: 1})

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

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
        <section className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {products.map((product, index) => (
                <div key={index} style={{padding: 10}} className="embla__slide">
                  <ProductCard product={product}/>
                </div>
              ))}
            </div>
          </div>
          <div className={'owl-nav'} style={{textAlign: "center"}}>
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}/>
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}/>
          </div>
        </section>

      </div>
    </div>
  );
}


import {EmblaCarouselType} from 'embla-carousel'
import useEmblaCarousel from "embla-carousel-react";

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
}

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

type PropType = ComponentPropsWithRef<'button'>

const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className="owl-prev"
      type="button"
      {...restProps}
    >

      {children}
    </button>
  )
}

const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className="owl-next"
      type="button"
      {...restProps}
    >
      {children}
    </button>
  )
}


export default RecommendedProductsSlider;
