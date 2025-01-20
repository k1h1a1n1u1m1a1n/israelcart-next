'use client';
import {FC} from 'react'
import Breadcrumbs from "@/components/checkout/Breadcrumbs";
import './checkout.scss'
import ContactInfoStep from "@/components/checkout/steps/ContactInfoStep";
import Summary from "@/components/checkout/Summary";
import useCheckout from "@/hooks/useCheckout";
import ShippingStep from "@/components/checkout/steps/ShippingStep";


const CheckoutPage: FC = () => {
  const {activeStep} = useCheckout();
  return (
    <div className="col-full">
      <div className="checkout-wrapper">
        <div className="checkout__column checkout__column-form">
          <div className="checkout__column__content">

            <div>
              <Breadcrumbs/>
              {activeStep === 'contact' && <ContactInfoStep/>}
              {activeStep === 'shipping' && <ShippingStep/>}

            </div>
          </div>

        </div>
        <div className="checkout__column checkout__column-cart">
          <div className="checkout__column__content">
            <Summary/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
