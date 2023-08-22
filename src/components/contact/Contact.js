import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <article className="contactbx">
        <h3>Have a new project?</h3>
        <p>
          would love to help you with your project just drop a mail and i'd
          reach back to you
        </p>
        <button className="iconbtn">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/AbhishekSangwn"
          >
            contact me <ion-icon name="send-outline"></ion-icon>
          </a>
        </button>
      </article>
    </section>
  );
};

export default Contact;
