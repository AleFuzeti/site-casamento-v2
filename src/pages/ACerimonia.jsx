import { FiCalendar, FiClock, FiMapPin, FiInfo } from 'react-icons/fi'

function ACerimonia() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-wedding-olive/20 to-wedding-rose/20">
        <div className="w-full mb-8">
          <img 
            src="/images/header.png" 
            alt="Carolina & Alexandre" 
            className="w-full h-auto"
          />
        </div>
        
        <div className="section-container">
          <h1 className="page-title">A Cerimônia</h1>
          <p className="text-center text-gray-700 text-lg max-w-3xl mx-auto mb-4">
            Estamos muito felizes em compartilhar esse momento especial com você!
          </p>
          <p className="text-center text-gray-700 text-lg max-w-3xl mx-auto mb-4">
            O nosso casamento será realizado no dia <strong>06 de junho de 2026, às 16h30</strong>, na Chácara da Dinda em Londrina-PR.
          </p>
          <p className="text-center text-gray-700 text-lg max-w-3xl mx-auto mb-4">
            Esperamos que você possa nos acompanhar nesse dia tão especial!
          </p>
          <p className="text-center text-gray-700 text-lg max-w-3xl mx-auto font-serif italic">
            Com amor, Carolina e Alexandre.
          </p>
        </div>
      </section>

      {/* Data e Horário */}
      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="card text-center">
            <FiCalendar className="text-wedding-olive text-5xl mx-auto mb-4" />
            <h2 className="text-2xl font-serif font-bold text-wedding-olive mb-2">
              Data
            </h2>
            <p className="text-3xl font-bold text-wedding-rose mb-2">
              06 de Junho de 2026
            </p>
            <p className="text-gray-600">
              Sexta-feira
            </p>
          </div>

          <div className="card text-center">
            <FiClock className="text-wedding-rose text-5xl mx-auto mb-4" />
            <h2 className="text-2xl font-serif font-bold text-wedding-olive mb-2">
              Horário
            </h2>
            <p className="text-3xl font-bold text-wedding-rose mb-2">
              16h30
            </p>
            <p className="text-gray-600">
              Início da Cerimônia
            </p>
          </div>
        </div>
      </section>

      {/* Local da Cerimônia */}
      <section className="section-container bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
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
              Londrina - PR
            </p>
            
            <p className="text-gray-700 mb-4">
              A cerimônia será realizada na Chácara da Dinda, localizada em Londrina-PR.
              O local possui uma linda área verde, ideal para a cerimônia ao ar livre.
            </p>
            
            <p className="text-gray-700 mb-4">
              Contamos com estacionamento próprio e segurança para garantir a tranquilidade de todos os convidados.
              Esperamos que todos aproveitem o espaço e a natureza ao nosso redor!
            </p>
            
            {/* Google Maps */}
            <div className="w-full rounded-lg overflow-hidden mb-4">
              <iframe
                title="Mapa do local"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.0000000000005!2d-51.16999968502141!3d-23.3100009847466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8c9b4b4b4b4b4%3A0x4b8b4b4b4b4b4b4!2sRua%20dos%20Eventos%2C%20123%20-%20Centro%2C%20Londrina%20-%20PR%2C%2086010-000!5e0!3m2!1spt-BR!2sbr!4v1633660000000!5m2!1spt-BR!2sbr"
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
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
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
              
              <div className="flex items-center gap-4 p-3 bg-wedding-rose/10 rounded-lg">
                <FiClock className="text-wedding-rose text-2xl flex-shrink-0" />
                <div>
                  <span className="font-bold text-wedding-rose">16h00</span>
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
              
              <div className="flex items-center gap-4 p-3 bg-wedding-rose/10 rounded-lg">
                <FiClock className="text-wedding-rose text-2xl flex-shrink-0" />
                <div>
                  <span className="font-bold text-wedding-rose">18h00</span>
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
              
              <div className="flex items-center gap-4 p-3 bg-wedding-rose/10 rounded-lg">
                <FiClock className="text-wedding-rose text-2xl flex-shrink-0" />
                <div>
                  <span className="font-bold text-wedding-rose">22h00</span>
                  <span className="text-gray-700 ml-2">Final de cerimônia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informações Adicionais */}
      <section className="section-container bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <FiInfo className="text-wedding-rose text-5xl mx-auto mb-4" />
            <h2 className="text-3xl font-serif font-bold text-wedding-olive mb-4">
              Informações Importantes
            </h2>
          </div>

          <div className="space-y-6">
            {/* Traje */}
            <div className="card">
              <h3 className="text-2xl font-bold text-wedding-olive mb-3">
                Traje
              </h3>
              <p className="text-gray-700 mb-3">
                O traje para a cerimônia é <strong>esporte fino</strong>. Pedimos que os convidados evitem roupas muito informais, como shorts e chinelos.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Para os homens:</strong> sugerimos calça social e camisa de manga longa.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Para as mulheres:</strong> vestido ou saia e blusa.
              </p>
              <p className="text-gray-700">
                Esperamos que todos estejam confortáveis e elegantes para celebrar conosco!
              </p>
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
                      <td className="border border-gray-300 p-3">4 queijos, Mussarela, Marguerita, Frango com Catupiry</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Pizzas Doces</td>
                      <td className="border border-gray-300 p-3">Brigadeiro, Romeu e Julieta</td>
                    </tr>
                    <tr className="bg-wedding-olive/5">
                      <td className="border border-gray-300 p-3 font-semibold">Bebidas</td>
                      <td className="border border-gray-300 p-3">Cerveja, Quentão, Energético, Água com e sem gás, Coca-Cola, Guaraná</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Drinks</td>
                      <td className="border border-gray-300 p-3">
                        <strong>Moreco:</strong> Essência de morango com vodka/água com gás<br />
                        <strong>Drink da Carol:</strong> Maçã verde com vodka/água com gás<br />
                        <strong>Drink do Ale:</strong> Essência de limão e hortelã com vodka/água com gás
                      </td>
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
    </div>
  )
}

export default ACerimonia
