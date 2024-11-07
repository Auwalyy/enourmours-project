import React from "react";
import "./About.css";
import Title from "./Title";
import InfoBox from "./InfoBox";

function About() {
  return (
    <div id="about">
      <Title title={"About Us"} />
      <div className="about">
        <h4>Why choose us</h4>
        <h3>Experts In Solving Complex Challenges For Our Clients</h3>
        <p>
          With a deep understanding of the latest technologies, we empower
          businesses to navigate challenges effectively. Our dedicated team is
          committed to delivering innovative solutions tailored to your needs.
        </p>
        <div className="achievments">
          <InfoBox title={"1k+"} subtitle={"Clients"} id={"first"} />
          <InfoBox title={"234"} subtitle={"Ongoing projects"} id={2} />
          <InfoBox title={"64"} subtitle={"Completed projects"} id={3} />
        </div>
        <h3 className="padd">
          Specialist in advicing clients on digital challenges
        </h3>
        <div className="group-a">
          <div className="text-group">
            <h4>First working process</h4>
            <p>
              Each project starts with a clear understanding of your goals. We
              analyse, strategies, and set a strong foundation to guide us from
              concept to completion, ensuring a smooth and efficient process
              every step of the way.
            </p>
          </div>
          <img src="/images/4.jpg" alt="" />
        </div>
        <div className="group-a rev">
          <div className="text-group">
            <h4>Dedicated team</h4>
            <p>
              Our dedicated team is passionate about delivering innovative
              solutions tailored to your needs. With diverse expertise and
              commitment to excellence, we collaborate closely to bring your
              visions to life. Together, we transform challenges into
              opportunities for success.
            </p>
          </div>
          <img src="/images/2.jpg" alt="" />
        </div>
        <div className="group-a">
          <div className="text-group">
            <h4>24/7 support</h4>
            <p>
              Our 24/7 support team is always ready to assist you, ensuring you
              never feel alone in your journey. Whether you have questions, need
              guidance or require immediate assistance, we are just a message
              away. Count on us to provide reliable support whenever you need
              it.
            </p>
          </div>
          <img src="/images/1.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
