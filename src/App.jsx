import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import OCasal from './pages/OCasal'
import ACerimonia from './pages/ACerimonia'
import Confirmacao from './pages/Confirmacao'
import ListaPresentes from './pages/ListaPresentes'

function App() {
  return (
    <Router basename="/site-casamento-v2">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-casal" element={<OCasal />} />
          <Route path="/a-cerimonia" element={<ACerimonia />} />
          <Route path="/confirmacao" element={<Confirmacao />} />
          <Route path="/lista-presentes" element={<ListaPresentes />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
