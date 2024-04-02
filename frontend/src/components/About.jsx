import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            RestoCafe is more than just your average cafe.
            We're a community hub where you can relax, refuel, and reconnect. 
            We offer a delicious selection of restaurant-quality dishes alongside your favorite cafe beverages.
            Whether you're craving a satisfying breakfast, a light lunch, or a sweet treat, we have something to tempt your taste buds. 
            Our warm and inviting atmosphere is perfect for catching up with friends, getting some work done, or simply enjoying a moment to yourself.
            We believe in providing exceptional service and high-quality food in a comfortable and welcoming space. 
            Come visit RestoCafe and experience the perfect blend of restaurant and cafe!
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
