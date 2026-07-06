import React, { useState } from 'react';

export default function PerfilClub() {
    // Estado para controlar la sección/pestaña activa del panel
    const [pestañaActiva, setPestañaActiva] = useState('calendario');
    
    // Estado para simular la apertura del modal de "Nueva Cancha"
    const [mostrarModalCancha, setMostrarModalCancha] = useState(false);

    // Datos simulados del club
    const clubInfo = {
        name: "Centro de Tenis Palermo",
        address: "Av. del Libertador 4200, Palermo, Buenos Aires",
        phone: "(011) 4777-8899",
        email: "contacto@tenispalermo.com.ar",
        canchasCount: 4
    };

    // Datos de las canchas actuales
    const canchas = [
        { id: 1, name: "Cancha 1", surface: "Polvo de Ladrillo", type: "Techada", price: "$15.000", status: "Activa" },
        { id: 2, name: "Cancha 2", surface: "Polvo de Ladrillo", type: "Descubierta", price: "$15.000", status: "Activa" },
        { id: 3, name: "Cancha 3", surface: "Cemento", type: "Descubierta", price: "$12.000", status: "Activa" },
        { id: 4, name: "Cancha 4", surface: "Césped Sintético", type: "Descubierta", price: "$14.000", status: "Mantenimiento" }
    ];

    // Reservas del día para el calendario
    const reservasHoy = [
        { id: 101, court: "Cancha 1", time: "17:30 - 18:30", player: "Martín Álvarez", contact: "11-5488-XXXX", payment: "Pagado (Online)" },
        { id: 102, court: "Cancha 1", time: "18:30 - 19:30", player: "Gonzalo Rodríguez", contact: "11-3022-XXXX", payment: "Paga en el Club" },
        { id: 103, court: "Cancha 2", time: "19:30 - 21:00", player: "Florencia Rossi", contact: "11-6511-XXXX", payment: "Pagado (Online)" },
        { id: 104, court: "Cancha 3", time: "20:30 - 21:30", player: "Lucas Gómez", contact: "11-2477-XXXX", payment: "Paga en el Club" }
    ];

    return (
        <div className="container-fluid px-4 py-4" style={{ backgroundColor: '#fcfcfc', minHeight: '100vh' }}>
        
        {/* Encabezado del Dashboard */}
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
            <div>
            <span className="badge bg-dark rounded-pill px-3 mb-1">Panel de Administración</span>
            <h2 className="fw-bold m-0">{clubInfo.name}</h2>
            <p className="text-muted small m-0">📍 {clubInfo.address}</p>
            </div>
            <div className="d-flex gap-2">
            <button onClick={() => setMostrarModalCancha(true)} className="btn rounded-pill fw-bold text-dark shadow-sm px-4" style={{ backgroundColor: '#b5f67a', border: 'none' }}>
                ➕ Agregar Nueva Cancha
            </button>
            </div>
        </div>

        <div className="row">
            
            {/* ================= COLUMNA IZQUIERDA: MENÚ LATERAL DEL PANEL ================= */}
            <div className="col-lg-3 col-md-4 mb-4">
            <div className="card border-0 shadow-sm p-3 bg-white rounded-4">
                <div className="nav flex-column nav-pills gap-2">
                <button 
                    onClick={() => setPestañaActiva('calendario')} 
                    className={`nav-link text-start rounded-pill py-2 px-3 fw-semibold ${pestañaActiva === 'calendario' ? 'bg-dark text-white' : 'text-secondary bg-transparent'}`}
                >
                    📅 Agenda y Reservas
                </button>
                <button 
                    onClick={() => setPestañaActiva('canchas')} 
                    className={`nav-link text-start rounded-pill py-2 px-3 fw-semibold ${pestañaActiva === 'canchas' ? 'bg-dark text-white' : 'text-secondary bg-transparent'}`}
                >
                    🎾 Mis Canchas ({clubInfo.canchasCount})
                </button>
                <button 
                    onClick={() => setPestañaActiva('estadisticas')} 
                    className={`nav-link text-start rounded-pill py-2 px-3 fw-semibold ${pestañaActiva === 'estadisticas' ? 'bg-dark text-white' : 'text-secondary bg-transparent'}`}
                >
                    📊 Estadísticas y Ventas
                </button>
                <button 
                    onClick={() => setPestañaActiva('perfil')} 
                    className={`nav-link text-start rounded-pill py-2 px-3 fw-semibold ${pestañaActiva === 'perfil' ? 'bg-dark text-white' : 'text-secondary bg-transparent'}`}
                >
                    🏢 Información del Club
                </button>
                </div>

                <hr className="text-muted" />
                
                {/* Resumen rápido en el sidebar */}
                <div className="p-2 bg-light rounded-3 small text-muted">
                <span className="fw-bold text-dark d-block mb-1">Estado Operativo</span>
                <div className="d-flex justify-content-between mb-1"><span>Hoy:</span> <strong className="text-dark">14 turnos</strong></div>
                <div className="d-flex justify-content-between"><span>Ocupación:</span> <strong className="text-success">85%</strong></div>
                </div>
            </div>
            </div>

            {/* ================= COLUMNA DERECHA: CONTENIDO DINÁMICO ================= */}
            <div className="col-lg-9 col-md-8">
            
            {/* SECCIÓN 1: AGENDA Y CALENDARIO */}
            {pestañaActiva === 'calendario' && (
                <div className="card border-0 shadow-sm p-4 bg-white rounded-4">
                <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
                    <h4 className="fw-bold m-0">Monitoreo de Turnos (Hoy)</h4>
                    <input type="date" className="form-control form-control-sm rounded-pill border px-3" style={{ width: '170px' }} defaultValue="2026-07-03" />
                </div>

                <div className="table-responsive">
                    <table className="table table-hover align-middle grid-dashboard">
                    <thead>
                        <tr className="text-muted small">
                        <th>Horario</th>
                        <th>Cancha</th>
                        <th>Jugador / Cliente</th>
                        <th>Contacto</th>
                        <th>Estado del Pago</th>
                        <th className="text-end">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservasHoy.map(reserva => (
                        <tr key={reserva.id} className="small">
                            <td className="fw-bold text-dark">{reserva.time}</td>
                            <td><span className="badge bg-light text-dark border">{reserva.court}</span></td>
                            <td className="fw-semibold">{reserva.player}</td>
                            <td className="text-muted">{reserva.contact}</td>
                            <td>
                            <span className={`badge rounded-pill px-2 py-1 ${reserva.payment.includes('Online') ? 'bg-success bg-opacity-10 text-success' : 'bg-warning bg-opacity-10 text-warning'}`}>
                                {reserva.payment}
                            </span>
                            </td>
                            <td className="text-end">
                            <button className="btn btn-sm btn-light border rounded-circle me-1" title="Editar turno">✏️</button>
                            <button className="btn btn-sm btn-outline-danger rounded-circle" title="Cancelar Reserva">❌</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                </div>
            )}

            {/* SECCIÓN 2: GESTIÓN DE CANCHAS */}
            {pestañaActiva === 'canchas' && (
                <div className="card border-0 shadow-sm p-4 bg-white rounded-4">
                <h4 className="fw-bold mb-4">Listado de Canchas</h4>
                
                <div className="row g-3">
                    {canchas.map(cancha => (
                    <div key={cancha.id} className="col-md-6">
                        <div className="p-3 border rounded-4 bg-white shadow-sm h-100 d-flex flex-column justify-content-between">
                        <div>
                            <div className="d-flex justify-content-between align-items-center mb-2">
                            <h5 className="fw-bold m-0 text-dark">{cancha.name}</h5>
                            <span className={`badge rounded-pill small ${cancha.status === 'Activa' ? 'bg-success bg-opacity-10 text-success' : 'bg-danger bg-opacity-10 text-danger'}`}>
                                {cancha.status}
                            </span>
                            </div>
                            <p className="text-muted small mb-1">Superficie: <strong>{cancha.surface}</strong></p>
                            <p className="text-muted small mb-3">Tipo: <strong>{cancha.type}</strong></p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center pt-2 border-top">
                            <span className="fw-bold text-dark">{cancha.price} <span className="text-muted fw-normal small">/ hr</span></span>
                            <div className="d-flex gap-2">
                            <button className="btn btn-sm btn-light border rounded-pill px-3">Editar</button>
                            <button className="btn btn-sm btn-outline-secondary rounded-pill px-3">Pausar</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            )}

            {/* SECCIÓN 3: ESTADÍSTICAS */}
            {pestañaActiva === 'estadisticas' && (
                <div className="card border-0 shadow-sm p-4 bg-white rounded-4">
                <h4 className="fw-bold mb-4">Métricas de Rendimiento</h4>
                
                {/* Bloques de KPI */}
                <div className="row g-3 mb-4">
                    <div className="col-md-4">
                    <div className="p-3 rounded-4 bg-light text-center border">
                        <span className="text-muted small fw-medium text-uppercase d-block mb-1">Ingresos Mensuales</span>
                        <h3 className="fw-bold text-dark m-0">$420.000</h3>
                        <small className="text-success">↑ 12% vs mes anterior</small>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="p-3 rounded-4 bg-light text-center border">
                        <span className="text-muted small fw-medium text-uppercase d-block mb-1">Cancha más Usada</span>
                        <h3 className="fw-bold text-dark m-0">Cancha 1</h3>
                        <small className="text-muted">Polvo de Ladrillo Techada</small>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="p-3 rounded-4 bg-light text-center border">
                        <span className="text-muted small fw-medium text-uppercase d-block mb-1">Reservas Totales</span>
                        <h3 className="fw-bold text-dark m-0">186</h3>
                        <small className="text-success">92% concretadas</small>
                    </div>
                    </div>
                </div>

                {/* Gráfico Simulado */}
                <div className="border rounded-4 p-4 text-center bg-light">
                    <span className="text-muted d-block mb-2 small fw-bold">Ocupación Promedio por Franja Horaria</span>
                    <div className="d-flex justify-content-between align-items-end pt-4 px-3" style={{ height: '150px' }}>
                    <div className="bg-secondary bg-opacity-20 rounded-top" style={{ width: '12%', height: '30%' }}><small className="d-block mt-n4 text-muted small">08:00</small></div>
                    <div className="bg-secondary bg-opacity-20 rounded-top" style={{ width: '12%', height: '45%' }}><small className="d-block mt-n4 text-muted small">12:00</small></div>
                    <div className="bg-dark rounded-top" style={{ width: '12%', height: '85%' }}><small className="d-block mt-n4 text-muted small fw-bold">17:00</small></div>
                    <div className="rounded-top" style={{ width: '12%', height: '95%', backgroundColor: '#b5f67a' }}><small className="d-block mt-n4 text-dark fw-bold">19:00</small></div>
                    <div className="bg-dark rounded-top" style={{ width: '12%', height: '75%' }}><small className="d-block mt-n4 text-muted small fw-bold">21:00</small></div>
                    </div>
                </div>
                </div>
            )}

            {/* SECCIÓN 4: INFORMACIÓN DEL CLUB */}
            {pestañaActiva === 'perfil' && (
                <div className="card border-0 shadow-sm p-4 bg-white rounded-4">
                <h4 className="fw-bold mb-4">Información del Perfil Público</h4>
                
                <form onSubmit={(e) => e.preventDefault()} className="row g-3">
                    <div className="col-md-6">
                    <label className="form-label text-muted small fw-semibold">Nombre del Complejo</label>
                    <input type="text" className="form-control rounded-3" defaultValue={clubInfo.name} />
                    </div>
                    <div className="col-md-6">
                    <label className="form-label text-muted small fw-semibold">Teléfono de Contacto</label>
                    <input type="text" className="form-control rounded-3" defaultValue={clubInfo.phone} />
                    </div>
                    <div className="col-12">
                    <label className="form-label text-muted small fw-semibold">Dirección / Ubicación</label>
                    <input type="text" className="form-control rounded-3" defaultValue={clubInfo.address} />
                    </div>
                    <div className="col-md-6">
                    <label className="form-label text-muted small fw-semibold">Email de Reservas</label>
                    <input type="email" className="form-control rounded-3" defaultValue={clubInfo.email} />
                    </div>
                    <div className="col-md-6">
                    <label className="form-label text-muted small fw-semibold">Horario de Apertura / Cierre</label>
                    <input type="text" className="form-control rounded-3" defaultValue="Lunes a Domingos 07:00 - 23:00 hs." />
                    </div>
                    <div className="col-12 text-end pt-2">
                    <button type="button" className="btn btn-dark rounded-pill px-4 fw-semibold">Guardar Cambios</button>
                    </div>
                </form>
                </div>
            )}

            </div>
        </div>

        {/* ================= MODAL FLOTANTE SIMULADO: NUEVA CANCHA ================= */}
        {mostrarModalCancha && (
            <div className="position-fixed top-50 start-50 translate-middle p-4 bg-white border rounded-4 shadow-lg" style={{ zIndex: 1050, maxWidth: '500px', width: '90%' }}>
            <h5 className="fw-bold mb-3">Agregar Nueva Cancha</h5>
            
            <div className="mb-3">
                <label className="form-label small text-muted fw-semibold">Nombre identificatorio</label>
                <input type="text" className="form-control form-control-sm rounded-3" placeholder="Ej: Cancha 5" />
            </div>
            <div className="row g-2 mb-3">
                <div className="col-6">
                <label className="form-label small text-muted fw-semibold">Superficie</label>
                <select className="form-select form-select-sm rounded-3">
                    <option>Polvo de Ladrillo</option>
                    <option>Cemento (Rápida)</option>
                    <option>Césped Sintético</option>
                </select>
                </div>
                <div className="col-6">
                <label className="form-label small text-muted fw-semibold">Estructura</label>
                <select className="form-select form-select-sm rounded-3">
                    <option>Descubierta</option>
                    <option>Techada</option>
                </select>
                </div>
            </div>
            <div className="mb-4">
                <label className="form-label small text-muted fw-semibold">Precio por Hora (ARS)</label>
                <input type="number" className="form-control form-control-sm rounded-3" placeholder="$15000" />
            </div>

            <div className="d-flex gap-2 justify-content-end">
                <button onClick={() => setMostrarModalCancha(false)} className="btn btn-sm btn-light border rounded-pill px-3">Cancelar</button>
                <button onClick={() => setMostrarModalCancha(false)} className="btn btn-sm btn-dark rounded-pill px-4" style={{ backgroundColor: '#b5f67a', color: '#000', border: 'none' }}>Dar de Alta</button>
            </div>
            </div>
        )}
        </div>
    );
}