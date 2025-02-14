import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="header_bottom">
      <div data-js-menu="menu-bottom">
        <ul className="header-bottom-menu">
          <li>
            <Link className="" href="/product-category/new-products/"><span>New Products</span></Link>
          </li>
          <li className="has_submenu">
            <Link href="/product_keywords/gifts/"><span>Gifts</span></Link>
            <div className="submenu-wrap no_image" data-submenu="submenu-2929">
              <div className="submenu-left">
                <div className="category_name"> Gifts</div>
                <div className="inner">
                  <div className="item">
                    <Link href="/product_keywords/jewish-gifts/"> Jewish Gifts </Link>
                  </div>
                  <div className="item" data-image="">
                    <Link href="/product_keywords/gifts-from-israel/"> Gifts from Israel </Link></div>
                  <div className="item" data-image="">
                    <Link href="/product_keywords/rosh-hashanah-gifts/"> Rosh Hashanah Gifts </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link href="/product-category/bestsellers/"><span>Bestsellers</span></Link>
          </li>
          <li className="has_submenu">
            <Link href="/product-category/food-products/"><span>Food Products</span></Link>
            <div className="submenu-wrap no_image" data-submenu="submenu-1237">
              <div className="submenu-left">
                <div className="category_name"> Food Products</div>
                <div className="inner">
                  <div className="item">
                    <Link href="/product-category/chocolate/"> Chocolate <span className="count"> 9 </span></Link>
                  </div>
                  <div className="item">
                    <Link href="/product-category/coffee"> Coffee <span className="count"> 4 </span></Link>
                  </div>
                  <div className="item">
                    <Link href="/product-category/food-products/cookies/"> Cookies <span
                    className="count"> 22 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/food-products/cooking-mixture/"> Cooking
                    Mixture <span className="count"> 9 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/food-products/dates/"> Dates <span
                    className="count"> 9 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/food-products/granola/"> Granola <span
                    className="count"> 2 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/food-products/halva/"> Halva <span
                    className="count"> 8 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/food-products/honey/"> Honey <span
                    className="count"> 7 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/food-products/jams/"> Jams <span
                    className="count"> 1 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/food-products/olive-oil/"> Olive
                    Oil <span className="count"> 5 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/food-products/olives/"> Olives <span
                    className="count"> 3 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/food-products/salty-spreads/"> Salty
                    Spreads <span className="count"> 4 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/food-products/sauces/"> Sauces <span
                    className="count"> 3 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/food-products/snacks/"> Snacks <span
                    className="count"> 37 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/food-products/spices/"> Spices <span
                    className="count"> 37 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/food-products/supplements/"> Supplements <span
                    className="count"> 3 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/food-products/tahini/"> Tahini <span
                    className="count"> 5 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/food-products/tea/"> Tea <span
                    className="count"> 25 </span></Link></div>
                </div>
              </div>
            </div>
          </li>
          <li className="has_submenu" data-image="">
            <Link
                                                       href="/product-category/judaica/"><span>Judaica</span></Link>
            <div className="submenu-wrap no_image" data-submenu="submenu-1208">
              <div className="submenu-left">
                <div className="category_name"> Judaica</div>
                <div className="inner">
                  <div className="item" data-image=""><Link
                    href="/product-category/judaica/candle-sticks/"> Candle
                    Sticks <span className="count"> 14 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/judaica/candles/"> Candles <span
                    className="count"> 1 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/judaica/challah-boards/"> Challah
                    Boards <span className="count"> 5 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/judaica/challah-covers/"> Challah
                    Covers <span className="count"> 9 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/judaica/dreidels/"> Dreidels <span
                    className="count"> 2 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/judaica/havdalah-sets/"> Havdalah
                    Sets <span className="count"> 2 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/judaica/home-blessings/"> Home
                    Blessings <span className="count"> 13 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/judaica/kiddush-cups/"> Kiddush
                    Cups <span className="count"> 16 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/judaica/kippah-yarmullke/"> Kippah /
                    Yarmullke <span className="count"> 15 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/judaica/matzah-covers/"> Matzah
                    Covers <span className="count"> 7 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/judaica/menorah/"> Menorah <span
                    className="count"> 8 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/judaica/mezuzah/"> Mezuzah <span
                    className="count"> 8 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/judaica/netilat-yadayim-cups/"> Netilat
                    Yadayim Cups <span className="count"> 7 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/judaica/shofars/"> Shofars <span
                    className="count"> 13 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/judaica/tallits/"> Tallits <span
                    className="count"> 5 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/judaica/tambourines/"> Tambourines <span
                    className="count"> 3 </span></Link></div>
                </div>
              </div>
            </div>
          </li>
          <li className="has_submenu" data-image=""><Link className=""
                                                       href="/product-category/cosmetics/"><span>Cosmetics</span></Link>
            <div className="submenu-wrap no_image" data-submenu="submenu-1213">
              <div className="submenu-left">
                <div className="category_name"> Cosmetics</div>
                <div className="inner">
                  <div className="item" data-image=""><Link
                    href="/product-category/cosmetics/bath-body/"> Bath &amp; Body <span
                    className="count"> 40 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/cosmetics/essential-oils/"> Essential
                    Oils <span className="count"> 14 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/cosmetics/face-masks/"> Face Masks <span
                    className="count"> 1 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/cosmetics/foot-creams/"> Foot
                    Creams <span className="count"> 1 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/cosmetics/hand-creams/"> Hand
                    Creams <span className="count"> 1 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/cosmetics/kits/"> Kits <span
                    className="count"> 13 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/cosmetics/make-up/"> Make up <span
                    className="count"> 14 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/cosmetics/ointments-and-balms/"> Ointments
                    and Balms <span className="count"> 18 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/cosmetics/perfumes/"> Perfumes <span
                    className="count"> 11 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/cosmetics/shampoo/"> Shampoo <span
                    className="count"> 25 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/cosmetics/skin-care/"> Skin Care <span
                    className="count"> 59 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/cosmetics/skin-protections/"> Skin
                    Protections <span className="count"> 1 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/cosmetics/soaps/"> Soaps <span
                    className="count"> 33 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/cosmetics/toothpaste/"> Toothpastes <span
                    className="count"> 4 </span></Link></div>
                </div>
              </div>
            </div>
          </li>
          <li className="has_submenu"
              data-image="https://rc.israelcart.com/wp-content/uploads/2023/04/Menu.jpg"><Link className=""
                                                                                            href="/product-category/jewelry/"><span>Jewelry</span></Link>
            <div className="submenu-wrap image" data-submenu="submenu-1255">
              <div className="submenu-left">
                <div className="category_name"> Jewelry</div>
                <div className="inner">
                  <div className="item" data-image=""><Link
                    href="/product-category/jewelry/bracelets/"> Bracelets <span
                    className="count"> 12 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/jewelry/brooch/"> Brooch <span
                    className="count"> 13 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/jewelry/charms/"> Charms <span
                    className="count"> 20 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/jewelry/earrings/"> Earrings <span
                    className="count"> 22 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/jewelry/headress-and-jewelry-sets/"> Headress
                    and Jewelry Sets <span className="count"> 1 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/jewelry/necklaces/"> Necklaces <span
                    className="count"> 34 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/jewelry/rings/"> Rings <span
                    className="count"> 10 </span></Link></div>
                </div>
              </div>
              <Link href="https://rc.israelcart.com/product-tag/new-sleek-and-modern-jewelry-by-danon/"
                 className="submenu-right"><Image
                width={368}
                height={294}
                alt={'Menu'}
                src="https://rc.israelcart.com/wp-content/uploads/2023/04/Menu.jpg"/></Link></div>
          </li>
          <li className="has_submenu" data-image=""><Link className=""
                                                       href="/product-category/home/"><span>Home</span></Link>
            <div className="submenu-wrap no_image" data-submenu="submenu-1220">
              <div className="submenu-left">
                <div className="category_name"> Home</div>
                <div className="inner">
                  <div className="item" data-image=""><Link
                    href="/product-category/home/accessories/"> Accessories <span
                    className="count"> 5 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/home/apron/"> Apron <span
                    className="count"> 5 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/home/candles-home-fragrance/"> Candles &amp; Home
                    Fragrance <span className="count"> 45 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/home/home-decor/"> Home Decor <span
                    className="count"> 7 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/home/honey-dishes/"> Honey dishes <span
                    className="count"> 5 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/home/kitchenware/"> Kitchenware <span
                    className="count"> 21 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/home/oren-cohen-framed-photos/"> Oren
                    Cohen Framed Photos <span className="count"> 5 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/home/pillowcases/"> Pillowcases <span
                    className="count"> 2 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/home/pottery/"> Pottery <span
                    className="count"> 47 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/home/soap-dishes/"> Soap Dishes <span
                    className="count"> 9 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/home/souvenirs-from-israel/"> Souvenirs
                    From Israel <span className="count"> 37 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/home/t-shirts/"> T-Shirts <span
                    className="count"> 11 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/home/table-decoration/"> Table
                    Decoration <span className="count"> 30 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/home/towels/"> Towels <span
                    className="count"> 5 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/home/toys/"> Toys <span
                    className="count"> 34 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/home/wall-art/"> Wall Art <span
                    className="count"> 46 </span></Link></div>
                </div>
              </div>
            </div>
          </li>
          <li className="has_submenu" data-image=""><Link className=""
                                                       href="/product-category/books"><span>Books</span></Link>
            <div className="submenu-wrap no_image" data-submenu="submenu-1302">
              <div className="submenu-left">
                <div className="category_name"> Books</div>
                <div className="inner">
                  <div className="item" data-image=""><Link
                    href="/product-category/bible-interpretation/"> Bible
                    Interpretation <span className="count"> 19 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/biographies/"> Biographies <span
                    className="count"> 3 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/cookbooks/"> Cookbooks <span
                    className="count"> 2 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/educational-books/"> Educational
                    Books <span className="count"> 2 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/holiday-books/"> Holiday
                    Books <span className="count"> 15 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/holy-books/"> Holy Books <span
                    className="count"> 12 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/idf-terror-related/"> IDF/Terror
                    Related <span className="count"> 7 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/israel/"> Israel <span
                    className="count"> 10 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/israeli-jewish-history/"> Israeli &amp; Jewish
                    History <span className="count"> 12 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/jewish-identity/"> Jewish
                    Identity <span className="count"> 3 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/kids-books/"> Kids Books <span
                    className="count"> 6 </span></Link></div>
                  <div className="item" data-image=""><Link
                    href="/product-category/prayer-books/"> Prayer Books <span
                    className="count"> 10 </span></Link></div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
