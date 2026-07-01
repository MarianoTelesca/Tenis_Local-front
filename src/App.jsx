import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

//Componentes
import Menu from './components/Menu'

//Páginas
import Error404 from './pages/Error404'
import Index from './pages/Index'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Menu/>
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App