import Image from "next/image";
import React from "react";
import { Text2Xl, TextMd } from "../../commons";
const ContactInfo = () => {
  /**
   * Contact Image
   */
  const CONTACT_IMAGE = "/img/contact-1.jpg";

  return (
    <div className="flex flex-col gap-9">
      <Image
        unoptimized
        src={CONTACT_IMAGE}
        width={100}
        height={100}
        className="w-full"
        alt="Loading..."
      />
      <div>
        <Text2Xl text="Email Address" classes="!text-black font-bold" />
        <a href="mailto:uzairdeveloper354123@gmail.com">
          <TextMd
            text="(uzairdeveloper354123@gmail.com)"
            classes="text-gray-400 font-medium mt-2 hover:text-indigo-500 transition-all"
          />
        </a>
      </div>
      <div>
        <Text2Xl text="Phone No." classes="!text-black font-bold" />
        <a href="tel:+923104864150">
          <TextMd
            text="(0310 4864150)"
            classes="text-gray-400 font-medium mt-2 hover:text-indigo-500 transition-all"
          />
        </a>
      </div>
      <div>
        <Text2Xl text="Address Line" classes="!text-black font-bold" />
        <a
          href="https://goo.gl/maps/kwKKyFuGaBpUtNFR8"
          target="_blank"
          rel="noreferrer"
        >
          <TextMd
            text="(Lahore,Pakistan)"
            classes="text-gray-400 font-medium mt-2 hover:text-indigo-500 transition-all"
          />
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
