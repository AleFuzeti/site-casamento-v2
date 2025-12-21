import { useState, useEffect } from 'react'
import { convidadosService } from '../services/convidadosService'

const DATA_LIMITE = new Date('2026-05-01T23:59:59')

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

  useEffect(() => {
    // Carregar convidados da API
    carregarConvidados()
    setDataLimitePassou(new Date() > DATA_LIMITE)
  }, [])

  const carregarConvidados = async () => {
    setLoading(true)
    try {
      const dados = await convidadosService.buscarConvidados()
      setConvidados(dados)
      console.log('📊 Convidados carregados da API:', dados.length)
    } catch (error) {
      console.error('❌ Erro ao carregar convidados:', error)
      setMensagemConfirmacao('❌ Erro ao carregar dados. Verifique se o servidor está rodando na porta 4000.')
      setTimeout(() => setMensagemConfirmacao(''), 5000)
    }
    setLoading(false)
  }

  const buscarConvidado = () => {
    console.log('🔍 Buscando código:', codigo)
    console.log('📋 Total de convidados:', convidados.length)
    
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
        // Atualizar dados localmente
        await carregarConvidados() // Recarregar da API para ter dados atualizados
        
        // Atualizar convidado atual
        const convidadoAtualizado = convidados.find(c => c.codigo === convidadoAtual.codigo)
        if (convidadoAtualizado) {
          setConvidadoAtual({...convidadoAtualizado, confirmados: selecionados})
        }
        
        const msg = selecionados.length > 0 
          ? `✅ Presença confirmada! ${selecionados.length} pessoa(s) confirmada(s).`
          : '❌ Presença cancelada.'
        
        setMensagemConfirmacao(msg)
        setTimeout(() => setMensagemConfirmacao(''), 5000)
        
        console.log('💾 Dados salvos no servidor!')
      } else {
        setMensagemConfirmacao(`❌ ${resultado.message}`)
        setTimeout(() => setMensagemConfirmacao(''), 5000)
      }
    } catch (error) {
      console.error('❌ Erro ao confirmar presença:', error)
      setMensagemConfirmacao('❌ Erro ao confirmar presença. Tente novamente.')
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

  const resetarDados = async () => {
    if (confirm('⚠️ Atenção: Esta ação está desabilitada quando usando API. Use o código M0M0 para visualizar os dados atuais.')) {
      // Recarregar dados da API
      await carregarConvidados()
      setRelatorio(null)
      setConvidadoAtual(null)
      setMensagemConfirmacao('🔄 Dados recarregados da API!')
      setTimeout(() => setMensagemConfirmacao(''), 3000)
    }
  }

  return (
    <div className="min-h-screen">
      <section id="topo" className="bg-gradient-to-br to-wedding-olive/20 from-wedding-olive/20">
        <a href="#topo" className="block w-full cursor-pointer">
          <img src="/images/header.png" alt="Carolina & Alexandre" className="w-full h-auto" />
        </a>
      </section>

      <section className="section-container">
        <div className="max-w-3xl mx-auto">
          <h1 className="page-title">Confirmação de Presença</h1>
          <p className="text-center text-gray-700 text-lg mb-4">
            Digite seu código de convite para confirmar sua presença
          </p>
          <p className="text-center text-sm text-gray-500 mb-8">
            💾 Suas confirmações são salvas no servidor
          </p>

          <div className="card mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
                placeholder="Digite seu código..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-olive"
                disabled={loading}
              />
              <button onClick={buscarConvidado} className="btn-primary whitespace-nowrap" disabled={loading}>
                {loading ? 'Buscando...' : 'Buscar'}
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
                  <button 
                    onClick={resetarDados}
                    className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm hover:bg-orange-600"
                    title="Recarregar dados da API"
                  >
                    🔄 Atualizar
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
                    <p className="text-gray-500 italic">Nenhuma confirmação ainda</p>
                  )}
                  
                  <div className="mt-4 p-3 bg-green-50 rounded-lg text-sm text-green-800">
                    📊 <strong>Total:</strong> {gerarListaSimples().length} pessoas confirmadas de {relatorio.reduce((total, c) => total + (c.nomes?.length || 0), 0)} convidados
                  </div>
                </div>
              ) : (
                <div className="max-h-96 overflow-y-auto">
                  {relatorio.map((convite, idx) => (
                    <div key={idx} className={`mb-4 p-4 rounded-lg border ${
                      convite.confirmado ? 'bg-green-50 border-green-200' : 'bg-orange-50 border-orange-200'
                    }`}>
                      <div className="mb-3">
                        <strong className="text-gray-700">👥 Convidados:</strong>
                        <ul className="ml-4 mt-1">
                          {(convite.nomes || []).map((nome, i) => (
                            <li key={i} className="text-gray-600">• {nome}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <strong className="text-gray-700">✅ Confirmaram:</strong>
                        {convite.confirmados && convite.confirmados.length > 0 ? (
                          <ul className="ml-4 mt-1">
                            {convite.confirmados.map((nome, i) => (
                              <li key={i} className="text-green-700 font-medium">• {nome}</li>
                            ))}
                          </ul>
                        ) : (
                          <span className="text-gray-500 ml-2 italic">Nenhum confirmado</span>
                        )}
                      </div>
                      
                      {convite.dataConfirmacao && (
                        <div className="mt-2 text-xs text-gray-500">
                          📅 {new Date(convite.dataConfirmacao).toLocaleString('pt-BR')}
                        </div>
                      )}
                    </div>
                  ))}
                  
                  <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                    <h4 className="font-bold mb-2">📊 Resumo:</h4>
                    <p>📋 Total de convites: {relatorio.length}</p>
                    <p>✅ Convites confirmados: {relatorio.filter(c => c.confirmado).length}</p>
                    <p>❌ Não confirmados: {relatorio.filter(c => !c.confirmado).length}</p>
                    <p>👥 Total confirmados: {relatorio.reduce((total, c) => total + (c.confirmados?.length || 0), 0)}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {!relatorio && convidadoAtual && (
            <div className="card">
              <h3 className="text-2xl font-bold text-wedding-olive mb-4">Convidados do convite:</h3>
              {dataLimitePassou ? (
                <div>
                  <p className="text-red-600 font-semibold mb-4">O prazo para confirmação já terminou.</p>
                  <ul className="space-y-2">
                    {convidadoAtual.confirmados && convidadoAtual.confirmados.length > 0 ? (
                      convidadoAtual.confirmados.map((nome, i) => (
                        <li key={i} className="p-2 bg-green-50 rounded">✅ {nome}</li>
                      ))
                    ) : (
                      <li className="p-2 bg-gray-50 rounded italic">Nenhum convidado confirmou presença</li>
                    )}
                  </ul>
                </div>
              ) : (
                <form onSubmit={confirmarPresenca}>
                  <div className="space-y-3 mb-6">
                    {convidadoAtual.nomes.map((nome, i) => (
                      <label key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                        <input
                          type="checkbox"
                          checked={selecionados.includes(nome)}
                          onChange={() => handleCheckbox(nome)}
                          className="w-5 h-5"
                        />
                        <span className="flex-1 text-gray-700">{nome}</span>
                        {convidadoAtual.confirmados && convidadoAtual.confirmados.includes(nome) && (
                          <span className="text-green-600 text-sm font-bold">✅ Confirmado</span>
                        )}
                      </label>
                    ))}
                  </div>
                  <button type="submit" className="btn-primary w-full" disabled={loading}>
                    {loading ? 'Confirmando...' : 'Confirmar Presença'}
                  </button>
                  <p className="mt-3 text-center text-gray-600 text-sm">
                    Você pode alterar até {DATA_LIMITE.toLocaleDateString('pt-BR')}
                  </p>
                </form>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Confirmacao
