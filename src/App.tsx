import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./components/layout/NotFound";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Experience from "./pages/Experience";
import MainLayout from "./components/layout/MainLayout";
import RayllStudio from "./pages/RayllStudio";
import I3Simulation from "./pages/I3Simulation";
import ScrollToTop from "./components/layout/ScrollToTop";
import Marquee from "./pages/Marquee";
import Personal from "./pages/Personal";

function App() {
  return (
    <div className="app-background">
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience/rayllstudio" element={<RayllStudio />} />
          <Route path="/experience/i3simulation" element={<I3Simulation />} />
          <Route path="/experience/marquee" element={<Marquee />} />
          <Route path="/experience/personal" element={<Personal />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App