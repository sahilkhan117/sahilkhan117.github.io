// import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { Experience } from "./pages/Experience";
import Skills from "./pages/Skills";
import { FloatingDockDemo } from "./components/FloatingDockDemo";

// import "../public/font/Poppins/Poppins-Black.ttf";

function App() {
  return (
    <>
      <Header />

      {/* <Home /> */}
      <FloatingDockDemo />
      <Skills />
      <Experience />

      <Footer />
    </>
  );
}

export default App;
