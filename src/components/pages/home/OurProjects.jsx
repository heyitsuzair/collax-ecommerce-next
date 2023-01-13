import React from "react";
import { HeadingCircleLeft, TabsUnderlined, Text6Xl } from "../../commons";

const OurProjects = () => {
  return (
    <section className="p-8 lg:p-24 our-projects">
      <div className="grid grid-cols-12 items-end gap-6">
        <div className="col-span-12 lg:col-span-6 flex flex-col gap-5">
          <HeadingCircleLeft text="Our Projects" />
          <Text6Xl text="Creative work." classes={"text-gray-900 font-bold"} />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <TabsUnderlined />
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
