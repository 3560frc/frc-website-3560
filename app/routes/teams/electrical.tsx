import navin from "./assets/team/navin.png";
import electrical from "./assets/repr/electrical.png";
import { TeamPage } from "./TeamPage";

export function Electrical() {
  return (
    <TeamPage
      teamName="Electrical"
      teamDescription="The Electrical team is responsible for wiring and powering the robot, ensuring all components work together smoothly. They handle the distribution of electricity from the battery to motors, sensors, and control systems, ensuring each part of the robot has the necessary power to operate efficiently. Every connection they make plays a vital role in bringing the robot to life."
      teamList={[
        "Designing and installing circuits, wiring, and power systems",
        "Integrating components like speed controllers, motor drivers, and sensors",
        "Troubleshooting electrical issues and optimizing connections",
        "Collaborating with Programming, Mechanical, and CAD teams to ensure full system integration",
      ]}
      teamImage={electrical}
      tools={[
        {
          title: "Multimeter",
          body: "A tool for measuring voltage, current, and resistance.",
        },
        {
          title: "Soldering Iron",
          body: "Used for creating secure electrical connections.",
        },
        {
          title: "Wire Strippers",
          body: "Essential for preparing wires for connections.",
        },
        {
          title: "Power Distribution Board",
          body: "Manages and distributes power to various components.",
        },
      ]}
      cultureDescriptionOne="In close collaboration with the Programming, Mechanical, and CAD teams, the Electrical team ensures that the robot’s systems are fully integrated. We believe that"
      cultureList={["Precision", "Safety", "Reliability"]}
      cultureDescriptionTwo="are key to maintaining a safe and organized system that powers the robot effectively during competition, ensuring peak performance under high-pressure scenarios."
      members={[
        { pName: "Navin Bedi", src: navin },
      ]}
    />
  );
}
