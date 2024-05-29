import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Tooling from "./components/tooling/Tooling";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Quote from "./components/quote/Quote";
import Contact from "./components/contact/Contact";
const App = () => {
  return <div>
    <section id="HomePage">
      <Navbar />
      <Hero />
    </section>
    <section id="About">
      <About />
    </section>
    <section id="Services">
      <Parallax type="services" />
    </section>
    <section>
      <Services />
    </section>
    <section>
      <Tooling />
    </section>
    <section id="Portfolio">
      <Parallax type="portfolio" />
    </section>
    <section id="Portfolio1">
      <Portfolio />
    </section>
    <section>
      <Quote/>
      </section>
    {/* <section id="Contact">Portfolio3</section> */}
    <section id="Contact">
      <Contact/>
    </section>
  </div>;
};

export default App;
