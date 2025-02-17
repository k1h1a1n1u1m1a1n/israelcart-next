'use client';

import {FC} from 'react'
import Link from "next/link";

const Filter: FC = () => {
  return (
    <div className="lh_loop_page__aside lh_loop_filters__mobile_popup__wrap" data-loop-page-ajax-wrap="form">
      <div className="lh_filters_form_wrap mobile_popup__frame">
        <div className="mobile_popup__title">Filters</div>
        <div className="mobile_popup__overflow">
          <div className="mobile_popup__button_close" data-loop-mobile-filters-show=""></div>
          <form className="lh_filters_form" data-filters-form-fragment="form"><input type="hidden" name="lhf[cc]"
                                                                                     data-loop-filters-main-category=""/>
            <div className="lh_loop_filters__block block__categories minify-disable"
                 data-block-items-type="categories">
              <div className="block__title" data-click-collapse-block=""> Categories</div>
              <div className="block__collapse" data-list-minify-wrap="" style={{display: 'block'}}>
                <ul>
                  <li className="widget__items_control " data-filter-category="1213">
                    <div className="items__item_label custom_icon"><i className="default"
                                                                      style={{backgroundImage: 'url(https://www.israelcart.com/wp-content/uploads/2022/02/cosmetics.svg)'}}></i><i
                      className="hover"
                      style={{backgroundImage: 'url(https://www.israelcart.com/wp-content/uploads/2022/02/cosmetics-hover.svg)'}}></i><Link
                      href="/product-category/cosmetics/" data-name="Cosmetics"
                      data-categories-item-id="1213"> Cosmetics <span className="count">(47)</span></Link></div>
                  </li>
                  <li className="widget__items_control " data-filter-category="1255">
                    <div className="items__item_label custom_icon">
                      <i className="default"
                         style={{backgroundImage: 'url(https://www.israelcart.com/wp-content/uploads/2022/02/jewerly.svg)'}}></i>
                      <i className="hover"
                         style={{backgroundImage: 'url(https://www.israelcart.com/wp-content/uploads/2022/02/jewerly-hover.svg)'}}></i><Link
                      href="/product-category/jewelry/"
                      data-categories-item-id="1255"> Jewelry <span className="count">(34)</span></Link></div>
                  </li>
                  <li className="widget__items_control " data-filter-category="1237">
                    <div className="items__item_label custom_icon"><i className="default"
                                                                      style={{backgroundImage: 'url(https://www.israelcart.com/wp-content/uploads/2022/02/food.svg)'}}></i><i
                      className="hover"
                      style={{backgroundImage: 'url(https://www.israelcart.com/wp-content/uploads/2022/02/food-hover.svg)'}}></i>
                      <Link
                      href="/product-category/food-products/" data-name="Food Products"
                      data-categories-item-id="1237"> Food Products <span className="count">(32)</span></Link></div>
                  </li>
                  <li className="widget__items_control " data-filter-category="1220">
                    <div className="items__item_label custom_icon"><i className="default"
                                                                      style={{backgroundImage: 'url(https://www.israelcart.com/wp-content/uploads/2022/02/apparel.svg)'}}></i><i
                      className="hover"
                      style={{backgroundImage: 'url(https://www.israelcart.com/wp-content/uploads/2022/02/apparel-hover.svg)'}}></i>
                      <Link href="/product-category/home/" data-name="Home"
                      data-categories-item-id="1220"> Home <span className="count">(28)</span></Link></div>
                  </li>
                  <li className="widget__items_control" data-filter-category="3882">
                    <div className="items__item_label"><Link
                      href="/product-category/rosh-hashanah-cocmetics/"
                      data-name="Rosh hashanah cosmetics" data-categories-item-id="3882"> Rosh hashanah
                      cosmetics <span className="count">(26)</span></Link></div>
                  </li>
                  <li className="widget__items_control " data-filter-category="1302">
                    <div className="items__item_label custom_icon"><i className="default"
                                                                      style={{backgroundImage: 'url(https://www.israelcart.com/wp-content/uploads/2022/02/books.svg)'}}></i><i
                      className="hover"
                      style={{backgroundImage: 'url(https://www.israelcart.com/wp-content/uploads/2022/02/books-hover.svg)'}}></i>
                      <Link
                      href="/product-category/books/" data-name="Books"
                      data-categories-item-id="1302"> Books <span className="count">(2)</span></Link></div>
                  </li>
                  <li className="widget__items_control " data-filter-category="1208">
                    <div className="items__item_label custom_icon"><i className="default"
                                                                      style={{backgroundImage: 'url(https://www.israelcart.com/wp-content/uploads/2022/02/judaica.svg)'}}></i><i
                      className="hover"
                      style={{backgroundImage: 'url(https://www.israelcart.com/wp-content/uploads/2022/02/judaica-hover.svg)'}}></i>
                      <Link
                      href="/product-category/judaica/" data-name="Judaica"
                      data-categories-item-id="1208"> Judaica <span className="count">(1)</span></Link></div>
                  </li>
                </ul>
                <div className="block__list_show_button" data-click-collapse-more="1">Show more</div>
                <div className="block__list_hide_button" data-click-collapse-more="0">Show less</div>
              </div>
            </div>
            <div data-filters-form-fragment="subcategories"></div>
            <div data-filters-form-fragment="producers">
              <div className="lh_loop_filters__block block__checkboxes minify block__text_search"
                   data-block-items-type="producers" data-list-item-count="48" data-list-item-checked-count="0"
                   data-collapse-limit="6">
                <div className="block__title" data-click-collapse-block=""> Producers <span
                  className="block__count"> ( <span data-list-item-count=""> 0 </span> items) </span></div>
                <div className="block__collapse" data-list-minify-wrap="" style={{display: 'block'}}>
                  <div className="block__text_search"><label><input type="text" placeholder="Search producer"
                                                                    data-list-text-search=""/></label></div>
                  <div className="block__text_search_empty"> Producers not found</div>
                  <ul>
                    <li className="block__item " data-item-id="119076" data-item-count="26"><input
                      id="lhf__pd_____119076" type="checkbox" name="lhf[pd][]" value="119076"/><label
                      htmlFor="lhf__pd_____119076" className="item__label"><span data-list-item-label="">Schwartz Cosmetics</span><span
                      className="count">(<span data-item-count="">26</span>)</span></label></li>
                  </ul>
                  <div className="block__list_show_button" data-click-collapse-more="1">Show more</div>
                  <div className="block__list_hide_button" data-click-collapse-more="0">Show less</div>
                </div>
              </div>
            </div>
            <div data-filters-form-fragment="attributes"></div>
            <div data-filters-form-fragment="price">
              <div className="lh_loop_filters__block block__price_range widget__price_range widget"
                   data-block-items-type="price">
                <div className="block__title" data-click-collapse-block="">Price filter</div>
                <div className="block__collapse" data-list-minify-wrap="" style={{display: 'block'}}>
                  <div id="data_range_html">
                    <div className="price_range__inputs"><input type="number" data-filter-input="price_min"
                                                                name="lhf[pn]" value="" placeholder="3" min=""
                                                                max=""/><input type="number"
                                                                               data-filter-input="price_max"
                                                                               name="lhf[px]" value=""
                                                                               placeholder="258" min="" max=""/>
                      <div className="price_range__apply"><span className="button"
                                                                data-filter-price-apply="">Apply</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-filters-form-fragment="discount">
              <div className="lh_loop_filters__block block__discount" data-block-items-type="discount">
                <div className="block__title" data-click-collapse-block="">Sales</div>
                <div className="block__collapse" data-list-minify-wrap="" style={{display: 'block'}}>
                  <div className="widget__items_control"><input id="filter_discount_0__100" type="radio" name="lhf[d]"
                                                                value="0,100"/><label className="item__label"
                                                                                      htmlFor="filter_discount_0__100">Disable
                    filter</label></div>
                  <div className="widget__items_control"><input id="filter_discount_1__100" type="radio" name="lhf[d]"
                                                                value="1,100"/><label className="item__label"
                                                                                      htmlFor="filter_discount_1__100">All
                    sales</label></div>
                  <div className="widget__items_control"><input id="filter_discount_1__30" type="radio" name="lhf[d]"
                                                                value="1,30"/><label className="item__label"
                                                                                     htmlFor="filter_discount_1__30">Up
                    to 30%</label></div>
                  <div className="widget__items_control"><input id="filter_discount_31__50" type="radio" name="lhf[d]"
                                                                value="31,50"/><label className="item__label"
                                                                                      htmlFor="filter_discount_31__50">30
                    - 50%</label></div>
                  <div className="widget__items_control"><input id="filter_discount_51__100" type="radio"
                                                                name="lhf[d]" value="51,100"/><label
                    className="item__label" htmlFor="filter_discount_51__100">From 50% and above</label></div>
                </div>
              </div>
            </div>
            <div className="form_button_outer form_button_stick" style={{height: '42px', opacity: 1}}>
              <div className="form_button_inner" style={{width: '260px'}}>
                <button type="reset">Reset filters</button>
                <a className="mobile_button_show" data-loop-mobile-filters-show="">Show <span
                  data-loop-result-count="">26</span> products</a></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Filter;
