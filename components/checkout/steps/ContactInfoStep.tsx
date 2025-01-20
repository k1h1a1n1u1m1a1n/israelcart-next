// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import {FC, useEffect, useState} from 'react';
import Select from 'react-select';
import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import countriesData from '../countries.json';
import countriesStatesData from '../countries-states.json';
import useCheckout from "@/hooks/useCheckout";

interface FormValues {
  billing_email: string;
  shipping_first_name: string;
  shipping_last_name: string;
  shipping_city: string;
  shipping_postcode: string;
  billing_phone: string;
  terms: boolean;
  order_comments?: string;
  country: string;
  address: string;
  state: string | null;
}

const ContactInfoStep: FC = () => {
  const {calculateCheckout, contactInfo} = useCheckout();
  const [states, setStates] = useState([]);
  const {setContactShippingInfo, changeStep, loadShippingMethods} = useCheckout();

  useEffect(() => {
    // Set default values to react-hook-form fields
    const {shipping} = contactInfo;
    setValue('billing_email', shipping.email);
    setValue('shipping_first_name', shipping.firstName);
    setValue('shipping_last_name', shipping.lastName);
    setValue('shipping_city', shipping.city);
    setValue('shipping_postcode', shipping.postcode);
    setValue('billing_phone', shipping.phone);
    setValue('country', shipping.country);
    setValue('address', shipping.address);

    if (shipping.country.value) {
      const countryStates = countriesStatesData[contactInfo.shipping.country.value];
      const preparedStates = countryStates
        ? Object.entries(countryStates).map(([value, label]) => ({value, label}))
        : [];
      setStates(preparedStates);
    }

    setValue('state', shipping.state);
  }, [contactInfo.shipping]);

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: {errors},
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setContactShippingInfo({
      email: data.billing_email,
      firstName: data.shipping_first_name,
      lastName: data.shipping_last_name,
      address: data.address,
      city: data.shipping_city,
      country: data.country,
      state: data.state,
      postcode: data.shipping_postcode,
      phone: data.billing_phone,
    });
    calculateCheckout();
    loadShippingMethods();
    changeStep('shipping')
  };
  const countries = Object.entries(countriesData).map(([value, label]) => ({value, label}));

  return (
    <>
      <div className="checkout-title">
        Secure checkout <i className="lh-icon-lock-solid"></i>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form__title">Contact Information</div>

        <div className="form__section__fields">
          <div className="form__field">
            <input
              type="email"
              id="billing_email"
              {...register('billing_email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Email is incorrect',
                },
              })}
              className={`filled ${errors.billing_email ? 'error' : ''}`}
            />
            <label htmlFor="billing_email">E-mail</label>
            {errors.billing_email && (
              <div className="form__field__error slide-down">
                {errors.billing_email.message}
              </div>
            )}
          </div>
        </div>

        <div className="form__title">Shipping address</div>

        <div className="form__section__fields">
          <div className="form__fields__row">
            <div className="form__field">
              <input
                type="text"
                id="shipping_first_name"
                {...register('shipping_first_name', {
                  required: 'First name is required',
                })}
                className={`filled ${errors.shipping_first_name ? 'error' : ''}`}
              />
              <label htmlFor="shipping_first_name">First name</label>
              {errors.shipping_first_name && (
                <div className="form__field__error slide-down">
                  {errors.shipping_first_name.message}
                </div>
              )}
            </div>

            <div className="form__field">
              <input
                type="text"
                id="shipping_last_name"
                {...register('shipping_last_name', {
                  required: 'Last name is required',
                })}
                className={`filled ${errors.shipping_last_name ? 'error' : ''}`}
              />
              <label htmlFor="shipping_last_name">Last name</label>
              {errors.shipping_last_name && (
                <div className="form__field__error slide-down">
                  {errors.shipping_last_name.message}
                </div>
              )}
            </div>
          </div>

          <div className="form__field">
            <Controller
              name="country"
              control={control}
              rules={{required: 'Country is required'}}
              render={({field}) => (
                <Select
                  {...field}
                  placeholder="Country"
                  options={countries}
                  onChange={(selected) => {
                    const countryStates = countriesStatesData[selected.value];
                    const preparedStates = countryStates
                      ? Object.entries(countryStates).map(([value, label]) => ({value, label}))
                      : [];
                    setStates(preparedStates);
                    setValue('state', '');
                    field.onChange(selected);
                  }}
                  className={['checkout-select', errors.country ? 'error' : ''].join(' ')}
                />
              )}
            />
            {errors.country && (
              <div className="form__field__error slide-down">Country is required</div>
            )}
          </div>

          <div className="form__field">
            <input
              type="text"
              id="shipping_city"
              {...register('shipping_city', {
                required: 'City is required',
              })}
              className={`filled ${errors.shipping_city ? 'error' : ''}`}
            />
            <label htmlFor="shipping_city">City / town</label>
            {errors.shipping_city && (
              <div className="form__field__error slide-down">
                {errors.shipping_city.message}
              </div>
            )}
          </div>
          <div className="form__field">
            <input
              type="text"
              id="address"
              {...register('address', {
                required: 'Address is required',
              })}
              className={`filled ${errors.address ? 'error' : ''}`}
            />
            <label htmlFor="shipping_city">Address</label>
            {errors.address && (
              <div className="form__field__error slide-down">
                {errors.address.message}
              </div>
            )}
          </div>

          <div className="form__fields__row">
            <div className="form__field">
              {states.length ? (
                <Controller
                  name="state"
                  control={control}
                  rules={{required: 'State is required'}}
                  render={({field}) => (

                    <Select
                      {...field}
                      placeholder={'State'}
                      options={states}
                      className={['checkout-select', errors.country ? 'error' : ''].join(' ')}

                    />
                  )}
                />

              ) : (
                <>
                  <input
                    type="text"
                    id="shipping_state"
                    {...register('state', {
                      required: 'State is required',
                    })}
                    className={`filled ${errors.state ? 'error' : ''}`}
                  />
                  <label htmlFor="shipping_postcode">State</label>
                </>
              )}

              {errors.state && (
                <div className="form__field__error slide-down">State is required</div>
              )}
            </div>

            <div className="form__field">
              <input
                type="text"
                id="shipping_postcode"
                {...register('shipping_postcode', {
                  required: 'Postcode / ZIP is required',
                })}
                className={`filled ${errors.shipping_postcode ? 'error' : ''}`}
              />
              <label htmlFor="shipping_postcode">Postcode / ZIP</label>
              {errors.shipping_postcode && (
                <div className="form__field__error slide-down">
                  {errors.shipping_postcode.message}
                </div>
              )}
            </div>
          </div>

          <div className="form__field">
            <input
              type="tel"
              id="billing_phone"
              {...register('billing_phone', {
                required: 'Phone is required',
              })}
              className={`filled ${errors.billing_phone ? 'error' : ''}`}
            />
            <label htmlFor="billing_phone">Phone number</label>
            {errors.billing_phone && (
              <div className="form__field__error slide-down">
                {errors.billing_phone.message}
              </div>
            )}
          </div>

          <div className="form__field">
            <textarea
              id="order_comments"
              {...register('order_comments')}
              rows={2}
              cols={5}
            ></textarea>
            <label htmlFor="order_comments">Order Comment</label>
          </div>
        </div>

        <div className="form__field form__field--checkbox">
          <label htmlFor="terms">
            <input
              type="checkbox"
              id="terms"
              {...register('terms', {
                required: 'You must accept the terms',
              })}
              className={`filled ${errors.terms ? 'error' : ''}`}
            />
            <div className="checkmark"></div>
            <div className="checkbox-label">
              I agree to the website <a href="#">terms and conditions</a> and{' '}
              <a href="#">privacy policy</a> <span className="required">*</span>
            </div>
          </label>
          {errors.terms && (
            <div className="form__field__error slide-down">
              {errors.terms.message}
            </div>
          )}
        </div>

        <div className="checkout__buttons">
          <a href="/cart" className="checkout__return">
            <i className="lh-icon-angle-left-solid"></i>
            Return to cart
          </a>
          <button type="submit" className="checkout__continue">
            Continue to Shipping
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactInfoStep;
