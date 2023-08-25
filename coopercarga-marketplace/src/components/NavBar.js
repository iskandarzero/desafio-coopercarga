import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light border-bottom border-dark px-5 bg-light">
      <div class="container-fluid">
        <Link to="/" class="navbar-brand">Sairaf Store</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
          aria-expanded="false" aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
              <Link to="/help" class="nav-link">Ajuda</Link>
              <Link to="/jobs" class="nav-link">Trabalhe Conosco</Link>
              <Link to="/login" class="nav-link">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}