import React from 'react';

export default function Breadcrumbs() {
  return (
    <div className="lh_breadcrumb">
      <nav className="woocommerce-breadcrumb"><a href="https://rc.israelcart.com" 
      >Main Page</a><span
        className="separator">–</span><a href="https://rc.israelcart.com/product-category/food-products/"
                                         >Food Products</a><span
        className="separator">–</span><a href="https://rc.israelcart.com/product-category/food-products/olive-oil/"
                                         >Olive Oil</a><span
        className="separator">–</span><span>HaTzav Superior Olive Oil, 2 liters</span></nav>
    </div>
  );
}
