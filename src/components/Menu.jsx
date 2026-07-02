import { Link } from 'react-router-dom';

export default function Menu() {
  return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top py-3">
        <div className="container-fluid px-4">
            
            {/* LOGO: Tenis Local */}
            <Link to="/" className="navbar-brand fw-bold fs-4 text-dark" style={{ letterSpacing: '-0.5px' }}>
            Tenis <span style={{ color: '#000' }}>Local</span>
            </Link>

            {/* Botón Hamburguesa */}
            <button 
            className="navbar-toggler border-0" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarScroll" 
            aria-controls="navbarScroll" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarScroll">
                
                {/* ENLACES CENTRALES (Iguales a la imagen) */}
                <ul className="navbar-nav mx-auto my-2 my-lg-0 gap-3 text-center">
                    <li className="nav-item">
                    <Link className="nav-link text-secondary small fw-semibold" to="#">Canchas</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-secondary small fw-semibold" to="#">Jugadores</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-secondary small fw-semibold" to="#">Partidos</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-secondary small fw-semibold" to="#">Reservas</Link>
                    </li>
                </ul>
                
                {/* BOTONES DE LOGIN Y REGISTRO */}
                <div className="d-flex justify-content-center align-items-center gap-3 mt-2 mt-lg-0">
                    <Link 
                    className="nav-link text-secondary small fw-semibold px-2" 
                    to="/perfil"
                    >
                    Log in
                    </Link>
                    
                    <Link 
                    className="btn rounded-pill px-4 py-2 small fw-bold text-dark shadow-sm" 
                    to="#" 
                    style={{ backgroundColor: '#b5f67a', border: 'none', fontSize: '0.9rem' }}
                    >
                    Registrarse
                    </Link>
                </div>

            </div>
        </div>
        </nav>
    );
}