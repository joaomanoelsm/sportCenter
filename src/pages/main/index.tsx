import React from "react";
import AboutUs from "./aboutUs";
import Benefits from "./benefits";
import Explanation from "./explanation";
import Footer from "./footer";
import Header from "./header";
import Intro from "./intro";
import OurAcademy from "./ourAcademy";
import { GlobalStyle, StyledMain } from "./style";
import Workouts from "./workouts";

const Main = () => {
  return (
    <StyledMain>
      <Header />
      <Intro />
      <Workouts />
      <AboutUs />
      <Benefits />
      <OurAcademy />
      <Explanation />
      <Footer />
    </StyledMain>
  );
};

export default Main;
