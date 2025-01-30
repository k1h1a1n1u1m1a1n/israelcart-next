import {create} from "zustand";
import {persist} from "zustand/middleware";
import useCart from "@/hooks/useCart";

type CheckoutStore = {
  isCalculating: boolean;
  activeStep: 'contact' | 'shipping' | 'payment';
  contactInfo: {
    shipping: {
      email: string;
      firstName: string;
      lastName: string;
      address: string;
      city: string;
      country: { label: string, value: string };
      state: { label: string, value: string } | string;
      postcode: string;
      phone: string;
      terms: boolean;
    },
    billing: {
      address: string;
      city: string;
      country: string;
      state: string;
      postcode: string;
    },
  },
  shippingMethods: ShippingMethod[],
  totals: {
    subtotal: number;
    discount: number;
    shipping: number;
    total: number;
  },
  coupon: {
    code: string;
    discount: number;
  },
  isShippingLoading: boolean;
  isCouponLoading: boolean;

  setContactShippingInfo: (contactInfo: CheckoutStore['contactInfo']['shipping']) => void;
  calculateCheckout: () => void;
  changeStep: (step: CheckoutStore['activeStep']) => void;
  loadShippingMethods: () => void;
  applyCoupon: (coupon: string) => void;
  removeCoupon: () => void;
  selectShippingMethod: (id: string) => void;
}

type ShippingMethod = {
  id: string;
  name: string;
  price: number;
  isSelected: boolean;
}

const useCheckout = create<CheckoutStore>()(
  persist(
    (set) => ({
      isCalculating: false,
      activeStep: 'contact',
      contactInfo: {
        shipping: {
          email: '',
          firstName: '',
          lastName: '',
          address: '',
          city: '',
          country: {label: '', value: ''},
          state: '',
          postcode: '',
          phone: '',
          terms: false,
        },
        billing: {
          address: '',
          city: '',
          country: '',
          state: '',
          postcode: '',
        },
      },
      shippingMethods: [],
      totals: {
        subtotal: 0,
        discount: 0,
        shipping: 0,
        total: 0,
      },
      coupon: {
        code: '',
        discount: 0,
      },

      isShippingLoading: false,
      isCouponLoading: false,

      setContactShippingInfo: (contactInfo) => set((state) => ({
        contactInfo: {
          ...state.contactInfo,
          shipping: contactInfo,
        },
      })),

      calculateCheckout: async () => {
        set({isCalculating: true});
        const selectedShipping = useCheckout.getState().shippingMethods.find((method) => method.isSelected);
        const data = {
          ...useCheckout.getState().contactInfo,
          coupon: useCheckout.getState().coupon.code,
          selectedShippingId: selectedShipping?.id,
          cart: useCart.getState().userItems,
        };

        const response = await fetch('https://rc.israelcart.com/wp-json/next/calculate-checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const {totals, coupon} = await response.json();

        set({isCalculating: false, totals, coupon});
      },

      changeStep: (step) => set({activeStep: step}),

      loadShippingMethods: async () => {
        set({shippingMethods: [], isShippingLoading: true});

        const response = await fetch('https://rc.israelcart.com/wp-json/next/get-shipping-methods', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            cart: useCart.getState().userItems,
            ...useCheckout.getState().contactInfo,
            coupon: useCheckout.getState().coupon.code
          }),
        });
        const data: ShippingMethod[] = await response.json();
        set({shippingMethods: data, isShippingLoading: false});
        if (data.length) {
          useCheckout.getState().selectShippingMethod(data[0].id)
        }
      },
      selectShippingMethod: (id: string) => {
        set((state) => ({
          shippingMethods: state.shippingMethods.map((method) => ({
            ...method,
            isSelected: method.id === id,
          })),
        }));

        useCheckout.getState().calculateCheckout();
      },
      applyCoupon: async (coupon: string) => {
        if (!coupon) return;
        set({isCalculating: false, coupon: {code: coupon, discount: 0}});

        useCheckout.getState().calculateCheckout();
      },
      removeCoupon: async () => {
        set({isCalculating: false, coupon: {code: '', discount: 0}});
        useCheckout.getState().calculateCheckout();
      },
    }),
    {
      name: 'checkout',
      partialize: (state) => ({contactInfo: state.contactInfo}),
    }
  )
);

export default useCheckout;
