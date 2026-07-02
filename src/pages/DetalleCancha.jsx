import React from 'react';

export default function DetalleCancha() {
  // Datos simulados para los turnos de disponibilidad
    const courtsList = ["Cancha 1", "Cancha 2", "Cancha 3", "Cancha 4"];
    const timeSlots = [
        { time: "17:30 - 18:30", status: ["available", "available", "booked", "available"] },
        { time: "18:30 - 19:30", status: ["booked", "available", "available", "booked"] },
        { time: "19:30 - 20:30", status: ["available", "booked", "booked", "available"] },
        { time: "20:30 - 21:30", status: ["booked", "available", "available", "booked"] }
    ];

    // Datos simulados para las opiniones
    const reviews = [
        { id: 1, author: "Martín Álvarez", date: "5 Mayo 2026", text: "Excelente cancha de polvo de ladrillo, muy bien mantenida y el personal es súper copado. Las luces led andan de diez para jugar de noche.", type: "Reserva Verificada" },
        { id: 2, author: "Trevor Singh", date: "21 Abril 2026", text: "Muy buenas instalaciones, pero se complica estacionar los fines de semana. Las clases de tenis que dan ahí son súper recomendables.", type: "Miembro" },
        { id: 3, author: "Lina Roberts", date: "30 Marzo 2026", text: "El proceso de reserva fue impecable y los vestuarios estaban re limpios.", type: "Jugadora Casual" }
    ];

    return (
        <div className="container-fluid px-4 py-4" style={{ backgroundColor: '#fcfcfc' }}>
        <div className="row">
            
            {/***** COLUMNA IZQUIERDA */}
            <div className="col-lg-8 col-md-12 mb-4">
            
            <div className="mb-4">
                <h2 className="fw-bold mb-1">Centro de Tenis Palermo</h2>
                <p className="text-muted small">📍 Av. del Libertador 4200, Palermo, Buenos Aires, CABA</p>
                <div className="d-flex gap-2">
                <span className="badge text-dark bg-opacity-20 rounded-pill px-3" style={{ backgroundColor: '#b5f67a' }}>Polvo de Ladrillo</span>
                <span className="badge bg-light text-secondary border rounded-pill px-3">Luces LED</span>
                <span className="badge bg-light text-secondary border rounded-pill px-3">6 Canchas</span>
                <span className="badge bg-light text-secondary border rounded-pill px-3">Pro Shop</span>
                </div>
            </div>

            {/* Galería de Imágenes con Unsplash */}
            <div className="row g-2 mb-4">
                <div className="col-12">
                <div className="rounded-4 overflow-hidden shadow-sm" style={{ height: '350px' }}>
                    <img src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=400&auto=format&fit=crop" className="w-100 h-100 object-fit-cover" alt="Cancha Principal" />
                </div>
                </div>
                <div className="col-3"><img src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=800&auto=format&fit=crop" className="w-100 rounded-3 object-fit-cover shadow-sm" style={{ height: '80px' }} alt="Miniatura 1" /></div>
                <div className="col-3"><img src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=400&auto=format&fit=crop" className="w-100 rounded-3 object-fit-cover shadow-sm" style={{ height: '80px' }} alt="Miniatura 2" /></div>
                <div className="col-3"><img src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=400&auto=format&fit=crop" className="w-100 rounded-3 object-fit-cover shadow-sm" style={{ height: '80px' }} alt="Miniatura 3" /></div>
                <div className="col-3"><img src="https://images.unsplash.com/photo-1542144557-f5092d1795f3?q=80&w=400&auto=format&fit=crop" className="w-100 rounded-3 object-fit-cover shadow-sm" style={{ height: '80px' }} alt="Miniatura 4" /></div>
            </div>

            {/* Detalles del Lugar */}
            <div className="card border-0 shadow-sm p-4 bg-white rounded-4 mb-4">
                <h4 className="fw-bold mb-4">Detalles del Complejo y Servicios</h4>
                <div className="row">
                <div className="col-md-4 mb-3">
                    <h6 className="fw-bold text-dark">Comodidades</h6>
                    <ul className="list-unstyled text-muted small lh-lg">
                    <li>🚿 Vestuarios y duchas</li>
                    <li>🎒 Alquiler de raquetas y tubos</li>
                    <li>🎾 Escuela de Tenis y Clínicas</li>
                    <li>☕ Bufet y zona de espera techada</li>
                    <li>🚗 Estacionamiento gratuito (Socios)</li>
                    </ul>
                </div>
                <div className="col-md-4 mb-3">
                    <h6 className="fw-bold text-dark">Superficie e Iluminación</h6>
                    <p className="text-muted small lh-sm">
                    Canchas de polvo de ladrillo profesionales con reflectores LED de alta potencia ideales para partidos nocturnos. Mantenimiento y riego programado los martes a las 13:00 hs.
                    </p>
                </div>
                <div className="col-md-4 mb-3">
                    <h6 className="fw-bold text-dark">Políticas de Cancelación</h6>
                    <p className="text-muted small lh-sm">
                    Reembolso del 100% cancelando hasta 24 horas antes del turno. Pasado ese límite, se cobrará la tarifa completa. En caso de lluvia, se reprograma el turno sin costo.
                    </p>
                </div>
                </div>

                <hr className="text-muted my-3" />

                <div className="row small text-muted">
                <div className="col-md-6">
                    <h6 className="fw-bold text-dark mb-2">Precios por Hora</h6>
                    <p className="mb-1">Días de semana (07:00 - 17:00): <strong>$12.000 / hr</strong></p>
                    <p className="mb-1">Días de semana (17:00 - 22:00): <strong>$15.000 / hr</strong></p>
                    <p className="mb-0">Fines de semana (07:00 - 22:00): <strong>$18.000 / hr</strong></p>
                </div>
                <div className="col-md-6">
                    <h6 className="fw-bold text-dark mb-2">Notas sobre Tarifas</h6>
                    <p className="lh-sm">Descuentos especiales para reservas fijas mensuales o abonos de más de 4 horas semanales. Consultar precios para torneos corporativos.</p>
                </div>
                </div>
            </div>

            {/* Disponibilidad */}
            <div className="card border-0 shadow-sm p-4 bg-white rounded-4 mb-4">
                <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
                <h4 className="fw-bold m-0">Disponibilidad y Reservas</h4>
                <div>
                    <button className="btn btn-sm btn-light border rounded-pill me-2">Exportar Turnos</button>
                    <button className="btn btn-sm btn-dark rounded-pill">Ver Calendario Mensual</button>
                </div>
                </div>

                <div className="row">
                <div className="col-md-3 mb-3 text-center">
                    <div className="p-3 bg-light rounded-4 border">
                    <span className="fw-bold d-block text-uppercase small text-muted">Julio 2026</span>
                    <span className="display-5 fw-bold text-dark d-block my-1">02</span>
                    <span className="badge btn-dark rounded-pill px-3 small">Hoy</span>
                    
                    <div className="d-flex flex-column gap-2 mt-4">
                        <button className="btn btn-sm btn-white border w-100 rounded-pill small bg-white">Mañana</button>
                        <button className="btn btn-sm btn-white border w-100 rounded-pill small bg-white">Fin de semana</button>
                    </div>
                    </div>
                </div>

                {/* Tabla interactiva de canchas */}
                <div className="col-md-9">
                    <div className="text-center bg-light p-2 rounded-3 mb-2 fw-semibold text-muted small">
                    Turnos disponibles para hoy — Jueves 2 de Julio, 2026
                    </div>
                    
                    <div className="table-responsive">
                    <table className="table table-borderless text-center align-middle">
                        <thead>
                        <tr className="small text-muted">
                            <th>Horario</th>
                            {courtsList.map(court => <th key={court}>{court}</th>)}
                        </tr>
                        </thead>
                        <tbody>
                        {timeSlots.map((slot, idx) => (
                            <tr key={idx}>
                            <td className="small fw-bold text-secondary" style={{ whiteSpace: 'nowrap' }}>{slot.time}</td>
                            {slot.status.map((status, cIdx) => (
                                <td key={cIdx}>
                                {status === "available" ? (
                                    <button className="btn w-100 py-1 rounded-3 small border-0 fw-semibold text-success shadow-sm" style={{ backgroundColor: '#eefde2', fontSize: '0.75rem' }}>
                                    Disponible
                                    </button>
                                ) : (
                                    <button className="btn w-100 py-1 rounded-3 small border border-light text-muted bg-light" disabled style={{ fontSize: '0.75rem' }}>
                                    Reservado
                                    </button>
                                )}
                                </td>
                            ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>
                    <p className="text-muted small mt-2 mb-0">💡 <em>Hacé clic en un casillero verde para iniciar la reserva directa de ese turno.</em></p>
                </div>
                </div>
            </div>

            {/* Reviews */}
            <div className="card border-0 shadow-sm p-4 bg-white rounded-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="fw-bold m-0">Opiniones y Puntuación</h4>
                <span className="text-muted small">Basado en 230 reseñas</span>
                </div>

                <div className="row mb-4 align-items-center">
                <div className="col-md-3 text-center border-end">
                    <h1 className="fw-bold display-4 m-0 text-dark">4.6</h1>
                    <div className="text-warning fs-5">★★★★★</div>
                    <small className="text-muted">Promedio General</small>
                </div>
                <div className="col-md-9 ps-md-4 mt-3 mt-md-0">
                    <div className="d-flex align-items-center gap-2 mb-1 small text-muted">
                    <span style={{ width: '50px' }}>5 estrellas</span>
                    <div className="progress flex-grow-1" style={{ height: '6px' }}><div className="progress-bar" style={{ width: '75%', backgroundColor: '#b5f67a' }}></div></div>
                    </div>
                    <div className="d-flex align-items-center gap-2 mb-1 small text-muted">
                    <span style={{ width: '50px' }}>4 estrellas</span>
                    <div className="progress flex-grow-1" style={{ height: '6px' }}><div className="progress-bar" style={{ width: '18%', backgroundColor: '#b5f67a' }}></div></div>
                    </div>
                    <div className="d-flex align-items-center gap-2 small text-muted">
                    <span style={{ width: '50px' }}>3 estrellas</span>
                    <div className="progress flex-grow-1" style={{ height: '6px' }}><div className="progress-bar" style={{ width: '7%', backgroundColor: '#cccccc' }}></div></div>
                    </div>
                </div>
                </div>

                {/* Comentarios */}
                <div className="d-flex flex-column gap-3">
                {reviews.map(review => (
                    <div key={review.id} className="border-bottom pb-3 last-border-0">
                    <div className="d-flex justify-content-between align-items-center mb-1 small">
                        <div>
                        <span className="fw-bold text-dark">{review.author}</span>
                        <span className="text-muted"> · {review.date}</span>
                        <span className="badge bg-light text-muted border ms-2" style={{ fontSize: '0.7rem' }}>{review.type}</span>
                        </div>
                        <span className="fw-bold text-warning">★ 4.6</span>
                    </div>
                    <p className="text-muted small m-0">"{review.text}"</p>
                    </div>
                ))}
                </div>
            </div>

            </div>

            {/*** COLUMNA DERECHA *****/}
            <div className="col-lg-4 col-md-12 mb-4 position-lg-sticky" style={{ top: '90px', height: 'fit-content' }}>
            
            <div className="card border-0 shadow-sm p-4 bg-white rounded-4 mb-4">
                <h5 className="fw-bold mb-3">Estimador de Precio</h5>
                
                <div className="mb-3">
                <label className="form-label text-muted small fw-semibold">Duración del partido</label>
                <input type="range" className="form-range" min="1" max="3" step="0.5" defaultValue="1" />
                <div className="d-flex justify-content-between text-muted small"><span>1 hr</span><span>2 hrs</span><span>3 hrs</span></div>
                </div>

                <div className="mb-3">
                <label className="form-label text-muted small fw-semibold">Horario de Inicio sugerido</label>
                <select className="form-select form-select-sm rounded-3">
                    <option>17:30 hs</option>
                    <option>18:30 hs</option>
                    <option>19:30 hs</option>
                    <option>20:30 hs</option>
                </select>
                </div>

                <div className="d-flex justify-content-between align-items-center bg-light p-3 rounded-3 mb-4">
                <div>
                    <span className="fw-bold text-dark d-block">Total Estimado</span>
                    <small className="text-muted">Sujeto a disponibilidad final</small>
                </div>
                <h3 className="fw-bold text-dark m-0">$15.000</h3>
                </div>

                <button className="btn w-100 mb-2 rounded-pill fw-bold text-dark shadow-sm py-2" style={{ backgroundColor: '#b5f67a', border: 'none' }}>
                ⚡ Reservar Ahora
                </button>
                <button className="btn btn-outline-secondary text-dark w-100 mb-2 rounded-pill fw-semibold py-2">
                📩 Solicitar Reserva Especial
                </button>
                <button className="btn btn-outline-light text-muted border w-100 rounded-pill fw-semibold py-2">
                ❤️ Guardar en Favoritos
                </button>
            </div>

            {/* Información de la cancha */}
            <div className="card border-0 shadow-sm p-4 bg-white rounded-4">
                <h5 className="fw-bold mb-3">Ubicación e Informes</h5>
                <div className="rounded-3 overflow-hidden border mb-3" style={{ height: '150px' }}>
                <div className="w-100 h-100 bg-secondary bg-opacity-10 d-flex align-items-center justify-content-center text-muted text-center p-3 small">
                    <span>[ Mapa de Google Maps integrado: Palermo, Buenos Aires ]</span>
                </div>
                </div>
                
                <div className="small text-muted lh-base">
                <p className="mb-2"><strong>Operador:</strong> Club Palermo Deportes</p>
                <p className="mb-2"><strong>Teléfono:</strong> (011) 4777-XXXX</p>
                <p className="mb-3"><strong>Horarios:</strong> Lunes a Domingos de 07:00 a 23:00 hs.</p>
                <button className="btn btn-dark w-100 rounded-pill fw-semibold">💬 Chatear con el Club</button>
                </div>
            </div>

            </div>

        </div>
        </div>
    );
}