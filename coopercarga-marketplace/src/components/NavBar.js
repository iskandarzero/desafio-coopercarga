import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light 
      border-bottom border-dark px-5 bg-light"
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Sairaf Store</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
          aria-expanded="false" aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
              <Link to="/help" className="nav-link">Ajuda</Link>
              <Link to="/jobs" className="nav-link">Trabalhe Conosco</Link>
              <Link to="/login" className="nav-link">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}