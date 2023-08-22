import React from "react";
import homech from "../../assets/pic2.png";
import { data } from "../../config/data";

const Home = () => {
  return (
    <section className="home">
      <article className="homeinfo">
        <h1 style={{fontSize:"3rem"}}>
          Hi i am <span>Abhishek</span>
        </h1>
        <p>
          <span aria-hidden={true}> {"<Role>"} </span>
          {data.role}
          <span aria-hidden={true}> {"</Role>"} </span>
        </p>
        <div className="homebtn">
          <a className="btn" href="#about">
            Explore More
          </a>
          <a
            className="btn iconbtn"
            target="_blank"
            rel="noreferrer"
            href={data.resumeLink}
          >
            Download CV <ion-icon name="download-outline"></ion-icon>
          </a>
        </div>
      </article>
      <img className="homeimg" src={homech} alt="home" />
    </section>
  );
};

export default Home;
