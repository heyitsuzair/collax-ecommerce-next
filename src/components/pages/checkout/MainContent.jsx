import React, { useState } from "react";
import BillingDetails from "./BillingDetails";
import YourOrder from "./YourOrder";
import { useFormik } from "formik";
import { CheckoutFormSchema } from "../../../yupSchemas";
import { toast } from "react-toastify";

const MainContent = () => {
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
    method: "COD",
    card_no: "",
    card_cvc: "",
    expiry_year: "",
    expiry_month: "",
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

  /**
   * Billing Details Components Props
   */
  const BillingDetailsProps = {
    handleBlur,
    handleChange,
    values,
    touched,
    errors,
  };

  /**
   * Your Order Component Props
   */
  const YourOrderProps = {
    isLoading,
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    touched,
    errors,
  };

  return (
    <div className="container mx-auto px-5 lg:px-16 my-32">
      <div className="grid grid-cols-12 gap-4 md:gap-8">
        <div className="col-span-12 md:col-span-6">
          <BillingDetails {...BillingDetailsProps} />
        </div>
        <div className="col-span-12 md:col-span-6">
          <YourOrder {...YourOrderProps} />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
