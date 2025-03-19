import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

import { Experience } from "./pages/Experience";
import Skills from "./pages/Skills";

// import "../public/font/Poppins/Poppins-Black.ttf";

function App() {
  return (
    <>
      <Header />

      {/* <Home /> */}
      <Skills />
      <Experience />

      <Footer />
    </>
  );
}

export default App;
