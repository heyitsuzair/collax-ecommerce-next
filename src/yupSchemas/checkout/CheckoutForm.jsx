import * as Yup from "yup";

export const CheckoutFormSchema = Yup.object({
  country: Yup.string().required("Please Select A Country"),
  first_name: Yup.string().required("Please Enter Your First Name"),
  last_name: Yup.string().required("Please Enter Your Last Name"),
  company: Yup.string(),
  street_address: Yup.string().required("Please Enter Your Street Address"),
  apartment_no: Yup.string(),
  city: Yup.string().required("Please Enter Your City"),
  province: Yup.string().required("Please Enter Your State"),
  zip: Yup.string().required("Please Enter Your ZIP Code"),
  email: Yup.string()
    .email("Please Enter Valid Email")
    .required("Please Enter Your Email"),
  phone_no: Yup.string().required("Please Enter Your Phone No."),
});
