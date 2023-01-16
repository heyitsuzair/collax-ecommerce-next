import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IconPlain } from "../../commons";

const TableRow = () => {
  /**
   * Image For Product
   */
  const PRODUCT_IMAGE = "/img/port1.png";
  return (
    <tr>
      <td class="text-center border px-8 py-2">
        <Image
          src={PRODUCT_IMAGE}
          alt="Loading..."
          unoptimized
          width={100}
          height={100}
          className="w-full h-32 object-cover"
        />
      </td>
      <td class="text-center border px-8 py-2">
        <Link href="/product/iphone-12" className="underline">
          Dante Sparks
        </Link>
      </td>
      <td class="text-center border px-8 py-2">$40</td>
      <td class="text-center border px-8 py-2">
        <div className="p-3 border-2 transition-all hover:border-black flex items-center gap-5">
          <div
            className="cursor-pointer"
            onClick={() => alert("Decrease Quantity")}
          >
            <IconPlain classes="fa fa-minus" />
          </div>
          <span>10</span>
          <div
            className="cursor-pointer"
            onClick={() => alert("Increase Quantity")}
          >
            <IconPlain classes="fa fa-plus" />
          </div>
        </div>
      </td>
      <td class="text-center border px-8 py-2">$400</td>
      <td class="text-center border px-8 py-2">
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
