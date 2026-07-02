import React from 'react';
import { Link } from 'react-router-dom';

export default function PerfilJugadorDerecha() {

  const reviews = [
    { id: 1, author: "Maria Lopez", date: "11 Abr 2026", rating: "5.0", text: "Gran compañero, puntual y con muy buen nivel. ¡Muy recomendado para partidos competitivos!" },
    { id: 2, author: "Tom Williams", date: "30 Mar 2026", rating: "4.8", text: "Excelente juego de fondo y muy limpio para llevar el conteo. ¡Disfruté mucho jugar con Rafael!" }
  ];

  return (
    <>
      {/* ================= COLUMNA DERECHA: ESTADÍSTICAS Y CONTENIDO (col-lg-9) ================= */}
      <main className="col-lg-9 col-md-8 mb-4">
        {/* Fila de Estadísticas Rápidas */}
        <div className="card border-0 shadow-sm p-4 bg-white rounded-4 mb-4">
          <div className="row text-center">
          <div className="col-3 border-end">
              <span className="text-muted small d-block">Partidos</span>
              <h3 className="fw-bold m-0">320</h3>
          </div>
          <div className="col-3 border-end">
              <span className="text-muted small d-block">Victorias</span>
              <h3 className="fw-bold m-0 text-success">210</h3>
          </div>
          <div className="col-3 border-end">
              <span className="text-muted small d-block">Derrotas</span>
              <h3 className="fw-bold m-0 text-danger">110</h3>
          </div>
          <div className="col-3">
              <span className="text-muted small d-block">Racha Activa</span>
              <h3 className="fw-bold m-0 text-primary">G3</h3>
          </div>
          </div>
          {/* Gráfico Simulado */}
          <div className="mt-4 border-top pt-3 text-center text-muted bg-light rounded-3 d-flex align-items-center justify-content-center" style={{ height: '140px' }}>
          <small>[ Gráfico de Rendimiento Histórico / Tendencia de Victorias ]</small>
          </div>
        </div>

        {/* Disponibilidad Semanal */}
        <div className="card border-0 shadow-sm p-4 bg-white rounded-4 mb-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="fw-bold m-0">Disponibilidad Semanal</h5>
          <span className="text-muted small">Zona horaria: CET</span>
          </div>
          
          <div className="row g-2 text-center mb-3">
          {['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'].map((day, index) => {
              const isAvailable = index === 2 || index === 4 || index === 6;
              return (
              <div key={day} className="col">
                  <div className={`p-2 rounded-3 border small ${isAvailable ? 'border-success' : 'bg-light text-muted'}`} 
                      style={{ backgroundColor: isAvailable ? '#eefde2' : '' }}>
                  <span className="fw-bold d-block">{day}</span>
                  <span className="text-muted" style={{ fontSize: '0.7rem' }}>{isAvailable ? 'Disponible' : '-'}</span>
                  </div>
              </div>
              );
          })}
        </div>

        {/* Simulación de Calendario Visual */}
          <div className="border pt-2 text-center bg-light rounded-3 text-muted overflow-hidden" style={{ fontSize: '0.8rem' }}>
          <div className="p-2 border-bottom bg-white fw-semibold">Vista de Agenda Mensual</div>
          <div className="p-3" style={{ opacity: 0.6 }}>[ Grilla de Calendario Integrada ]</div>
          </div>
        </div>

        {/* Reseñas de Jugadores */}
        <div className="card border-0 shadow-sm p-4 bg-white rounded-4 mb-4">
            <h5 className="fw-bold mb-3">Reseñas de Jugadores</h5>
            <div className="d-flex flex-column gap-3">
            {reviews.map(review => (
                <div key={review.id} className="border-bottom pb-3">
                <div className="d-flex justify-content-between align-items-center mb-1 small">
                    <div className="d-flex align-items-center gap-2">
                    <img src="https://via.placeholder.com/30" alt={review.author} className="rounded-circle" />
                    <span className="fw-bold">{review.author}</span>
                    <span className="text-muted">· {review.date}</span>
                    </div>
                    <span className="fw-bold text-warning">★ {review.rating}</span>
                </div>
                <p className="text-muted small m-0">"{review.text}"</p>
                </div>
            ))}
            </div>
        </div>

        {/* Historial de Actividad */}
        <div className="card border-0 shadow-sm p-4 bg-white rounded-4">
            <h5 className="fw-bold mb-3">Flujo de Actividad</h5>
            <ul className="list-unstyled small text-muted d-flex flex-column gap-2 mb-0">
            <li>✔️ Partido confirmado con <strong>Marco Rossi</strong> en Centro Tennis · 12 Apr 2026</li>
            <li>📅 Disponibilidad actualizada para los viernes por la mañana · 05 Apr 2026</li>
            <li>⭐ Recibió una reseña de 5 estrellas de <strong>Maria Lopez</strong> · 04 Apr 2026</li>
            </ul>
        </div>
      </main>

    </>
  );
}