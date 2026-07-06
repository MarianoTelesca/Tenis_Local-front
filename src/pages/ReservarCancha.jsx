import React, { useState } from 'react';

export default function ReservarCancha() {
    const [mostrarModal, setMostrarModal] = useState(false);

    const handleConfirmarReserva = () => {
        setMostrarModal(true);
    };

    return (
        <div className="container-fluid px-4 py-4" style={{ backgroundColor: '#fcfcfc' }}>
        
        {/* Indicador de Pasos del Checkout */}
        <div className="d-flex gap-2 mb-4 align-items-center overflow-x-auto pb-2" style={{ fontSize: '0.8rem' }}>
            <span className="badge text-dark bg-opacity-20 rounded-pill px-3 py-2" style={{ backgroundColor: '#b5f67a' }}>1. Cancha y Horario</span>
            <span className="text-muted">➔</span>
            <span className="badge bg-white border text-muted rounded-pill px-3 py-2">2. Jugadores y Servicios</span>
            <span className="text-muted">➔</span>
            <span className="badge bg-white border text-muted rounded-pill px-3 py-2">3. Confirmación</span>
        </div>

        <div className="row">
            
            {/***** COLUMNA IZQUIERDA *****/}
            <div className="col-lg-8 col-md-12 mb-4">
            
            {/* Cancha y Horario */}
            <div className="card border-0 shadow-sm p-4 bg-white rounded-4 mb-4">
                <h5 className="fw-bold mb-3">Elegí Cancha y Horario</h5>
                
                {/* Canchas Disponibles */}
                <div className="d-flex flex-column gap-3 mb-4">
                <div className="p-3 border rounded-4 bg-light d-flex align-items-center justify-content-between flex-wrap gap-2">
                    <div className="d-flex align-items-center gap-3">
                    <img src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=150&auto=format&fit=crop" className="rounded-3 object-fit-cover" style={{ width: '80px', height: '60px' }} alt="Cancha 1" />
                    <div>
                        <h6 className="fw-bold mb-1">Cancha 1 • Polvo de Ladrillo</h6>
                        <span className="badge bg-white text-secondary border rounded-pill small">Techada</span>
                        <span className="badge bg-white text-secondary border rounded-pill small ms-1">Iluminación LED</span>
                    </div>
                    </div>
                    <div className="text-end">
                    <span className="fw-bold text-dark d-block">$15.000 / hr</span>
                    <button className="btn btn-sm btn-dark rounded-pill px-3 mt-1" style={{ fontSize: '0.75rem' }}>Seleccionada</button>
                    </div>
                </div>

                <div className="p-3 border rounded-4 bg-white d-flex align-items-center justify-content-between flex-wrap gap-2 style-inactive" style={{ opacity: 0.6 }}>
                    <div className="d-flex align-items-center gap-3">
                    <img src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=150&auto=format&fit=crop" className="rounded-3 object-fit-cover" style={{ width: '80px', height: '60px' }} alt="Cancha 2" />
                    <div>
                        <h6 className="fw-bold mb-1">Cancha 2 • Cemento (Rápida)</h6>
                        <span className="badge bg-light text-muted rounded-pill small">Descubierta</span>
                    </div>
                    </div>
                    <div className="text-end">
                    <span className="fw-bold text-muted d-block">$12.000 / hr</span>
                    <button className="btn btn-sm btn-outline-secondary rounded-pill px-3 mt-1" style={{ fontSize: '0.75rem' }}>Cambiar</button>
                    </div>
                </div>
                </div>

                {/* Fecha y hora */}
                <div className="row g-3">
                <div className="col-md-6">
                    <label className="form-label text-muted small fw-semibold text-uppercase">Fecha del Turno</label>
                    <select className="form-select rounded-3">
                    <option>Hoy — Jueves 2 de Julio</option>
                    <option>Mañana — Viernes 3 de Julio</option>
                    <option>Sábado 4 de Julio</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label className="form-label text-muted small fw-semibold text-uppercase">Horario Disponible</label>
                    <select className="form-select rounded-3">
                    <option>18:30 hs a 19:30 hs (1 hora)</option>
                    <option>19:30 hs a 21:00 hs (1.5 horas)</option>
                    <option>21:00 hs a 22:30 hs (1.5 horas)</option>
                    </select>
                </div>
                </div>
            </div>

            {/* Jugadores e Invitaciones */}
            <div className="card border-0 shadow-sm p-4 bg-white rounded-4 mb-4">
                <h5 className="fw-bold mb-1">Jugadores y Configuración del Partido</h5>
                <p className="text-muted small mb-4">Sumá a tus amigos al turno o dejeló abierto para que se unan miembros de la comunidad.</p>
                
                <div className="row g-3">
                <div className="col-md-6">
                    <label className="form-label text-muted small fw-semibold text-uppercase">Tipo de Partido</label>
                    <div className="d-flex gap-2">
                    <button className="btn btn-sm btn-dark rounded-pill px-3 flex-grow-1">Privado (Amigos)</button>
                    <button className="btn btn-sm btn-outline-secondary text-dark rounded-pill px-3 flex-grow-1">Público (Abierto)</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <label className="form-label text-muted small fw-semibold text-uppercase">Agregar Compañeros (Email / Nombre)</label>
                    <div className="input-group">
                    <input type="text" className="form-control rounded-start-3" placeholder="ej. juan.perez@email.com" />
                    <button className="btn btn-dark rounded-end-3 px-3" type="button">➕ Sumar</button>
                    </div>
                </div>
                </div>
            </div>

            {/* Extras */}
            <div className="card border-0 shadow-sm p-4 bg-white rounded-4 mb-4">
                <h5 className="fw-bold mb-3">Servicios Adicionales (Opcional)</h5>
                
                <div className="d-flex flex-column gap-2">
                <div className="form-check p-3 border rounded-3 d-flex align-items-center justify-content-between bg-light bg-opacity-50">
                    <div>
                    <input className="form-check-input ms-0 me-3" type="checkbox" id="tuboBolas" defaultChecked />
                    <label className="form-check-label fw-semibold text-dark" htmlFor="tuboBolas">
                        Tubos de Pelotas Nuevas (Dunlop Fort)
                    </label>
                    <span className="d-block text-muted small">Te dejamos el tubo listo al ingresar a la cancha.</span>
                    </div>
                    <span className="fw-bold text-dark small">+$3.500</span>
                </div>

                <div className="form-check p-3 border rounded-3 d-flex align-items-center justify-content-between">
                    <div>
                    <input className="form-check-input ms-0 me-3" type="checkbox" id="alquilerRaqueta" />
                    <label className="form-check-label fw-semibold text-dark" htmlFor="alquilerRaqueta">
                        Alquiler de Raqueta Profesional
                    </label>
                    <span className="d-block text-muted small">Modelos Babolat / Wilson disponibles en administración.</span>
                    </div>
                    <span className="fw-bold text-dark small">+$2.000 x raqueta</span>
                </div>
                </div>
            </div>

            </div>

            {/***** COLUMNA DERECHA *****/}
            <div className="col-lg-4 col-md-12 mb-4 position-lg-sticky" style={{ top: '90px', height: 'fit-content' }}>
            
            <div className="card border-0 shadow-sm p-4 bg-white rounded-4">
                <h5 className="fw-bold mb-3">Resumen del Turno</h5>
                
                {/* Detalles */}
                <div className="pb-3 border-bottom mb-3 small">
                    <span className="fw-bold text-dark d-block">Centro de Tenis Palermo</span>
                    <span className="text-muted">Av. del Libertador 4200, CABA</span>
                    </div>

                    <div className="d-flex flex-column gap-2 small pb-3 border-bottom mb-3 text-muted">
                    <div className="d-flex justify-content-between">
                        <span>Cancha 1 (Polvo de Ladrillo) — 1 hr</span>
                        <span className="fw-semibold text-dark">$15.000</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span>Tubo de Pelotas (Dunlop)</span>
                        <span className="fw-semibold text-dark">$3.500</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span>Gastos de gestión / Reserva online</span>
                        <span className="fw-semibold text-dark">$500</span>
                    </div>
                </div>

                {/* SECCIÓN INTEGRADAS DE FORMA DE PAGO */}
                <div className="mb-4">
                <label className="form-label text-muted small fw-semibold text-uppercase" style={{ fontSize: '0.7rem' }}>Forma de pago</label>
                <div className="d-flex flex-column gap-2">
                    <div className="p-2 border rounded-3 d-flex align-items-center gap-2 bg-light bg-opacity-50" style={{ fontSize: '0.85rem' }}>
                    <input type="radio" name="formaPagoResumen" id="pagoClubResumen" defaultChecked />
                    <label htmlFor="pagoClubResumen" className="pointer m-0 text-dark fw-semibold">
                        💵 Efectivo / Débito en el Club
                    </label>
                    </div>
                    <div className="p-2 border rounded-3 d-flex align-items-center gap-2" style={{ fontSize: '0.85rem' }}>
                    <input type="radio" name="formaPagoResumen" id="pagoTransfResumen" />
                    <label htmlFor="pagoTransfResumen" className="pointer m-0 text-dark fw-semibold">
                        📱 Transferencia / Mercado Pago
                    </label>
                    </div>
                </div>
                </div>

                {/* Total precio */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <span className="fw-bold text-dark d-block fs-5">Total a Pagar</span>
                    <small className="text-muted">Abonás directamente en el club</small>
                </div>
                <h3 className="fw-bold text-dark m-0">$19.000</h3>
                </div>

                {/* Cupones*/}
                <div className="mb-4">
                <div className="input-group input-group-sm">
                    <input type="text" className="form-control rounded-start-3 border-end-0" placeholder="Código de descuento" />
                    <button className="btn btn-outline-secondary text-dark rounded-end-3 px-3" type="button">Aplicar</button>
                </div>
                </div>

                {/* Confirmación mock por ahora */}
                <button 
                onClick={handleConfirmarReserva}
                className="btn w-100 rounded-pill fw-bold text-dark shadow-sm py-3" 
                style={{ backgroundColor: '#b5f67a', border: 'none', fontSize: '1rem' }}
                >
                🤝 Confirmar y Reservar Turno
                </button>
                
                <p className="text-muted text-center small mt-3 mb-0" style={{ fontSize: '0.75rem' }}>
                Al confirmar, aceptás las políticas de cancelación del complejo (cancelación sin cargo hasta 24 hs antes).
                </p>
            </div>

            </div>

        </div>

        {/* Alerta de exito --esto es temporal */}
        {mostrarModal && (
            <div className="position-fixed top-50 start-50 translate-middle p-4 bg-white border rounded-4 shadow-lg text-center" style={{ zIndex: 1050, maxWidth: '400px', width: '90%' }}>
            <div className="fs-1 mb-2">🎉</div>
            <h5 className="fw-bold mb-2">¡Turno Solicitado Correctamente!</h5>
            <p className="text-muted small mb-3">Te enviamos los detalles del turno y el código de reserva a tu dirección de correo.</p>
            <button onClick={() => setMostrarModal(false)} className="btn btn-dark btn-sm rounded-pill px-4">Entendido</button>
            </div>
        )}
        </div>
    );
}