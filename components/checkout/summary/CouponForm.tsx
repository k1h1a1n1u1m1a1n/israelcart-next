import {memo, useState} from 'react'
import useCheckout from "@/hooks/useCheckout";

const CouponForm = () => {
  const applyCoupon = useCheckout(state => state.applyCoupon);
  const [couponFormValue, setCouponFormValue] = useState('');
  return (
    <div className="checkout-coupon">
      <form onSubmit={(event) => {
        event.preventDefault();
        applyCoupon(couponFormValue);
      }}>
        <div className="coupon__wrapper">
          <input type="text"
                 value={couponFormValue}
                 onChange={(e) => setCouponFormValue(e.target.value)}
                 className="coupon__input"
                 placeholder="Apply a discount code"
                 autoComplete="off"
          />
          <button className="coupon__button">
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};

export default memo(CouponForm);
