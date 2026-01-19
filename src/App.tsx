import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import NotFound from "./components/layout/NotFound";

function App() {

  return (
    <div className="app-background">
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="*" element={<NotFound />} />
      </Routes>


      <Footer />
    </div>
  )
}

export default App
