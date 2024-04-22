import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Photography from "./components/Photography";


export default function Home() {

  let slides = [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
    "/images/photo4.jpg",
    "/images/photo5.jpg",
    "/images/photo6.jpg",
    "/images/photo7.jpg",
  ];

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]    ">
      <Navbar />
      <div class="container mt-24 mx-auto px-5 py-4">
        <HeroSection />
        <Skills />
        <AboutSection />
        <ProjectsSection />
        <div className="w-[37%] m-auto pt-11">
        <Photography slides={slides} />
        </div>
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
