import React from "react";
import "./Hero.css";
import Button from "./Button";

function Hero() {
  return (
    <div className="hero observe show">
      <section className="home">
        <div className="hero-contents">
          <h1>
            <span>Building Digital Solutions</span>
            <br /> That Elevates Your <br /> Brand
          </h1>
          <p>
            Discover a world where technology meets simplicity. Our innovative
            solutions empower you to create, connect, and grow without
            boundaries. With cutting-edge design and seamless functionality,
            we're here to bring your ideas to life effortlessly.
            {/* Let's unlock
            new possibilities together and drive success in every project. Dive
            in and explore the future with us!. */}
          </p>
          <div className="buttons">
            <Button
              title={"GET STARTED NOW"}
              theme={"primary"}
              handleClick={() => {}}
            />
            <Button title={"DISCOVER MORE"} theme={""} handleClick={() => {}} />
          </div>
        </div>

        <div className="hero-img">
          <img src="/images/3.jpg" alt="" />
        </div>
      </section>
    </div>
  );
}

export default Hero;

// Font: Times New roman
// Border boxes: #35413c
// Containers: #f0f0f5
// Navbar and logo:#00000
// Bg color: #ffffff
// Home page buttons font: canva sans
// Navbar and logo font: bright retro

// import React from "react";
// import "./Hero.css"
// import Button from "./Button";

// function Hero() {
//   return (
//      <div className="container">
//       <div className="hero observe show">
//       <section className="home">
//         <div className="hero-contents">
//           <h1><span>Building Digital Solutions</span><br />  That Elevates Your <br /> Brand</h1>
//           <p>
//           Discover a world where technology meets simplicity. Our innovative solutions empower you to create, connect, and grow without boundaries.
//           With cutting-edge design and seamless functionality,
//           we’re here to bring your ideas to life effortlessly.
//           Let’s unlock new possibilities together and drive success in every project.
//            Dive in and explore the future with us!.
//           </p>
//           <div className="buttons">
//             <button className="btn-1" title={"GET STARTED NOW"} theme={""} handleClick={() => {}}>GET STARTED NOW</button>
//           <button className="btn-2" title={"DISCOVER MORE"} theme={""} handleClick={() => {}}>DISCOVER MORE</button>
//           </div>
//         </div>

//         <div className="hero-img">
//           <img src="/images/3.jpg" alt="" />
//         </div>
//       </section>
//     </div>
//      </div>

//   );
// }

// export default Hero;

// Font: Times New roman
// Border boxes: #35413c
// Containers: #f0f0f5
// Navbar and logo:#00000
// Bg color: #ffffff
// Home page buttons font: canva sans
// Navbar and logo font: bright retro
