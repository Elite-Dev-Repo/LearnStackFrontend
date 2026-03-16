import React from "react";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import LogoTree from "./components/LogoTree";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Submit from "./components/Submit";
import Howitworks from "./components/Howitworks";
import Categories from "./components/Categories";
import Community from "./components/Community";

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <LogoTree />
      <Howitworks />
      <Categories />

      <Community />
      <Submit />
      <Footer />
    </>
  );
};

export default App;
