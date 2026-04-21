import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
    // Delay initialization to ensure DOM is ready
    const timer = setTimeout(() => {
      const wrapper = document.querySelector("#smooth-wrapper");
      const content = document.querySelector("#smooth-content");

      if (!wrapper || !content) {
        console.warn("Wrapper or content not found");
        return;
      }

      try {
        smoother = ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 1.7,
          speed: 1.7,
          effects: true,
          autoResize: true,
          ignoreMobileResize: true,
        });

        smoother.scrollTop(0);
        smoother.paused(false);

        let links = document.querySelectorAll(".header ul a");
        links.forEach((elem) => {
          let element = elem as HTMLAnchorElement;
          element.addEventListener("click", (e) => {
            if (window.innerWidth > 1024) {
              e.preventDefault();
              let elem = e.currentTarget as HTMLAnchorElement;
              let section = elem.getAttribute("data-href");
              smoother.scrollTo(section, true, "top top");
            }
          });
        });
        window.addEventListener("resize", () => {
          ScrollSmoother.refresh(true);
        });
      } catch (error) {
        console.error("ScrollSmoother initialization error:", error);
      }
    }, 500); // Delay by 500ms

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          Logo
        </a>
        <a
          href="nhung.hn2912@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          nhung.hn2912@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
