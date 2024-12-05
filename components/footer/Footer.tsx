import React from 'react';
import Link from "next/link";
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="footer-desktop site-footer">
      <div className="top_footer">
        <div className="container col-full">
          <div className="desktop">
            <div className="block_links">
              <div className="footer_links menu-1 footer_logo">
                <Link href="/">
                  <Image src="https://rc.israelcart.com/wp-content/uploads/2023/03/logo-pc.svg" width={146} height={32}
                         alt="Logo"/>
                </Link>

                <ul id="menu-support" className="menu">
                  <li id="menu-item-16661"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16661"><a
                    href="https://rc.israelcart.com/terms-and-conditions/"
                  >Terms and Conditions</a></li>
                  <li id="menu-item-16707"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-16707">
                    <a rel="privacy-policy" href="https://rc.israelcart.com/privacy-policy/"
                    >Privacy Policy</a></li>
                  <li id="menu-item-16712"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16712"><a
                    href="https://rc.israelcart.com/return-policy/">Return
                    Policy</a></li>
                  <li id="menu-item-16713"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16713"><a
                    href="https://rc.israelcart.com/shipping-policy/">Shipping
                    policy</a></li>
                </ul>
                <ul className="social">
                  <li>
                    <a href="https://www.facebook.com/israelcart.online" target="_blank" rel="nofollow,noopener"
                    >
                      <i className="lh-icon-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/israel_cart/" target="_blank" rel="nofollow,noopener"
                    >
                      <i className="lh-icon-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/israelcartshop/" target="_blank" rel="nofollow,noopener"
                    >
                      <i className="lh-icon-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer_links menu-2">
                <div className="footer-title collapse">
                  Extras
                </div>

                <ul id="menu-extras" className="">
                  <li id="menu-item-60393"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-60393"><a
                    href="https://rc.israelcart.com/wholesale/"
                  >Wholesale</a></li>
                  <li id="menu-item-60395"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-60395"><a
                    href="https://rc.israelcart.com/about-us/">About
                    us</a></li>
                  <li id="menu-item-60394"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-60394"><a
                    href="https://rc.israelcart.com/blog/">Blog</a>
                  </li>
                  <li id="menu-item-17545"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17545"><a
                    href="https://rc.israelcart.com/faq/">FAQ</a></li>
                </ul>
              </div>

              <div className="footer_links menu-3">
                <div className="footer-title">
                  Contact Us
                </div>

                <ul>
                  <li className="contact_phone">
                    <b>USA: </b>
                    <a href="tel:+1(970) 4595 551">
                      +1(970) 4595 551 </a>
                  </li>
                  <li className="contact_phone">
                    <b>IL: </b>
                    <a href="tel:+972 (76) 599 6363">
                      +972 (76) 599 6363 </a>
                  </li>

                  <li className="contact_work_days">
                    Sunday – Thursday
                  </li>
                  <li className="contact_work_days">
                    10:00 AM – 7:00 PM (Israel Time)
                  </li>

                  <li className="contact_email">
                    <a href="mailto:support@israelcart.com">
                      support@israelcart.com </a>
                  </li>
                </ul>

                <div className="klaviyo-subscribe-form-mobile">

                  <div data-js-klaviyo-subscribe-form-item="">
                    <div className="klaviyo-subscribe-form" data-js-klaviyo-subscribe-wrapper="">
                      <div className="klaviyo-form--content">
                        <div className="klaviyo-form--image">
                          <Image width="80"
                                 height={80}
                                 src="https://rc.israelcart.com/wp-content/themes/levhaolam-israelcart/dist/images/klaviyo-banner/email-heart.png"
                                 alt="Letter"/>
                        </div>
                        <div className="klaviyo-form--text">
                          Subscribe to our newsletter:
                          <ul>
                            <li>Learn about Israel</li>
                            <li>Discover new items</li>
                            <li>Get updates</li>
                          </ul>
                        </div>
                      </div>
                      <form data-js-klaviyo-subscribe-form="" action="#" className="klaviyo-form"
                            data-js-location="Footer">
                        <div className="klaviyo-form--input-wrapper">
                          <input data-js-klaviyo-subscribe-name="" className="klaviyo-form--input" type="text"
                                 name="klaviyo-name" placeholder="Your name"/>
                          <div className="klaviyo-form--input-error">
                            Please enter your name
                          </div>
                        </div>
                        <div className="klaviyo-form--input-wrapper">
                          <input data-js-klaviyo-subscribe-email="" className="klaviyo-form--input" type="text"
                                 name="klaviyo-email" placeholder="Your e-mail"/>
                          <div className="klaviyo-form--input-error">
                            Please enter a valid email
                          </div>
                        </div>
                        <button className="klaviyo-form--submit ripple">
                <span className="klaviyo-form--submit-text">
                    Subscribe
                <span className="klaviyo-form--loader"><i className="lh-icon-spinner-regular lh-spin"></i></span>
                </span>
                        </button>
                      </form>
                    </div>
                    <div className="klaviyo-subscribe-form klaviyo-subscribe--success"
                         data-js-klaviyo-subscribe-success="">
                      Success! <br/> You are now subscribed to our newsletter
                    </div>
                  </div>
                </div>

              </div>

              <div className="footer_links menu-4">
                <div className="content">
                  <div className="left">
                    <Image width={72} height={73} src="https://rc.israelcart.com/wp-content/uploads/2023/02/logo-2.svg"
                           alt="Global information logo"/>
                  </div>

                  <div className="right">
                    <div className="title">
                      IL Shop ltd.
                    </div>

                    <div className="item">
                      Luleem Business Center, Kfar Etzion 9091200, Israel
                    </div>
                    <div className="item">
                      Israeli Company Number: 516564515
                    </div>
                  </div>

                </div>

                <Image className="payments-desktop image-loaded"
                       width={300}
                       height={18}
                       src="https://rc.israelcart.com/wp-content/webp-express/webp-images/themes/levhaolam-israelcart/dist/images/payments-desctop.png.webp"
                       alt="Payment methods"/>
                <Image className="payments-mobile"
                       width={353}
                       height={27}
                       src="https://rc.israelcart.com/wp-content/themes/levhaolam-israelcart/dist/images/payments-mobile.png"
                       alt="Payment methods"/>
              </div>

              <div className="footer_links menu-5">
                <Image
                  width={40}
                  height={40}
                  src="https://rc.israelcart.com/wp-content/themes/levhaolam-israelcart/dist/images/secure-payment.svg"
                  alt="Secure payment"/>
                Secure payment
              </div>

              <div className="footer_links menu-6">
                <ul id="menu-support-1" className="menu">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16661"><a
                    href="https://rc.israelcart.com/terms-and-conditions/"
                  >Terms and Conditions</a></li>
                  <li
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-16707">
                    <a rel="privacy-policy" href="https://rc.israelcart.com/privacy-policy/"
                    >Privacy Policy</a></li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16712"><a
                    href="https://rc.israelcart.com/return-policy/">Return
                    Policy</a></li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16713"><a
                    href="https://rc.israelcart.com/shipping-policy/">Shipping
                    policy</a></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="col-full klaviyo-subscribe-form-desktop">

        <div data-js-klaviyo-subscribe-form-item="">
          <div className="klaviyo-subscribe-form" data-js-klaviyo-subscribe-wrapper="">
            <div className="klaviyo-form--content">
              <div className="klaviyo-form--image">
                <Image width="80"
                       height={80}
                       src="https://rc.israelcart.com/wp-content/themes/levhaolam-israelcart/dist/images/klaviyo-banner/email-heart.png"
                       alt="Letter"/>
              </div>
              <div className="klaviyo-form--text">
                Subscribe to our newsletter:
                <ul>
                  <li>Learn about Israel</li>
                  <li>Discover new items</li>
                  <li>Get updates</li>
                </ul>
              </div>
            </div>
            <form data-js-klaviyo-subscribe-form="" action="#" className="klaviyo-form" data-js-location="Footer">
              <div className="klaviyo-form--input-wrapper">
                <input data-js-klaviyo-subscribe-name="" className="klaviyo-form--input" type="text" name="klaviyo-name"
                       placeholder="Your name"/>
                <div className="klaviyo-form--input-error">
                  Please enter your name
                </div>
              </div>
              <div className="klaviyo-form--input-wrapper">
                <input data-js-klaviyo-subscribe-email="" className="klaviyo-form--input" type="text"
                       name="klaviyo-email" placeholder="Your e-mail"/>
                <div className="klaviyo-form--input-error">
                  Please enter a valid email
                </div>
              </div>
              <button className="klaviyo-form--submit ripple">
                <span className="klaviyo-form--submit-text">
                    Subscribe
                <span className="klaviyo-form--loader"><i className="lh-icon-spinner-regular lh-spin"></i></span>
                </span>
              </button>
            </form>
          </div>
          <div className="klaviyo-subscribe-form klaviyo-subscribe--success" data-js-klaviyo-subscribe-success="">
            Success! <br/> You are now subscribed to our newsletter
          </div>
        </div>
      </div>
      <div className="under_footer">
        © 2024 IL Shop ltd. All rights reserved.
      </div>
    </footer>
  );
}
