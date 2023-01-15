import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const MainContent = () => {
  return (
    <div className="container mx-auto px-10 lg:px-16 xl:px-28 my-32">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-48">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default MainContent;
