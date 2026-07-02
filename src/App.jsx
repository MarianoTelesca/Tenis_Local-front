import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

//Componentes
import Menu from './components/Menu'
import Footer from './components/Footer'

//Páginas
import Error404 from './pages/Error404'
import Index from './pages/Index'
import PerfilJugador from './pages/PerfilJugador'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Menu/>
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route exact path="/perfil" element={<PerfilJugador />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App