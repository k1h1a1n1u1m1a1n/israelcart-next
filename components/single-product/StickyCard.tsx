'use client';

import React, {FC, useState} from 'react'
import Image from "next/image";
import AddToCard from "@/components/common/AddToCard";
import {IProduct, IProductSimple} from "@/types/data";

type Props = {
  product: IProduct,
  simpleProduct: IProductSimple
}

const StickyCard: FC<Props> = ({product, simpleProduct}) => {
  const [isShow, setIsShow] = useState(false);

  // show only when scroll down more than 200px
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`single_product__sticky_card_wrap ${!isShow ? 'hide' : ''}`}
         style={{paddingTop: '12px'}}>
      <div className="single_product__sticky_card">
        <div className="thumbnail_wrap ">
          <Image src={product.image} width={356} height={265} alt={product.title}/>
        </div>
        <div className="title">{product.title}</div>
        <div className="info__price" data-product_id="20230">
          <div className="regular_price"><span className="woocommerce-Price-currencySymbol">$</span><span
            className="price_amount" data-js-price_amount="">{product.price}</span></div>
        </div>
        <div className="product__buy_block" data-product-list-name="Product page"
             data-product-list-id="product_page">
          <div className="product__add_to_cart_wrap">
            <AddToCard quantitySide={'left'} product={simpleProduct}/>

            <div className="item__wishlist_wrap">
              <div className="product_add_to_favorite">
                <button data-favorite_list-disable="" data-favorite_list-added="0" data-type="favorites"
                        data-ga4-type="type_add_to_wishlist">
                  <div className="button__icon icon__add"><i className="lh-icon-heart-regular"></i></div>
                </button>
                <div className="button__popup tooltip-shift_bottom tooltip-shift_left">You are not logged in, so
                  you cannot add items to your favorites list
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default StickyCard;
