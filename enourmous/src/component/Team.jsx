import React from "react";
import "./Team.css";
import Title from "./Title";
import PersonCard from "./PersonCard";

function Team() {
  const teamMembers = [
    {
      name: "Abdullahi Labaran Ahmad",
      title: "CFO",
      image: "/images/L-Ahmad.jpg",
    },
    { name: "Usman Mansur Usman", title: "CEO", image: "/images/shehu.jpg" },
    {
      name: "Auwal Muhammad Izziddin",
      title: "CTO",
      image: "/images/baffa.jpg",
    },
    {
      name: "Sadiq Yusuf Yunus",
      title: "Marketer",
      image: "/images/sadiq.jpg",
    },
    {
      name: "Mahmoud Ibrahim Alkhalee",
      title: "Social media manager",
      image: "/images/alkhalee.jpg",
    },
  ];
  return (
    <>
      <Title title={"Our Team"} />
      <div className="team">
        <h2>Meet the Experts driving the vision</h2>
        <div className="top-people">
          <PersonCard {...teamMembers[0]} />
          <PersonCard {...teamMembers[1]} size={"big"} />
          <PersonCard {...teamMembers[2]} />
        </div>
        <div className="bottom-people">
          <PersonCard {...teamMembers[3]} />
          <PersonCard {...teamMembers[4]} />
        </div>
      </div>
    </>
  );
}

export default Team;
