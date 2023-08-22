import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Project from "./components/projects/Project";
import Contact from "./components/contact/Contact";
import Socials from "./components/social/Socials";
import "./styles/main.css";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <About />
        <Socials />
        <Project />
        <Contact />
      </main>
    </div>
  );
}

export default App;
