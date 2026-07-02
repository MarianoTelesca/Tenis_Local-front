import React from 'react';
import { Link } from 'react-router-dom';

export default function PerfilJugadorDerecha() {

    const recentMatches = [
        { id: 1, opponent: "Marco Rossi", surface: "Dura", date: "12 Abr 2026", result: "Ganado", score: "6-3, 4-6, 7-5", img: "https://placehold.co/40" },
        { id: 2, opponent: "Sophie Tremblay", surface: "Arcilla", date: "05 Abr 2026", result: "Perdido", score: "4-6, 3-6", img: "https://placehold.co/40" },
        { id: 3, opponent: "Daniel Kim", surface: "Césped", date: "22 Mar 2026", result: "Ganado", score: "6-2, 6-2", img: "https://placehold.co/40" }
    ];

    return (
        <>

            {/* ================= COLUMNA IZQUIERDA: PERFIL Y LOGROS (col-lg-3) ================= */}
            <aside className="col-lg-3 col-md-4 mb-4">
            {/* Tarjeta de Perfil Principal */}
            <div className="card border-0 shadow-sm p-4 bg-white rounded-4 mb-4 text-center text-md-start">
                <div className="d-flex flex-column align-items-center text-center mb-3">
                <img src="https://via.placeholder.com/100" alt="Nombre Apellido" className="rounded-circle object-fit-cover mb-3" style={{ width: '90px', height: '90px' }} />
                <div>
                    <h4 className="fw-bold mb-1">Nombre Apellido</h4>
                    <span className="badge text-dark bg-opacity-20 rounded-pill small mb-2" style={{ backgroundColor: '#b5f67a' }}>Avanzado • 4.8</span>
                    <p className="text-muted small mb-1">Buenos Aires, AR · 28 años</p>
                    <span className="text-muted text-decoration-underline small" style={{ fontSize: '0.8rem' }}>Calificación (120 partidos)</span>
                </div>
                </div>

                {/* Preferencias */}
                <div className="d-flex flex-wrap gap-1 mb-3 justify-content-center">
                <span className="badge bg-light text-secondary border rounded-pill px-2 py-1 small">Arcilla</span>
                <span className="badge bg-light text-secondary border rounded-pill px-2 py-1 small">Cancha Dura</span>
                <span className="badge bg-light text-secondary border rounded-pill px-2 py-1 small">Césped</span>
                <span className="badge bg-light text-secondary border rounded-pill px-2 py-1 small">Diestro</span>
                </div>

                <div className="text-muted small mb-3 text-center">
                <span className="me-3">● Singles</span> <span>● Dobles</span>
                </div>

                <div className="d-flex gap-2 mb-3 justify-content-center">
                <button className="btn btn-dark btn-sm rounded-pill px-3">Desafiar</button>
                <button className="btn btn-outline-secondary text-dark btn-sm rounded-pill px-3">Mensaje</button>
                </div>

                <hr className="text-muted" />
                
                <div className="small text-muted text-center">
                <p className="mb-1"><strong>Contacto:</strong></p>
                <p className="mb-1 text-truncate">nombre_apellido@email.com</p>
                <p className="mb-0">+54 116 123 4567</p>
                </div>
            </div>

            {/* Partidos Recientes */}
            <div className="card border-0 shadow-sm p-4 bg-white rounded-4 mb-4">
                <h5 className="fw-bold mb-3">Partidos Recientes</h5>
                <div className="d-flex flex-column gap-3">
                {recentMatches.map(match => (
                    <div key={match.id} className="d-flex align-items-center justify-content-between small">
                    <div className="d-flex align-items-center gap-2">
                        <img src={match.img} alt={match.opponent} className="rounded-circle" />
                        <div>
                        <span className="fw-bold d-block">vs {match.opponent}</span>
                        <span className="text-muted" style={{ fontSize: '0.8rem' }}>{match.surface} · {match.date}</span>
                        </div>
                    </div>
                    <div className="text-end">
                        <span className={`fw-bold d-block ${match.result === 'Ganado' ? 'text-success' : 'text-danger'}`}>{match.result}</span>
                        <span className="text-muted" style={{ fontSize: '0.8rem' }}>{match.score}</span>
                    </div>
                    </div>
                ))}
                </div>
            </div>

            {/* Insignias / Logros */}
            <div className="card border-0 shadow-sm p-4 bg-white rounded-4">
                <h5 className="fw-bold mb-3">Insignias</h5>
                <div className="row g-2 text-center text-muted" style={{ fontSize: '0.75rem' }}>
                <div className="col-4">
                    <div className="p-2 border rounded-3 bg-light">
                    <span className="fs-4 d-block">🏆</span>
                    <span>Torneos</span>
                    </div>
                </div>
                <div className="col-4">
                    <div className="p-2 border rounded-3 bg-light">
                    <span className="fs-4 d-block">📅</span>
                    <span>Constante</span>
                    </div>
                </div>
                <div className="col-4">
                    <div className="p-2 border rounded-3 bg-light">
                    <span className="fs-4 d-block">🤝</span>
                    <span>Limpio</span>
                    </div>
                </div>
                </div>
            </div>
            </aside>

        </>
    );

}
