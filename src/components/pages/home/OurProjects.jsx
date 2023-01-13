import React, { useState } from "react";
import { OurProjectsGrid, OurProjectsTabs } from "../../../config";
import {
  HeadingCircleLeft,
  ProjectsGrid,
  TabsUnderlined,
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
    <ProjectsGrid key={1} grid={OurProjectsGrid[0]} />,
    <ProjectsGrid key={2} grid={OurProjectsGrid[1]} />,
    <ProjectsGrid key={3} grid={OurProjectsGrid[2]} />,
  ];

  return (
    <section className="p-8 lg:p-24 our-projects">
      <div className="grid grid-cols-12 items-end gap-6">
        <div className="col-span-12 mb-3 lg:mb-10 lg:col-span-6 flex flex-col gap-5">
          <HeadingCircleLeft text="Our Projects" />
          <Text6Xl text="Creative work." classes={"text-gray-900 font-bold"} />
        </div>
        <div className="col-span-12 mb-3 lg:mb-10 lg:col-span-6">
          <TabsUnderlined
            justify="justify-start lg:justify-end"
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
