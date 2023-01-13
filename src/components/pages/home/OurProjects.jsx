import React, { useState } from "react";
import { OurProjectsTabs } from "../../../config";
import {
  HeadingCircleLeft,
  TabsUnderlined,
  Text2Xl,
  Text6Xl,
} from "../../commons";

const OurProjects = () => {
  /**
   * State For Active Tab
   */
  const [activeTab, setActiveTab] = useState(0);

  /**
   * Variable To Hold Tabs Content
   */
  const tabsContent = [
    <Text2Xl key={1} text="1" />,
    <Text2Xl key={2} text="2" />,
    <Text2Xl key={3} text="3" />,
  ];

  return (
    <section className="p-8 lg:p-24 our-projects">
      <div className="grid grid-cols-12 items-end gap-6">
        <div className="col-span-12 lg:col-span-6 flex flex-col gap-5">
          <HeadingCircleLeft text="Our Projects" />
          <Text6Xl text="Creative work." classes={"text-gray-900 font-bold"} />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <TabsUnderlined
            justify="justify-end"
            tabs={OurProjectsTabs}
            activeTab={activeTab}
            handleTabClick={setActiveTab}
          />
        </div>
        <div className="col-span-12">{tabsContent[activeTab]}</div>
      </div>
    </section>
  );
};

export default OurProjects;
