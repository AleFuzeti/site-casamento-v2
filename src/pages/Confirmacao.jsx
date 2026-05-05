import { useState, useEffect } from 'react'
import { convidadosService } from '../services/convidadosService'

const DATA_LIMITE = new Date('2026-05-06T23:59:59')

function Confirmacao() {
  const [codigo, setCodigo] = useState('')
  const [convidados, setConvidados] = useState([])
  const [convidadoAtual, setConvidadoAtual] = useState(null)
  const [selecionados, setSelecionados] = useState([])
  const [dataLimitePassou, setDataLimitePassou] = useState(false)
  const [relatorio, setRelatorio] = useState(null)
  const [loading, setLoading] = useState(false)
  const [listaSimples, setListaSimples] = useState(false)
  const [mensagemConfirmacao, setMensagemConfirmacao] = useState('')

  // Função para carregar convidados da API
  const carregarConvidados = async () => {
    try {
      console.log('🔄 Iniciando carregamento de convidados...')
      const dados = await convidadosService.listarConvidados()
      console.log('📦 Resposta do serviço:', dados)
      
      if (dados.success) {
        setConvidados(dados.convidados)
        console.log('☁️ Dados carregados da nuvem:', dados.convidados.length, 'convidados')
      } else {
        console.error('❌ Falha no carregamento - nenhum convidado retornado')
      }
    } catch (error) {
      console.error('❌ Erro ao carregar convidados:', error)
    }
  }

  useEffect(() => {
    console.log('⏳ useEffect disparado - montando componente')
    // Carregar dados da API/nuvem
    carregarConvidados()
    setDataLimitePassou(new Date() > DATA_LIMITE)
  }, [])

  const buscarConvidado = () => {
    console.log('🔍 Buscando código:', codigo)
    console.log('📋 Total de convidados carregados:', convidados.length)
    console.log('📋 Dados dos convidados:', convidados)
    
    if (codigo.trim().toUpperCase() === 'M0M0') {
      setRelatorio(convidados)
      setConvidadoAtual(null)
      setMensagemConfirmacao('')
      return
    }

    const convidado = convidados.find(c => c.codigo?.toUpperCase() === codigo.trim().toUpperCase())
    
    console.log('✅ Convidado encontrado:', convidado)
    
    if (!convidado) {
      alert('Código não encontrado. Verifique se digitou corretamente.')
      return
    }
    
    setConvidadoAtual(convidado)
    setSelecionados(convidado.confirmados || [])
    setRelatorio(null)
    setMensagemConfirmacao('')
  }

  const handleCheckbox = (nome) => {
    setSelecionados(prev =>
      prev.includes(nome) ? prev.filter(n => n !== nome) : [...prev, nome]
    )
  }

  const confirmarPresenca = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMensagemConfirmacao('')

    try {
      // Enviar para a API
      const resultado = await convidadosService.confirmarPresenca(convidadoAtual.codigo, selecionados)
      
      if (resultado.success) {
        // Atualizar dados localmente após confirmação
        await carregarConvidados()
        
        // Atualizar convidado atual
        const convidadoAtualizado = {
          ...convidadoAtual,
          confirmados: [...selecionados],
          confirmado: selecionados.length > 0,
          dataConfirmacao: new Date().toISOString()
        }
        setConvidadoAtual(convidadoAtualizado)
        
        const msg = selecionados.length > 0 
          ? `✅ Presença confirmada na nuvem! ${selecionados.length} pessoa(s) confirmada(s).`
          : '❌ Presença cancelada.'
        
        setMensagemConfirmacao(msg)
        setTimeout(() => setMensagemConfirmacao(''), 5000)
      } else {
        setMensagemConfirmacao(`❌ Erro: ${resultado.message}`)
        setTimeout(() => setMensagemConfirmacao(''), 5000)
      }
    } catch (error) {
      console.error('❌ Erro ao confirmar:', error)
      setMensagemConfirmacao('❌ Erro ao salvar. Tente novamente.')
      setTimeout(() => setMensagemConfirmacao(''), 5000)
    }
    
    setLoading(false)
  }

  const gerarListaSimples = () => {
    if (!relatorio) return []
    const confirmados = []
    relatorio.forEach(c => {
      if (c.confirmados?.length > 0) confirmados.push(...c.confirmados)
    })
    return [...new Set(confirmados)].sort()
  }

  const copiarListaSimples = async () => {
    const lista = gerarListaSimples()
    if (lista.length === 0) {
      alert('Não há nomes confirmados.')
      return
    }
    try {
      await navigator.clipboard.writeText(lista.join('\n'))
      alert('Lista copiada!')
    } catch (err) {
      alert('Erro ao copiar.')
    }
  }

  return (
    <div className="min-h-screen">
      <section 
        id="topo" 
        className="header-section relative min-h-96"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}images/pre-44.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 65%',
          backgroundAttachment: 'fixed',
          zIndex: 1
        }}
      >
        <h1 className="text-white mb-0" style={{ fontSize: '5.0rem', position: 'fixed', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
          Confirmação
        </h1>
      </section>

      <section className="section-container pt-0 px-0" style={{ position: 'relative', zIndex: 2 }}>
        <div className=" p-4 max-w-3xl mx-auto">
        
          <p className="text-center mt-4 text-gray-700 text-lg mb-4">
            Digite seu código de convite para confirmar sua presença
          </p>
          <p className="text-center text-sm text-gray-500 mb-8">
            ☁️ Suas confirmações são salvas na nuvem automaticamente
          </p>

          <div className="card mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
                placeholder="Digite seu código..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-olive"
              />
              <button onClick={buscarConvidado} className="btn-primary whitespace-nowrap">
                Buscar
              </button>
            </div>

            {mensagemConfirmacao && (
              <div className={`mt-4 p-3 rounded-lg text-center font-semibold ${
                mensagemConfirmacao.includes('✅') 
                  ? 'bg-green-100 text-green-800 border border-green-300' 
                  : 'bg-red-100 text-red-800 border border-red-300'
              }`}>
                {mensagemConfirmacao}
              </div>
            )}
          </div>

          {relatorio && (
            <div className="card">
              <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
                <h3 className="text-2xl font-bold text-wedding-olive">📋 Lista de Convidados</h3>
                <div className="flex gap-2 flex-wrap">
                  <button 
                    onClick={() => setListaSimples(false)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${!listaSimples ? 'bg-wedding-olive text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    📋 Por Convite
                  </button>
                  <button 
                    onClick={() => setListaSimples(true)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${listaSimples ? 'bg-wedding-rose text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    📝 Lista Simples
                  </button>
                  <button onClick={() => { setRelatorio(null); setListaSimples(false) }} className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm">
                    ✖ Fechar
                  </button>
                </div>
              </div>
              
              {listaSimples ? (
                <div className="p-5 bg-gray-50 rounded-lg">
                  <div className="flex justify-between mb-4">
                    <h4 className="font-bold text-green-700">✅ Confirmados ({gerarListaSimples().length})</h4>
                    {gerarListaSimples().length > 0 && (
                      <button onClick={copiarListaSimples} className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm">
                        📋 Copiar
                      </button>
                    )}
                  </div>
                  {gerarListaSimples().length > 0 ? (
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-white p-4 rounded-lg">
                      {gerarListaSimples().map((nome, i) => (
                        <li key={i} className="py-1 px-2 border-b">• {nome}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500">Nenhuma confirmação ainda</p>
                  )}
                </div>
              ) : (
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {relatorio.map((c, i) => (
                    <div key={i} className={`p-4 rounded-lg border-2 ${c.confirmado ? 'bg-green-50 border-green-200' : 'bg-orange-50 border-orange-200'}`}>
                      <div className="mb-2">
                        <strong>👥 Convidados:</strong>
                        <ul className="ml-5 list-disc">
                          {c.nomes?.map((n, j) => <li key={j}>{n}</li>)}
                        </ul>
                      </div>
                      <div>
                        <strong>✅ Confirmados:</strong>
                        {c.confirmados?.length > 0 ? (
                          <ul className="ml-5 list-disc text-green-700 font-medium">
                            {c.confirmados.map((n, j) => <li key={j}>{n}</li>)}
                          </ul>
                        ) : (
                          <span className="text-gray-500 ml-2">Nenhum</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <h4 className="font-bold text-wedding-olive mb-2">📊 Resumo:</h4>
                <div className="text-sm space-y-1">
                  <p>📋 Total de convites: {relatorio.length}</p>
                  <p>✅ Confirmados: {relatorio.filter(c => c.confirmado).length}</p>
                  <p>👥 Total de pessoas: {relatorio.reduce((t, c) => t + (c.confirmados?.length || 0), 0)}</p>
                </div>
              </div>
            </div>
          )}

          {!relatorio && convidadoAtual && (
            <div className="card">
              <h3 className="text-2xl font-bold text-wedding-olive mb-4">Convidados do convite:</h3>
              {dataLimitePassou ? (
                <div className="text-center py-8">
                  <p className="text-lg mb-4">O prazo para confirmação terminou.</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Confirmados:</h4>
                    {convidadoAtual.confirmados?.length > 0 ? (
                      <ul className="list-disc list-inside">
                        {convidadoAtual.confirmados.map((n, i) => <li key={i} className="text-green-700">{n}</li>)}
                      </ul>
                    ) : (
                      <p className="text-gray-500">Nenhum confirmado.</p>
                    )}
                  </div>
                </div>
              ) : (
                <form onSubmit={confirmarPresenca}>
                  <div className="space-y-3 mb-6">
                    {convidadoAtual.nomes.map((nome, i) => (
                      <label key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            checked={selecionados.includes(nome)}
                            onChange={() => handleCheckbox(nome)}
                            className="w-5 h-5 text-wedding-olive rounded mr-3"
                          />
                          <span className="font-medium">{nome}</span>
                        </div>
                        {convidadoAtual.confirmados?.includes(nome) && (
                          <span className="text-green-600 text-sm font-bold">✅ Confirmado</span>
                        )}
                      </label>
                    ))}
                  </div>
                  <button type="submit" className="btn-primary w-full py-4 text-lg" disabled={loading}>
                    {loading ? '⏳ Salvando...' : 'Confirmar Presença'}
                  </button>
                  <p className="mt-3 text-center text-gray-600 text-sm">
                    Você pode alterar até {DATA_LIMITE.toLocaleDateString('pt-BR')}.
                  </p>
                </form>
              )}
            </div>
          )}

          {!relatorio && !convidadoAtual && (
            <div className="card bg-wedding-rose/10 border-2 border-wedding-rose/30">
              <h3 className="text-xl font-bold text-wedding-olive mb-3">ℹ️ Informações Importantes</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Digite o código que está no seu convite.</li>
                <li>• Confirme sua presença até 01 de maio de 2026.</li>
                <li>• Você pode alterar sua confirmação até a data limite.</li>
                <li>• Em caso de erro, aguarde alguns minutos e tente novamente.</li>
                <li>• Em caso de dúvidas, entre em contato conosco.</li>
              </ul>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Confirmacao
