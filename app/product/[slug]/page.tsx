import React from 'react';
import '../single-product.css'
import Breadcrumbs from "@/components/single-product/Breadcrumbs";
import Link from "next/link";
import {IProduct} from "@/types/data";
import Gallery from "@/components/single-product/Gallery";
import Image from "next/image";
import AddToCard from "@/components/common/AddToCard";
import RecommendedProducts from "@/components/single-product/RecommendedProducts";
import StickyCard from "@/components/single-product/StickyCard";


async function getProduct(slug: string) {
  const res = await fetch('https://rc.israelcart.com/wp-json/next/products-by-slug/?slug=' + slug);
  const product: IProduct = await res.json()
  return product
}


export async function generateStaticParams() {
  const posts = await fetch('https://rc.israelcart.com/wp-json/next/get-all-products-slugs').then((res) => res.json())

  return posts.map((slug: string) => ({slug: slug}))
}

export default async function SingleProduct({params,}: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  const product: IProduct = await getProduct(slug);

  const simpleProduct = {
    slug: product.slug,
    price: product.price,
    max_add_to_card: 10,
    id: product.id,
    title: product.title,
    image: product.image,
    markers: product.markers,
    min_add_to_card: 1,
    producer: product.producer,
    producer_url: product.producer_url,
  };

  return (
    <div className={'col-full'}>
      <Breadcrumbs/>

      <div className="single_product__main">
        <div className="single_product__main-left">
          <div className="single_product__gallery">

            <div className="product_left_markers">
            </div>

            <Gallery images={product.gallery}/>
          </div>

          <div className="single_product__mobile_info">
            <div className="h1">{product.title}</div>
            <div className="info__price">
              <div className="regular_price"><span className="woocommerce-Price-currencySymbol">$</span><span
                className="price_amount">{product.price}</span></div>

            </div>
            <div className="product__buy_block">
              <div className="product__add_to_cart_wrap">
                <AddToCard quantitySide={'left'} product={simpleProduct}/>

                <div className="item__wishlist_wrap">
                  <div className="product_add_to_favorite">
                    <button data-favorite_list-added="0" data-type="favorites" data-favorite_list-disable>
                      <div className="button__icon icon__add"><i className="lh-icon-heart-regular"></i></div>
                    </button>
                    <div className="button__popup tooltip-shift_right tooltip-shift_bottom">You are not logged in, so
                      you cannot add items to your favorites list
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product_availability">
              <span className="title">SKU:</span>
              <span>{product.sku}</span> / <span className="title">Availability:</span>
              <span className="second__availability second__availability_in">{product.stock_status}	</span> /
              <div className="info__tooltip">
                <button className="info__delivery" data-toggle="tooltip">
                  Delivery Info <i className="lh-icon-info-circle-light"></i>
                  <span className="tooltip_wrap tooltip-shift_right tooltip-shift_bottom">
                    Delivery to the US usually takes<br/>
				            <strong>10 - 18 days</strong>
                  </span>
                </button>
              </div>
            </div>
            <div className="single_product__producer_tiny">
              <div className="producer__thumbnail">
                <img data-js-images-lazy-load=""
                     data-js-webp="https://rc.israelcart.com/wp-content/webp-express/webp-images/uploads/2022/08/HaTzav-2-scaled-e1663083771240-150x150.jpg.webp"
                     data-js-original-image="https://rc.israelcart.com/wp-content/uploads/2022/08/HaTzav-2-scaled-e1663083771240-150x150.jpg"
                     src="https://rc.israelcart.com/wp-content/themes/levhaolam/dist/images/plug.png"
                     alt="Producer image"/>
              </div>
              <div className="producer__info">
                <div className="producer__name_wrap">
                  Producer:
                  <a className="producer__name" href="https://rc.israelcart.com/producers/yaakov-hanman/">
                    {product.producer}
                  </a>
                </div>
                <div className="producer__search_link">
                  <a href={product.producer_url}>
                    View full collection
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product__description">
            <div className="single_product__green_handle">Description</div>
            <div className="description__text has_collapse short" data-short-text="">
              <div dangerouslySetInnerHTML={{__html: product.content}}></div>

              <div className="short_unshort_wrap">
                <div className="button_short" data-short-text-button="">read more</div>
                <div className="button_unshort" data-short-text-button="">hide more</div>
              </div>
            </div>
          </div>
          <div className="single_product__characteristics has_description">
            <table>
              <tbody>
              <tr>
                <td className="list__item item__cosher">
                  <div className="inner">
                      <span className="item__icon"><img
                        src="https://rc.israelcart.com/wp-content/themes/levhaolam-israelcart/dist/images/characteristics/cosher.svg"/></span>
                    <span className="item__label">Kosher</span>
                  </div>
                </td>
                <td className="list__item item__cosher_for_passover">
                  <div className="inner">
                      <span className="item__icon"><img
                        src="https://rc.israelcart.com/wp-content/themes/levhaolam-israelcart/dist/images/characteristics/cosher_for_passover.svg"/></span>
                    <span className="item__label">Kosher for Passover</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="list__item item__organic">
                  <div className="inner">
                      <span className="item__icon"><img
                        src="https://rc.israelcart.com/wp-content/themes/levhaolam-israelcart/dist/images/characteristics/organic.svg"/></span>
                    <span className="item__label">Organic</span>
                  </div>
                </td>
                <td className="list__item item__vegan">
                  <div className="inner">
                      <span className="item__icon"><img
                        src="https://rc.israelcart.com/wp-content/themes/levhaolam-israelcart/dist/images/characteristics/vegan.svg"/></span>
                    <span className="item__label">Vegan</span>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="single_product__cross_sale">
            <div className="single_product__green_handle">Frequently bought together</div>

            <div className="inner_crosssales">
              <div className="cross_sale__thumbnails">
                <a href="https://rc.israelcart.com/product/bulgur-with-lentils-mushroom-mix/"
                   data-ga4-type="type_view_item" className="thumbnail"
                   style={{width: 'calc(50% - 50px)', cursor: 'pointer'}}

                   data-article-product-ga4="{&quot;availability&quot;:&quot;in_stock&quot;,&quot;item_id&quot;:&quot;TF-50798&quot;,&quot;item_name&quot;:&quot;Bulgur With Lentils &amp; Mushroom Mix&quot;,&quot;affiliation&quot;:&quot;Israel Cart&quot;,&quot;item_brand&quot;:&quot;Tekoa Farm&quot;,&quot;price&quot;:8.14,&quot;currency&quot;:&quot;USD&quot;,&quot;discount&quot;:0,&quot;quantity&quot;:1,&quot;item_list_id&quot;:&quot;product_page_frequently_bought_together&quot;,&quot;item_list_name&quot;:&quot;Product page: Frequently bought together&quot;,&quot;item_category&quot;:&quot;Food Products&quot;,&quot;item_category2&quot;:&quot;Cooking Mixture&quot;}"
                   data-currency="USD" data-product-list-name="Product page: Frequently bought together"
                   data-product-list-id="product_page_frequently_bought_together" data-product_id="17912"
                >
                  <img data-js-images-lazy-load=""
                       src="https://rc.israelcart.com/wp-content/webp-express/webp-images/uploads/2020/05/10402-1-300x200.jpg.webp"
                       alt="Product image" className="image-loaded"/>
                </a>
                <a href="https://rc.israelcart.com/product/lebanese-zaatar-spice-blend/"
                   className="thumbnail"
                   style={{width: 'calc(50% - 50px)', cursor: 'pointer'}}
                   data-product-list-id="product_page_frequently_bought_together" data-product_id="18800"
                >
                  <img data-js-images-lazy-load=""
                       src="https://rc.israelcart.com/wp-content/webp-express/webp-images/uploads/2020/07/10637-1-300x200.jpg.webp"
                       alt="Product image" className="image-loaded"/>
                </a>
              </div>
              <div className="cross_sale__items">
                <div className="item ">
                  <div className="item__checkbox">
                    <input id="cross_sale_wuy5n" type="checkbox" checked={true} defaultValue="17912"
                           data-product_id="17912"
                           data-price="8.14" data-js-cross_sale=""/>
                    <label htmlFor="cross_sale_wuy5n" className="items__item_label"></label>
                  </div>
                  <div className="item__thumbnail-mobile">
                    <img data-js-images-lazy-load=""
                         data-js-webp="https://rc.israelcart.com/wp-content/webp-express/webp-images/uploads/2020/05/10402-1-150x150.jpg.webp"
                         data-js-original-image="https://rc.israelcart.com/wp-content/uploads/2020/05/10402-1-150x150.jpg"
                         src="https://rc.israelcart.com/wp-content/themes/levhaolam/dist/images/plug.png"
                         alt="Product image"/>
                  </div>
                  <div className="item__label">
                    <label htmlFor="cross_sale_wuy5n">
                      <div className="item__price item__price-mobile"><span
                        className="woocommerce-Price-currencySymbol">$</span><span className="price_amount"
                                                                                   data-js-price_amount="">8.14</span>
                      </div>
                      <div>Bulgur With Lentils &amp;amp; Mushroom Mix</div>
                    </label>
                  </div>
                  <div className="item__price item__price-desktop"><span
                    className="woocommerce-Price-currencySymbol">$</span><span className="price_amount"
                                                                               data-js-price_amount="">8.14</span>
                  </div>
                </div>
                <div className="item ">
                  <div className="item__checkbox">
                    <input id="cross_sale_nw0vt" type="checkbox" checked={true} defaultValue="18800"
                           data-product_id="18800"
                           data-price="6.85" data-js-cross_sale=""/>
                    <label htmlFor="cross_sale_nw0vt" className="items__item_label"></label>
                  </div>
                  <div className="item__thumbnail-mobile">
                    <img data-js-images-lazy-load=""
                         data-js-webp="https://rc.israelcart.com/wp-content/webp-express/webp-images/uploads/2020/07/10637-1-150x150.jpg.webp"
                         data-js-original-image="https://rc.israelcart.com/wp-content/uploads/2020/07/10637-1-150x150.jpg"
                         src="https://rc.israelcart.com/wp-content/themes/levhaolam/dist/images/plug.png"
                         alt="Product image"/>
                  </div>
                  <div className="item__label">
                    <label htmlFor="cross_sale_nw0vt">
                      <div className="item__price item__price-mobile"><span
                        className="woocommerce-Price-currencySymbol">$</span><span className="price_amount"
                                                                                   data-js-price_amount="">6.85</span>
                      </div>
                      <div>Za&apos;atar Spice Blend</div>
                    </label>
                  </div>
                  <div className="item__price item__price-desktop"><span
                    className="woocommerce-Price-currencySymbol">$</span><span className="price_amount"
                                                                               data-js-price_amount="">6.85</span>
                  </div>
                </div>
              </div>
              <div className="cross_sale__buy_block">
                <div className="total_price__wrap">
                  <div className="total_price__label">
                    For all there
                  </div>
                  <div className="total_price"><span className="woocommerce-Price-currencySymbol">$</span><span
                    className="price_amount" data-js-price_amount="">14.99</span></div>
                </div>
                <div className="button_wrap">
                  <div className="button button_add_to_cart "
                  >
                    <span className="default_label">Add selected items</span>
                    <span className="success_label">Add selected items</span>
                  </div>
                </div>
              </div>

              <div className="cross_sale_popup">
                <div className="icon">
                  <i className="lh-icon-check-circle-solid"></i>
                </div>
                <div className="description">
				<span className="text_for_one_product">
				The item you selected was added to your cart
				</span>
                  <span className="text_for_more_products">
					The items you selected were added
					<span className="text-nowrap">to your cart</span>
				</span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product__reviews">
            <div className="single_product__green_handle with_sub_handle">
              Customer Reviews
            </div>
            <div className="single_product__sub_handle">Purchased this? Leave your review.</div>
            <div className="reviews__form_wrap">
              <div className="reviews__form" data-comments-form="reviews_block_mfuiy" style={{display: 'none'}}>
                <div id="reviews" className="woocommerce-Reviews">
                  <div id="review_form_wrapper">
                    <div id="review_form">
                      <div id="respond" className="comment-respond">
                          <span id="reply-title" className="comment-reply-title">Leave a Reply <small><Link
                            rel="nofollow"
                            id="cancel-comment-reply-link"
                            href="/product/hatzav-superior-olive-oil-2-liters/#respond"
                            style={{display: 'none'}}
                          >Cancel reply</Link></small></span>
                        <form action="https://rc.israelcart.com/wp-comments-post.php" method="post" id="commentform"
                              className="comment-form"><p className="comment-notes"><span id="email-notes">Your email address will not be published.</span>
                          <span className="required-field-message">Required fields are marked <span
                            className="required">*</span></span></p>
                          <div className="comment-form-rating"><label htmlFor="rating">Your rating <span
                            className="required">*</span></label>
                            <p className="stars">
                        <span>
                            <a className="star-1" href="#" data-value="1"
                            >1</a>
                            <a className="star-2" href="#" data-value="2"
                            >2</a>
                            <a className="star-3" href="#" data-value="3"
                            >3</a>
                            <a className="star-4" href="#" data-value="4"
                            >4</a>
                            <a className="star-5" href="#" data-value="5"
                            >5</a>
                        </span>
                            </p>
                            <select name="rating" id="rating" className="hidden" required={true}>
                              <option selected={true} defaultValue="">Rate…</option>
                              <option defaultValue="5">Perfect</option>
                              <option defaultValue="4">Good</option>
                              <option defaultValue="3">Average</option>
                              <option defaultValue="2">Not that bad</option>
                              <option defaultValue="1">Very poor</option>
                            </select>
                            <div className="stars-error-popup">
                              <div className="stars-error-text">Fields accompanied by a red asterisk are required to
                                be filled in order to submit your feedback
                              </div>
                            </div>
                          </div>
                          <p className="comment-form-comment"><label htmlFor="comment">Your review <span
                            className="required">*</span></label><textarea placeholder="Your Review" id="comment"
                                                                           name="comment" cols={45} rows={8}
                          ></textarea></p>
                          <div className="upload_review_images">
                            <div className="input-field">
                              <div className="review_images" data-js-product-upload-wrap="">
                                <div className="image-uploader"><input type="file" id="images-1732638811624"
                                                                       name="images[]"
                                                                       accept=".jpg,.jpeg,.png,.gif,.svg"
                                />
                                  <div className="uploaded"></div>
                                  <div className="upload-text"><i
                                    className="iui-cloud-upload"></i><span>Drag &amp; Drop files here or click to browse</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="comment-form-author"><label htmlFor="author">Name <span
                            className="required">*</span></label> <input required={true} id="author" name="author"
                                                                         type="text" defaultValue="" size={30}
                                                                         maxLength={245} autoComplete="name"/></p>
                          <p className="comment-form-email"><label htmlFor="email">Email <span
                            className="required">*</span></label> <input required={true} id="email" name="email"
                                                                         type="email" defaultValue="" size={30}
                                                                         maxLength={30}
                                                                         aria-describedby="email-notes"
                                                                         autoComplete="email"/></p>
                          <p className="comment-form-cookies-consent"><input id="wp-comment-cookies-consent"
                                                                             name="wp-comment-cookies-consent"
                                                                             type="checkbox" defaultValue="yes"/><label
                            htmlFor="wp-comment-cookies-consent">Save my name and email in this browser for the next
                            time I comment.</label></p>
                          <p className="form-submit"><input name="submit" type="submit" id="submit" className="submit"
                                                            defaultValue="Leave review"/> <input type="hidden"
                                                                                                 name="comment_post_ID"
                                                                                                 defaultValue="20230"
                                                                                                 id="comment_post_ID"/>
                            <input type="hidden" name="comment_parent" id="comment_parent" defaultValue="0"/>
                            <span className="button-white" data-comments-form-hide="">Cancel</span></p></form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="reviews__form_wrap_collapser_button">
                <span className="button" data-comments-form-show="">Leave review</span>
              </div>
            </div>

            <div className="reviews__rating empty" data-comments-rating="">
              <div className="rating__stars_wrap">
                <div className="rating__label">Product rating</div>
                <div className="stars">
				<span className="rate">
					0				</span>
                </div>
              </div>
              <div className="rating__count_wrap">
                <div className="rating__label">Reviews for this item</div>
                <div className="rating__count">0</div>
              </div>
            </div>

            <div className="reviews__list empty" data-comments-list="reviews_block_mfuiy" data-product_id="20230"
                 data-limit="5">
            </div>

            <div className="reviews__more_button_wrap">
              <a href="" data-comments-more="reviews_block_mfuiy" className=""
                 style={{display: 'none'}}>View more reviews</a>
            </div>

          </div>
        </div>

        <div className="single_product__main-right">

          <ul className="product_icon">
          </ul>

          <h1>{product.title}</h1>
          <div className="single_product__main_info">
            <div className="info__price" data-product_id="20230">
              <div className="regular_price"><span className="woocommerce-Price-currencySymbol">$</span><span
                className="price_amount" data-js-price_amount="">{product.price}</span></div>

            </div>
            <div className="product__buy_block">
              <div className="product__add_to_cart_wrap">


                <AddToCard quantitySide={'left'} product={simpleProduct}/>


                <div className="item__wishlist_wrap">
                  <div className="product_add_to_favorite">
                    <button data-type="favorites" data-favorite_list-disable>
                      <div className="button__icon icon__add"><i className="lh-icon-heart-regular"></i></div>
                    </button>
                    <div className="button__popup tooltip-shift_left">You are not logged in, so you cannot add items
                      to your favorites list
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product_availability">
              <span className="title">SKU:</span>
              <span data-product_sku="20230">
		YHO-15071	</span> /
              <span className="title">Availability:</span>
              <span className="second__availability
	second__availability_in		" data-product_stock_status="20230">
		In Stock	</span> /
              <div className="info__tooltip">
                <button className="info__delivery" data-toggle="tooltip">
                  Delivery Info <i className="lh-icon-info-circle-light"></i>
                  <span className="tooltip_wrap tooltip-shift_left">
				Delivery to the US usually takes<br/>
				<strong>10 - 18 days</strong>
			</span>
                </button>
              </div>
            </div>
            <div className="single_product__producer_tiny">
              <div className="producer__thumbnail">
                <Image src={product.producer_image} width={54} height={54} alt={product.producer}/>
              </div>
              <div className="producer__info">
                <div className="producer__name_wrap">
                  Producer:
                  <a className="producer__name" href="https://rc.israelcart.com/producers/yaakov-hanman/"
                  >
                    {product.producer} </a>
                </div>
                <div className="producer__search_link"><a href="https://rc.israelcart.com/?s=&amp;lh=pd!34172"
                >View full
                  collection</a></div>
              </div>
            </div>
          </div>
          <StickyCard product={product} simpleProduct={simpleProduct}/>
        </div>
      </div>
      <RecommendedProducts slug={slug}/>

      <div className="single_product__producer">
        <div className="single_product__green_handle">Meet the Producer</div>
        <div className="producer__info have_description have_thumbnail">
          <div className="producer__card">
            <div className="product__thumbnail">
              <img data-js-images-lazy-load=""
                   src="https://rc.israelcart.com/wp-content/webp-express/webp-images/uploads/2022/08/HaTzav-2-scaled-e1663083771240-1024x976.jpg.webp"
                   alt="Yaakov Hanman" className="image-loaded"/>
            </div>
          </div>

          <div className="producer__description">
            <div className="producer__name_wrap">
				<span className="producer__name">
					{product.producer}				</span>
            </div>

            <div className="tags">
            </div>

            <div className="description__text has_collapse short" data-short-text="">
              <div dangerouslySetInnerHTML={{__html: product.producer_description}}></div>
              <div className="short_unshort_wrap">
                <div className="button_short" data-short-text-button="">read more</div>
                <div className="button_unshort" data-short-text-button="">hide more</div>
              </div>
            </div>

            <div className="product__link">
              <a href="https://rc.israelcart.com/?s=&amp;lh=pd!34172">
                View full collection </a>
            </div>
          </div>
        </div>
      </div>

      <div data-js-klaviyo-subscribe-form-item="">

        <div className="klaviyo-subscribe-banner">
          <div className="klaviyo-banner-subscribe--success" data-js-klaviyo-subscribe-success="">
            Success! <br/> You are now subscribed to our newsletter
          </div>
          <div data-js-klaviyo-subscribe-wrapper="">
            <div className="klaviyo-banner--content">
              <div className="klaviyo-banner--title">
                Subscribe <br/>
                to our newsletter
              </div>

              <form data-js-klaviyo-subscribe-form="" action="#" className="klaviyo-banner"
                    data-js-location="Item page">
                <div className="klaviyo-banner--input-wrapper">
                  <input data-js-klaviyo-subscribe-name="" className="klaviyo-banner--input" type="text"
                         name="klaviyo-name" placeholder="Your name"/>
                  <div className="klaviyo-banner--input-error-wrapper">
                    <div className="klaviyo-banner--input-error">
                      Please enter your name
                    </div>
                  </div>
                </div>
                <div className="klaviyo-banner--input-wrapper">
                  <input data-js-klaviyo-subscribe-email="" className="klaviyo-banner--input" type="text"
                         name="klaviyo-email" placeholder="Your e-mail"/>
                  <div className="klaviyo-banner--input-error-wrapper">
                    <div className="klaviyo-banner--input-error">
                      Please enter a valid email
                    </div>
                  </div>
                </div>
                <button className="klaviyo-banner--submit ripple">
                     <span className="klaviyo-banner--submit-text">
                        Subscribe
                        <span className="klaviyo-banner--loader"><i
                          className="lh-icon-spinner-regular lh-spin"></i></span>
                    </span>
                </button>

              </form>
            </div>

            <div className="klaviyo-banner--image">
              <div className="klaviyo-banner--tags">
                <img width="175"
                     src="https://rc.israelcart.com/wp-content/themes/levhaolam-israelcart/dist/images/logo-white.svg"
                     alt="Israelcart logo"/>
                <div className="klaviyo-banner--tag-plain" data-index="1">Discover new items</div>
                <div className="klaviyo-banner--tag-plain" data-index="2">Learn about Israel</div>
                <div className="klaviyo-banner--tag-plain" data-index="3">Get updates</div>
                <div className="klaviyo-banner--tag-big">Shalom!</div>
              </div>
              <Image
                width={483}
                height={458}
                src="https://rc.israelcart.com/wp-content/themes/levhaolam-israelcart/dist/images/klaviyo-banner/phone-with-logo.png"
                alt="Israelcart phone"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
