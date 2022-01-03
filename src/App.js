import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./app.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
