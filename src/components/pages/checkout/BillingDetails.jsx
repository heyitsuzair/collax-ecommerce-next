import { useFormik } from "formik";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Countries } from "../../../config";
import { CheckoutFormSchema } from "../../../yupSchemas";
import {
  InputPlain,
  PlainButton,
  SelectPlain,
  SpinnerMedium,
  Text3Xl,
} from "../../commons";

const BillingDetails = () => {
  /**
   * State For Loading On Form Submission
   */
  const [isLoading, setIsLoading] = useState(false);

  /**
   * @var initialValues Form Initial Values
   */

  const initialValues = {
    country: "",
    first_name: "",
    last_name: "",
    company: "",
    street_address: "",
    apartment_no: "",
    city: "",
    province: "",
    zip: "",
    email: "",
    phone_no: "",
  };

  /**
   * @function onSubmit When Someone Submits Billing Form, this function gets triggered
   */

  const onSubmit = async (values, actions) => {
    /**
     * Start Loading
     */
    setIsLoading(true);

    setTimeout(() => {
      toast.success("Order Placed!");
      setIsLoading(false);
      actions.resetForm();
    }, 1500);
  };

  /**
   * Formik Configuration
   */
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      validationSchema: CheckoutFormSchema,
      initialValues,
      onSubmit,
    });

  return (
    <div>
      <Text3Xl
        text="Billing Details"
        classes="!text-black font-semibold border-b pb-4"
      />
      <form className="mt-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12">
            <SelectPlain
              onChange={handleChange}
              onBlur={handleBlur}
              label="Country"
              isRequired
              error={errors.country && touched.country}
              errorText={errors.country}
              name="country"
              placeholder={"Select a country"}
              options={Countries}
            />
          </div>
          <div className="col-span-6">
            <InputPlain
              type="text"
              name="first_name"
              placeholder="First Name"
              label="First Name"
              isRequired
              onChange={handleChange}
              value={values.first_name}
              onBlur={handleBlur}
              error={errors.first_name && touched.first_name}
              errorText={errors.first_name}
            />
          </div>
          <div className="col-span-6">
            <InputPlain
              type="text"
              name="last_name"
              placeholder="Last Name"
              label="Last Name"
              isRequired
              onChange={handleChange}
              value={values.last_name}
              onBlur={handleBlur}
              error={errors.last_name && touched.last_name}
              errorText={errors.last_name}
            />
          </div>
          <div className="col-span-12">
            <InputPlain
              type="text"
              name="company"
              placeholder="Company Name"
              label="Company Name"
              onChange={handleChange}
              value={values.company}
              onBlur={handleBlur}
              error={errors.company && touched.company}
              errorText={errors.company}
            />
          </div>
          <div className="col-span-12">
            <InputPlain
              type="text"
              name="street_address"
              placeholder="Street Address"
              label="Street Address"
              isRequired
              onChange={handleChange}
              value={values.street_address}
              onBlur={handleBlur}
              error={errors.street_address && touched.street_address}
              errorText={errors.street_address}
            />
          </div>
          <div className="col-span-12">
            <InputPlain
              type="text"
              name="apartment_no"
              placeholder="Apartment Number"
              label="Apartment Number"
              onChange={handleChange}
              value={values.apartment_no}
              onBlur={handleBlur}
              error={errors.apartment_no && touched.apartment_no}
              errorText={errors.apartment_no}
            />
          </div>
          <div className="col-span-12">
            <InputPlain
              type="text"
              name="city"
              placeholder="Town / City"
              label="Town / City"
              isRequired
              onChange={handleChange}
              value={values.city}
              onBlur={handleBlur}
              error={errors.city && touched.city}
              errorText={errors.city}
            />
          </div>
          <div className="col-span-6">
            <InputPlain
              type="text"
              name="province"
              placeholder="State / Province"
              label="State / Province"
              isRequired
              onChange={handleChange}
              value={values.province}
              onBlur={handleBlur}
              error={errors.province && touched.province}
              errorText={errors.province}
            />
          </div>
          <div className="col-span-6">
            <InputPlain
              type="text"
              name="zip"
              placeholder="ZIP / Postcode"
              label="ZIP / Postcode"
              isRequired
              onChange={handleChange}
              value={values.zip}
              onBlur={handleBlur}
              error={errors.zip && touched.zip}
              errorText={errors.zip}
            />
          </div>
          <div className="col-span-6">
            <InputPlain
              type="email"
              name="email"
              placeholder="Email Address"
              label="Email Address"
              isRequired
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
              error={errors.email && touched.email}
              errorText={errors.email}
            />
          </div>
          <div className="col-span-6">
            <InputPlain
              type="text"
              name="phone_no"
              placeholder="Phone Number"
              label="Phone Number"
              isRequired
              onChange={handleChange}
              value={values.phone_no}
              onBlur={handleBlur}
              error={errors.phone_no && touched.phone_no}
              errorText={errors.phone_no}
            />
          </div>
          <div className="col-span-12">
            {isLoading ? (
              <SpinnerMedium />
            ) : (
              <PlainButton
                onClick={handleSubmit}
                text="Place Order"
                textColor="text-black hover:text-white"
                buttonColor="bg-yellow-400 hover:bg-indigo-500"
              />
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default BillingDetails;
