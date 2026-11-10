import aayush from "./assets/team/Aayush.jpg";
//import yuvraj from "./assets/team/Yuvraj.jpg";
import computer from "./assets/repr/programming.png";
import { TeamPage } from "./TeamPage";

export function Programming() {
  return (
    <TeamPage
      teamName="programming"
      teamDescription="We, programming team are responsible for bringing life to the
              robot we make use of a variety of tools and technologies in order
              to efficiently and accurately address challenges our robot has to
              face. Some of the things we do include:"
      teamList={[
        "Simulation testing - testing the robot in a virtual environment",
        "PID curve tuning - tuning the motor settings in order to smoothly start and stop",
        "Graphics programming - using linear algebra to translate raw data",
        "AI vision - using algorithms to assess the position of objects and more",
      ]}
      teamImage={computer}
      tools={[
        {
          title: "WPILib",
          body: "A library of tools for programming FRC robots.",
          link: "https://wpilib.org",
        },
        {
          title: "Closed Loop Control",
          body: "Techniques for precise motor control.",
          link: "https://v6.docs.ctr-electronics.com/en/latest/docs/api-reference/device-specific/talonfx/closed-loop-requests.html",
        },
        { 
          title: "Limelight", 
          body: "Vision processing for object detection.",
          link: "https://docs.limelightvision.io/docs/docs-limelight/getting-started/summary",
        },
        {
          title: "Pathplanner",
          body: "Tool for creating autonomous robot paths.",
          link: "https://pathplanner.dev/home.html",
        },
      ]}
      cultureDescriptionOne="Beyond writing code, we also collaborate with the Mechanical, Electrical, and CAD teams to ensure systems work seamlessly. We believe that"
      cultureList={["Communication", "Leadership", "Initiative"]}
      cultureDescriptionTwo="are key for meeting programming deadlines and working effectively with the rest of the team."
      members={[
        { pName: "Aayush Kumar", src: aayush },
        //{ pName: "Yuvraj Gupta", src: yuvraj },
      ]}
    />
  );
}
