import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IconPlain } from "../../commons";

const TableRow = ({ req_qty, product_info, product_id }) => {
  /**
   * Image For Product
   */
  const PRODUCT_IMAGE = product_info.product_image;
  return (
    <tr>
      <td className="text-center border px-8 py-2">
        <Image
          src={PRODUCT_IMAGE}
          alt="Loading..."
          unoptimized
          width={100}
          height={100}
          className="w-full h-32 object-cover"
        />
      </td>
      <td className="text-center border px-8 py-2">
        <Link href={`/product/${product_info.slug}`} className="underline">
          {product_info.product_title}
        </Link>
      </td>
      <td className="text-center border px-8 py-2">${product_info.price}</td>
      <td className="text-center border px-8 py-2">
        <div className="p-3 border-2 transition-all hover:border-black flex items-center gap-5">
          <div
            className="cursor-pointer"
            onClick={() => alert("Decrease Quantity")}
          >
            <IconPlain classes="fa fa-minus" />
          </div>
          <span>{req_qty}</span>
          <div
            className="cursor-pointer"
            onClick={() => alert("Increase Quantity")}
          >
            <IconPlain classes="fa fa-plus" />
          </div>
        </div>
      </td>
      <td className="text-center border px-8 py-2">
        ${req_qty * product_info.price}
      </td>
      <td className="text-center border px-8 py-2">
        <div
          className="cursor-pointer"
          onClick={() => alert("Remove From Cart")}
        >
          <IconPlain classes="fa fa-xmark" />
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
