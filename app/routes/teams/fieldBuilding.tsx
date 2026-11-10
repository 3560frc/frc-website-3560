//import akanksha from "./assets/team/Akansha.jpg";
import krisha from "./assets/team/Krisha.jpg";
import field from "./assets/repr/fieldBuilding.png";
import { TeamPage } from "./TeamPage";

export function FieldBuilding() {
  return (
    <TeamPage
      teamName="Field Building"
      teamDescription="The Field Building team is responsible for constructing the playing field for competitions, ensuring it meets all specifications and safety standards. They work closely with the Programming, Mechanical, and CAD teams to create a functional and engaging environment for the robot to operate in. Their meticulous attention to detail ensures that every aspect of the field is built to perfection, providing a reliable testing ground for the robot."
      teamList={[
        "Constructing the playing field according to competition specifications",
        "Ensuring the field is safe, functional, and visually appealing",
        "Collaborating with Programming, Mechanical, and CAD teams to integrate field elements",
        "Testing the robot on the field to ensure optimal performance in competition",
      ]}
      teamImage={field}
      tools={[
        {
          title: "Drills",
          body: "Used for assembling field components and securing structures.",
        },
        {
          title: "Saw",
          body: "Essential for cutting wood and other materials to the required dimensions for the field.",
        },
        {
          title: "Nails and Screws",
          body: "Fasteners used to hold field components together securely.",
        }
      ]}
      cultureDescriptionOne="In close collaboration with the Programming, Mechanical, and CAD teams, the Field Building team ensures that the robot’s systems are fully integrated. We believe that "
      cultureList={["Precision", "Safety",]}
      cultureDescriptionTwo="are key to maintaining a safe and organized system that powers the robot effectively during competition, ensuring peak performance under high-pressure scenarios."
      members={[
        //{ pName: "Akanksha Kansal", src: akansha },
        { pName: "Krisha Parekh", src: krisha  },
      ]}
    />
  );
}
