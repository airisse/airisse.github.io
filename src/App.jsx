import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="box-border m-0 p-0 font-primary">
      <Navbar logoName="Airisse Repala" />
      <Hero name="Airisse" skillOne="virtual assistant" skillTwo="freelancer" />
      <About
        paragraphOne="Hola! I'm Ginnele Airisse, a dependable career-shifter from Manila, Philippines, passionate about freelancing and virtual assistance. I provide knowledge and expertise from my five years of teaching and a 30-unit master's degree. In the virtual world, my organization, communication, creativity, problem-solving, and adaptability are essential. I value listening to my clients’ needs and being proactive to achieve productivity."
        paragraphTwo="I value listening to my clients needs and being proactive to achieve productivity. I want to bring innovation and perseverance to every project. Let's collaborate and sail successfully!
        "
        paragraphThree=""
      />
      <Services />
      <Contact
        name="Ginnele Airisse Repala"
        email="email@google.com"
        phone="+63 9124561289"
        city="Antipolo City, Philippines"
      />
    </div>
  );
}

export default App;
