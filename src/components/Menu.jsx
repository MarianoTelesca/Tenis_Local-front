import { Link } from 'react-router-dom'
import { useNavigate} from 'react-router-dom';

export default function Menu(){

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">*LOGO*</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/#'>Búsquedas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/#">Contacto</Link>
                        </li>
                    </ul>
                    
                    <Link className="btn btn-outline-success" type="submit" to="#">Login</Link> 

                </div>
            </div>
        </nav>
    )

}