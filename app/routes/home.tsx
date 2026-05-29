import type { Route } from "./+types/home";
import BlueSection from "public/BlueSection.svg";
import { useState, useRef, useEffect } from "react";
import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
import windowSizeContext from "src/contexts/windowSizeContext";
import {
  Lightbulb,
  Code,
  BriefcaseBusiness,
  Cuboid,
  WandSparkles,
  Wrench,
  CircleArrowLeft,
  CircleArrowRight,
  Plus,
  LucideArrowRightCircle,
} from "lucide-react";
import { WolfButton } from "src/components/WolfButton";
import { openDonorPackageModal } from "src/functions/donorPackage";
import { AnimatePresence, motion } from "framer-motion";
import type { CSSProperties } from "react";
import imA from "./teams/assets/team/aaryan.png";
import imB from "./teams/assets/team/amber.png";
import imC from "./teams/assets/team/armaan.png";
import imD from "./teams/assets/team/blake.png";
import imE from "./teams/assets/team/devesh.png";
import ResponsiveIframe from "../../src/components/ResponsiveIframe";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "3560 Mechawolves" },
    {
      name: "description",
      content: "Chinguacousy SS' FRC Team - 3560 Mechawolves",
    },
  ];
}

function Testimonials() {
  const testimonials: {
    name: string;
    title: string;
    quote: string;
    image: string;
  }[] = [
      {
        name: "David Smith",
        title: "Student",
        quote:
          "Being a part of 3560 Mechawolves has been an incredible journey. I've learned so much about robotics, teamwork, and problem-solving. The hands-on experience and the support from mentors have truly inspired me to pursue a career in STEM. Thank you, 3560, for giving me this opportunity to grow and excel!",
        image: imA,
      },
      {
        name: "Paul Longboat",
        title: "Mentor",
        quote:
          "Mentoring the students at 3560 Mechawolves has been one of the most rewarding experiences of my life. Watching these young minds collaborate, innovate, and overcome challenges is truly inspiring. This team is not just about building robots; it's about building future leaders and innovators. I'm proud to be a part of this journey.",
        image: imB,
      },
      {
        name: "Samuel Van Wilderman",
        title: "Alumni",
        quote:
          "As an alumnus of 3560 Mechawolves, I can confidently say that this team shaped my future. The skills I gained in programming, engineering, and teamwork have been invaluable in my career. Beyond the technical knowledge, the friendships and memories I made here will last a lifetime. Thank you, 3560, for an unforgettable experience!",
        image: imC,
      },
      {
        name: "Emily Carter",
        title: "Parent",
        quote:
          "Seeing my child thrive as part of the 3560 Mechawolves team has been heartwarming. The dedication, creativity, and passion of the students and mentors are truly remarkable. This program has not only taught my child technical skills but also instilled confidence and a sense of purpose. I couldn't be more grateful for this amazing team.",
        image: imD,
      },
      {
        name: "Jessica Lee",
        title: "Donor",
        quote:
          "Supporting 3560 Mechawolves has been an honor. This team exemplifies the spirit of innovation and collaboration. Their commitment to excellence and community outreach is inspiring. I'm thrilled to see how our donation contributes to empowering the next generation of STEM leaders. Keep up the fantastic work, 3560!",
        image: imE,
      },
    ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const { width } = windowSizeContext();

  return (
    <section className="color-wolf-black flex flex-col gap-4 w-screen my-20">
      <div className="w-screen h-[441px] relative flex items-center justify-center">
        {width > 600 && (
          <img
            className="absolute left-0 translate-x-[-160px] lg:translate-x-[-60px] scale-x-[-1.0] scale-y-[-1]"
            src={BlueSection}
          />
        )}
        {width > 600 && (
          <img
            className="absolute right-0 translate-x-[145px] lg:translate-x-[45px] scale-x-[1.0]"
            src={BlueSection}
          />
        )}
        <div
          className="absolute top-0 h-full bg-wolf-blue"
          style={{
            width: width > 1600 ? "80%" : width > 600 ? "66.66%" : "100%",
            left: width > 1600 ? "10%" : width > 600 ? "16.66%" : "0%",
          }}
        ></div>
        {/* <div className="flex flex-col items-center justify-center gap-8 relative z-10 w-full h-full mt-4 lg:px-[145px] px-[45px]">
          <p className="text-3xl text-wolf-black font-medium italic text-center">
            "{testimonials[Object.keys(testimonials)[activeTestimonial]]}"
          </p>
          <div className="flex gap-4">
            {Object.keys(testimonials).map((name, i) => (
              <button
                onMouseOver={() => setActiveTestimonial(i)}
                // className={`${
                //   i == activeTestimonial
                //     ? "text-wolf-black -translate-y-[5px]"
                //     : "text-white"
                // } text-2xl font-[Passion_One] transition-transform duration-300`}
                className="text-wolf-black text-xl font-semibold p-3 px-4 bg-blue-300 rounded-sm"
              >
                {name}
              </button>
            ))}
          </div>
        </div> */}
        <div className="h-full lg:px-[145px] px-[45px] relative p-8 flex gap-10 items-center">
          {width > 800 && (
            <motion.img
              className="aspect-square rounded-full object-cover object-top"
              src={testimonials[activeTestimonial].image}
              width={width > 1400 ? "240px" : "180px"}
              initial={{ filter: "blur(8px)" }}
              animate={{ filter: "none" }}
              exit={{ filter: "blur(8px)" }}
              transition={{ duration: 0.3 }}
              key={activeTestimonial + "-image"}
            />
          )}
          <motion.div
            className="flex flex-col lg:justify-center gap-10 justify-between"
            style={{
              padding:
                width > 800 ? "0 2.75rem 0 0" : width > 600 ? "1rem" : "0",
            }}
            initial={{ opacity: 0, x: 10, filter: "blur(2px)" }}
            animate={{ opacity: 1, x: 0, filter: "none" }}
            exit={{ opacity: 0, x: -10, filter: "blur(2px)" }}
            transition={{ duration: 0.5 }}
            key={activeTestimonial}
          >
            <p className="text-xl italic">
              {testimonials[activeTestimonial].quote}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                {width < 800 && (
                  <motion.img
                    className="aspect-square rounded-full object-cover object-top"
                    src={testimonials[activeTestimonial].image}
                    width="60px"
                    initial={{ filter: "blur(8px)" }}
                    animate={{ filter: "none" }}
                    exit={{ filter: "blur(8px)" }}
                    transition={{ duration: 0.3 }}
                    key={activeTestimonial + "-image"}
                  />
                )}
                <div>
                  <h1 className="text-2xl font-bold">
                    {testimonials[activeTestimonial].name}
                  </h1>
                  <h2 className="text-lg font-medium">
                    {testimonials[activeTestimonial].title}
                  </h2>
                </div>
              </div>
              <button
                className="cursor-pointer"
                onClick={() =>
                  setActiveTestimonial(
                    (prev) => (prev + 1) % testimonials.length
                  )
                }
              >
                <LucideArrowRightCircle size={32} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MainText() {
  return (
    <article className="relative w-full lg:w-1/2">
      <div className="w-14 bg-blue-400 h-1 rounded mb-3" />
      <h1 className="font-[Passion_One] text-3xl mb-1 uppercase ">
        FRC Team 3560{" "}
        <span className="hover:text-blue-400 transition-colors duration-300">
          MECHAWOLVES
        </span>
      </h1>
      <p className="mb-6">
        Ready to build the future? Join our robotics club and dive into hands-on
        fun with robots! Registrations are now open for grade 9 - 12's. Work on
        cool projects, learn new skills, and compete in exciting challenges.
        Don’t wait—sign up today and start your robotics adventure!
      </p>
      <div className="flex gap-4">
        <WolfButton title="Let's Chat" href="/donors" />
        <WolfButton
          title="Donor Package"
          callback={openDonorPackageModal}
          hollow
        />
      </div>
    </article>
  );
}

function Countdown() {
  const [currentTime, setCurrentTime] = useState(0);

  const counter = "This is a counter";
  const countdownText =
    "DAYS UNTIL 2026-2027 SEASON BIOCORE™ PRESENTED BY HAAS";

  useEffect(() => {
    const target = 1799470800;

    const update = setInterval(() => {
      const time = target - Math.floor(Date.now() / 1000);

      setCurrentTime(time);
    }, 1000);

    return () => clearInterval(update);
  }, []);

  const months = Math.floor(currentTime / (60 * 60 * 24 * 30));
  const days = Math.floor((currentTime / (60 * 60 * 24)) % 30);
  const hours = Math.floor((currentTime / (60 * 60)) % 24);
  const minutes = Math.floor((currentTime / 60) % 60);
  const seconds = Math.floor(currentTime % 60);

  const leftPad = (value: string | number, count: number, pad: string) =>
    String(value).padStart(count, pad);

  type CountdownStyle = CSSProperties & { "--value": number };

  const CountdownTile = ({
    value,
    label,
    highlighted = false,
  }: {
    value: number;
    label: string;
    highlighted?: boolean;
  }) => (
    <div
      className={`bg-gray-500/50 opacity-75 rounded p-4 flex min-w-0 flex-col items-center justify-center px-2 py-2 text-center transition-transform duration-300 sm:px-3 sm:py-3 ${
        highlighted ? "text-wolf-blue" : "text-white"
      }`}
    >
      <span className="countdown font-mono leading-none text-5xl font-bold sm:text-6xl lg:text-7xl tabular-nums">
        <span
          style={{ "--value": value } as CountdownStyle}
          aria-live="polite"
          aria-label={`${label} remaining`}
        >
          {leftPad(value, 2, "0")}
        </span>
      </span>
      <span className="mt-1 text-sm font-medium opacity-80 sm:text-base">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex justify-center px-4 sm:px-0">
      <div className="w-full max-w-5xl rounded-3xl border border-white/10 bg-black/20 px-4 py-5 shadow-lg backdrop-blur-sm sm:px-6 sm:py-6">
        <div className="flex flex-col gap-3 sm:gap-4">
          <h3 className="text-center text-xl font-[Passion_One] text-white/90">
            {countdownText}
          </h3>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4 lg:grid-cols-5">
            {months > 0 && (
              <CountdownTile value={months} label="months" highlighted />
            )}
            <CountdownTile value={days} label="days" highlighted={months <= 0} />
            <CountdownTile value={hours} label="hours" />
            <CountdownTile value={minutes} label="min" />
            <CountdownTile value={seconds} label="sec" />
          </div>
          <p className="text-center text-xs text-white/60 sm:text-sm">
            The countdown updates every second.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [displays, setDisplays] = useState<string[]>([]);

  const [currentDisplay, setCurrentDisplay] = useState(0);

  useEffect(() => {
    const images = import.meta.glob("/public/gallery/*.webp");
    const imagePaths = []
    for (const image in images) {
      imagePaths.push(image.split('/public/')[1])
    }

    const randomArray = imagePaths.sort(() => Math.random() - .5);
    const randomImages = randomArray.slice(0, 7)

    setDisplays(randomImages)
  }, []);

  useEffect(() => {
    if (displays.length === 0) {
      return;
    }

    const int = setInterval(() => {
      setCurrentDisplay((prev) => (prev + 1) % displays.length);
    }, 5000);

    return () => clearInterval(int);
  }, [displays.length]);

  const [position, setPosition] = useState(0);
  const [velocity, setVelocity] = useState(0);

  const teamDescriptions = [
    {
      name: "PROGRAMMING",
      src: Code,
      description:
        "The Programming team writes the code that controls the robot, developing software for autonomous and driver-controlled functions using advanced logic and problem-solving.",
    },
    {
      name: "MECHANICAL",
      src: Wrench,
      description:
        "The Mechanical team designs, builds, and assembles the robot's physical components, focusing on structure, movement, and durability to ensure peak performance.",
    },
    {
      name: "ELECTRICAL",
      src: Lightbulb,
      description:
        "The Electrical team handles the wiring and power systems, ensuring that all components are properly connected and the robot operates safely and efficiently.",
    },
    {
      name: "CAD",
      src: Cuboid,
      description:
        "The CAD (Computer-Aided Design) team creates detailed 3D models of the robot, using precision design to plan and simulate its structure before building.",
    },
    {
      name: "Field Building",
      src: Cuboid,
      description:
        "The Field Building team constructs the competition field elements, ensuring they are built to specifications and ready for practice and competition.",
    },
    {
      name: "BUSINESS",
      src: BriefcaseBusiness,
      description:
        "The Business team manages outreach, fundraising, and donations, ensuring the team has the resources and support needed for success. They also handle marketing and team communications.",
    },
  ];

  useEffect(() => {
    let lastTime = performance.now();
    let lastScrollY = window.scrollY;
    let timeout = setTimeout(() => setVelocity(0), 100);

    const handleScroll = () => {
      const now = performance.now();
      const deltaTime = now - lastTime;
      clearTimeout(timeout);

      if (deltaTime > 0) {
        const scrollDistance = Math.abs(window.scrollY - lastScrollY);
        const velocity = scrollDistance / deltaTime; // Scroll speed

        // Adjust marquee speed dynamically
        const newSpeed = Math.max(2, velocity * 10); // Faster scroll = lower duration
        setPosition(newSpeed + window.scrollY);
        setVelocity(newSpeed);
      }

      timeout = setTimeout(() => setVelocity(0), 100);
      lastScrollY = window.scrollY;
      lastTime = now;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cappedVel = Math.min(velocity / 5, 1);

  const [faq, setFaq] = useState([
    {
      question: 'What does "FRC" stand for?',
      answer:
        "FRC stands for FIRST Robotics Competition. It is a global high school robotics competition where teams of students design, build, and program robots to complete specific tasks in a competitive environment.",
      expanded: false,
    },
    {
      question: "Who can join Mechawolves?",
      answer:
        "Mechawolves is open to all students at our school who are interested in robotics, technology, engineering, and programming. No prior experience is needed, as we provide training and mentorship to all new members.",
      expanded: false,
    },
    {
      question: "Do I need any experience to join?",
      answer:
        "No prior experience is necessary! We welcome students of all skill levels and backgrounds. Our team mentors and experienced members will guide you through the process of learning robotics, programming, and other related skills.",
      expanded: false,
    },
    {
      question: "What skills can I learn by joining the team?",
      answer:
        "By joining Mechawolves, you'll gain hands-on experience in robotics, programming, CAD (computer-aided design), mechanical engineering, and electronics. You'll also develop valuable teamwork, problem-solving, and leadership skills that are essential for future STEM careers.",
      expanded: false,
    },
    {
      question: "How often does the team meet?",
      answer:
        "We meet regularly after school, with additional meetings during the build season leading up to competitions. Our schedule includes weekly practice sessions, special workshops, and collaborative events with other teams.",
      expanded: false,
    },
    {
      question: "What impact does Mechawolves have on the community?",
      answer:
        "Mechawolves not only sparks interest in STEM among students but also engages with the local community through outreach programs, demonstrations, and partnerships. We strive to inspire the next generation of engineers, coders, and innovators!",
      expanded: false,
    },
  ]);

  return (
    <>
      <Navbar />
      <section className="relative h-[700px] w-full mt-[-80px] overflow-x-clip">
        {displays.map((display, index) => (
          <img
            key={index}
            className={`w-full object-center object-cover h-full absolute transition-opacity duration-1000 ${index === currentDisplay ? "opacity-100" : "opacity-0"
              }`}
            src={display}
          />
        ))}
        <div className="bg-wolf-black opacity-85 w-full h-full absolute"></div>
        <div className="px-[45px] lg:px-[145px] h-full flex items-center">
          <MainText />
        </div>
        <div className="flex absolute bottom-6 -translate-y-1/2 left-1/2 -translate-x-1/2 items-center justify-center gap-4">
          <CircleArrowLeft
            size={24}
            className="opacity-20 hover:scale-[115%] transition-transform duration-150"
            onClick={() =>
              setCurrentDisplay(
                (prev) =>
                  displays.length > 0
                    ? (prev - 1 + displays.length) % displays.length
                    : 0
              )
            }
          />
          <div className="b-[145px]  flex gap-3">
            {displays.map((display, i) => (
              <div
                className={
                  "rounded-full w-2 h-2 " +
                  (i === currentDisplay ? "bg-wolf-blue" : "bg-blue-200")
                }
                key={display}
              ></div>
            ))}
          </div>
          <CircleArrowRight
            size={24}
            className="opacity-20 hover:scale-[115%] transition-transform duration-150"
            onClick={() =>
              setCurrentDisplay((prev) =>
                displays.length > 0 ? (prev + 1) % displays.length : 0
              )
            }
          />
        </div>
        <div
          style={{
            color: `rgb(${cappedVel * 255 * 0.3}, ${8 + cappedVel * 247 * 0.6
              }, ${34 + cappedVel * 221})`,
            transition: "color",
            letterSpacing: "-2px",
          }}
          className="font-[Passion_One] text-7xl absolute bottom-1 translate-y-[calc(100%-7px)] left-0 whitespace-nowrap overflow-hidden w-full"
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="whitespace-nowrap inline-block"
              style={{
                transform: `translateX(-${position / 2}px)`,
                transition: `transform`,
              }}
            >
              {Array.from({ length: 4 }).map((_, i) => (
                <span
                  key={i}
                  className={`transition-colors duration-500 relative marquee-item select-none ${velocity === 0 ? "hover:text-blue-950" : ""
                    }`}
                >
                  MECHAWOLVES
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>
      <div className="w-full py-10 flex flex-col gap-4 overflow-hidden relative">
        <div className="lg:px-[145px] px-[45px] w-full h-full">
          {/*
            <section className="gap-8 pt-16 md:pt-30 grid grid-cols-1 xl:grid-cols-2">
              <ResponsiveIframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" /> 
              <article className="lg:text-justify">
                <h2 className="font-[Passion_One] text-3xl mb-3">
                  WELCOME TO 3560
                </h2>
                <p>
                  At 3560 FRC Robotics, we are a passionate team of students and
                  mentors dedicated to designing, building, and programming robots
                  for competition. Since 2011, our mission has been to foster
                  innovation, teamwork, and problem-solving skills while preparing
                  the next generation of STEM leaders. Through hands-on experience
                  and collaboration, we aim to inspire a love for technology and
                  make a positive impact on our community.
                </p>
              </article>
            </section>
          */}
          <section className="rounded-md max-sm:mb-20 xl:mb-14 my-16">
            <Countdown></Countdown>
          </section>
          <section className="border-1 rounded-md py-10 pb-14 max-sm:border-0 max-sm:px-0 px-8 max-sm:py-4 max-sm:pb-8 lg:px-16 border-white/20">
            <article className="mb-8 md:mb-16 lg:text-justify align-self-center">
              <h2 className="font-[Passion_One] text-3xl mb-3">SUBDIVISIONS</h2>
              <p>
                The 3560 FRC Robotics team is divided into specialized subteams
                that work together to bring the robot to life. The Mechanical
                team handles the design and assembly of the robot’s structure,
                while the Programming team writes the code for its functions.
                The Electrical team manages wiring and power systems, and the
                CAD team creates 3D models to plan the robot’s design. The
                Graphic team focuses on branding and visual content, and the
                Business team oversees fundraising, donations, and outreach
                to ensure the team’s success.
              </p>
            </article>
            <div className="grid lg:grid-cols-3 col-span-3 sm:grid-cols-2 max:sm:grid-cols-1 gap-16">
              {teamDescriptions.map((subteam) => (
                <article key={subteam.name} className="relative">
                  <h3 className="font-[Passion_One] text-2xl mb-3">
                    {subteam.name}
                  </h3>
                  <p className="mb-7">{subteam.description}</p>
                  {subteam.name !== "GRAPHICS" && (
                    <WolfButton
                      title="Learn More"
                      href={
                        subteam.name === "Field Building"
                          ? "/field-building"
                          : `/${subteam.name.toLowerCase()}`
                      }
                      hollow={false}
                    />
                  )}
                  <subteam.src className="absolute top-1/2 -translate-y-1/2 right-0 -translate-x-[200%] scale-[7.0] opacity-10"></subteam.src>
                </article>
              ))}
            </div>
          </section>
        </div>
        {/*<Testimonials />*/}
        <div className="lg:px-[145px] px-[45px] mt-20 flex flex-col gap-8">
          <div>
            <h1 className="text-3xl font-[Passion_One] uppercase">
              Ready to get in touch?
            </h1>
            <p className="text-xl">
              Mechawolves is a passionate team of engineers working to make
              change within FRC and Robotics. We would love your support for a
              bright future of innovation and possibility!
            </p>
          </div>

          <div id="FAQ" className="flex gap-4">
            <WolfButton title="Let's Chat" href="/donors" />
            <WolfButton
              title="Donor Package"
              callback={openDonorPackageModal}
              hollow
            />
          </div>
        </div>
        <div className="lg:px-[145px] px-[45px] my-22 flex flex-col gap-8 h-fit">
          <h1 className="text-3xl font-[Passion_One] uppercase">
            Frequently Asked Questions
          </h1>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 pt-2 gap-x-6 rounded-2xl shadow-sm">
            {faq.map((qa, index) => (
              <div
                key={qa.question}
                className="flex flex-col gap-4 pt-4 justify-between"
              >
                <div key={index} className="flex flex-col gap-4">
                  <button
                    className="cursor-pointer flex z-10 gap-2 items-center outline-0"
                    onClick={() => {
                      setFaq((prevFaq) =>
                        prevFaq.map((item, i) =>
                          i === index
                            ? { ...item, expanded: !item.expanded }
                            : item
                        )
                      );
                    }}
                  >
                    <motion.div
                      animate={{ rotate: qa.expanded ? 135 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Plus />
                    </motion.div>
                    <h1 className="text-left text-xl font-semibold">
                      {qa.question}
                    </h1>
                    <div className="h-1 grow ml-2 bg-gray-800/45"></div>
                  </button>
                  <AnimatePresence initial={false}>
                    {qa.expanded && (
                      <motion.div
                        key="answer"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.1 }}
                      >
                        <p className="text-lg transition-all duration-300">
                          {qa.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
