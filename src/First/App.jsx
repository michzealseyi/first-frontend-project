import "./App.css";
import GUITAR from "./Bass.jpg";
import DRUMS from "./drums.jpg";
import BASSVG from "./guitar-solid.svg";
import DRUMSVG from "./drum-solid.svg"
function App() {
  return (
    <div className="body">
      <section className="blogs">
        <div className="section-title">
          <h2>Latest Blogs</h2>
        </div>
        <div className="blogs-center">
          <article className="blog">
            <img src={GUITAR} alt="" className="img"/>
            <div className="blog-content">
              <span>
                Bass{" "}
                <img
                  src={BASSVG}
                  alt=""
                  className="reddit"
                />
              </span>
              <h3>
                why i love the bass
                guitar
              </h3>
              <p>
                Lorem ipsum dolor sit,
                amet consectetur
                adipisicing elit.
                Accusantium veniam
                consequatur doloremque
                delectus quos nam!
              </p>
              <a href="#">read more</a>
            </div>
          </article>
          <article className="blog">
            <img src={DRUMS} alt="" className="img" />
            <div className="blog-content">
              <span>
                Drums{" "}
                <img
                  src={DRUMSVG}
                  alt=""
                  className="reddit"
                />
              </span>
              <h3>
                why i love the drums
              </h3>
              <p>
                Lorem ipsum dolor sit,
                amet consectetur
                adipisicing elit.
                Accusantium veniam
                consequatur doloremque
                delectus quos nam!
              </p>
              <a href="#">read more</a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default App;
