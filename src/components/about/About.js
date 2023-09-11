import about2 from "../../assets/about03.png";
import clock from "../../assets/clock.png";
import location from "../../assets/location.png";
import microphone from "../../assets/microphone.png";
import bag from "../../assets/bag.png";

import aboutImg from ".././../assets/about01.png";
import { data } from "../../config/data";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="basicinfo">
        <div className="imgbx">
          <img src={aboutImg} alt="about img" />
        </div>
        <div className="info">
          <h2>
            <img src={microphone} alt="microphone" /> about me
          </h2>
          <p>Abhishek Sangwan</p>
          <div className="aboutskill">
            Full stack Developer, Open Source enthusiast
          </div>
          <p>
            india, <span>Haryana</span>
          </p>
          <p>
            age: <span>21</span>
          </p>
          <p className="desc">{data.about.bio}</p>
          <a
            target="_blank"
            rel="noreferrer"
            href={data.resumeLink2}
            className="btn iconbtn"
          >
            Download CV <ion-icon name="download-outline"></ion-icon>
          </a>
        </div>
      </div>

      <div className="eduinfo">
        <div className="edubox">
          <h2 className="boxheading">
            <img src={bag} alt="bag" /> education
          </h2>

          {data.about.education &&
            data.about.education.map((course) => (
              <div className="course" key={course.name}>
                <h2 className="course__name">{course.name}</h2>
                <div className="courseinfo">
                  <div className="bx">
                    <img className="roundbtn" src={location} alt="" />
                    <p>{course.location}</p>
                  </div>
                  <div className="bx">
                    <img className="roundbtn" src={clock} alt="" />
                    <p>{course.date}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="imgbx">
          <img src={about2} alt="about img" />
        </div>
      </div>
    </section>
  );
};

export default About;
