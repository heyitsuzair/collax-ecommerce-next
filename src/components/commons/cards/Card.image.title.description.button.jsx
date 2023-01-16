import Image from "next/image";
import Link from "next/link";
import React from "react";
import ScaledButton from "../buttons/ScaledButton";
import Text3Xl from "../text/Text.3xl";
import TextLg from "../text/Text.lg";

const CardImageTitleDescriptionButton = ({
  cardLink,
  image,
  title,
  description_1,
  description_2,
  buttonText,
  buttonIcon,
}) => {
  /**
   * Image Will Name Come As Prop And Should Be In 'img' folder
   */
  const CARD_IMAGE = "/img/" + image;

  return (
    <>
      {cardLink ? (
        <Link href={cardLink}>
          <div className="bg-white flex flex-col lg:flex-row gap-7 rounded-xl p-8">
            <div className="image">
              <Image
                width={100}
                height={100}
                unoptimized
                src={CARD_IMAGE}
                className="w-14 lg:w-40"
                alt="Loading..."
              />
            </div>
            <div className="content flex flex-col gap-6">
              <Text3Xl
                text={title}
                classes="text-gray-900 font-medium hover:text-indigo-500 transition-all ease-in-out"
              />
              <TextLg classes="text-gray-400" text={description_1} />
              <TextLg classes="text-gray-400" text={description_2} />
              <ScaledButton
                text={buttonText}
                icon={buttonIcon}
                buttonColor="bg-indigo-100"
                textColor="text-indigo-500"
                size="medium"
              />
            </div>
          </div>
        </Link>
      ) : (
        <>
          <div className="bg-white flex flex-col lg:flex-row gap-7 rounded-xl p-8">
            <div className="image">
              <Image unoptimized src={CARD_IMAGE} alt="Loading..." />
            </div>
            <div className="content flex flex-col gap-6">
              <Text3Xl
                text={title}
                classes="text-gray-900 font-medium hover:text-indigo-500 transition-all ease-in-out"
              />
              <TextLg classes="text-gray-400" text={description_1} />
              <TextLg classes="text-gray-400" text={description_2} />
              <ScaledButton
                text={buttonText}
                icon={buttonIcon}
                buttonColor="bg-indigo-100"
                textColor="text-indigo-500"
                size="medium"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CardImageTitleDescriptionButton;
