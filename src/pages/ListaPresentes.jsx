import { FiGift, FiShoppingCart, FiDollarSign, FiHeart } from 'react-icons/fi'

function ListaPresentes() {
  // Exemplo de itens da lista de presentes
  const presentes = [
    {
      id: 1,
      nome: 'Jogo de Panelas',
      descricao: 'Jogo de panelas antiaderente com 5 peças',
      loja: 'Loja Exemplo',
      link: '#',
      preco: 'R$ 350,00',
    },
    {
      id: 2,
      nome: 'Jogo de Toalhas',
      descricao: 'Kit com toalhas de banho e rosto',
      loja: 'Loja Exemplo',
      link: '#',
      preco: 'R$ 180,00',
    },
    {
      id: 3,
      nome: 'Liquidificador',
      descricao: 'Liquidificador de alta potência',
      loja: 'Loja Exemplo',
      link: '#',
      preco: 'R$ 250,00',
    },
  ]

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
          <h1 className="page-title">Lista de Presentes</h1>
          <p className="text-center text-gray-700 text-lg max-w-3xl mx-auto">
            Sua presença já é nosso maior presente, mas se desejar nos presentear, 
            ficamos muito felizes!
          </p>
        </div>
      </section>

      {/* Mensagem dos Noivos */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="card bg-gradient-to-br from-wedding-rose/10 to-wedding-olive/10 border-2 border-wedding-olive/20">
            <FiHeart className="text-wedding-rose text-5xl mx-auto mb-4" />
            <p className="text-center text-gray-700 text-lg leading-relaxed">
              Queridos amigos e familiares, estamos muito felizes em compartilhar este momento 
              especial com vocês. Se desejarem nos presentear, preparamos algumas sugestões que 
              nos ajudarão a construir nosso novo lar com muito amor e carinho.
            </p>
          </div>
        </div>
      </section>

      {/* Opções de Presente */}
      <section className="section-container bg-white/50">
        <h2 className="text-3xl font-serif font-bold text-center text-wedding-olive mb-12">
          Escolha seu Presente
        </h2>

        {/* PIX Option */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="card bg-wedding-olive/5 border-2 border-wedding-olive">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <FiDollarSign className="text-wedding-olive text-6xl" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-2xl font-bold text-wedding-olive mb-2">
                  Contribuição via PIX
                </h3>
                <p className="text-gray-700 mb-4">
                  Você também pode contribuir diretamente via PIX para nos ajudar a realizar nossos sonhos.
                </p>
                <div className="bg-white p-4 rounded-lg inline-block">
                  <p className="font-mono text-sm mb-2">
                    <strong>Chave PIX:</strong> [sua-chave-pix@email.com]
                  </p>
                  <p className="text-xs text-gray-600">
                    [Nome Completo]
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-500 text-center px-2">
                    [QR Code PIX]
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lista de Presentes em Lojas */}
        <div className="max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-serif font-bold text-wedding-olive mb-6 text-center">
            Nossas Listas
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="card hover:scale-105 transition-transform duration-300 text-center"
            >
              <FiShoppingCart className="text-wedding-rose text-5xl mx-auto mb-4" />
              <h4 className="text-xl font-bold text-wedding-olive mb-2">
                [Nome da Loja 1]
              </h4>
              <p className="text-gray-600 mb-4">Acesse nossa lista completa</p>
              <span className="btn-secondary inline-block">
                Ver Lista
              </span>
            </a>

            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="card hover:scale-105 transition-transform duration-300 text-center"
            >
              <FiShoppingCart className="text-wedding-rose text-5xl mx-auto mb-4" />
              <h4 className="text-xl font-bold text-wedding-olive mb-2">
                [Nome da Loja 2]
              </h4>
              <p className="text-gray-600 mb-4">Acesse nossa lista completa</p>
              <span className="btn-secondary inline-block">
                Ver Lista
              </span>
            </a>
          </div>
        </div>

        {/* Exemplo de Itens */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-serif font-bold text-wedding-olive mb-6 text-center">
            Alguns Itens da Nossa Lista
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {presentes.map((presente) => (
              <div key={presente.id} className="card">
                <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <FiGift className="text-gray-400 text-5xl" />
                </div>
                <h4 className="text-lg font-bold text-wedding-olive mb-2">
                  {presente.nome}
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  {presente.descricao}
                </p>
                <p className="text-wedding-rose font-bold text-xl mb-3">
                  {presente.preco}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  {presente.loja}
                </p>
                <a 
                  href={presente.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center block"
                >
                  Ver na Loja
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agradecimento */}
      <section className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-wedding-olive mb-6">
            Muito Obrigado!
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Agradecemos imensamente por fazer parte deste momento tão especial em nossas vidas. 
            Sua presença e carinho são o que realmente importa para nós. Qualquer presente será 
            recebido com muito amor e gratidão!
          </p>
        </div>
      </section>
    </div>
  )
}

export default ListaPresentes
