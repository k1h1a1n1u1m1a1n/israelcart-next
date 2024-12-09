import React from 'react';
import Logo from "@/components/header/Logo";
import TopMenu from "@/components/header/TopMenu";
import Search from "@/components/header/Search";
import Navigation from "@/components/header/Navigation";
import Cart from "@/components/header/Cart";

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

                    <Cart/>

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

                <Cart/>
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
