import Card from "../card/Card";
import calander from "../../assets/calander.png";
import { data} from "../../config/data";
import microphone from "../../assets/microphone.png";
import hacks from ".././../assets/hackathons.jpg";

const Project = () => {
  return (
    <div>
      <section className="projects" id="projects">
        <h2 className="boxheading">
          <img src={calander} alt="calander" /> projects
        </h2>

        <div className="projects__wrapper">
          {data.projects &&
            data.projects.map((project) => (
              <Card key={project.name} data={project} />
            ))}
        </div>
      </section>
      <section className="hackathons">
        <div className="basicinfo">
          <div className="imgbx">
            <img src={hacks} alt="about img" />
          </div>
          <div className="info">
            <h2>
              <img src={microphone} alt="microphone" /> Want More?
            </h2>
            <p className="desc">
              I actively contribute to open source projects and write blogs, in
              addition to participating in hackathons. Through open source, I
              collaborate with developers to make valuable contributions, while
              my blog posts share knowledge and inspire fellow developers. These
              activities are a significant part of my journey, making a lasting
              impact in the tech community.
            </p>
            <div className="more">
              <a
                target="_blank"
                rel="noreferrer"
                href={data.devpost}
                className="btn iconbtn"
              >
                Devpost <ion-icon name="download-outline"></ion-icon>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href={data.github}
                className="btn iconbtn"
              >
                Github <ion-icon name="download-outline"></ion-icon>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
