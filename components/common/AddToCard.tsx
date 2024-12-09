'use client'

import React, {FC, useEffect, useState} from 'react'
import {IProductSimple} from "@/types/data";
import useCart from "@/hooks/useCart";

type Props = {
  product: IProductSimple;
  quantitySide?: 'left' | 'right';
}

const AddToCard: FC<Props> = ({product, quantitySide = 'right'}) => {
  const {isProductInCart, addItem, openCart, updateQuantity, userItems} = useCart();
  const cartItem = userItems.find((i) => i.id === product.id);
  const [quantity, setQuantity] = useState(cartItem?.quantity || 1);

  const isInCart = isProductInCart(product.id);

  useEffect(() => {
    setQuantity(cartItem?.quantity || 1);
  }, [cartItem?.quantity]);

  const handleAddToCart = () => {
    addItem({id: product.id, quantity})
  }


  const onQuantityChange = (quantity: number) => {
    setQuantity(quantity);

    if (isInCart) {
      updateQuantity(product.id, quantity);
    }
  }

  return (
    <div className={`product__add_to_cart template-qty-${quantitySide}`}>
      <div className={'product_wrap product_simple in_stock ' + (isInCart ? 'added' : '')}>
        {isInCart ? (
          <div className="button_default button_view_cart" onClick={openCart}>
            <span className="label">View cart</span>
          </div>
        ) : (
          <div className="button_default button_add" onClick={handleAddToCart}>
            <span className="label">Add to cart</span>
          </div>
        )}
        <Quantity product={product} quantity={quantity} setQuantity={onQuantityChange}/>
      </div>
    </div>
  );
};

type QuantityProps = {
  product: IProductSimple;
  quantity: number;
  setQuantity: (quantity: number) => void;
}

const Quantity: FC<QuantityProps> = ({product, quantity, setQuantity}) => {

  // const {updateQuantity, userItems} = useCart();
  // const cartItem = userItems.find((i) => i.id === product.id);
  return (
    <div className="qty">
      <span data-qty_minus onClick={() => setQuantity(Math.max(quantity - 1, 1))}>
        <i className="lh-icon-angle-left-light"></i>
      </span>
      <input type="number" min="0" defaultValue="1"
             value={quantity}
             max={product.max_add_to_card}
             data-qty_input=""
      />
      <span data-qty_plus onClick={() => setQuantity(quantity + 1)}>
        <i className="lh-icon-angle-right-light"></i>
      </span>
    </div>
  )
}

export default AddToCard;
