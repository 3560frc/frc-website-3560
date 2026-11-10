import Footer from "src/components/Footer";
import Navbar from "src/components/Navbar";
import harris from "./assets/exec/mrs.harris.png";
//import kirsch from "./assets/exec/ms.kirsh.png";

import aayush from "./assets/team/Aayush.jpg"; // Programming Co-Lead
//import yuvraj from "./assets/team/samyat.png"; // Programming Co-Lead


import shai from "./assets/team/Shai.jpg"; // CAD Co-Lead

import yannis from "./assets/team/Yannis.jpg"; // Mechanical Co-Lead
//import laksh from "./assets/team/laksh.png"; // Mechanical Co-Lead


import ravi from "./assets/team/ravi.png"; // Captain

import navin from "./assets/team/navin.png"; // Electrical Co-Lead

//import akansha from "./assets/team/Akansha.jpg"; // Field Build Co-Lead
import krisha from "./assets/team/Krisha.jpg"; // Field Build Co-Lead

import jashan from "./assets/team/Jashan.jpg"; // Business Co-Lead
//import chelsea from "./assets/team/Chelsea.jpg"; // Business Co-Lead


import { TeamMember } from "./TeamPage";

export function Executive() {
  let members = [
    {
      pName: "Ravi Patel", src: ravi, title: "Team 3560 Captain",
    },
    { pName: "Mizanne Harris", src: harris, title: "Lead Coach" },
    //{ pName: "Elizabeth Kirsch", src: kirsch, title: "Teacher Supervisor" },

    { pName: "Yannis Bhardwaj", src: yannis, title: "Mechanical Co-Lead" }, 
   // { pName: "Rohin Patel", src: rohin, title: "Mechanical Co-Lead" }, 

    { pName: "Navin Bedi", src: navin, title: "Electrical Co-Lead" },

    //{ pName: "Akanksha Kansal", src: akansha, title: "Field Build Co-Lead & FRC Youth Council Member" },
    { pName: "Krisha Parekh", src: krisha, title: "Field Build Co-Lead" },

    { pName: "Shai Patel", src: shai, title: "CAD Co-Lead" },

    { pName: "Aayush Kumar", src: aayush, title: "Programming Co-Lead" },
    //{ pName: "Yuvraj Gupta", src: yuvraj, title: "Programming Co-Lead" },

    { pName: "Jashanpreet Singh", src: jashan, title: "Business Co-Lead" },
    //{ pName: "Chelsea Sawh", src: chelsea, title: "Business Co-Lead" },
  ];

  return (
    <>
  <Navbar />
  <main className="flex flex-col justify-center pt-16 pb-4 font-[Inter] px-6 lg:px-36 gap-16 md:gap-28 mt-10 mb-16">
    <div className="flex flex-col gap-8 w-full items-center">
      {members.length > 2 && (
        <div className="flex flex-col gap-10 w-full items-center mt-10">
          <div className="flex flex-col items-center justify-center">
            <h2 className="uppercase text-3xl font-[Passion_One] text-center">
              Executive Team
            </h2>
            <h3 className="uppercase text-lg font-[Passion_One] text-center">
              Teachers, Mentors, Students
            </h3>
          </div>

          <div className="flex flex-col gap-10 w-full">
            {Array.from(
              { length: Math.ceil(members.length / 5) },
              (_, groupIndex) => (
                <div
                  key={groupIndex}
                  className="flex flex-col md:flex-row gap-8 justify-center items-center"
                >
                  {members
                    .slice(groupIndex * 5, groupIndex * 5 + 5)
                    .map((member, index) => (
                      <div key={index} className="flex justify-center w-full md:w-auto">
                        <TeamMember
                          pName={member.pName}
                          src={member.src}
                          title={member.title}
                        />
                      </div>
                    ))}
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  </main>
  <Footer />
</>
  );
}

export default Executive;
