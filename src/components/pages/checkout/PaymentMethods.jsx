import React from "react";
import { PaymentMethodRadios } from "../../../config";
import { InputPlain, RadioGroup } from "../../commons";

const PaymentMethods = ({
  handleBlur,
  handleChange,
  errors,
  touched,
  values,
}) => {
  /**
   * Props For Radio Group Component
   */
  const RadioGroupComponentProps = {
    handleChange,
    errors,
    touched,
    values,
    radiosArray: PaymentMethodRadios,
    error: errors.method && touched.method,
    errorText: errors.method,
  };

  return (
    <>
      <div className="my-5">
        <RadioGroup {...RadioGroupComponentProps} />
      </div>
      {values.method === "Authorize.net" || values.method === "Stripe" ? (
        <div className="flex flex-col gap-4 mt-7">
          <InputPlain
            type="number"
            name="card_no"
            placeholder="Card Number"
            label="Card No."
            isRequired
            onChange={handleChange}
            value={values.card_no}
            onBlur={handleBlur}
            error={errors.card_no && touched.card_no}
            errorText={errors.card_no}
          />
          <InputPlain
            type="number"
            name="card_cvc"
            placeholder="Card CVC"
            label="CVC"
            isRequired
            onChange={handleChange}
            value={values.card_cvc}
            onBlur={handleBlur}
            error={errors.card_cvc && touched.card_cvc}
            errorText={errors.card_cvc}
          />
          <InputPlain
            type="number"
            name="expiry_month"
            placeholder="Expiry Month"
            label="Expiry Month"
            isRequired
            onChange={handleChange}
            value={values.expiry_month}
            onBlur={handleBlur}
            error={errors.expiry_month && touched.expiry_month}
            errorText={errors.expiry_month}
          />
          <InputPlain
            type="number"
            name="expiry_year"
            placeholder="Expiry Year"
            label="Expiry Year"
            isRequired
            onChange={handleChange}
            value={values.expiry_year}
            onBlur={handleBlur}
            error={errors.expiry_year && touched.expiry_year}
            errorText={errors.expiry_year}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default PaymentMethods;
