import React from "react";
import "./Services.css";
import { GrServices } from "react-icons/gr";
import { MdWeb } from "react-icons/md";
import { MdOutlineComputer } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import Title from "./Title";

const serviceData = [
  {
    icon: <MdOutlineComputer />,
    title: "App Development",
    desc: "Building high-performance mobile and desktop apps, delivering immersive user experiences across iOS, Android, and more.",
  },
  {
    icon: <MdWeb />,
    title: "Web Design",
    desc: "Creating responsive, user-friendly websites that enhance your brand and captivate audiences using the latest technologies",
  },
  {
    icon: <MdDesignServices />,
    title: "Graphic Design",
    desc: 'Crafting memorable brand identities through unique logos and impactful visuals that make your brand stand out."',
  },
];

// {
//     icon: <GrServices />,
//     title: 'Digital Marketing',
//     desc: 'Driving growth through strategic SEO, social media, and data-driven campaigns to boost engagement and maximize reach.'
// },

const Services = () => {
  return (
    <>
      <Title title={"Our Services"} />
      <section id="services">
        <div>
          <div className="services__top-content">
            <h2>Streamline Your Business with out</h2>
            <h3>Top-Notch Services</h3>
          </div>

          <div className="service__item-wrapper">
            {serviceData.map((item, index) => (
              <div className="services__item" key={index}>
                <span className="service__icon">
                  <i>{item.icon}</i>
                </span>
                <h3 className="services__title">{item.title}</h3>
                <p className="description">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
