
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <Layout>
      <div className="animate-page-transition">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </Layout>
  );
};

export default Index;
