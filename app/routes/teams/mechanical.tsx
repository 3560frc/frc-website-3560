import yannis from "./assets/team/Yannis.jpg";
//import rohin from "./assets/team/Rohin.jpg";

import mechanical from "./assets/repr/mechanical.png";
import { TeamPage } from "./TeamPage";

export function Mechanical() {
  return (
    <TeamPage
      teamName="Mechanical"
      teamDescription="The Mechanical team is at the heart of constructing the physical structure and mechanisms of the robot. They take the concepts developed in the design phase and turn them into reality, focusing on crafting a sturdy and functional framework that supports the robot’s movement and abilities. Their work involves cutting, assembling, and modifying materials like metal, plastic, and other components to build the robot’s body, drive systems, and manipulators."
      teamList={[
        "Constructing the robot’s drive-train and structural framework",
        "Developing complex mechanisms like arms, lifts, or grippers",
        "Troubleshooting mechanical issues and refining designs",
        "Collaborating with CAD, Electrical, and Programming teams to ensure seamless integration",
      ]}
      teamImage={mechanical}
      tools={[
        {
          title: "CNC Machine",
          body: "Used for precise cutting and shaping of materials.",
        },
        {
          title: "Drill Press",
          body: "Essential for creating accurate holes in components.",
        },
        {
          title: "Wrenches and Screwdrivers",
          body: "Basic tools for assembling and adjusting parts.",
        },
        {
          title: "Bandsaw",
          body: "Used for cutting materials like metal and plastic.",
        },
      ]}
      cultureDescriptionOne="In collaboration with the CAD, Electrical, and Programming teams, the Mechanical team ensures that the robot’s physical systems are robust and reliable. We believe that"
      cultureList={["Precision", "Durability", "Teamwork"]}
      cultureDescriptionTwo="are key to building a robot that performs consistently and withstands the rigors of competition, ensuring success under challenging conditions."
      members={[
        { pName: "Yannis Bhardwaj", src: yannis },
        //{ pName: "Rohin Patel", src: rohin },
      ]}
    />
  );
}
