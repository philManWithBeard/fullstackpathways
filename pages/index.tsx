import React from "react";

import Hero from "../src/sections/hero/Hero";
import ReverseHero from "../src/sections/hero/ReverseHero";
import LandingLayout from "../src/layouts/LandingLayout";

export default function Index() {
  return (
    <LandingLayout>
      <Hero
        title="Pick your Path to becoming a full stack developer"
        subtitle="Our bootcamp is designed to fit around your experience and your aspirations. You only have to pay for the modules you need."
        image="https://github.com/philManWithBeard/courserio/blob/main/public/pathways.png?raw=true"
        ctaText="Create your account now"
        ctaLink="/signup"
      />
      <ReverseHero
        title="Meet the Mentor who will guide you through your journey"
        subtitle="Your mentor will help you when you get stuck and reach out when your confidence drops"
        image="https://github.com/philManWithBeard/courserio/blob/main/public/pablo-success-2.png?raw=true"
        ctaText="Create your account now"
        ctaLink="/signup"
      />
      <Hero
        title="Watch the videos and understand the concepts"
        subtitle="We deliver the course content through engaging videos that thoroughly explain each topic"
        image="https://github.com/philManWithBeard/courserio/blob/main/public/pablo-961.png?raw=true"
        ctaText="Create your account now"
        ctaLink="/signup"
      />
      <ReverseHero
        title="Complete the coursework, get graded and build your portfolio"
        subtitle="We'll review all of your work and ensure that it meets the standards that the industry expects"
        image="https://github.com/philManWithBeard/courserio/blob/main/public/pablo-page-under-construction.png?raw=true"
        ctaText="Create your account now"
        ctaLink="/signup"
      />
      <Hero
        title="Prepare for interview"
        subtitle="We'll help you apply for jobs and prepare you for your interview"
        image="https://github.com/philManWithBeard/courserio/blob/main/public/pablo-865.png?raw=true"
        ctaText="Create your account now"
        ctaLink="/signup"
      />
    </LandingLayout>
  );
}
