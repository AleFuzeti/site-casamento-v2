import { FiCalendar, FiClock, FiMapPin, FiInfo, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useState } from 'react'
import Countdown from '../components/Countdown'

function ACerimonia() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 0,
      image: `${import.meta.env.BASE_URL}images/roup-fem.jpg`,
      title: 'Traje Feminino',
      description: 'Vestido ou saia e blusa'
    },
    {
      id: 1,
      image: `${import.meta.env.BASE_URL}images/roup-masc.jpg`,
      title: 'Traje Masculino',
      description: 'Calça social e camisa de manga longa'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const getObjectPosition = () => {
    if (currentSlide === 0) return '50% 0%'   // top para primeira foto
    return '50% 40%'                           // center para segunda foto
  }
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section
        className="header-section relative min-h-96"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}images/pre-169.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          zIndex: 1
        }}
      >
        <div className="absolute  flex flex-col items-center justify-center pt-32">
          <h1 className="text-white mb-0 hidden md:block" style={{ fontSize: '6.5rem', position: 'fixed', top: '80%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>A Cerimônia</h1>
          <h1 className="text-white mb-0 md:hidden" style={{ fontSize: '6.5rem', position: 'fixed', top: '80%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>Cerimônia</h1>
        </div>
      </section>

      {/* Data e Horário */}
      <section className="section-container bg-[#8da172]" style={{ position: 'relative', zIndex: 2 }}>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="card text-center">
            <FiCalendar className="text-wedding-olive text-5xl mx-auto mb-4" />
            <h2 className="text-2xl font-serif font-bold text-wedding-olive mb-2">
              Data
            </h2>
            <p className="text-3xl font-bold text-wedding-olive mb-2">
              06 de Junho de 2026
            </p>
            <p className="text-gray-600">
              Sábado
            </p>
          </div>

          <div className="card text-center">
            <FiClock className="text-wedding-olive text-5xl mx-auto mb-4" />
            <h2 className="text-2xl font-serif font-bold text-wedding-olive mb-2">
              Horário de Recepção
            </h2>
            <p className="text-3xl font-bold text-wedding-olive mb-2">
              15h00
            </p>
            <p className="text-gray-600">
              Início da Cerimônia
            </p>
          </div>
        </div>
      </section>

      {/* Local da Cerimônia */}
      <section className="section-container bg-white/50 pt-0" style={{ position: 'relative', zIndex: 2 }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center my-8">
            <FiMapPin className="text-wedding-olive text-5xl mx-auto mb-4" />
            <h2 className="text-3xl font-serif font-bold text-wedding-olive mb-4">
              Local
            </h2>
          </div>

          <div className="card">
            <h3 className="text-2xl font-bold text-wedding-olive mb-4">
              Chácara da Dinda
            </h3>
            <p className="text-gray-700 mb-4">
              <strong>Localização:</strong><br />
              R. Almeida Garret, 292 - Jardim Sao Jorge, Londrina - PR, 86047-000
            </p>

            <p className="text-gray-700 mb-4" style={{ textAlign: "justify" }}>
              A cerimônia será realizada na Chácara da Dinda, localizada em Londrina-PR.
              O local possui uma linda área verde, ideal para a cerimônia ao ar livre.
            </p>

            <p className="text-gray-700 mb-4" style={{ textAlign: "justify" }}>
              Esperamos que todos aproveitem o espaço e a natureza ao nosso redor!
            </p>

            {/* Google Maps */}
            <div className="w-full rounded-lg overflow-hidden mb-4">
              <iframe
                title="Mapa do local"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.359068256362!2d-51.1565507248982!3d-23.339002378953268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb4350ff58f47f%3A0x8c9204cafc59fcc3!2sCh%C3%A1cara%20da%20Dinda%20-%20Londrina!5e0!3m2!1spt-BR!2sbr!4v1765722292145!5m2!1spt-BR!2sbr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            <a
              href="https://www.google.com/maps/search/Ch%C3%A1cara+da+Dinda+Londrina+PR"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Ver no Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Programação do Dia */}
      <section
        className="section-container bg-[#8da172] relative"
        style={{
          position: 'relative',
          zIndex: 2,
          backgroundImage: `url(${import.meta.env.BASE_URL}images/pre-90.jpg)`,
          backgroundSize: '118%',
          backgroundPosition: '-28% 72%',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="relative z-10 md:ml-8" style={{ maxWidth: '550px' }}>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-wedding-olive mb-4">
              Programação do Dia
            </h2>
          </div>

          <div className="card">
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 bg-wedding-olive/5 rounded-lg">
                <FiClock className="text-wedding-olive text-2xl flex-shrink-0" />
                <div>
                  <span className="font-bold text-wedding-olive">15h00</span>
                  <span className="text-gray-700 ml-2">Recepção dos convidados</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 bg-wedding-olive/5 rounded-lg">
                <FiClock className="text-wedding-olive text-2xl flex-shrink-0" />
                <div>
                  <span className="font-bold text-wedding-olive">16h00</span>
                  <span className="text-gray-700 ml-2">Início da cerimônia</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 bg-wedding-olive/5 rounded-lg">
                <FiClock className="text-wedding-olive text-2xl flex-shrink-0" />
                <div>
                  <span className="font-bold text-wedding-olive">17h00</span>
                  <span className="text-gray-700 ml-2">Fotos com os noivos</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 bg-wedding-olive/5 rounded-lg">
                <FiClock className="text-wedding-olive text-2xl flex-shrink-0" />
                <div>
                  <span className="font-bold text-wedding-olive">18h00</span>
                  <span className="text-gray-700 ml-2">Início do jantar</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 bg-wedding-olive/5 rounded-lg">
                <FiClock className="text-wedding-olive text-2xl flex-shrink-0" />
                <div>
                  <span className="font-bold text-wedding-olive">21h00</span>
                  <span className="text-gray-700 ml-2">Corte do Bolo</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 bg-wedding-olive/5 rounded-lg">
                <FiClock className="text-wedding-olive text-2xl flex-shrink-0" />
                <div>
                  <span className="font-bold text-wedding-olive">22h00</span>
                  <span className="text-gray-700 ml-2">Final da festa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informações Adicionais */}
      <section className="section-container bg-white/50" style={{ position: 'relative', zIndex: 2 }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <FiInfo className="text-wedding-rose text-5xl mx-auto mb-4" />
            <h2 className="text-3xl font-serif font-bold text-wedding-olive mb-4">
              Informações Importantes
            </h2>
          </div>

          <div className="space-y-6">
            {/* Traje - Carousel */}
            <div className="card">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-wedding-olive mb-6 text-center">
                  Traje para a Cerimônia
                </h3>

                <div className="mt-6 p-4 bg-wedding-olive/5 rounded-lg">
                  <p className="text-gray-700 text-center font-medium">
                    O traje é <strong>esporte fino</strong>.
                    <br />
                     Esperamos que todos estejam <strong>confortáveis e elegantes</strong> para celebrar conosco!
                      Evite roupas muito informais.
                  </p>

                </div>
              </div>

              {/* Carousel */}
              <div className="md:px-20 relative bg-gradient-to-br from-wedding-olive/5 to-wedding-rose/5 rounded-lg overflow-hidden">
                <div className="relative h-80 md:h-96 flex items-center justify-center bg-gray-100">
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="w-full h-full object-cover transition-opacity duration-500"
                    style={{ objectPosition: getObjectPosition() }}
                  />

                  {/* Overlay com gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                  {/* Botão Anterior */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-wedding-olive p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
                  >
                    <FiChevronLeft size={24} />
                  </button>

                  {/* Botão Próximo */}
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-wedding-olive p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
                  >
                    <FiChevronRight size={24} />
                  </button>

                  {/* Informações sobre o slide */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h4 className="text-xl font-bold mb-2">{slides[currentSlide].title}</h4>
                    <p className="text-sm text-gray-100">{slides[currentSlide].description}</p>
                  </div>
                </div>

                {/* Indicadores */}
                <div className="flex justify-center gap-3 p-4 bg-white">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-3 rounded-full transition-all duration-300 ${index === currentSlide
                          ? 'bg-wedding-olive w-8'
                          : 'bg-wedding-olive/30 w-3 hover:bg-wedding-olive/50'
                        }`}
                    />
                  ))}
                </div>
              </div>


            </div>

            {/* Cardápio */}
            <div className="card">
              <h3 className="text-2xl font-bold text-wedding-olive mb-4">
                Cardápio
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-wedding-olive text-white">
                      <th className="border border-wedding-olive p-3 text-left">Categoria</th>
                      <th className="border border-wedding-olive p-3 text-left">Itens</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-wedding-olive/5">
                      <td className="border border-gray-300 p-3 font-semibold">Pizzas Salgadas</td>
                      <td className="border border-gray-300 p-3">Pepperoni, Calabresa, Frango com Catupiry, Marguerita, Milho Bacon, Lombo Barbecue, Quatro Queijos, Zucchini, Brócolis com Bacon, Portuguesa, Palmito, Strogonoff de Iscas de Mignon, Baiana, Aliche, Rúcula com Tomate Seco, Mussarela</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Pizzas Doces</td>
                      <td className="border border-gray-300 p-3">Banana com Canela, Brigadeiro, Romeu e Julieta, Brasileirinha, Chocolate Branco com Coco Queimado, Sensação</td>
                    </tr>

                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 mt-4 text-center font-medium">
                Esperamos que todos aproveitem!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contagem Regressiva até o casamento */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Countdown />
      </div>
    </div>
  )
}

export default ACerimonia
