import React, { useState } from "react";
import BillingDetails from "./BillingDetails";
import YourOrder from "./YourOrder";
import { useFormik } from "formik";
import { CheckoutFormSchema } from "../../../yupSchemas";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../../../functions/orders";
import { ErrorMessage, SuccessMessage } from "../../commons";
import { useRouter } from "next/router";
import { clearCart } from "../../../redux/slices/cart";

const MainContent = () => {
  const router = useRouter();

  /**
   * State For Loading On Form Submission
   */
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Redux Helper Functions
   */
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();

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
    const data = {
      ...values,
      total: cart.total + 40,
      order_items: cart.cartItems,
    };

    const isOrderAdded = await placeOrder(data);

    if (isOrderAdded.error) {
      ErrorMessage(isOrderAdded.msg);
    } else {
      /**
       * Clear Cart
       */
      dispatch(clearCart());
      SuccessMessage(isOrderAdded.msg);
      router.push("/");
    }

    /**
     * Stop Loading
     */
    setIsLoading(false);
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
