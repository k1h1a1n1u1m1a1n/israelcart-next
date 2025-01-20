import {FC} from 'react'
import useCheckout from "@/hooks/useCheckout";
import Image from "next/image";
import ContentLoader from "react-content-loader";


const ShippingStep: FC = () => {
  const {shippingMethods, isShippingLoading, selectShippingMethod} = useCheckout();
  const {changeStep} = useCheckout();

  return (
    <div>
      <div className="checkout-title">
        Shipping
      </div>

      <ContactShortInfo/>

      <div className="checkout__shipping__form">
        <div className="form__title">
          Shipping method
        </div>
        <div className="checkout__shipping__banner">
          <Image
            width={36}
            height={21}
            src="https://rc.israelcart.com/wp-content/themes/levhaolam-israelcart/dist/images/shipping-logo.svg"
            alt=""/>
          <span>Shipping directly from Israel</span>
        </div>
        {!isShippingLoading ? (
          <div>
            {!shippingMethods.length && <h4>No shipping methods</h4>}
            {shippingMethods.map((method) => (
              <div key={method.id}
                   onClick={() => selectShippingMethod(method.id)}
                     className={`checkout__shipping__method checkout__box ${method.isSelected ? 'selected' : ''}`}>
                <div className="shipping__method__label">
                  <span>{method.name}</span>
                  <div className="checkmark"></div>
                </div>
                <div className="shipping__method__price">
                  <div className="price">
                    <span className="woocommerce-Price-amount amount">
                      <bdi><span className="woocommerce-Price-currencySymbol">$</span>{method.price}</bdi>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (<ShippingMethodsSkeleton/>)}
      </div>
      <div className="checkout__buttons">
        <button type="button" className="checkout__return" onClick={() => changeStep('contact')}>
          <i className="lh-icon-angle-left-solid"></i>
          Return to information
        </button>
        <button type="button" data-js-trigger-step="payment" className="checkout__continue ripple">
          Continue to Payment
        </button>
      </div>
    </div>
  );
};

const ContactShortInfo: FC = () => {
  const {changeStep, contactInfo} = useCheckout();
  const {address, state, city, country, postcode} = contactInfo.shipping;

  return (
    <div className="checkout__short-info checkout__box">
      <div className="short-info__item">
        <div className="short-info__name">
          <span>Contact</span>
          <div className="short-info__value">
            {contactInfo.shipping.email}
          </div>
        </div>
        <div className="short-info__change" onClick={() => changeStep('contact')}>
          Change
        </div>
      </div>
      <div className="short-info__item">
        <div className="short-info__name">
          <span>Ship to</span>
          <div className="short-info__value">
            {`${address}, ${typeof state !== "string" && state?.label || state}, ${city}, ${country?.label}, ${postcode}`}
          </div>
        </div>
        <div className="short-info__change" onClick={() => changeStep('contact')}>
          Change
        </div>
      </div>

    </div>

  );
}

const ShippingMethodsSkeleton: FC = () => {
  const methodsCount = 2;
  return (

    <>
      {[...Array(methodsCount)].map((_, index) => (
        <ContentLoader
          key={index}
          speed={2}
          width="100%"
          height={68}
          viewBox="0 0 100% 68"
          backgroundColor="#ebebeb"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" width="100%" height="68" rx="8" ry="8"/>
        </ContentLoader>
      ))}
    </>

  )
}


export default ShippingStep;
