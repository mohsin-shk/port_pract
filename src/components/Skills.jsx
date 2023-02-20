import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/imgs/meter1.svg";
import meter2 from "../assets/imgs/meter2.svg";
import meter3 from "../assets/imgs/meter3.svg";
import arrow1 from "../assets/imgs/arrow1.svg";
import arrow2 from "../assets/imgs/arrow2.svg";
import colorSharp from "../assets/imgs/color-sharp.png";

export const Skills = () => {
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I have learned quite some skills throughout my Web development
                journey.<br></br>The current approximate percentage according to me in each tech or language is shown below.     
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>React js</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Next js</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>MongoDB/Mongoose</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
