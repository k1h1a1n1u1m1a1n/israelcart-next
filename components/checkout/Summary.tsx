import {FC, useEffect} from 'react'
import useCart from "@/hooks/useCart";
import Link from "next/link";
import Image from "next/image";
import useCheckout from "@/hooks/useCheckout";
import ContentLoader from "react-content-loader";
import CouponForm from "@/components/checkout/summary/CouponForm";

const Summary: FC = () => {
  const {items} = useCart();

  return (
    <div className={'checkout__column-cart__content'}>
      <div className="checkout-summary">
        <div className="summary__title display-desktop">
          Items in cart ({items.length})
        </div>

        <div className="summary__products thin-scrollbar">

          {items.map((item) => (
            <Link key={item.key} href={`/product/${item.slug}`}
                  className="summary__product">
              <div className="summary__product__image">
                <Image
                  width={150}
                  height={150}
                  src={item.image}
                  alt="Product image"/>
              </div>

              <div className="summary__product__title" data-title="Product">
                {item.name}
              </div>

              <div className="summary__product__subtotal checkout-product-price">
                <div className="regular_price"><span className="woocommerce-Price-currencySymbol">$</span>
                  <span className="price_amount">{item.subtotal}</span>
                </div>
              </div>

            </Link>
          ))}
        </div>
      </div>
      <CouponForm/>
      <Totals/>
    </div>
  );
};


const Totals: FC = () => {
  const {isCalculating, calculateCheckout, totals, shippingMethods, coupon, removeCoupon} = useCheckout();
  useEffect(() => {
    calculateCheckout();
  }, []);

  const selectedShipping = shippingMethods.find((method) => method.isSelected);

  return (
    <div className="checkout-totals">
      <div className="checkout-totals__item checkout__subtotal">
        <div className="checkout-totals__title">
          Subtotal
        </div>
        <div className="checkout-totals__price">
          {
            isCalculating ? (
              <TotalsSkeleton/>
            ) : (
              <>
                <span className="woocommerce-Price-currencySymbol">$</span>
                <span className="price_amount">{totals.subtotal}</span>
              </>
            )
          }
        </div>
      </div>
      {
        totals.discount > 0 && (
          <div className="checkout-totals__item checkout__discount">
            <div className="checkout-totals__title">
              Your discount
            </div>
            <div className="checkout-totals__price">
              {isCalculating ? (<TotalsSkeleton/>) : (
                <>
                  <span className="woocommerce-Price-currencySymbol">$</span>
                  <span className="price_amount">{totals.discount}</span>
                </>
              )}
            </div>
          </div>
        )
      }
      {
        coupon.code.length > 0 && (
          <div className="checkout-totals__item checkout__coupon-info">
            <div className="checkout-totals__title">
              Promo code <span className="coupon-code display-desktop">{coupon.code}</span>
              <i className="lh-icon-trash-light" onClick={removeCoupon}></i>
              <div className="coupon-code display-mobile">{coupon.code}</div>
            </div>
            {
              coupon.discount > 0 || isCalculating ? (
                <div className="checkout-totals__price">
                  {isCalculating ? (<TotalsSkeleton/>) : (
                    <>
                      <span className="woocommerce-Price-currencySymbol">$</span>
                      <span className="price_amount">{coupon.discount}</span>
                    </>
                  )}
                </div>
              ) : (
                <div>
                  Discount not applied
                </div>
              )
            }
          </div>
        )
      }
      <div className="checkout-totals__item checkout__shipping">
        <div className="checkout-totals__title">
          Shipping
        </div>
        <div className="checkout-totals__price">
          {isCalculating ? (<TotalsSkeleton width={140}/>) : (
            <>
              <div className="checkout-totals__label">
                {selectedShipping ? selectedShipping.name : 'Calculate in next step'}
              </div>
              {selectedShipping && (
                <>
                  <span className="woocommerce-Price-currencySymbol">$</span>
                  <span className="price_amount">{totals.shipping}</span>
                </>
              )}
            </>
          )}
        </div>
      </div>

      <div className="checkout-totals__item checkout__total">
        <div className="checkout-totals__title">
          Total price
        </div>
        <div className="checkout-totals__price">
          {isCalculating ? (<TotalsSkeleton height={20} width={110}/>) : (
            <>
              <span className="currency_code">USD</span>
              <strong>
                  <span className="woocommerce-Price-amount amount">
                    <bdi>
                      <span className="woocommerce-Price-currencySymbol">$</span>
                      {totals.total}
                    </bdi>
                  </span>
              </strong>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const TotalsSkeleton: FC<{ width?: number, height?: number }> = ({width = 80, height = 15}) => {
  return (
    <ContentLoader
      speed={2}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      style={{marginLeft: 10}}
    >
      <rect x="0" y="0" rx="0" ry="0" width={width} height={height}/>
    </ContentLoader>
  )
}

export default Summary;
