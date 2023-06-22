import React, {
  useEffect,
} from "react";
import { Link } from "react-router-dom";
import "./Tea.css";
import MugSvg from "./MugSvg";
import GlassSvg from "./GlassSvg";
import BombSvg from "./BombSvg";
import MortarSvg from "./MortarSvg";
import FaceBookSvg from "./FaceBookSvg";
import TwitterSvg from "./TwitterSvg";
import InstagramSvg from "./InstagramSvg";
import BarsSvg from "./BarsSvg";
import TimesSvg from "./TimesSvg";
function Tea() {
  useEffect(() => {
    const navBtn =
      document.getElementById(
        "nav-btn"
      );
    const navbar =
      document.getElementById("navbar");
    const navClose =
      document.getElementById(
        "nav-close"
      );

    navBtn.addEventListener(
      "click",
      () => {
        navbar.classList.add("showNav");
      }
    );
    navClose.addEventListener(
      "click",
      () => {
        navbar.classList.remove(
          "showNav"
        );
      }
    );
  }, []);

  return (
    <div className="body">
      {/* nav bar */}
      <span
        className="nav-btn"
        id="nav-btn"
      >
        <BarsSvg />
      </span>
      <nav
        className="navbar"
        id="navbar"
      >
        <div className="navbar-header">
          <span
            className="nav-close"
            id="nav-close"
          >
            <TimesSvg />
          </span>
        </div>
        <ul className="nav-items">
          <li>
            <Link
              to="/"
              className="nav-link"
            >
              home
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className="nav-link"
            >
              skills
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="nav-link"
            >
              about
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="nav-link"
            >
              products
            </Link>
          </li>
        </ul>
      </nav>
      {/* end of nav bar */}
      {/* Header */}
      <div className="header">
        <div className="banner">
          <h2>
            over one hundred flavors of
          </h2>
          <h1>
            specially <br />
            crafted tea
          </h1>
          <Link
              to="/"
              className="btn banner-btn"
            >
              explore
            </Link>
        </div>
      </div>
      {/* end of header */}
      <div className="content-divider"></div>
      {/* skills section */}
      <section className="skills clearfix">
        <article className="skill">
          <span className="skill-icon">
            <MugSvg />
          </span>
          <h4 className="skill-title">
            made in nigeria
          </h4>
          <p className="skill-text">
            Lorem ipsum dolor sit amet
            consectetur adipisicing
            elit. Iure officiis alias
            blanditiis quibusdam
            consectetur est.
          </p>
        </article>
        <article className="skill">
          <span className="skill-icon">
            <GlassSvg />
          </span>
          <h4 className="skill-title">
            relaxation
          </h4>
          <p className="skill-text">
            Lorem ipsum dolor sit amet
            consectetur adipisicing
            elit. Iure officiis alias
            blanditiis quibusdam
            consectetur est.
          </p>
        </article>
        <article className="skill">
          <span className="skill-icon">
            <BombSvg />
          </span>
          <h4 className="skill-title">
            energy
          </h4>
          <p className="skill-text">
            Lorem ipsum dolor sit amet
            consectetur adipisicing
            elit. Iure officiis alias
            blanditiis quibusdam
            consectetur est.
          </p>
        </article>
        <article className="skill">
          <span className="skill-icon">
            <MortarSvg />
          </span>
          <h4 className="skill-title">
            family recipe
          </h4>
          <p className="skill-text">
            Lorem ipsum dolor sit amet
            consectetur adipisicing
            elit. Iure officiis alias
            blanditiis quibusdam
            consectetur est.
          </p>
        </article>
      </section>
      {/* end of skills section */}

      {/* footer */}
      <footer className="footer">
        <div className="section-center">
          <div className="social-icons">
            <a
              href="#"
              className="social-icon"
            >
              <FaceBookSvg />
            </a>
            <a
              href="#"
              className="social-icon"
            >
              <TwitterSvg />
            </a>
            <a
              href="#"
              className="social-icon"
            >
              <InstagramSvg />
            </a>
          </div>
          <h4 className="footer-text">
            &copy; <span>2023 </span>
            <span className="company">
              tea station{" "}
            </span>
            all rights reserved
          </h4>
        </div>
      </footer>
    </div>
  );
}

export default Tea;
