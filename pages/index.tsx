import React from "react";

import Hero from "../src/sections/hero/Hero";
import ReverseHero from "../src/sections/hero/ReverseHero";
import LandingLayout from "../src/layouts/LandingLayout";

export default function Landing() {
  return (
    <LandingLayout>
      <Hero
        title="Pick your Path to becoming a full stack developer"
        subtitle="Our bootcamp is designed to fit around your experience and your aspirations. You only have to pay for the modules you need."
        image="https://github.com/philManWithBeard/courserio/blob/main/public/pablo-965.png?raw=true"
        ctaText="Create your account now"
        ctaLink="/signup"
      />
      <ReverseHero
        title="Meet the Mentor who will guide you through your journey"
        subtitle="Your mentor will help you when you get stuck and reach out when your confidence drops"
        image="https://github.com/philManWithBeard/courserio/blob/main/public/pablo-965.png?raw=true"
        ctaText="Create your account now"
        ctaLink="/signup"
      />
    </LandingLayout>
  );
}
