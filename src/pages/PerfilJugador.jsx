import React from 'react';

// Componentes
import PerfilJugadorDerecha from '../components/PerfilJugadorDerecha'
import PerfilJugadorIzquierda from '../components/PerfilJugadorIzquierda'

export default function PerfilJugador() {

    return (
        <div className="container-fluid px-4 py-4" style={{ backgroundColor: '#fcfcfc' }}>
        <div className="row">
            
            <PerfilJugadorIzquierda />
            <PerfilJugadorDerecha />

        </div>
        </div>
    );
    }