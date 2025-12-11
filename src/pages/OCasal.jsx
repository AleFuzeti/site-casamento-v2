import { FiHeart } from 'react-icons/fi'

function OCasal() {
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
                    <p className="text-center text-3xl font-serif text-wedding-rose mb-4">
                        06.06.2026
                    </p>
                    <p className="text-center text-gray-700 text-lg max-w-3xl mx-auto">
                        Nossa história de amor começou em 2022 e desde então temos construído
                        momentos inesquecíveis juntos.
                    </p>
                </div>
            </section>

            {/* Nossa História */}
            <section className="section-container">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <FiHeart className="text-wedding-rose text-5xl mx-auto mb-4" />
                        <h2 className="text-3xl font-serif font-bold text-wedding-olive mb-4">
                            Nossa História
                        </h2>
                    </div>

                    <div className="card mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Carolina e Alexandre se conheceram em 2022, em uma festa (diz ele) ou em um aplicativo de conversa (diz ela).
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4 text-center text-2xl">
                            ・
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Cada dia que passava eles percebiam que o que mais queriam era ficar juntos.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-center text-2xl">
                            ・
                        </p>
                    </div>
                </div>
            </section>

            {/* Os Noivos */}
            <section className="section-container bg-white/50">
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Noiva */}
                    <div className="card text-center">
                        <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-wedding-rose/20 to-wedding-olive/20 rounded-full flex items-center justify-center overflow-hidden">
                            <span className="text-6xl">
                                <img src="/images/noiva.png" alt="Carolina" className="w-full h-full object-cover" />
                            </span>
                            {/* Substitua por: <img src="/images/noiva.jpeg" alt="Carolina" className="w-full h-full object-cover" /> */}
                        </div>
                        <h3 className="text-3xl font-serif font-bold text-wedding-olive mb-2">
                            Carolina
                        </h3>
                        <p className="text-gray-600 mb-4">A Noiva</p>
                        <p className="text-gray-700 leading-relaxed text-left mb-4">
                            Nascida em 06 de março de 2001, a noiva pisciana é formada em Psicologia pela Universidade Estadual de Londrina, atuando em clínica particular, avaliação psicológica e orientação profissional.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-left">
                            Extremamente planejada e animada, a noiva adora cozinhar, cultivar plantas, pintar aquarelas e cantar. O que Alexandre mais admira na Carol é seu <strong>companheirismo</strong>.
                        </p>
                    </div>

                    {/* Noivo */}
                    <div className="card text-center">
                        <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-wedding-olive/20 to-wedding-rose/20 rounded-full flex items-center justify-center overflow-hidden">
                            <span className="text-6xl">
                                <img src="/images/noivo.png" alt="Alexandre" className="w-full h-full object-cover" />
                            </span>
                            {/* Substitua por: <img src="/images/noivo.jpeg" alt="Alexandre" className="w-full h-full object-cover" /> */}
                        </div>
                        <h3 className="text-3xl font-serif font-bold text-wedding-olive mb-2">
                            Alexandre
                        </h3>
                        <p className="text-gray-600 mb-4">O Noivo</p>
                        <p className="text-gray-700 leading-relaxed text-left mb-4">
                            Nascido em 27 de outubro de 2003, o noivo é formado em Computação na UEL.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-left">
                            O noivo adora tocar música, desenhar e ler. O que Carolina mais admira no Ale é seu <strong>jeito de ser</strong>.
                        </p>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section-container bg-white/50">
                <h2 className="text-3xl font-serif font-bold text-center text-wedding-olive mb-12">
                    Nossa Linha do Tempo
                </h2>
                <div className="max-w-3xl mx-auto space-y-8">
                    {/* Timeline Item 1 */}
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-24 text-right">
                            <span className="text-wedding-olive font-bold">2022</span>
                        </div>
                        <div className="flex-shrink-0 w-4 flex flex-col items-center">
                            <div className="w-4 h-4 bg-wedding-rose rounded-full"></div>
                            <div className="w-0.5 flex-grow bg-wedding-olive/30"></div>
                        </div>
                        <div className="flex-grow pb-8">
                            <h3 className="font-bold text-wedding-olive mb-2">Primeiro Encontro</h3>
                            <p className="text-gray-700">Carolina e Alexandre se conheceram em uma festa (diz ele) ou em um aplicativo de conversa (diz ela).</p>
                        </div>
                    </div>

                    {/* Timeline Item 2 */}
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-24 text-right">
                            <span className="text-wedding-olive font-bold">2022</span>
                        </div>
                        <div className="flex-shrink-0 w-4 flex flex-col items-center">
                            <div className="w-4 h-4 bg-wedding-rose rounded-full"></div>
                            <div className="w-0.5 flex-grow bg-wedding-olive/30"></div>
                        </div>
                        <div className="flex-grow pb-8">
                            <h3 className="font-bold text-wedding-olive mb-2">Juntos</h3>
                            <p className="text-gray-700">Cada dia que passava eles percebiam que o que mais queriam era ficar juntos.</p>
                        </div>
                    </div>

                    {/* Timeline Item 3 */}
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-24 text-right">
                            <span className="text-wedding-olive font-bold">2025</span>
                        </div>
                        <div className="flex-shrink-0 w-4 flex flex-col items-center">
                            <div className="w-4 h-4 bg-wedding-rose rounded-full"></div>
                            <div className="w-0.5 flex-grow bg-wedding-olive/30"></div>
                        </div>
                        <div className="flex-grow pb-8">
                            <h3 className="font-bold text-wedding-olive mb-2">O Pedido</h3>
                            <p className="text-gray-700">Alexandre pediu Carolina em casamento!</p>
                        </div>
                    </div>

                    {/* Timeline Item 4 */}
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-24 text-right">
                            <span className="text-wedding-olive font-bold">06.06.2026</span>
                        </div>
                        <div className="flex-shrink-0 w-4 flex flex-col items-center">
                            <div className="w-4 h-4 bg-wedding-rose rounded-full"></div>
                        </div>
                        <div className="flex-grow">
                            <h3 className="font-bold text-wedding-olive mb-2">O Grande Dia</h3>
                            <p className="text-gray-700">Nosso casamento!</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OCasal
