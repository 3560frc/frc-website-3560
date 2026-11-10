import shai from "./assets/team/Shai.jpg";
import cad from "./assets/repr/cad.png";
import { TeamPage } from "./TeamPage";

export function CAD() {
  return (
    <TeamPage
      teamName="Computer Aided Design"
      teamDescription="The CAD team is responsible for creating detailed 3D models of the robot before any physical building begins. Using advanced design software, they craft precise digital blueprints that outline every component and system of the robot. This planning phase is essential to ensuring the robot’s structure is sound and meets the functional requirements set by the competition."
      teamList={[
        "Simulating how different parts will fit together",
        "Identifying potential design issues",
        "Refining designs for optimal performance",
        "Collaborating with Mechanical and Electrical teams to accommodate all moving parts, wiring, and sensors",
      ]}
      teamImage={cad}
      tools={[
        {
          title: "SolidWorks",
          body: "A powerful CAD software for creating 3D models.",
        },
        {
          title: "Onshape",
          body: "A cloud-based CAD tool for collaborative design.",
        },
        {
          title: "Autodesk Inventor",
          body: "Software for 3D mechanical design and simulation.",
        },
        {
          title: "Fusion 360",
          body: "Integrated CAD, CAM, and CAE software.",
        },
      ]}
      cultureDescriptionOne="Beyond just creating blueprints, the CAD team also focuses on optimizing the robot’s weight, balance, and efficiency. We believe that"
      cultureList={["Precision", "Collaboration", "Innovation"]}
      cultureDescriptionTwo="are key to transforming ideas into a functioning machine and ensuring the robot meets competition regulations while maintaining strength and flexibility."
      members={[
        { pName: "Shai Patel", src: shai }
      ]}
    />
  );
}
