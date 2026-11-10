import { useEffect } from "react";
import type { ReactNode } from "react";
import { Mails, Phone, Twitter, Youtube, Instagram } from "lucide-react";
import windowSizeContext from "src/contexts/windowSizeContext";
import Logo from "public/Logo.svg";
import { openDonorPackageModal } from "src/functions/donorPackage";
import { Link } from "react-router";

export default function Footer() {
  const { width } = windowSizeContext();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mechawolf = document.querySelector(".mechawolf") as HTMLElement;

      if (!mechawolf) return;

      const rect = mechawolf.getBoundingClientRect();

      const sensitivity = 0.03;
      const offsetX = rect.width * 0.3;
      const offsetY = 1;

      const wolfX = rect.left + rect.width / 2 + offsetX;
      const wolfY = rect.top + rect.height / 2 + offsetY;
      const mouseOffsetX = e.clientX - wolfX;
      const mouseOffsetY = Math.min(e.clientY - wolfY, -15);

      const angle =
        Math.atan2(mouseOffsetY, mouseOffsetX) * sensitivity * (360 / Math.PI);

      mechawolf.style.transform = `translateY(50%) translateY(80px) translateX(80px) rotate(${angle + 360 * sensitivity
        }deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <footer
      id="contact"
      className="py-10 flex relative lg:px-[145px] px-[45px] sm:h-[500px] bg-wolf-blue text-wolf-black items-center justify-left overflow-hidden"
    >
      {width > 1024 && (
        <div className="absolute top-0 left-18 -translate-x-1/2 h-full">
          <div className="flex gap-3 absolute left-1/2 top-1/2 -translate-1/2 flex-col z-10">
            {[
              { link: "mailto:3560frc@gmail.com", icon: Mails },
              { link: "tel:+19057912400", icon: Phone },
              { link: "https://x.com/Team3560", icon: Twitter },
              {
                link: "https://www.youtube.com/@chinguacousyrobotics7775",
                icon: Youtube,
              },
              { link: "https://www.instagram.com/3560frc/", icon: Instagram },
            ].map((social) => (
              <a
                key={social.link}
                target="_blank"
                className="rounded-full bg-wolf-black p-3 hover:scale-[110%] transition-transform duration-200"
                href={social.link}
              >
                <social.icon color="white" />
              </a>
            ))}
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-wolf-black"></div>
        </div>
      )}
      <div className="flex flex-col gap-12">
        <h1 className="uppercase font-[Passion_One] text-4xl">Team 3560</h1>
        <div className="flex sm:flex-row flex-col gap-10 sm:gap-20">
          <div className="flex flex-col max-xl:flex-col gap-4">
            <h1 className="uppercase font-[Passion_One] text-3xl">
              Main Pages
            </h1>
            <ul className="font-semibold">
              <FooterLink title="Home" href="/" />
              <FooterLink
                title="Donors & Contact"
                href="/donors"
              />
              <FooterLink title="Registration" href="/registration" />
              <FooterLink
                title="FIRST"
                href="https://www.firstinspires.org/robotics/frc"
              />
            </ul>
          </div>
          <div className="flex flex-col max-xl:flex-col gap-4">
            <h1 className="uppercase font-[Passion_One] text-3xl">Divisions</h1>
            <ul className="font-semibold">
              <FooterLink title="CAD" href="/cad" />
              <FooterLink title="Mechanical" href="/mechanical" />
              <FooterLink title="Electrical" href="/electrical" />
              <FooterLink title="Field Build" href="/field-building" />
              <FooterLink title="Programming" href="/programming" />
              <FooterLink title="Business" href="/business" />
              <FooterLink title="Executive" href="/executive" />
            </ul>
          </div>
          <div className="flex flex-col max-xl:flex-col gap-4">
            <h1 className="uppercase font-[Passion_One] text-3xl">
              Contact info
            </h1>
            <ul className="font-semibold">
              <FooterLink
                title={
                  <span className="flex gap-2 items-center">
                    <Mails color="#00041A" size={20} /> 3560frc@gmail.com
                  </span>
                }
                href="mailto:3560frc@gmail.com"
              />
              <FooterLink
                title={
                  <span className="flex gap-2 items-center">
                    <Phone color="#00041A" size={20} /> +1 905-791-2400 ext 515
                  </span>
                }
                href="tel:+19057912400"
              />
            </ul>
          </div>
        </div>
      </div>
      {width > 900 && (
        <div
          className="absolute origin-bottom-right bottom-1/2 right-0 mechawolf"
          style={{
            transform: "translateY(50%) translateY(80px) translateX(80px)",
          }}
        >
          <img
            className="animate-[breathe_7s_ease-in-out_infinite]"
            src={Logo}
          />
        </div>
      )}
    </footer>
  );
}

function FooterLink({
  title,
  href,
  callback,
}: {
  title: ReactNode;
  href: string;
  callback?: () => void;
}) {
  const className = "hover:underline cursor-pointer";
  return (
    <li>
      {
        href.includes("tel:") || href.includes("https://") || href.includes("mailto:") ? <a className={className} href={href}>{title}</a> : (
          callback ?
            <button onClick={callback} className={className}>{title}</button>
            : (
              <Link to={href} className={className}>{title}</Link>
            )
        )
      }
    </li>
  );
}
