import HomeComponent from "@/components/Home";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

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
