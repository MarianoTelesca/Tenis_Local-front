import React from 'react';

export default function BusquedaCanchas() {
    return (
        <div className="container-fluid px-4 py-4" style={{ backgroundColor: '#fcfcfc' }}>
        
        <div className="mb-4">
            <h2 className="fw-bold mb-1">Resultados de búsqueda</h2>
            <p className="text-muted small">0 espacios encontrados en Buenos Aires</p>
        </div>

        <div className="row">
            
            {/***** COLUMNA IZQUIERDA *****/}
            <aside className="col-lg-3 col-md-4 mb-4">
            <div className="card border-0 shadow-sm p-4 bg-white rounded-4">
                <h5 className="fw-bold mb-4">Filtros</h5>
                
                {/* Ubicación */}
                <div className="mb-3">
                <label className="form-label text-muted small fw-semibold text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>Ubicación</label>
                <input type="text" className="form-control form-control-sm rounded-3 py-2" placeholder="Ciudad o barrio (ej. Palermo)" />
                </div>
                
                {/* Rango de Fechas (Desde / Hasta) */}
                <div className="row g-2 mb-3">
                <div className="col-6">
                    <label className="form-label text-muted small fw-semibold text-uppercase" style={{ fontSize: '0.75rem' }}>Desde</label>
                    <input type="date" className="form-control form-control-sm rounded-3 py-2" />
                </div>
                <div className="col-6">
                    <label className="form-label text-muted small fw-semibold text-uppercase" style={{ fontSize: '0.75rem' }}>Hasta</label>
                    <input type="date" className="form-control form-control-sm rounded-3 py-2" />
                </div>
                </div>

                {/* Tipo de Cancha*/}
                <div className="mb-3">
                <label className="form-label text-muted small fw-semibold text-uppercase" style={{ fontSize: '0.75rem' }}>Superficie</label>
                <select className="form-select form-select-sm rounded-3 py-2">
                    <option value="all">Cualquiera</option>
                    <option value="clay">Polvo de Ladrillo</option>
                    <option value="hard">Cancha Dura (Cemento)</option>
                    <option value="grass">Césped</option>
                </select>
                </div>

                {/* Precios */}
                <div className="row g-2 mb-4">
                <div className="col-6">
                    <label className="form-label text-muted small fw-semibold text-uppercase" style={{ fontSize: '0.75rem' }}>Precio Mín.</label>
                    <div className="input-group input-group-sm">
                    <span className="input-group-text rounded-start-3 bg-light border-end-0">$</span>
                    <input type="number" className="form-control rounded-end-3" defaultValue="0" />
                    </div>
                </div>
                <div className="col-6">
                    <label className="form-label text-muted small fw-semibold text-uppercase" style={{ fontSize: '0.75rem' }}>Precio Máx.</label>
                    <div className="input-group input-group-sm">
                    <span className="input-group-text rounded-start-3 bg-light border-end-0">$</span>
                    <input type="number" className="form-control rounded-end-3" defaultValue="0" />
                    </div>
                </div>
                </div>

                <button className="btn w-100 rounded-pill fw-bold text-dark py-2 shadow-sm" style={{ backgroundColor: '#b5f67a', border: 'none' }}>
                Aplicar filtros
                </button>
            </div>
            </aside>

            {/***** COLUMNA DERECHA *****/}
            <main className="col-lg-9 col-md-8">
            
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold m-0 text-secondary">Resultados</h5>
                
                {/* (Cuadro / Lista / Mapa) */}
                <div className="btn-group bg-white p-1 rounded-pill shadow-sm border" role="group" aria-label="Modo de visualización">
                <button type="button" className="btn btn-sm rounded-pill px-3 btn-dark" title="Vista de Cuadrícula">
                    🎛️ <span className="d-none d-md-inline ms-1 small">Cuadros</span>
                </button>
                <button type="button" className="btn btn-sm rounded-pill px-3 btn-light text-muted border-0" title="Vista de Lista">
                    📋 <span className="d-none d-md-inline ms-1 small">Lista</span>
                </button>
                <button type="button" className="btn btn-sm rounded-pill px-3 btn-light text-muted border-0" title="Vista de Mapa">
                    🗺️ <span className="d-none d-md-inline ms-1 small">Mapa</span>
                </button>
                </div>
            </div>

            <div className="card border-0 shadow-sm p-5 bg-white rounded-4 text-center d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '400px', borderStyle: 'dashed !important', borderWidth: '2px' }}>
                <div className="display-4 mb-3" style={{ opacity: 0.7 }}>🎾</div>
                <h4 className="fw-bold text-dark mb-2">No encontramos resultados</h4>
                <p className="text-muted small mb-4" style={{ maxWidth: '400px' }}>
                Probá cambiando los filtros de superficie, expandiendo el rango de precios o buscando otra ubicación en Buenos Aires.
                </p>
                <button className="btn btn-outline-secondary btn-sm rounded-pill px-4 fw-semibold text-dark">
                Limpiar todos los filtros
                </button>
            </div>

            </main>
        </div>
        </div>
    );
}