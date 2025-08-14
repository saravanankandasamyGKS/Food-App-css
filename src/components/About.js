// src/components/AboutUs.js
import React from "react";

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p className="tagline">Delivering happiness, one meal at a time.</p>

      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          We are a passionate team behind your favorite food delivery app,
          bringing the best restaurants and chefs right to your doorstep. Whether it’s
          a midnight craving or a family feast, we’ve got your hunger covered.
        </p>
      </section>

      <section className="about-section">
        <h2>What We Do</h2>
        <p>
          Our platform connects you to a wide variety of restaurants, cafes, and
          cloud kitchens. With real-time tracking, secure payments, and lightning-fast
          delivery, we ensure every order is smooth and satisfying.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          To revolutionize the way India eats. We aim to make food ordering
          faster, smarter, and more enjoyable—anytime, anywhere.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
