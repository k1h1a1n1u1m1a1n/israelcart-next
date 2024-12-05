import React from 'react';
import Logo from "@/components/header/Logo";
import TopMenu from "@/components/header/TopMenu";
import Search from "@/components/header/Search";
import Navigation from "@/components/header/Navigation";

export default function Header() {
  return (
    <header className="header-main">
      <div className="header-desktop">
        <div className="header__wrap">
          <div className="container col-full">
            <div className="header__content">
              <div className="header__top">
                <Logo />

                <div className="header__right">
                  <TopMenu/>

                  <div className="header__middle">
                    <Search/>

                    <div className="mini_cart_wrap">
                      <div className="widget_shopping_cart_content">
                        <div className="header-mini_cart">
                          <div className="your-cart mini-cart__trigger empty" data-js-check-empty-cart=""
                               data-js-open-mini-cart="">
                            <div className="tooltip">Your cart</div>
                            <div className="mini_cart__icons">
                              <i className="mini-cart-icon"></i>
                            </div>

                            <div className="mini_cart__count">
                            </div>

                            <div className="info">
                              <div className="text-1">
                                Cart
                              </div>
                              <div className="text-2">
                                items
                              </div>
                            </div>
                          </div>
                          <div className="mini-cart__wrapper" data-js-mini-cart-wrapper="">
                            <div className="mini-cart">
                              <div data-js-cart-loader="" className="global-loader absolute"><span
                                className="loader"></span></div>
                              <div className="woocommerce-mini-cart">
                                <div className="mini-cart__title">
                                  Shopping cart <div className="mini-cart__close" data-js-close-mini-cart="">
                                  <i className="lh-icon-times-light"></i>
                                </div>
                                </div>
                                <p className="mini-cart__empty-message">
                                  No products in the cart. </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Navigation/>
            </div>
          </div>
        </div>
      </div>

      <div className="header-mobile">
        <div className="header__wrap">
          <div className="container col-full">
            <div className="header__content">
              <div className="header__top">
                <button data-mobile-menu="open" aria-label="Open Menu" id="header__mobile_menu"
                        className="header__mobile_menu"></button>
                <Logo/>

                <div className="mini_cart_wrap">
                  <div className="widget_shopping_cart_content">
                    <div className="header-mini_cart">
                      <div className="your-cart mini-cart__trigger empty" data-js-check-empty-cart=""
                           data-js-open-mini-cart="">
                        <div className="tooltip">Your cart</div>
                        <div className="mini_cart__icons">
                          <i className="mini-cart-icon"></i>
                        </div>

                        <div className="mini_cart__count">
                        </div>

                        <div className="info">
                          <div className="text-1">
                            Cart
                          </div>
                          <div className="text-2">
                            items
                          </div>
                        </div>
                      </div>
                      <div className="mini-cart__wrapper" data-js-mini-cart-wrapper="">
                        <div className="mini-cart">
                          <div data-js-cart-loader="" className="global-loader absolute"><span
                            className="loader"></span></div>
                          <div className="woocommerce-mini-cart">
                            <div className="mini-cart__title">
                              Shopping cart <div className="mini-cart__close" data-js-close-mini-cart="">
                              <i className="lh-icon-times-light"></i>
                            </div>
                            </div>
                            <p className="mini-cart__empty-message">
                              No products in the cart. </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main_menu">
                <div data-js-menu="menu-bottom">
                  <Navigation/>
                </div>
              </div>
              <Search/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
