import React from 'react';

export default function Partidos() {
  // Mock data de partidos
    const matchesNearby = [
        {
        id: 1,
        title: "Dobles Viernes a la Noche - Amistoso",
        host: "Marcos Álvarez",
        date: "Mañana, 20:30 hs",
        playersCount: "2 de 4 jugadores",
        level: "3.5 - 4.5",
        type: "Dobles Mixto",
        surface: "Polvo de Ladrillo",
        location: "Palermo Tenis",
        distance: "1.2 km",
        img: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=400&auto=format&fit=crop"
        },
        {
        id: 2,
        title: "Práctica de Singles - Mañana",
        host: "Carlos Méndez",
        date: "Sábado, 09:00 hs",
        playersCount: "1 de 2 jugadores",
        level: "2.5 - 3.5",
        type: "Singles",
        surface: "Cemento",
        location: "Club San Telmo",
        distance: "3.1 km",
        img: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=400&auto=format&fit=crop"
        },
        {
        id: 3,
        title: "Dobles de Fin de Semana",
        host: "Elena Park",
        date: "Domingo, 17:00 hs",
        playersCount: "3 de 4 jugadores",
        level: "3.0 - 4.0",
        type: "Dobles Femenino",
        surface: "Polvo de Ladrillo",
        location: "Belgrano R C",
        distance: "2.5 km",
        img: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=400&auto=format&fit=crop"
        }
    ];

    const nearbyCourts = [
        { id: 1, name: "Club de Tenis Belgrano", rating: "4.6", dist: "1.1 km" },
        { id: 2, name: "Palermo Lawn Tennis", rating: "4.8", dist: "1.8 km" },
        { id: 3, name: "Centro Galicia Deportes", rating: "4.2", dist: "3.5 km" }
    ];

    // Alert de confirmación --esto es temporal
    const handleAbrirCrearPartido = () => {
        alert("Ventana flotante que tendrá el formulario de 'Crear una solicitud de partido'. No será un alert.");
    };

    return (
        <div className="container-fluid px-4 py-4" style={{ backgroundColor: '#fcfcfc' }}>
        <div className="row">
            
            {/***** COLUMNA IZQUIERDA *****/}
            <aside className="col-lg-3 col-md-4 mb-4">
            
            {/* Botón alert de crear partido */}
            <div className="card border-0 shadow-sm p-4 bg-white rounded-4 mb-4 text-center">
                <h5 className="fw-bold mb-2">¿Querés armar un partido?</h5>
                <p className="text-muted small mb-3">Publicá una solicitud e invitá a jugadores locales cercanos.</p>
                <button 
                onClick={handleAbrirCrearPartido}
                className="btn btn-dark w-100 rounded-pill fw-bold py-2 shadow-sm"
                >
                ➕ Crear un Partido
                </button>
            </div>

            {/* filtros */}
            <div className="card border-0 shadow-sm p-4 bg-white rounded-4">
                <h5 className="fw-bold mb-3">Filtros</h5>
            
                <div className="mb-3">
                <label className="form-label text-muted small fw-semibold text-uppercase" style={{ fontSize: '0.75rem' }}>Formato</label>
                <div className="d-flex gap-3 small">
                    <label><input type="checkbox" className="form-check-input me-1" defaultChecked /> Singles</label>
                    <label><input type="checkbox" className="form-check-input me-1" defaultChecked /> Dobles</label>
                </div>
                </div>
                
                <div className="mb-3">
                <label className="form-label text-muted small fw-semibold text-uppercase" style={{ fontSize: '0.75rem' }}>Preajustes de Nivel</label>
                <div className="d-flex flex-wrap gap-2">
                    <button className="btn btn-sm btn-light border rounded-pill px-3 text-secondary small">Principiante</button>
                    <button className="btn btn-sm btn-dark rounded-pill px-3 small">Intermedio</button>
                    <button className="btn btn-sm btn-light border rounded-pill px-3 text-secondary small">Avanzado</button>
                </div>
                </div>

                <div className="mb-3">
                <label className="form-label text-muted small fw-semibold text-uppercase" style={{ fontSize: '0.75rem' }}>Cuándo jugar</label>
                <div className="d-flex flex-wrap gap-1">
                    <span className="badge bg-light text-secondary border rounded-pill px-2 py-1 pointer">Hoy</span>
                    <span className="badge text-dark bg-opacity-20 rounded-pill px-2 py-1" style={{ backgroundColor: '#b5f67a' }}>Esta Semana</span>
                    <span className="badge bg-light text-secondary border rounded-pill px-2 py-1 pointer">Fin de Semana</span>
                </div>
                </div>

                <div className="mb-4">
                <label className="form-label text-muted small fw-semibold text-uppercase d-flex justify-content-between" style={{ fontSize: '0.75rem' }}>
                    <span>Radio de distancia</span>
                    <span className="fw-bold text-dark">5 km</span>
                </label>
                <input type="range" className="form-range" min="1" max="25" defaultValue="5" />
                </div>

                <button className="btn w-100 rounded-pill fw-bold text-dark py-2" style={{ backgroundColor: '#b5f67a', border: 'none' }}>
                Aplicar Filtros
                </button>
            </div>
            </aside>

            {/***** COLUMNA DEL MEDIO *****/}
            <main className="col-lg-6 col-md-8 mb-4">
            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
                <div>
                <h4 className="fw-bold m-0">Partidos Cercanos</h4>
                <p className="text-muted small m-0">Mostrando 3 partidos listos para unirse en Buenos Aires</p>
                </div>
                <select className="form-select form-select-sm rounded-pill border" style={{ width: '140px' }}>
                <option>Más recientes</option>
                <option>Por distancia</option>
                <option>Por nivel</option>
                </select>
            </div>

            {/* Iteración de tarjetas de partidos */}
            <div className="d-flex flex-column gap-3">
                {matchesNearby.map(match => (
                <div key={match.id} className="card border-0 shadow-sm p-3 bg-white rounded-4">
                    <div className="row g-3 align-items-center">
                    <div className="col-sm-4">
                        <img src={match.img} alt="Partido" className="w-100 rounded-3 object-fit-cover" style={{ height: '110px' }} />
                    </div>
                    <div className="col-sm-8">
                        <div className="d-flex justify-content-between align-items-start mb-1">
                        <h6 className="fw-bold text-dark mb-0">{match.title}</h6>
                        <span className="text-muted small fw-semibold" style={{ fontSize: '0.75rem' }}>{match.playersCount}</span>
                        </div>
                        <p className="text-muted small mb-2">Organiza: <strong>{match.host}</strong> · {match.date}</p>
                        
                        <div className="d-flex flex-wrap gap-1 mb-3">
                        <span className="badge bg-light text-secondary border rounded-pill small" style={{ fontSize: '0.7rem' }}>Nivel {match.level}</span>
                        <span className="badge bg-light text-secondary border rounded-pill small" style={{ fontSize: '0.7rem' }}>{match.type}</span>
                        <span className="badge bg-light text-secondary border rounded-pill small" style={{ fontSize: '0.7rem' }}>{match.surface}</span>
                        </div>

                        <div className="d-flex justify-content-between align-items-center pt-2 border-top">
                        <span className="text-muted small">📍 {match.location} ({match.distance})</span>
                        <div className="d-flex gap-2">
                            <button className="btn btn-sm btn-outline-secondary text-dark rounded-pill px-3" style={{ fontSize: '0.75rem' }}>Mensaje</button>
                            <button className="btn btn-sm btn-dark rounded-pill px-3 fw-bold" style={{ fontSize: '0.75rem', backgroundColor: '#b5f67a', color: '#000', border: 'none' }}>Unirse</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </main>

            {/***** COLUMNA DERECHA *****/}
            <aside className="col-lg-3 col-md-12 mb-4">
            {/* Mapa */}
            <div className="card border-0 shadow-sm p-3 bg-white rounded-4 mb-4">
                <h5 className="fw-bold mb-3">Vista de Mapa</h5>
                <div className="rounded-3 overflow-hidden border position-relative" style={{ height: '220px' }}>
                <img 
                    src="https://images.unsplash.com/photo-1612293912199-35c8b54b6dfb?q=80&w=400&auto=format&fit=crop" 
                    className="w-100 h-100 object-fit-cover" 
                    alt="Mapa Buenos Aires" 
                />
                <div className="position-absolute bottom-0 start-0 w-100 bg-dark bg-opacity-70 text-white text-center py-1 small fw-semibold" style={{ fontSize: '0.75rem' }}>
                    📍 Buscando en Palermo y cercanías
                </div>
                </div>
            </div>

            {/* Clubes/Canchas Cercanas */}
            <div className="card border-0 shadow-sm p-4 bg-white rounded-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold m-0">Canchas Cercanas</h5>
                <span className="text-muted small" style={{ fontSize: '0.75rem' }}>Ver 12 más</span>
                </div>
                
                <div className="d-flex flex-column gap-3">
                {nearbyCourts.map(court => (
                    <div key={court.id} className="d-flex align-items-center justify-content-between border-bottom pb-2 last-border-0">
                    <div>
                        <span className="fw-bold d-block small text-dark">{court.name}</span>
                        <span className="text-muted small" style={{ fontSize: '0.75rem' }}>⭐ {court.rating} · {court.dist}</span>
                    </div>
                    <button className="btn btn-sm btn-outline-dark rounded-pill px-3" style={{ fontSize: '0.7rem' }}>Ver</button>
                    </div>
                ))}
                </div>
            </div>
            </aside>

        </div>
        </div>
    );
}