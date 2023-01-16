import { useFormik } from "formik";
import React, { useState } from "react";
import { ContactFormSchema } from "../../../yupSchemas";
import {
  InputPlain,
  PlainButton,
  SpinnerMedium,
  Text6Xl,
  TextAreaPlain,
} from "../../commons";
import { toast } from "react-toastify";

const ContactForm = () => {
  /**
   * State For Loading On Form Submission
   */
  const [isLoading, setIsLoading] = useState(false);

  /**
   * @var initialValues Form Initial Values
   */

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  /**
   * @function onSubmit When Someone Submits Contact Form, this function gets triggered
   */

  const onSubmit = async (values, actions) => {
    /**
     * Start Loading
     */
    setIsLoading(true);

    setTimeout(() => {
      toast.success("We Will Contact You Soon!");
      setIsLoading(false);
      actions.resetForm();
    }, 1500);
  };

  /**
   * Formik Configuration
   */
  const { handleSubmit, values, errors, touched, handleBlur, handleChange } =
    useFormik({
      validationSchema: ContactFormSchema,
      initialValues,
      onSubmit,
    });

  return (
    <div className="flex flex-col gap-8 w-full lg:w-[58%]">
      <Text6Xl text="Let's Talk..." classes="font-bold !text-black" />
      <form>
        <div className="mb-3">
          <InputPlain
            type="text"
            name="name"
            placeholder="Enter Your Name"
            onChange={handleChange}
            value={values.name}
            onBlur={handleBlur}
            error={errors.name && touched.name}
            errorText={errors.name}
          />
        </div>
        <div className="my-7">
          <InputPlain
            type="email"
            name="email"
            placeholder="Enter Your Email Address"
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
            error={errors.email && touched.email}
            errorText={errors.email}
          />
        </div>
        <div className="my-7">
          <TextAreaPlain
            name="message"
            placeholder="Enter Your Message"
            onChange={handleChange}
            value={values.message}
            onBlur={handleBlur}
            error={errors.message && touched.message}
            errorText={errors.message}
          />
        </div>
        <div className="my-7">
          {isLoading ? (
            <SpinnerMedium />
          ) : (
            <PlainButton
              onClick={handleSubmit}
              size="large"
              text="Send Message"
              textColor="text-black hover:text-white"
              buttonColor="bg-yellow-400 hover:bg-indigo-500"
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
