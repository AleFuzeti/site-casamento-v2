import { useState, useEffect } from 'react'
import { FiGift, FiShoppingCart, FiDollarSign, FiHeart, FiX, FiCopy, FiCheck } from 'react-icons/fi'
import QRCode from 'qrcode'

function ListaPresentes() {
  const [presentes, setPresentes] = useState([])
  const [presentesFiltrados, setPresentesFiltrados] = useState([])
  const [overlayVisible, setOverlayVisible] = useState(false)
  const [codigoPix, setCodigoPix] = useState('')
  const [qrCodeUrl, setQrCodeUrl] = useState('')
  const [presenteSelecionado, setPresenteSelecionado] = useState(null)
  const [loading, setLoading] = useState(true)
  const [copiado, setCopiado] = useState(false)
  const [activeSort, setActiveSort] = useState('relevancia')

  // Carregar presentes do JSON
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}assets/static/presentes.json`)
      .then(response => response.json())
      .then(data => {
        // Mapear foto para imagem e adicionar caminho completo
        const presentesComImagem = data.map(presente => ({
          ...presente,
          imagem: `${import.meta.env.BASE_URL}assets/presentes/${presente.foto}`
        }))
        setPresentes(presentesComImagem)
        setPresentesFiltrados(presentesComImagem)
        setLoading(false)
      })
      .catch(error => {
        console.error('Erro ao carregar presentes:', error)
        setLoading(false)
      })
  }, [])

  // Funções de ordenação
  const ordenarPorRelevancia = () => {
    setPresentesFiltrados([...presentes])
    setActiveSort('relevancia')
  }

  const ordenarPorMaiorPreco = () => {
    const ordenados = [...presentesFiltrados].sort((a, b) => b.preco - a.preco)
    setPresentesFiltrados(ordenados)
    setActiveSort('maior')
  }

  const ordenarPorMenorPreco = () => {
    const ordenados = [...presentesFiltrados].sort((a, b) => a.preco - b.preco)
    setPresentesFiltrados(ordenados)
    setActiveSort('menor')
  }

  // Função auxiliar para calcular CRC16 CCITT
  const calcularCrc16 = (payload) => {
    let crc = 0xFFFF
    for (let i = 0; i < payload.length; i++) {
      crc ^= payload.charCodeAt(i) << 8
      for (let j = 0; j < 8; j++) {
        if ((crc & 0x8000) !== 0) {
          crc = (crc << 1) ^ 0x1021
        } else {
          crc = crc << 1
        }
      }
    }
    return (crc & 0xFFFF).toString(16).toUpperCase().padStart(4, '0')
  }

  // Função para gerar código PIX (EMV)
  const gerarPixCopiaCola = (chavePix, nomeRecebedor, cidadeRecebedor, valor, identificador = '***') => {
    // Função para formatar campo EMV
    const formatarCampo = (id, conteudo) => {
      const tamanho = conteudo.length.toString().padStart(2, '0')
      return `${id}${tamanho}${conteudo}`
    }

    // Normalizar dados
    const nomeNormalizado = nomeRecebedor.substring(0, 25).toUpperCase()
    const cidadeNormalizada = cidadeRecebedor.substring(0, 15).toUpperCase()
    const idNormalizado = identificador.substring(0, 25)

    // Construir payload
    let payload = ''
    
    // 00 - Payload Format Indicator
    payload += formatarCampo('00', '01')
    
    // 26 - Merchant Account Information (PIX)
    const pixInfo = formatarCampo('00', 'br.gov.bcb.pix') + formatarCampo('01', chavePix)
    payload += formatarCampo('26', pixInfo)
    
    // 52 - Merchant Category Code
    payload += formatarCampo('52', '0000')
    
    // 53 - Transaction Currency (986 = BRL)
    payload += formatarCampo('53', '986')
    
    // 54 - Transaction Amount
    if (valor && valor > 0) {
      payload += formatarCampo('54', valor.toFixed(2))
    }
    
    // 58 - Country Code
    payload += formatarCampo('58', 'BR')
    
    // 59 - Merchant Name
    payload += formatarCampo('59', nomeNormalizado)
    
    // 60 - Merchant City
    payload += formatarCampo('60', cidadeNormalizada)
    
    // 62 - Additional Data Field Template
    if (idNormalizado) {
      const additionalData = formatarCampo('05', idNormalizado)
      payload += formatarCampo('62', additionalData)
    }
    
    // 63 - CRC16
    payload += '6304'
    const crc = calcularCrc16(payload)
    payload += crc
    
    return payload
  }

  // Selecionar presente e gerar PIX
  const selecionarPresente = async (presente) => {
    console.log('Presente selecionado:', presente)
    setPresenteSelecionado(presente)

    try {
      // Gerar código PIX
      const codigoPix = gerarPixCopiaCola(
        '+5543988030433',
        'ALEXANDRE FUZETI BERTIPAGLIA',
        'Londrina',
        presente.preco
      )

      console.log('Código PIX completo:', codigoPix)
      setCodigoPix(codigoPix)

      // Gerar QR Code
      const qrCodeDataUrl = await QRCode.toDataURL(codigoPix, {
        errorCorrectionLevel: 'M',
        type: 'image/png',
        quality: 0.95,
        margin: 2,
        width: 300,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      })

      console.log('QR Code gerado com sucesso')
      setQrCodeUrl(qrCodeDataUrl)
      setOverlayVisible(true)

    } catch (error) {
      console.error('Erro ao gerar PIX/QR Code:', error)
      alert('Erro ao gerar código PIX. Por favor, tente novamente.')
    }
  }

  const fecharOverlay = () => {
    setOverlayVisible(false)
    setCopiado(false)
  }

  const copiarCodigo = () => {
    navigator.clipboard.writeText(codigoPix)
    setCopiado(true)
    setTimeout(() => setCopiado(false), 2000)
  }

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-[#767745] text-white font-bold">
        <div className="w-full mb-8">
          <img
            src={`${import.meta.env.BASE_URL}images/header.png`}
            alt="Carolina & Alexandre"
            className="w-full h-auto"
          />
        </div>

        <div className="section-container" style={{ paddingBottom: 0 }}>
          <h1 className="page-title text-white">Lista de Presentes</h1>
          <p className="text-center text-white text-lg max-w-3xl mx-auto">
            Sua presença já é nosso maior presente, mas, se desejar nos presentear, ficaremos imensamente felizes! 
            Pensando nisso, preparamos uma lista de presentes virtual, feita com muito carinho.
          </p>
        </div>
      </section>

      {/* Mensagem dos Noivos */}
      <section className="bg-[#767745] section-container">
        <div className="max-w-4xl mx-auto">
          <div className="card bg-gradient-to-br from-wedding-rose/10 to-wedding-olive/10 border-2 border-wedding-olive/20" style={{ textAlign: "justify" }}>
            <FiHeart className="text-wedding-rose text-5xl mx-auto mb-4" />
            <p className="text-center text-gray-700 text-lg leading-relaxed" style={{ textAlign: "justify" }}>
              Queridos amigos e familiares,
              </p>
            <p className="text-center text-gray-700 text-lg leading-relaxed" style={{ textAlign: "justify" }}>
              Como já temos a maior parte dos itens necessários para a nossa casa, optamos por uma lista de presentes virtual.
              Os presentes são simbólicos, com um toque de bom humor, e representam uma contribuição para a nossa lua de mel e para a nossa vida a dois.
            </p>
            <p className="text-center text-gray-700 text-lg leading-relaxed" style={{ textAlign: "justify" }}>
              Cada item possui um valor aproximado, para que você possa escolher aquele que mais combina com você e com o carinho que deseja nos oferecer.
              Ao selecionar um presente, você será redirecionado para o código PIX e QR Code, onde poderá realizar a contribuição de forma simples e segura.
            </p>
            <p className="text-center text-gray-700 text-lg leading-relaxed" style={{ textAlign: "justify" }}>
              Agradecemos de coração todo o carinho, apoio e amor compartilhados conosco neste momento tão especial.
              Ter vocês ao nosso lado torna esse dia ainda mais inesquecível.
            </p>
          </div>
        </div>
      </section>

      {/* Opções de Presente */}
      <section className="section-container bg-white/50">
        <h2 className="text-3xl font-serif font-bold text-center text-wedding-olive mb-8">
          Escolha seu Presente
        </h2>

        {/* Ordenação */}
        <div className="max-w-4xl mx-auto mb-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={ordenarPorRelevancia}
            className={`px-6 py-2 rounded-lg transition-colors ${activeSort === 'relevancia' ? 'bg-wedding-olive text-white' : 'bg-wedding-rose text-white'}`}
          >
            Relevância
          </button>
          <button
            onClick={ordenarPorMenorPreco}
            className={`px-6 py-2 rounded-lg transition-colors ${activeSort === 'menor' ? 'bg-wedding-olive text-white' : 'bg-wedding-rose text-white'}`}
          >
            Menor Preço
          </button>
          <button
            onClick={ordenarPorMaiorPreco}
            className={`px-6 py-2 rounded-lg transition-colors ${activeSort === 'maior' ? 'bg-wedding-olive text-white' : 'bg-wedding-rose text-white'}`}
          >
            Maior Preço
          </button>
        </div>

        {/* Lista de Presentes */}
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">Carregando presentes...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {presentesFiltrados.map((presente, index) => (
                <div key={`${presente.nome}-${index}`} className="card hover:shadow-xl transition-shadow">
                  <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={presente.imagem}
                      alt={presente.nome}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.error('Erro ao carregar imagem:', presente.imagem)
                        e.target.style.display = 'none'
                        const parent = e.target.parentElement
                        if (parent && !parent.querySelector('.fallback-icon')) {
                          const fallback = document.createElement('div')
                          fallback.className = 'fallback-icon w-full h-full flex items-center justify-center bg-gradient-to-br to-wedding-olive/10 from-wedding-olive/10'
                          fallback.innerHTML = '<svg class="w-20 h-20 text-wedding-olive/30" fill="currentColor" viewBox="0 0 20 20"><path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/></svg>'
                          parent.appendChild(fallback)
                        }
                      }}
                    />
                  </div>
                  <h4 className="text-lg font-bold text-wedding-olive mb-3 min-h-[3rem] text-center">
                    {presente.nome}
                  </h4>
                  <button
                    onClick={() => selecionarPresente(presente)}
                    className="btn-primary w-full font-bold text-2xl text-center flex items-center justify-center gap-2"
                  >
                    <FiGift /> R$ {presente.preco.toFixed(2)}
                  </button>
                </div>
              ))}
            </div>
          )}
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

      {/* Overlay de PIX */}
      {overlayVisible && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={fecharOverlay}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r to-wedding-olive from-wedding-olive p-6 rounded-t-2xl relative">
              <button
                onClick={fecharOverlay}
                className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                <FiX size={24} />
              </button>
              <FiGift className="text-white text-5xl mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-white text-center">
                Pagamento via PIX
              </h3>
            </div>

            {/* Conteúdo */}
            <div className="p-6">
              {/* Presente Selecionado */}
              {presenteSelecionado && (
                <div className="mb-6 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-lg overflow-hidden shadow-md">
                    <img
                      src={presenteSelecionado.imagem}
                      alt={presenteSelecionado.nome}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-wedding-olive mb-2">
                    {presenteSelecionado.nome}
                  </h4>
                  <p className="text-3xl font-bold text-wedding-rose">
                    R$ {presenteSelecionado.preco.toFixed(2)}
                  </p>
                </div>
              )}

              {/* QR Code */}
              {qrCodeUrl && (
                <div className="mb-6 text-center">
                  <div className="bg-white p-4 rounded-lg inline-block shadow-lg border-2 border-gray-200">
                    <img
                      src={qrCodeUrl}
                      alt="QR Code PIX"
                      className="w-64 h-64"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    Escaneie o QR Code com o app do seu banco
                  </p>
                </div>
              )}

              {/* Código Copia e Cola */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Ou copie o código PIX:
                </label>
                <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-3 mb-3">
                  <p className="font-mono text-xs break-all text-gray-700">
                    {codigoPix}
                  </p>
                </div>
                <button
                  onClick={copiarCodigo}
                  className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${copiado
                      ? 'bg-green-500 text-white'
                      : 'bg-wedding-olive text-white hover:bg-wedding-olive/80'
                    }`}
                >
                  {copiado ? (
                    <>
                      <FiCheck size={20} />
                      Código Copiado!
                    </>
                  ) : (
                    <>
                      <FiCopy size={20} />
                      Copiar Código PIX
                    </>
                  )}
                </button>
              </div>

              {/* Instruções */}
              <div className="bg-wedding-olive/5 rounded-lg p-4 border border-wedding-olive/20">
                <h5 className="font-bold text-wedding-olive mb-2 flex items-center gap-2">
                  <FiHeart /> Como pagar:
                </h5>
                <ol className="text-sm text-gray-700 space-y-2 list-decimal list-inside">
                  <li>Abra o app do seu banco</li>
                  <li>Escolha a opção PIX</li>
                  <li>Escaneie o QR Code ou cole o código</li>
                  <li>Confirme o pagamento</li>
                </ol>
              </div>

              {/* Informações do Recebedor */}
              <div className="mt-4 text-center text-sm text-gray-600">
                <p><strong>Beneficiário:</strong> Alexandre Fuzeti Bertipaglia</p>
                <p><strong>Chave PIX:</strong> +55 43 98803-0433</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ListaPresentes
