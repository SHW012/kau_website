import React from "react";
import { Wrapper, HeroImage } from "../styles/LandingPage.styles";
import kauImage from "../assets/kau_image.png";

export default function LandingPage() {
  return (
    <Wrapper>
      <HeroImage src={kauImage} alt="KAU-NCCOSS 이미지" />
    </Wrapper>
  );
}
