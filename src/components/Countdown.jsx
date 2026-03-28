import { useState, useEffect } from 'react'

function Countdown() {
  const weddingDate = new Date('2026-06-06T16:00:00-03:00')
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

  if (!timeLeft) return null

  return (
    <section 
      className="section-container bg-[#8da172] relative"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}images/pre-218.jpg)`,
        backgroundSize: 'cover',
        minHeight: '500px',
        backgroundPosition: '-0 75%',
      }}
    >
      <div className="absolute inset-0 bg-wedding-olive/70"></div>
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-white mb-12">
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
      </div>
    </section>
  )
}

export default Countdown
