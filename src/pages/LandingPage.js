// src/components/LandingPage.jsx
import React from "react";
import { HeroImage } from "../styles/LandingPage.styles";
import kauImage from "../assets/kau_image.png";

export default function LandingPage() {
  return <HeroImage src={kauImage} alt="KAU-NCCOSS 이미지" />;
}
