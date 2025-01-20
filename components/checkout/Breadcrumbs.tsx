import {FC} from 'react'
import Link from "next/link";


const Breadcrumbs: FC = () => {
  return (
    <div className="checkout-breadcrumbs">
      <Link href="/">
        <img src="https://rc.israelcart.com/wp-content/themes/levhaolam-israelcart/dist/images/logo-mobile.svg"
             alt="Israel Cart logo" className="breadcrumbs-image"/>
      </Link>
      <div className="breadcrumbs-links">
        <a href="https://rc.israelcart.com/cart/" className="breadcrumbs-item">Cart</a>
        <div className="breadcrumbs-item active" data-js-beadcrumbs="information"
             data-js-trigger-step="information">Checkout
        </div>
        <div className="breadcrumbs-item" data-js-beadcrumbs="shipping" data-js-trigger-step="shipping">Shipping
        </div>
        <div className="breadcrumbs-item" data-js-beadcrumbs="payment">Payment</div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
