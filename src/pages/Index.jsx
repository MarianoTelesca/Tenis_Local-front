import { Link } from 'react-router-dom';
import React from 'react';

// Datos de prueba para las canchas (Available courts)
const courts = [
    { id: 1, name: "Centro Tenis Recoleta", type: "Indoor", dist: "1.2 km", price: "$25000", rating: "4.6", reviews: "85", img: "https://via.placeholder.com/150" },
    { id: 2, name: "Club Tenis Martin Fierro", type: "Polvo de Ladrillo", dist: "3.4 km", price: "$28000", rating: "4.5", reviews: "210", img: "https://via.placeholder.com/150" },
    { id: 3, name: "K.D.T", type: "Indoor", dist: "2.1 km", price: "$20000", rating: "4.7", reviews: "134", img: "https://via.placeholder.com/150" },
    { id: 4, name: "Pasco Tenis", type: "Indoor", dist: "0.8 km", price: "$30000", rating: "4.8", reviews: "54", img: "https://via.placeholder.com/150" }
];

// Datos de prueba para los jugadores (Players looking for matches)
const players = [
    { id: 1, name: "Marco Gomini", level: "Intermedio", partidos: "28 partidos", img: "https://via.placeholder.com/80" },
    { id: 2, name: "Sofia Martinez", level: "Avanzado", partidos: "52 partidos", img: "https://via.placeholder.com/80" },
    { id: 3, name: "Diego Alvarez", level: "Principiante", partidos: "12 partidos", img: "https://via.placeholder.com/80" },
    { id: 4, name: "Elena Rossi", level: "Avanzado", partidos: "44 partidos", img: "https://via.placeholder.com/80" }
];

export default function Index() {
    return (
    <div className="container-fluid px-4 py-4" style={{ backgroundColor: '#fcfcfc' }}>
        <div className="row">
        
        {/* ================= SIDEBAR IZQUIERDO (FILTROS Y ACCIONES) ================= */}
        <aside className="col-lg-3 col-md-4 mb-4">
            <div className="card border-0 shadow-sm p-4 bg-white rounded-4">
                
                {/* Sección Filtros */}
                <h5 className="fw-bold mb-3">Filtros</h5>
                <div className="mb-3">
                    <label className="form-label text-muted small fw-semibold">Ciudad</label>
                    <input type="text" className="form-control form-control-sm rounded-3" placeholder="e.g., Buenos Aires" />
                </div>
                
                <div className="mb-3">
                    <label className="form-label text-muted small fw-semibold">fecha</label>
                    <input type="fecha" className="form-control form-control-sm rounded-3" />
                </div>

                <div className="mb-3">
                    <label className="form-label text-muted small fw-semibold">Nivel</label>
                    <div className="form-check small"><input className="form-check-input" type="checkbox" id="f-beg" /><label className="form-check-label" htmlFor="f-beg">Principiante</label></div>
                    <div className="form-check small"><input className="form-check-input" type="checkbox" id="f-int" defaultChecked /><label className="form-check-label" htmlFor="f-int">Intermedio</label></div>
                    <div className="form-check small"><input className="form-check-input" type="checkbox" id="f-adv" /><label className="form-check-label" htmlFor="f-adv">Avanzado</label></div>
                </div>

                <div className="mb-3">
                    <label className="form-label text-muted small fw-semibold">Superficie</label>
                    <div className="form-check small"><input className="form-check-input" type="checkbox" id="s-clay" /><label className="form-check-label" htmlFor="s-clay">Polvo de Ladrillo</label></div>
                    <div className="form-check small"><input className="form-check-input" type="checkbox" id="s-hard" /><label className="form-check-label" htmlFor="s-hard">Hard</label></div>
                    <div className="form-check small"><input className="form-check-input" type="checkbox" id="s-pasto" /><label className="form-check-label" htmlFor="s-pasto">Pasto</label></div>
                </div>

                <div className="mb-4">
                    <label className="form-label text-muted small fw-semibold">Precio ($/hora)</label>
                    <input type="range" className="form-range" min="0" max="100" />
                    <div className="d-flex justify-content-between text-muted small"><span>0</span><span>30000+</span></div>
                </div>

                <div className="form-check form-switch mb-4 small">
                    <input className="form-check-input" type="checkbox" id="disponibleAhora" />
                    <label className="form-check-label fw-semibold" htmlFor="disponibleAhora">Disponible ahora</label>
                    <button className="btn btn-sm btn-success bg-gradient float-end px-3 rounded-pill" style={{ backgroundColor: '#b5f67a', border: 'none', color: '#000' }}>Aplicar</button>
                </div>

                <hr className="text-muted" />

                {/* Quick Actions */}
                <h5 className="fw-bold my-3">Acciones rápidas</h5>
                <button className="btn w-100 mb-2 rounded-pill fw-semibold text-dark" style={{ backgroundColor: '#b5f67a', border: 'none' }}>Encontrá un partido</button>
                <button className="btn btn-outline-secondary w-100 mb-2 rounded-pill fw-semibold text-dark">Reserva una cancha</button>
                <button className="btn btn-outline-secondary w-100 mb-3 rounded-pill fw-semibold text-dark">Crea un partido</button>

                <hr className="text-muted" />

                {/* Quick Stats */}
                <h5 className="fw-bold my-3">Estadisticas</h5>
                <div className="d-flex align-items-center mb-2 small">
                    <span className="fs-4 me-2">🎾</span>
                    <div><strong className="d-block">128</strong> <span className="text-muted">Canchas cerca</span></div>
                </div>
                <div className="d-flex align-items-center mb-2 small">
                    <span className="fs-4 me-2">👥</span>
                    <div><strong className="d-block">2,432</strong> <span className="text-muted">Jugadores activos cerca</span></div>
                </div>
                <div className="d-flex align-items-center mb-3 small">
                    <span className="fs-4 me-2">⏰</span>
                    <div><strong className="d-block">48</strong> <span className="text-muted">Partidos organizados</span></div>
                </div>

                <hr className="text-muted" />

                {/* Member Perks */}
                <h5 className="fw-bold my-3">Beneficio de ser socio</h5>
                <ul className="list-unstyled text-muted small mb-3">
                    <li>• Prioridad de reserva & descuentos</li>
                    <li>• Perfiles verificados</li>
                </ul>
                <button className="btn w-100 rounded-pill fw-semibold text-dark" style={{ backgroundColor: '#b5f67a', border: 'none' }}>Crear cuenta - Es gratis!</button>

            </div>
        </aside>

        {/* ================= CONTENIDO PRINCIPAL RESTRICCION DERECHA ================= */}
        <main className="col-lg-9 col-md-8">
          {/* Título Principal y Barra Superior de Búsqueda */}
            <div className="mb-4">
                <h2 className="fw-bold">Encontrá canchas, jugadores & partidos cerca tuyo</h2>
                <p className="text-muted small">Busca por ciudad, barrio, nivel, superficie y precio</p>
                
                <div className="row g-2 bg-white p-3 rounded-4 shadow-sm align-items-center">
                    <div className="col-md-4"><input type="text" className="form-control rounded-pill" placeholder="Ciudad o Barrio" /></div>
                    <div className="col-md-3"><input type="text" className="form-control rounded-pill" placeholder="Fecha" /></div>
                    <div className="col-md-3"><input type="text" className="form-control rounded-pill" placeholder="Nivel" /></div>
                    <div className="col-md-2"><button className="btn w-100 rounded-pill text-dark fw-bold" style={{ backgroundColor: '#b5f67a', border: 'none' }}>Buscar</button></div>
                </div>
            </div>

          {/* Tarjetas Destacadas (Hero Banners) */}
            <div className="row mb-5">
                <div className="col-md-6 mb-3">
                    <div className="card text-white border-0 rounded-4 overflow-hidden shadow-sm position-relative" style={{ height: '200px' }}>
                    <img src="https://via.placeholder.com/600x200" className="card-img h-100 w-100 object-fit-cover" alt="Featured Court" />
                        <div className="card-img-overlay d-flex flex-column justify-content-end bg-dark bg-opacity-20">
                            <span className="badge bg-light text-dark position-absolute top-0 start-0 m-3 rounded-pill">Featured Court</span>
                            <h4 className="fw-bold mb-2">Tennis Buenos Aires - Polvo de Ladrillo</h4>
                            <div className="d-flex justify-content-between align-items-center">
                            <small>4.8 (124 reviews)</small>
                            <div>
                                <a href="#" className="btn btn-sm btn-light rounded-pill me-2 fw-semibold px-3">Reservar</a>
                                <a href="#" className="btn btn-sm btn-outline-light rounded-pill px-3">Visitar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="col-md-6 mb-3">
                <div className="card text-white border-0 rounded-4 overflow-hidden shadow-sm position-relative" style={{ height: '200px' }}>
                    <img src="https://via.placeholder.com/600x200" className="card-img h-100 w-100 object-fit-cover" alt="Top Players" />
                    <div className="card-img-overlay d-flex flex-column justify-content-end bg-dark bg-opacity-20">
                    <span className="badge bg-light text-dark position-absolute top-0 start-0 m-3 rounded-pill">Top Players</span>
                    <h4 className="fw-bold mb-2">Descubrí el talento local & solicita partidos</h4>
                    <div className="d-flex justify-content-between align-items-center">
                        <small>Tenistas listos para jugar</small>
                        <div>
                        <a href="#" className="btn btn-sm btn-light rounded-pill me-2 fw-semibold px-3">Explorá</a>
                        <a href="#" className="btn btn-sm btn-outline-light rounded-pill px-3">Invitá</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>

          {/* Sección: Canchas en CABA */}
            <div className="mb-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="fw-bold m-0">Canchas disponibles en CABA</h4>
                <span className="text-muted small">Mostrando 4 resultados</span>
                </div>
                <div className="row g-3">
                {courts.map(court => (
                    <div key={court.id} className="col-md-6">
                    <div className="card border-0 shadow-sm p-3 rounded-4 bg-white h-100">
                        <div className="d-flex gap-3 align-items-center">
                        <img src={court.img} alt={court.name} className="rounded-3 object-fit-cover" style={{ width: '110px', height: '90px' }} />
                        <div className="flex-grow-1">
                            <h6 className="fw-bold mb-1">{court.name}</h6>
                            <p className="text-muted small mb-1">{court.type} · {court.dist}</p>
                            <p className="text-muted small mb-0"><strong>{court.price}</strong> / hora · {court.rating} ({court.reviews} reviews)</p>
                        </div>
                        <div className="d-flex flex-column gap-2 text-end">
                            <a href="#" className="btn btn-sm btn-light border rounded-pill px-3 small">Ver</a>
                            <a href="#" className="btn btn-sm text-dark rounded-pill px-3 small fw-bold" style={{ backgroundColor: '#b5f67a' }}>Reserva</a>
                        </div>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>

            {/* Sección: Players Looking for Matches */}
            <div className="mb-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="fw-bold m-0">Jugadores buscando partidos</h4>
                <a href="#" className="text-decoration-none text-secondary small fw-semibold">Ver todos los jugadores</a>
                </div>
                <div className="row g-3">
                {players.map(player => (
                    <div key={player.id} className="col-lg-3 col-sm-6 text-center">
                    <div className="card border-0 shadow-sm p-4 rounded-4 bg-white h-100 align-items-center">
                        <img src={player.img} alt={player.name} className="rounded-circle mb-3 object-fit-cover" style={{ width: '70px', height: '70px' }} />
                        <h6 className="fw-bold mb-1">{player.name}</h6>
                        <p className="text-muted small mb-3">{player.level} · {player.matches}</p>
                        <div className="d-flex gap-2">
                        <a href="#" className="btn btn-sm btn-light border rounded-pill px-3">Perfil</a>
                        <a href="#" className="btn btn-sm text-dark rounded-pill px-3 fw-bold" style={{ backgroundColor: '#b5f67a' }}>Invitar</a>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>

            {/* Banner de Cierre (Join Tenis Local) */}
            <div className="card border-0 shadow-sm p-4 mb-5 rounded-4 bg-white">
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                <div>
                    <h4 className="fw-bold mb-1">Sumate a Tenis Local</h4>
                    <p className="text-muted m-0 small">Crea tu perfil, conecta con otros jugadores, y reserva tu cancha en segundos.</p>
                </div>
                <div className="d-flex gap-2">
                    <a href="#" className="btn btn-light border rounded-pill px-4 fw-semibold">Log in</a>
                    <a href="#" className="btn text-dark rounded-pill px-4 fw-bold" style={{ backgroundColor: '#b5f67a' }}>Crear cuenta</a>
                </div>
                </div>
            </div>

            </main>
        </div>
        </div>
    );
}