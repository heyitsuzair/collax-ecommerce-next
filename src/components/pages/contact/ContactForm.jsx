import React from "react";
import { InputPlain, PlainButton, Text6Xl, TextAreaPlain } from "../../commons";

const ContactForm = () => {
  return (
    <div className="flex flex-col gap-8 w-full lg:w-[58%]">
      <Text6Xl text="Let's Talk..." classes="font-bold text-black" />
      <form action="#">
        <div className="mb-3">
          <InputPlain
            type="text"
            name="name"
            placeholder="Enter Your Name"
            onChange={() => alert("el")}
            value=""
            onBlur={() => alert("blur")}
            error={true}
            errorText="Enter Your Name"
          />
        </div>
        <div className="my-7">
          <InputPlain
            type="email"
            name="email"
            placeholder="Enter Your Email Address"
            onChange={() => alert("el")}
            value=""
            onBlur={() => alert("blur")}
            error={true}
            errorText="Enter Your Email Address"
          />
        </div>
        <div className="my-7">
          <TextAreaPlain
            name="message"
            placeholder="Enter Your Message"
            // onChange={() => alert("el")}
            value=""
            onBlur={() => alert("blur")}
            error={true}
            errorText="Enter Your Message"
          />
        </div>
        <div className="my-7">
          <PlainButton
            onClick={() => alert("submit form")}
            size="large"
            text="Send Message"
            buttonColor="bg-yellow-400 hover:bg-indigo-500"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
