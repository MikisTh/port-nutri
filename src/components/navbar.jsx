import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <h2 className="logo">Nutri<span>Life</span></h2>

      <nav>
        <Link to="/">Início</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/servicos">Serviços</Link>
        <Link to="/depoimentos">Depoimentos</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contato" className="btn">Contato</Link>
      </nav>
    </header>
  );
}
