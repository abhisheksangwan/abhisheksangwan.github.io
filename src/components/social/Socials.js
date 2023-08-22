import Icon from "../../Icons";

const Socials = () => {
  return (
    <section className="socials" id="contact">
      <article className="socialbx">
        <h3>Socials</h3>
        <p>connect with me via various socials handles</p>
        <div className="icon_bx">
          <a href="https://github.com/abhisheksangwan" className="icon">
            <Icon name="Github" color="black" size={15} />
          </a>
          <a href="https://twitter.com/AbhishekSangwn" className="icon">
            <Icon name="Twitter" color="black" size={15} />
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-sangwan/"
            className="icon"
          >
            <Icon name="Linkedin" color="black" size={15} />
          </a>
        </div>
      </article>
    </section>
  );
};

export default Socials;
