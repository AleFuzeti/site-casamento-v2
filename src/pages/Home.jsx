import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiHeart, FiCalendar, FiMapPin, FiGift } from 'react-icons/fi'

function Home() {
  // Contador regressivo - Data do casamento: 06 de junho de 2026
  const weddingDate = new Date('2026-06-06T16:00:00-03:00') // explicitamente GMT-3
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  function calculateTimeLeft() {
    const difference = weddingDate - new Date()
    
    if (difference > 0) {
      return {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      }
    }
    return null
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="topo" className="relative flex flex-col items-center justify-center bg-gradient-to-br to-wedding-olive/20 from-wedding-olive/20 pb-8">
        <a href="#topo" className="w-full mb-8 cursor-pointer">
          <img 
            src={`${import.meta.env.BASE_URL}images/header.png`} 
            alt="Carolina & Alexandre" 
            className="w-full h-auto"
          />
        </a>
        
        <div className="text-center px-4">
          <FiHeart className="text-wedding-rose text-6xl mx-auto mb-6 animate-pulse" />
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Vamos nos casar!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/confirmacao" className="btn-primary">
              Confirmar Presença
            </Link>
            <Link to="/a-cerimonia" className="btn-secondary">
              Ver Detalhes
            </Link>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      {timeLeft && (
        <section className="section-container">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-wedding-olive mb-12">
            Contagem Regressiva
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="card text-center">
                <div className="text-4xl md:text-5xl font-bold text-wedding-olive mb-2">
                  {value}
                </div>
                <div className="text-gray-600 capitalize text-sm md:text-base">
                  {unit}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Quick Info Section */}
      <section className="section-container bg-white/50">
        <div className="grid md:grid-cols-3 gap-8">
          <Link to="/o-casal" className="card text-center hover:scale-105 transition-transform duration-300">
            <FiHeart className="text-wedding-rose text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-serif font-bold text-wedding-olive mb-2">
              O Casal
            </h3>
            <p className="text-gray-600">
              Conheça nossa história
            </p>
          </Link>

          <Link to="/a-cerimonia" className="card text-center hover:scale-105 transition-transform duration-300">
            <FiCalendar className="text-wedding-olive text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-serif font-bold text-wedding-olive mb-2">
              A Cerimônia
            </h3>
            <p className="text-gray-600">
              Data, local e informações
            </p>
          </Link>

          <Link to="/lista-presentes" className="card text-center hover:scale-105 transition-transform duration-300">
            <FiGift className="text-wedding-rose text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-serif font-bold text-wedding-olive mb-2">
              Lista de Presentes
            </h3>
            <p className="text-gray-600">
              Escolha seu presente
            </p>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-container text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-wedding-olive mb-6">
            Sua presença é muito importante!
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Confirme sua presença até 01 de maio de 2026 para que possamos planejar este dia especial com você.
          </p>
          <Link to="/confirmacao" className="btn-primary text-lg px-8 py-4">
            Confirmar Presença Agora
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
