import { useState } from 'react'
import { FiCheck, FiUser, FiUsers, FiMail, FiMessageSquare } from 'react-icons/fi'

function Confirmacao() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    acompanhantes: '0',
    restricoes: '',
    mensagem: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você pode integrar com um backend ou Google Forms
    console.log('Dados do formulário:', formData)
    setSubmitted(true)
    
    // Reset form após 3 segundos
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        nome: '',
        email: '',
        acompanhantes: '0',
        restricoes: '',
        mensagem: '',
      })
    }, 3000)
  }

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
          <h1 className="page-title">Confirmação de Presença</h1>
          <p className="text-center text-gray-700 text-lg max-w-3xl mx-auto">
            Sua presença é muito importante para nós! Por favor, confirme até 01 de maio de 2026.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-container">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="card text-center py-12">
              <FiCheck className="text-green-500 text-6xl mx-auto mb-4" />
              <h2 className="text-3xl font-serif font-bold text-wedding-olive mb-4">
                Confirmação Recebida!
              </h2>
              <p className="text-gray-700">
                Obrigado por confirmar sua presença. Estamos ansiosos para celebrar este dia especial com você!
              </p>
            </div>
          ) : (
            <div className="card">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nome */}
                <div>
                  <label className="flex items-center text-gray-700 font-medium mb-2">
                    <FiUser className="mr-2 text-wedding-olive" />
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-olive"
                    placeholder="Digite seu nome completo"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="flex items-center text-gray-700 font-medium mb-2">
                    <FiMail className="mr-2 text-wedding-olive" />
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-olive"
                    placeholder="seu@email.com"
                  />
                </div>

                {/* Número de Acompanhantes */}
                <div>
                  <label className="flex items-center text-gray-700 font-medium mb-2">
                    <FiUsers className="mr-2 text-wedding-olive" />
                    Número de Acompanhantes *
                  </label>
                  <select
                    name="acompanhantes"
                    value={formData.acompanhantes}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-olive"
                  >
                    <option value="0">Apenas eu</option>
                    <option value="1">1 acompanhante</option>
                    <option value="2">2 acompanhantes</option>
                    <option value="3">3 acompanhantes</option>
                    <option value="4">4 acompanhantes</option>
                  </select>
                </div>

                {/* Restrições Alimentares */}
                <div>
                  <label className="flex items-center text-gray-700 font-medium mb-2">
                    <FiMessageSquare className="mr-2 text-wedding-olive" />
                    Restrições Alimentares
                  </label>
                  <input
                    type="text"
                    name="restricoes"
                    value={formData.restricoes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-olive"
                    placeholder="Vegetariano, intolerâncias, etc."
                  />
                </div>

                {/* Mensagem */}
                <div>
                  <label className="flex items-center text-gray-700 font-medium mb-2">
                    <FiMessageSquare className="mr-2 text-wedding-olive" />
                    Mensagem para os Noivos (opcional)
                  </label>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-olive"
                    placeholder="Deixe uma mensagem carinhosa para os noivos..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-primary py-4 text-lg"
                >
                  Confirmar Presença
                </button>

                <p className="text-sm text-gray-500 text-center">
                  * Campos obrigatórios
                </p>
              </form>
            </div>
          )}

          {/* Additional Info */}
          <div className="mt-8 card bg-wedding-rose/10 border-2 border-wedding-rose/30">
            <h3 className="text-xl font-bold text-wedding-olive mb-3">
              Informações Importantes
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Por favor, confirme sua presença até 01 de maio de 2026</li>
              <li>• Se houver qualquer mudança, nos avise o quanto antes</li>
              <li>• Em caso de dúvidas, entre em contato conosco</li>
              <li>• Crianças são bem-vindas</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Confirmacao
