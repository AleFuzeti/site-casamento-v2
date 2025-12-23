import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import OCasal from './pages/OCasal'
import ACerimonia from './pages/ACerimonia'
import Confirmacao from './pages/Confirmacao'
import ListaPresentes from './pages/ListaPresentes'

function App() {
  const basename = import.meta.env.PROD ? '/site-casamento-v2' : '/'

  return (
    <Router basename={basename}>
      <Layout>
        <Routes>
          <Route path="/" element={<OCasal />} />
          <Route path="/a-cerimonia" element={<ACerimonia />} />
          <Route path="/confirmacao" element={<Confirmacao />} />
          <Route path="/lista-presentes" element={<ListaPresentes />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
