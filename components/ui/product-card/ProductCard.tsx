import React, {FC} from 'react';
import Image from "next/image";
import Link from "next/link";
import {IProductSimple} from "@/types/data";
import AddToCard from "@/components/common/AddToCard";

type Props = {
  product: IProductSimple;
}

const ProductCard: FC<Props> = ({product}) => {
  return (
    <div
      className="product type-product post-20230 has-post-thumbnail shipping-taxable purchasable product-type-simple">
      <div className="block_thumbnails">
        <div className="owl-product-images" data-counts="5">
          <div className="sliders">
            <div className="item_product_picture" data-owl-index="0">
              <Link href={`/product/${product.slug}`}>
                <Image
                  alt="Product image"
                  width={267}
                  height={165}
                  src={product.image}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="product_left_markers"></div>
        <ul className="product_icon"></ul>
        <div className="item__quick_view_wrap">
          <button
            data-href="https://rc.israelcart.com/wp-content/themes/levhaolam-israelcart/parts/filters/quickview.php?id=20230&amp;css=%24&amp;cse=1&amp;uid=0&amp;products_list_name=Home+page%3A+Recommended+-+quickview&amp;products_list_id=home_page_recommended_quickview"
            className="item__quick_view" data-quickview="" data-ga4-type="type_quick_view"> Quick view
          </button>
        </div>
        <div className="attributes"><span className="_top-deals">Up to 50% OFF</span><span
          className="_volume">2000 ml</span><span className="_producer">{product.producer}</span><span
          className="_lifestyle-diet">100 % natural</span><span className="_lifestyle-diet">Vegan</span><span
          className="_lifestyle-diet">Kosher for Passover</span><span className="_lifestyle-diet">Kosher</span><span
          className="_kosher-for-passover">Yes</span></div>
        <div className="item__wishlist_wrap">
          <div className="product_add_to_favorite">
            <button data-favorite_list-disable="" data-favorite_list-added="0" data-type="favorites"
                    data-ga4-type="type_add_to_wishlist">
              <div className="button__icon icon__add"><i className="lh-icon-heart-regular"></i></div>
            </button>
            <div className="button__popup tooltip-shift_right tooltip-shift_bottom">You are not logged in, so you cannot
              add items to your favorites list
            </div>
          </div>
        </div>
      </div>
      <div className="item__content_wrap">
        <div className="item__content">
          <div className="item__title_wrap">
            <div className="title">
              <Link href={`/product/${product.slug}`}
                    data-ga4-type="type_view_item">
                {product.title}
              </Link>
            </div>
            <div className="producer">
              <a href={product.producer_url}>
                {product.producer}
              </a>
            </div>
          </div>
          <div className="item__meta_wrap">
            <div className="item__rate item__rate-desktop item__zero_rate ">
              <div className="item__rate-label-pc"> 0.00</div>
              <div className="item__rate-label-mob"> (0)</div>
            </div>
            <div className="item__price">
              <div className="regular_price"><span className="woocommerce-Price-currencySymbol">$</span><span
                className="price_amount">{product.price}</span></div>
            </div>
          </div>
        </div>
        <div className="item__action_wrap">
          <div className="item__action_buttons">
            <AddToCard product={product}/>
            <div className="item__wishlist_wrap">
              <div className="product_add_to_favorite">
                <button data-favorite_list-disable="" data-favorite_list-added="0" data-type="favorites"
                        data-ga4-type="type_add_to_wishlist">
                  <div className="button__icon icon__add"><i className="lh-icon-heart-regular"></i></div>
                </button>
                <div className="button__popup">You are not logged in, so you cannot add items to your favorites list
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
