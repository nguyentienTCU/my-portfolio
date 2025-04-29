import HomeComponent from "@/components/Home/Home";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";

export default function Page() {
  return (
    <main>
      <HomeComponent />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
