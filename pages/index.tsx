import React from "react";

import Hero from "../src/sections/hero/Hero";
import LandingLayout from "../src/layouts/LandingLayout";

export default function Landing() {
  return (
    <LandingLayout>
      <Hero
        title="Pick your Path to becoming a full stack developer"
        subtitle="Our bootcamp is designed to fit around your experience and your aspirations. You only have to pay for the modules you need"
        image="https://source.unsplash.com/collection/404339/800x600"
        ctaText="Create your account now"
        ctaLink="/signup"
      />
    </LandingLayout>
  );
}
