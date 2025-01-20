'use client'

import React, {FC, useEffect, useState} from 'react'
import useCart, {ICartItem} from "@/hooks/useCart";
import Link from "next/link";
import Image from "next/image";

const Cart: FC = () => {
  const {openCart, closeCart, items, userItems, isSyncing} = useCart();

  return (
    <div className="mini_cart_wrap">
      <div className="widget_shopping_cart_content">
        <div className="header-mini_cart">
          <div className={'your-cart mini-cart__trigger ' + (userItems.length ? 'no_empty' : 'empty')}
               onClick={openCart}>
            <div className="tooltip">Your cart</div>
            <div className="mini_cart__icons">
              <i className="mini-cart-icon"></i>
            </div>

            {items.length && (
              <div className="mini_cart__count">
                {items.length}
              </div>
            )}

            <div className="info">
              <div className="text-1">
                Cart
              </div>
              <div className="text-2">
                items
              </div>
            </div>
          </div>
          <div className="mini-cart__wrapper" onClick={closeCart}>
            <div className="mini-cart" onClick={event => event.stopPropagation()}>

              <div className={'global-loader absolute' + (isSyncing ? ' active' : '')}>
                <span className="loader"></span>
              </div>

              <div className="woocommerce-mini-cart">
                <div className="mini-cart__title">
                  Shopping cart <div className="mini-cart__close" onClick={closeCart}>
                  <i className="lh-icon-times-light"></i>
                </div>
                </div>
                {
                  items.length ? <CartContent/> : (
                    <p className="mini-cart__empty-message">No products in the cart. </p>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CartContent = () => {
  const {items, subtotal, recommendedProducts, closeCart, addItem} = useCart();

  return (
    <>
      <ul className="mini-cart__items thin-scrollbar">
        {items.map(item => (
          <CartItem key={item.id} item={item}/>
        ))}
      </ul>
      <div className="mini-cart__footer">
        <div className="cart-subtotal">
          <strong>Subtotal:</strong>
          <div className="subtotal__price">
            <div className="subtotal__price__main ">
              <span className="woocommerce-Price-currencySymbol">$</span>
              <span className="price_amount">{subtotal}</span>
            </div>
          </div>
        </div>
        <div className="mini-cart__buttons">
          <Link href="/checkout" onClick={closeCart} className="button mini-cart__checkout-button ripple">
            Continue to Checkout</Link>
        </div>
      </div>

      <div className="cart-recommended" data-mini-cart-list-recommended="">
        <div className="cart-recommended__title">
          You may also like
        </div>

        {recommendedProducts.map(product => (
          <div key={product.id} className="recommended-item">
            <div className="product type-product post-17912">
              <Link href={`/product/${product.slug}`} onClick={closeCart} className="product__image">
                <Image src={product.image} width={150} height={150} alt={product.title}/>
              </Link>
              <div className="product__content">
                <div className="product__title">
                  <Link href={`/product/${product.slug}`} className="item__title" onClick={closeCart}>
                    {product.title}
                  </Link>
                </div>
                <div className="product__footer">
                  <div className="product__price cart-product-price">
                    <div className="regular_price">
                      <span className="woocommerce-Price-currencySymbol">$</span>
                      <span className="price_amount">{product.price}</span></div>
                  </div>
                  <div className="item__action_wrap">
                    <div className="product__add_to_cart">
                      <div className="product_wrap product_simple in_stock">
                        <div className="button_default button_add"
                             onClick={() => addItem({id: product.id, quantity: 1})}>
                          <span className="label">Add to cart</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

const CartItem: FC<{ item: ICartItem }> = ({item}) => {
  const {removeItem, closeCart, updateQuantity, items} = useCart();
  const [quantity, setQuantity] = useState(item.quantity);

  useEffect(() => {
    setQuantity(item.quantity);
  }, [items]);

  const onQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
    updateQuantity(item.id, newQuantity);
  }

  return (
    <div className="cart-item mini_cart_item">
      <Link href={`/product/${item.slug}`} className="cart-item__image" onClick={closeCart}>
        <Image
          src={item.image}
          width={95 * 2}
          height={95 * 2}
          alt={item.name}/>
        <ul className="product_icon">
        </ul>
      </Link>
      <div className="cart-item__info">
        <div className="cart-item__title">
          <Link href={`/product/${item.slug}`} onClick={closeCart}>
            {item.name}
          </Link>
          <span className="cart-item__remove" onClick={() => removeItem(item.id)}>
            <i className="lh-icon-times-light"></i>
          </span>
        </div>
        <div className="cart-item__details">
          <div className="product-quantity">
            <div className="quantity-wrap ">
              <div
                className="product__qty_for_cart quantity-dropdown-show product__is_allow_to_order product__is_in_stock">
                <div>
                  <div className="qty">
                    <span onClick={() => onQuantityChange(Math.max(quantity - 1, 1))}>
                      <i className="lh-icon-angle-left-light"></i>
                    </span>
                    <input type="number" min="0" value={quantity} max="41"/>
                    <span onClick={() => onQuantityChange(quantity + 1)}>
                      <i className="lh-icon-angle-right-light"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-item__price cart-product-price">
            <div className="regular_price">
              <span className="woocommerce-Price-currencySymbol">$</span>
              <span className="price_amount">{item.total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Cart;
