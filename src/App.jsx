import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Sobre from "./pages/sobre";
import Serviços from "./pages/serviços";
import Depoimentos from "./pages/depoimentos";
import Blog from "./pages/Blog";
import Contato from "./pages/contato";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Serviços />} />
        <Route path="/depoimentos" element={<Depoimentos />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

