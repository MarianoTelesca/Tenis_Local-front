import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

//Componentes
import Menu from './components/Menu'
import Footer from './components/Footer'

//Páginas
import Error404 from './pages/Error404'
import Index from './pages/Index'
import PerfilJugador from './pages/PerfilJugador'
import DetalleCancha from './pages/DetalleCancha'
import BusquedaCanchas from './pages/BusquedaCanchas'
import ReservarCancha from './pages/ReservarCancha'
import Partidos from './pages/Partidos'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Menu/>
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route exact path="/perfil" element={<PerfilJugador />} />
            <Route exact path="/detalle_cancha" element={<DetalleCancha />} />
            <Route exact path="/busqueda_canchas" element={<BusquedaCanchas />} />
            <Route exact path="/reservar_cancha" element={<ReservarCancha />} />
            <Route exact path="/partidos" element={<Partidos />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App