import React from 'react';
import Image from "next/image";

export default function Hero() {
  return (
    <div id="lh_banner-on_main_page_main_banner" className="lh_banner">
      <div className="col-full">
        <div id="lh_banner-on_main_page_main_banner-1" className="lh_banner on_main_page_main_banner"
             data-dot="<button>Israel Cart</button>">

          <div className="lh-banner-220323">
            <Image
              width={411}
              height={450}
                 src="https://rc.israelcart.com/wp-content/webp-express/webp-images/uploads/2023/03/d_left.png.webp"
                 alt="alt"
                 className="lh-banner-220323__img lh-banner-220323__img-l lh-banner-220323--desktop image-loaded"/>
            <Image data-js-images-lazy-load=""
                   width={403}
                   height={450}
                 src="https://rc.israelcart.com/wp-content/webp-express/webp-images/uploads/2023/03/d_right.png.webp"
                 alt="alt"
                 className="lh-banner-220323__img lh-banner-220323__img-r lh-banner-220323--desktop image-loaded"/>
            <div className="lh-banner-220323__inner">
              <div className="lh-banner-220323__title lh-banner-220323--pos">
                Shop Israeli<br/> Products
              </div>
              <div className="lh-banner-220323__title-2 lh-banner-220323--pos">
                Browse the selection<br/> of authentic Israeli products.<br/> 100% made in Israel
              </div>
              <div className="lh-banner-220323__title-3 lh-banner-220323--pos">
                <Image width={36} height={36} src="https://rc.israelcart.com/wp-content/uploads/2023/03/flag.svg"
                     alt="alt" className="image-loaded"/>
                <div>
                  Shipped from Israel
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
