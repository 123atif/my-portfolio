import About from "./components/About";
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
    </>
  );
}

export default App;
