import { Link } from 'react-router-dom';

export default function Index(){

    return (
        <>
            <section>
                <h1 className="text-center mt-4">Tenis Local - Organiza tu pasión acá</h1>
            </section>

            <section className="container section-bg-light">
                <h2 className="text-center text-primary">Pasión por el Tenis</h2>
                <p className="text-center">Descubre nuestras funciones pronto</p>
                <div className="d-flex justify-content-center">
                    <Link to="#" className="btn btn-primary" id="boton_contacto_inicio">Contactanos</Link>
                </div>
            </section>

        </>
        
    );
}