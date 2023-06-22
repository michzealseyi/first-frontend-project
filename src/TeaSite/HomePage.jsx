import React, {
  useEffect,
} from "react";
import { Link } from "react-router-dom";
import "./Tea.css";
import MugSvg from "./MugSvg";
import GlassSvg from "./GlassSvg";
import BombSvg from "./BombSvg";
import MortarSvg from "./MortarSvg";
import About from "./about-bcg.jpeg";
import Ginger from "./product-1.jpeg";
import Fruit from "./product-2.jpeg";
import White from "./product-3.jpeg";
import HomeSvg from "./HomeSvg";
import LocationSvg from "./LocationSvg";
import EnvelopeSvg from "./EnvelopeSvg";
import PhoneSvg from "./PhoneSvg";
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
            <a
              href="about.html"
              className="btn"
            >
              learn more
            </a>
          </article>
        </div>
      </section>
      {/* End of About */}
      {/* Products */}
      <section className="products">
        <div className="section-center clearfix">
          <article className="product-info">
            <div className="section-title">
              <h3>check out</h3>
              <h2>our products</h2>
            </div>
            <p className="product-text">
              Lorem ipsum dolor sit amet
              consectetur adipisicing
              elit. Veniam impedit sunt
              doloribus ullam, neque
              quos, perspiciatis libero
              inventore commodi autem
              expedita eum! Sequi,
              ducimus esse.
            </p>
            <a
              href="products.html"
              className="btn"
            >
              inventory
            </a>
          </article>
          <article className="products-inventory clearfix">
            <div className="product">
              <img
                src={Ginger}
                alt=""
                className="product-img"
              />
              <h4 className="product-title">
                ginger peach tea
              </h4>
              <h4 className="product-price">
                $10.55
              </h4>
            </div>
            <div className="product">
              <img
                src={Fruit}
                alt=""
                className="product-img"
              />
              <h4 className="product-title">
                fruit sangria
              </h4>
              <h4 className="product-price">
                $10.55
              </h4>
            </div>
            <div className="product">
              <img
                src={White}
                alt=""
                className="product-img"
              />
              <h4 className="product-title">
                white tea
              </h4>
              <h4 className="product-price">
                $10.55
              </h4>
            </div>
          </article>
        </div>
      </section>
      {/* End of Products */}
      {/* Services */}
      <section className="services">
        <div className="section-title services-title">
          <h3>explore</h3>
          <h2>our services</h2>
        </div>
        <div className="section-center clearfix">
          <article className="service-card">
            <div className="service-img-container">
              <img
                src={Ginger}
                alt=""
                className="service-img"
              />
              <span className="service-icon mortarsvg">
                <MortarSvg />
              </span>
            </div>
            <div className="service-info">
              <h4>custom recipes</h4>
              <p>
                Lorem ipsum dolor sit
                amet consectetur
                adipisicing elit.
                Accusamus iusto
                consequatur, architecto
                reiciendis velit
                dolores?
              </p>
              <a
                href="product.html"
                className="btn service-btn"
              >
                read more
              </a>
            </div>
          </article>
          <article className="service-card">
            <div className="service-img-container">
              <img
                src={Fruit}
                alt=""
                className="service-img"
              />
              <span className="service-icon homesvg">
                <HomeSvg />
              </span>
            </div>
            <div className="service-info">
              <h4>home delivery</h4>
              <p>
                Lorem ipsum dolor sit
                amet consectetur
                adipisicing elit.
                Accusamus iusto
                consequatur, architecto
                reiciendis velit
                dolores?
              </p>
              <a
                href="product.html"
                className="btn service-btn"
              >
                read more
              </a>
            </div>
          </article>
          <article className="service-card">
            <div className="service-img-container">
              <img
                src={White}
                alt=""
                className="service-img"
              />
              <span className="service-icon mugsvg">
                <MugSvg />
              </span>
            </div>
            <div className="service-info">
              <h4>tea aging</h4>
              <p>
                Lorem ipsum dolor sit
                amet consectetur
                adipisicing elit.
                Accusamus iusto
                consequatur, architecto
                reiciendis velit
                dolores?
              </p>
              <a
                href="product.html"
                className="btn service-btn"
              >
                read more
              </a>
            </div>
          </article>
        </div>
      </section>
      {/* End of Services */}
      {/* contact */}
      <section className="contact">
        <div className="section-center clearfix">
          <article className="contact-info">
            <div className="contact-item">
              <h4 className="contact-title">
                <span className="contact-icon">
                  <LocationSvg />
                </span>
                address
              </h4>
              <h4 className="contact-text">
                27 Agbado Road,
                <br /> lagos Nigeria
                10001
              </h4>
            </div>
            <div className="contact-item">
              <h4 className="contact-title">
                <span className="contact-icon">
                  <EnvelopeSvg />
                </span>
                email
              </h4>
              <h4 className="contact-text">
                owolabimichzealseyi@gmail.com
              </h4>
            </div>
            <div className="contact-item">
              <h4 className="contact-title">
                <span className="contact-icon">
                  <PhoneSvg />
                </span>
                telephone
              </h4>
              <h4 className="contact-text">
                +2347065095608
              </h4>
            </div>
          </article>
          <article className="contact-form">
            <h3>contact us</h3>
            <form action="">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="name"
                  className="form-control"
                  name="name"
                />
                <input
                  type="email"
                  placeholder="email"
                  className="form-control"
                  name="email"
                />
                <textarea
                  name="message"
                  placeholder="message"
                  className="form-control"
                  rows="5"
                ></textarea>
              </div>
              <button
                type="submit"
                className="submit-btn btn"
              >
                submit here
              </button>
            </form>
          </article>
        </div>
      </section>
      {/* end of contact */}
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
