import React, {
  useEffect,
} from "react";
import { Link } from "react-router-dom";
import "./Tea.css";
import About from "./about-bcg.jpeg";
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

      {/* About */}
      <section>
        <div className="section-center clearfix">
          <article className="abt-img">
            <div className="abt-pics-container">
              <img
                src={About}
                alt=""
                className="abt-pics"
              />
            </div>
          </article>
          <article className="abt-info">
            <div className="section-title">
              <h3>about our</h3>
              <h2>tea station</h2>
            </div>
            <p className="abt-text">
              Lorem ipsum dolor, sit
              amet consectetur
              adipisicing elit. Possimus
              distinctio aperiam
              repellat modi? Tempore,
              debitis?
            </p>
            <p className="abt-text">
              Lorem ipsum dolor, sit
              amet consectetur
              adipisicing elit. Possimus
              distinctio aperiam
              repellat modi? Tempore,
              debitis?
            </p>
            <Link
              to="/about"
              className="btn"
            >
              learn more
            </Link>
          </article>
        </div>
      </section>
      {/* End of About */}

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
