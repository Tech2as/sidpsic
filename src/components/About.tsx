const About = () => {
  return (
    <section id="sobre" className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Conheça seu psicólogo!
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-600 mb-2">
               Sidnei Quesada Alvarez Garcia
              </h3>
              <p className="text-lg text-gray-600 font-semibold">CRP 06/10428</p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-center font-semibold text-gray-800 mb-6">
               A cada sessão uma descoberta!
              </p>

              <p>
                <strong>Sidnei Quesada</strong> é psicólogo, cristão e pai. É pós-graduado em Terapia Cognitivo-Comportamental (TCC) e oferece atendimento presencial e online.
              </p>

              <p>
               A TCC é uma abordagem cientificamente comprovada e baseada em evidênclas, o. que a torna altamente eficaz e procurada para promover resultados práticos e duradouros na saúde mental Apesar da base clentifica, a prática de Sidnei também é gulada por seus valores cristãos, oferecendo um espaço de acolhimento, respeito e humanização em cada sessão
              Para sua comodidade, o link da sessão é enviado minutos antes do atendimento.
      
              </p>

              <p className="text-center font-semibold text-gray-800 mb-6">
                 Quer começar a utillizar essa abordagem eficaz para sua jornada de autodesenvolvimento?
              </p>

            </div>

            <div className="text-center mt-8">
              <a href="#contato" className="btn-primary inline-block">
                TOQUE AQUI E FALE COMIGO
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

