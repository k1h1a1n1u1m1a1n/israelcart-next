'use client';
import React, {ComponentPropsWithRef, FC, useCallback, useEffect, useState} from 'react';
import ProductCard from "@/components/ui/product-card/ProductCard";
import {IProductSimple} from "@/types/data";
import useEmblaCarousel from "embla-carousel-react";

type Props = {
  recommendedProducts: IProductSimple[];
}
const Tabs: FC<Props> = ({recommendedProducts}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({align: 'start', slidesToScroll: 1})

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)
  return (
    <>

      <div className="tabs">
        <div className="item active">Recommended</div>

        <div className="item">On sale</div>

        <div className="item">Bestsellers</div>
      </div>

      <div className="inner-tabs products-list list-products" style={{width: '100%'}}>


        <section className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {recommendedProducts.map((product, index) => (
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
    </>
  );
}

import { EmblaCarouselType } from 'embla-carousel'

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

export default Tabs;
