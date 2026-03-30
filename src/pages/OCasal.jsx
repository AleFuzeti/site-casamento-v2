import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiHeart, FiCalendar, FiGift } from 'react-icons/fi'

function OCasal() {
    const [clicksNoiva, setClicksNoiva] = useState(0)
    const [clicksNoivo, setClicksNoivo] = useState(0)
    const [showSecretNoiva, setShowSecretNoiva] = useState(false)
    const [showSecretNoivo, setShowSecretNoivo] = useState(false)

    const handleClickNoiva = () => {
        const newClicks = clicksNoiva + 1
        setClicksNoiva(newClicks)
        if (newClicks >= 5) {
            setShowSecretNoiva(true)
        }
    }

    const handleClickNoivo = () => {
        const newClicks = clicksNoivo + 1
        setClicksNoivo(newClicks)
        if (newClicks >= 5) {
            setShowSecretNoivo(true)
        }
    }

    return (
        <div className="min-h-screen">
            {/* Header Section */}
            <section className="header-section">
                <div className="overlay bg-black/25"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-white text-5xl md:text-8xl italic tracking-wide text-center px-4">
                        Carolina<br className="md:hidden" /> e<br className="md:hidden" /> Alexandre
                    </h1>
                    <p className="text-white text-lg md:text-3xl font-light tracking-wide text-center px-4">
                        06.06.2026
                    </p>
                </div>
            </section>



            {/* Nossa História */}
            <section className="pt-8 bg-[#8da172] w-full px-4 md:px-16" style={{ textAlign: "justify" }}>
                <div className="w-full pb-4">
                    <div className="text-center mb-4 mx-0">
                        <h2 className="text-white mx-0 page-title font-serif font-bold mb-4">
                            Nossa História
                        </h2>
                        <p className="text-white text-lg italic">
                            Uma história de amor, diversão e muito companheirismo
                        </p>
                    </div>

                    <div className="card bg-gradient-to-br from-wedding-rose/10 via-wedding-olive/10 to-white mb-8">
                        <div className="grid md:grid-cols-[2fr,3fr] gap-8 items-start">
                            {/* Foto Retrato */}

                            <div className="w-full">
                                <div className="aspect-[3/4] bg-gradient-to-br from-wedding-olive/10 to-wedding-rose/10 rounded-lg overflow-hidden shadow-lg">
                                    <img
                                        src={`${import.meta.env.BASE_URL}images/casal.jpg`}
                                        alt="Carolina e Alexandre"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Texto */}
                            <div>
                                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                                    Nossa história começou em julho de 2022, quando trocamos as primeiras mensagens e descobrimos
                                    que tínhamos muito mais em comum do que imaginávamos. Desde nosso primeiro encontro, já sabíamos que algo especial estava nascendo.
                                </p>

                                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                                    Em setembro do mesmo ano, oficializamos o namoro e começamos a construir nossa vida juntos,
                                    peça por peça, como um quebra-cabeça. Nossas noites se encheram de risadas,
                                    jogos de tabuleiro e conversas infinitas sobre objetivos de vida e sonhos.
                                </p>

                                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                                    Carolina, uma psicóloga extremamente organizada, que adora cozinhar, cultivar plantas e
                                    pintar aquarelas. Alexandre, um programador criativo, apaixonado por tecnologia, basquete e RPG.
                                    Juntos, somos uma combinação perfeita de planejamento e espontaneidade, diversão e seriedade, amor e companheirismo.
                                </p>

                                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                                    Em janeiro de 2025, rodeado por tubarões, Alexandre fez o pedido e Carolina disse <strong> SIM</strong>.
                                    A partir daí, os dois se formaram, mudaram para São Paulo, e planejaram o evento que marcará suas vidas para sempre.
                                </p>

                                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                                    E assim chegamos ao <strong className="text-wedding-olive text-xl">6 de junho de 2026</strong>:
                                    o dia em que uniremos nossas vidas oficialmente, celebrando com todos que amamos.
                                    Será um dia de emoção, alegria, boa comida e muitas histórias para contar.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reflexão Final */}
            <section
                className="py-16 relative border-t-2 border-b-2 border-wedding-olive/20"
                style={{
                    backgroundImage: `url(${import.meta.env.BASE_URL}images/pag1.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="absolute inset-0 "></div>
                <div className="max-w-3xl mx-auto px-8 relative z-10">
                    <p className="text-center text-wedding-olive text-2xl font-serif mb-6">
                        ・ ✦ ・
                    </p>

                    <p className="text-gray-700 leading-relaxed italic text-lg text-center mb-8">
                        Essa é apenas a primeira página de um livro que promete ser longo, cheio de
                        aventuras, jogos, séries, plantinhas, desenhos e, principalmente, muito amor.
                    </p>

                    <p className="text-center text-wedding-olive text-2xl font-bold">
                        A história continua... para sempre. ❤️
                    </p>
                </div>
            </section>

            {/* Os Noivos */}
            <section className="px-4 mx-0 py-12 w-full bg-[#8da172]">
                <div className="grid md:grid-cols-2 w-full gap-8 max-w-5xl mx-auto">
                    {/* Noiva */}
                    <div className="card text-center">
                        <div
                            className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-wedding-rose/20 to-wedding-olive/20 rounded-full flex items-center justify-center overflow-hidden cursor-pointer transition-transform hover:scale-105"
                            onClick={handleClickNoiva}
                            title={showSecretNoiva ? "Easter egg encontrado! 🎉" : `Cliques: ${clicksNoiva}/5`}
                        >
                            <img
                                src={showSecretNoiva
                                    ? `${import.meta.env.BASE_URL}images/noiva_secret.jpeg`
                                    : `${import.meta.env.BASE_URL}images/noiva.jpg`}
                                alt="Carolina"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-3xl font-serif font-bold text-wedding-olive mb-2">
                            Carolina
                        </h3>
                        <p className="text-gray-600 mb-4">A Noiva</p>
                        <p className="text-gray-700 leading-relaxed" style={{ textAlign: "justify" }}>
                            Nascida em 06 de março de 2001, a noiva pisciana é formada em Psicologia pela UEL, atuando em clínica particular e orientação profissional. <br />
                            Extremamente planejada e animada, a noiva adora cozinhar, cultivar plantas, pintar aquarelas e cantar. <br />
                            O que Alexandre mais admira na Carol é seu <strong>companheirismo, sinceridade e inteligência</strong>.
                        </p>
                    </div>

                    {/* Noivo */}
                    <div className="card text-center">
                        <div
                            className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br to-wedding-olive/20 from-wedding-olive/20 rounded-full flex items-center justify-center overflow-hidden cursor-pointer transition-transform hover:scale-105"
                            onClick={handleClickNoivo}
                            title={showSecretNoivo ? "Easter egg encontrado! 🎉" : `Cliques: ${clicksNoivo}/5`}
                        >
                            <img
                                src={showSecretNoivo
                                    ? `${import.meta.env.BASE_URL}images/noivo_secret.jpeg`
                                    : `${import.meta.env.BASE_URL}images/noivo.jpg`}
                                alt="Alexandre"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-3xl font-serif font-bold text-wedding-olive mb-2">
                            Alexandre
                        </h3>
                        <p className="text-gray-600 mb-4">O Noivo</p>
                        <p className="text-gray-700 leading-relaxed" style={{ textAlign: "justify" }}>
                            Nascido em 27 de outubro de 2003, o noivo é formado em Ciencia da Computação pela UEL.
                            Atualmente trabalha como Digital Commerce Specialist em São Paulo. <br />

                            O noivo adora ouvir música, ler ficção e também gosta de jogar e mestrar RPG. <br />
                            O que Carolina mais admira no Ale é sua <strong>bondade, espontaneidade e companheirismo</strong>.
                        </p>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section
                className="section-container relative"
                style={{
                    backgroundImage: `url(${import.meta.env.BASE_URL}images/Carol&Alexandre.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 64%',
                    backgroundAttachment: 'fixed'
                }}
            >
                {/* Overlay para melhorar legibilidade */}
                <div className="absolute inset-0 bg-white/80"></div>

                {/* Conteúdo */}
                <div className="relative z-10">
                    <h2 className="text-3xl font-serif font-bold text-center text-wedding-olive mb-12">
                        Nossa Linha do Tempo
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-8">
                        {/* Timeline Item 1 - Primeiro Contato */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-32 text-right">
                                <span className="text-wedding-olive font-bold">10 Jul 2022</span>
                            </div>
                            <div className="flex-shrink-0 w-4 flex flex-col items-center">
                                <div className="w-4 h-4 bg-wedding-rose rounded-full"></div>
                                <div className="w-0.5 flex-grow bg-wedding-olive/30"></div>
                            </div>
                            <div className="flex-grow pb-8">
                                <h3 className="font-bold text-wedding-olive mb-2">Primeiro Contato</h3>
                                <p className="text-gray-700">Carolina e Alexandre trocam as primeiras mensagens.</p>
                            </div>
                        </div>

                        {/* Timeline Item 2 - Conheceu Pessoalmente */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-32 text-right">
                                <span className="text-wedding-olive font-bold">06 Ago 2022</span>
                            </div>
                            <div className="flex-shrink-0 w-4 flex flex-col items-center">
                                <div className="w-4 h-4 bg-wedding-rose rounded-full"></div>
                                <div className="w-0.5 flex-grow bg-wedding-olive/30"></div>
                            </div>
                            <div className="flex-grow pb-8">
                                <h3 className="font-bold text-wedding-olive mb-2">Primeiro Encontro</h3>
                                <p className="text-gray-700">Carolina e Alexandre se conhecem pessoalmente em uma festa universitária.</p>
                            </div>
                        </div>

                        {/* Timeline Item 3 - Namoro */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-32 text-right">
                                <span className="text-wedding-olive font-bold">04 Set 2022</span>
                            </div>
                            <div className="flex-shrink-0 w-4 flex flex-col items-center">
                                <div className="w-4 h-4 bg-wedding-rose rounded-full"></div>
                                <div className="w-0.5 flex-grow bg-wedding-olive/30"></div>
                            </div>
                            <div className="flex-grow pb-8">
                                <h3 className="font-bold text-wedding-olive mb-2">Início do Namoro</h3>
                                <p className="text-gray-700">Juntos! Cada dia que passava eles percebiam que o que mais queriam era ficar juntos.</p>
                            </div>
                        </div>

                        {/* Timeline Item 4 - Primeira Viagem */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-32 text-right">
                                <span className="text-wedding-olive font-bold">10 Jun 2024</span>
                            </div>
                            <div className="flex-shrink-0 w-4 flex flex-col items-center">
                                <div className="w-4 h-4 bg-wedding-rose rounded-full"></div>
                                <div className="w-0.5 flex-grow bg-wedding-olive/30"></div>
                            </div>
                            <div className="flex-grow pb-8">
                                <h3 className="font-bold text-wedding-olive mb-2">Primeira Viagem de Carro</h3>
                                <p className="text-gray-700">Aventura até Foz do Iguaçu! Uma viagem inesquecível que fortaleceu ainda mais o laço do casal.</p>
                            </div>
                        </div>

                        {/* Timeline Item 5 - Noivado */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-32 text-right">
                                <span className="text-wedding-olive font-bold">06 Jan 2025</span>
                            </div>
                            <div className="flex-shrink-0 w-4 flex flex-col items-center">
                                <div className="w-4 h-4 bg-wedding-rose rounded-full"></div>
                                <div className="w-0.5 flex-grow bg-wedding-olive/30"></div>
                            </div>
                            <div className="flex-grow pb-8">
                                <h3 className="font-bold text-wedding-olive mb-2">O Pedido de Noivado</h3>
                                <p className="text-gray-700">Alexandre pediu Carolina em casamento! Um momento mágico e emocionante.</p>
                            </div>
                        </div>

                        {/* Timeline Item 6 - Troca de Alianças */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-32 text-right">
                                <span className="text-wedding-olive font-bold">10 Jan 2025</span>
                            </div>
                            <div className="flex-shrink-0 w-4 flex flex-col items-center">
                                <div className="w-4 h-4 bg-wedding-rose rounded-full"></div>
                                <div className="w-0.5 flex-grow bg-wedding-olive/30"></div>
                            </div>
                            <div className="flex-grow pb-8">
                                <h3 className="font-bold text-wedding-olive mb-2">Troca de Alianças</h3>
                                <p className="text-gray-700">Um compromisso simbólico e especial, selando a promessa de um futuro juntos.</p>
                            </div>
                        </div>

                        {/* Timeline Item 7 - Casamento */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-32 text-right">
                                <span className="text-wedding-olive font-bold">06 Jun 2026</span>
                            </div>
                            <div className="flex-shrink-0 w-4 flex flex-col items-center">
                                <div className="w-4 h-4 bg-wedding-rose rounded-full"></div>
                            </div>
                            <div className="flex-grow">
                                <h3 className="font-bold text-wedding-olive mb-2">O Grande Dia</h3>
                                <p className="text-gray-700">Nosso casamento! O início de uma nova jornada, celebrando nosso amor com todos que amamos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hobbies do Casal */}
            <section className="section-container">
                <h2 className="text-3xl font-serif font-bold text-center text-wedding-olive mb-12">
                    O Que Amamos Fazer Juntos
                </h2>
                <div className="max-w-5xl mx-auto space-y-12">
                    {/* Jogos de Tabuleiro */}
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="w-full md:w-1/3">
                            <div className="aspect-square bg-gradient-to-br from-wedding-olive/10 to-wedding-rose/10 rounded-lg overflow-hidden shadow-lg">
                                <img
                                    src={`${import.meta.env.BASE_URL}images/jogos.png`}
                                    alt="Jogos de Tabuleiro"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <h3 className="text-2xl font-bold text-wedding-olive mb-4">🎲 Jogos de Tabuleiro</h3>
                            <p className="text-gray-700 leading-relaxed mb-4" style={{ textAlign: "justify" }}>
                                Adoramos passar as noites jogando board games! De estratégia a cooperativos,
                                cada partida é uma nova aventura. Nossos favoritos incluem jogos que desafiam
                                nossa mente e fortalecem nosso trabalho em equipe.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-wedding-rose/10 p-4 rounded-lg">
                                    <h4 className="font-bold text-wedding-olive mb-2">Favoritos da Carolina:</h4>
                                    <ul className="text-sm text-gray-700 space-y-1">
                                        <li>• Sagrada</li>
                                        <li>• Balconia</li>
                                        <li>• Tinco</li>
                                    </ul>
                                </div>
                                <div className="bg-wedding-olive/10 p-4 rounded-lg">
                                    <h4 className="font-bold text-wedding-olive mb-2">Favoritos do Alexandre:</h4>
                                    <ul className="text-sm text-gray-700 space-y-1">
                                        <li>• Bohnanza</li>
                                        <li>• Sagrada</li>
                                        <li>• Tinco </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Filmes e Séries */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                        <div className="w-full md:w-1/3">
                            <div className="aspect-square bg-gradient-to-br from-wedding-olive/10 to-wedding-rose/10 rounded-lg overflow-hidden shadow-lg">
                                <div className="w-full h-full flex items-center justify-center text-gray-400">
                                    <img
                                        src={`${import.meta.env.BASE_URL}images/scooby.png`}
                                        alt="Jogos de Tabuleiro"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <h3 className="text-2xl font-bold text-wedding-olive mb-4">🎬 Filmes e Séries</h3>
                            <p className="text-gray-700 leading-relaxed mb-4" style={{ textAlign: "justify" }}>
                                Maratonar séries e assistir filmes é nosso programa perfeito!
                                Pipoca, cobertor e boa companhia.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-wedding-rose/10 p-4 rounded-lg">
                                    <h4 className="font-bold text-wedding-olive mb-2">Favoritos da Carolina:</h4>
                                    <ul className="text-sm text-gray-700 space-y-1">
                                        <li>• Filme: Scooby Doo 2 (2004)</li>
                                        <li>• Série: Bones</li>
                                        <li>• Sitcom: Modern Family</li>
                                    </ul>
                                </div>
                                <div className="bg-wedding-olive/10 p-4 rounded-lg">
                                    <h4 className="font-bold text-wedding-olive mb-2">Favoritos do Alexandre:</h4>
                                    <ul className="text-sm text-gray-700 space-y-1">
                                        <li>• Filme: Scooby Doo (2002)</li>
                                        <li>• Série: Arcane</li>
                                        <li>• Sitcom: Modern Family</li>                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Rpg 
                    <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                        <div className="w-full md:w-1/3">
                            <div className="aspect-square bg-gradient-to-br from-wedding-rose/10 to-wedding-olive/10 rounded-lg overflow-hidden shadow-lg">
                                <div className="w-full h-full flex items-center justify-center text-gray-400">
                                    <span className="text-sm text-center px-4">[Foto: RPG]</span>
                                </div>
                            </div>

                        </div>
                        <div className="w-full md:w-2/3 text-right">
                            <h3 className="text-2xl font-bold text-wedding-olive mb-4">🛡️ RPG</h3>
                            <p className="text-gray-700 leading-relaxed" style={{ textAlign: "justify" }}>
                                Aventuras épicas em mundos imaginários! Jogar RPG juntos fortalece nossa criatividade e trabalho em equipe, além de proporcionar momentos inesquecíveis.
                            </p>
                            <div className="mt-6"></div>
                            <h4 className="text-center text-lg font-bold text-wedding-olive mb-4">Personagens</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {[
                                    { name: 'Nassima', src: `${import.meta.env.BASE_URL}images/chars/nassima.png`, alt: 'Nassima' },
                                    { name: 'Leran', src: `${import.meta.env.BASE_URL}images/chars/leran.png`, alt: 'Leran' },
                                    { name: 'Thanatus', src: `${import.meta.env.BASE_URL}images/chars/thanatus.png`, alt: 'Thanatus' },
                                ].map((p) => (
                                    <div key={p.name} className="flex flex-col items-center">
                                        <div className="w-36 h-36 sm:w-40 sm:h-40 bg-gradient-to-br from-wedding-rose/10 to-wedding-olive/10 rounded-lg overflow-hidden shadow-md">
                                            <img src={p.src} alt={p.alt} className="w-full h-full object-cover" />
                                        </div>
                                        <span className="mt-3 text-sm font-semibold text-wedding-olive">{p.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    */}
                </div>



            </section>

            {/* Quick Info Section */}
            <section
                className="w-full bg-white/50 relative py-12 px-16"
                style={{
                    backgroundImage: `url(${import.meta.env.BASE_URL}images/pag1.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 69%',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="absolute inset-0 "></div>
                <div className="relative z-10 max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        <Link
                            to="/confirmacao"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="card text-center hover:scale-105 transition-transform duration-300"
                        >
                            <FiHeart className="text-wedding-rose text-5xl mx-auto mb-4" />
                            <h3 className="text-2xl font-serif font-bold text-wedding-olive mb-2">
                                Confirme sua presença
                            </h3>
                            <p className="text-gray-600">
                                Confirme sua presença
                            </p>
                        </Link>

                        <Link
                            to="/a-cerimonia"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="card text-center hover:scale-105 transition-transform duration-300"
                        >
                            <FiCalendar className="text-wedding-olive text-5xl mx-auto mb-4" />
                            <h3 className="text-2xl font-serif font-bold text-wedding-olive mb-2">
                                A Cerimônia
                            </h3>
                            <p className="text-gray-600">
                                Data, local e informações
                            </p>
                        </Link>

                        <Link
                            to="/lista-presentes"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="card text-center hover:scale-105 transition-transform duration-300"
                        >
                            <FiGift className="text-wedding-rose text-5xl mx-auto mb-4" />
                            <h3 className="text-2xl font-serif font-bold text-wedding-olive mb-2">
                                Lista de Presentes
                            </h3>
                            <p className="text-gray-600">
                                Escolha seu presente
                            </p>
                        </Link>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default OCasal
