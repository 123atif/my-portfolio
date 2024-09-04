import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import WorkSection from "./components/WorkSection";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WorkSection />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
