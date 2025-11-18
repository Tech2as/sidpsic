import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

const faqs = [
  {
    question: 'O que é a terapia?',
    answer:
      'A terapia é um processo psicológico guiado por um profissional habilitado, que ajuda você a lidar com ansiedade, depressão, estresse, autoestima baixa e conflitos pessoais. Ao buscar um psicólogo TCC, você aprende a identificar e modificar pensamentos e comportamentos que causam sofrimento. O Psicólogo Sidnei oferece psicoterapia on-line e presencial em Novo Horizonte – SP, ideal para quem procura um psicólogo perto de mim ou deseja atendimento rápido e acessível no Brasil.',
  },
  {
    question: 'Como funciona o atendimento online?',
    answer:
      'O atendimento psicológico online é realizado por videochamada segura e sigilosa, permitindo que você tenha acesso a um psicólogo no Brasil sem sair de casa. A modalidade é indicada para quem busca terapia TCC, tratamento de ansiedade, tratamento de depressão, terapia infantil, terapia para criança e terapia de casal. Para quem procura praticidade, o atendimento on-line com o Psicólogo Sidnei é uma alternativa eficiente ao psicólogo 24h, pois oferece suporte ágil, orientação profissional e flexibilidade de horários.',
  },
  {
    question: 'Terapia online e presencial é a mesma coisa?',
    answer:
      'Sim. Tanto a terapia online quanto a presencial seguem as mesmas técnicas da Terapia Cognitivo-Comportamental (TCC), garantindo resultados comprovados no tratamento da ansiedade, depressão, dependência emocional e questões familiares. Para quem procura psicólogo perto de mim em Novo Horizonte – SP, o Psicólogo Sidnei oferece sessões presenciais. Já para quem precisa de um psicólogo no Brasil, o atendimento online permite acesso imediato de qualquer região.',
  },
  {
    question: 'Qual é o tempo de terapia?',
    answer:
      'O tempo de terapia varia conforme a demanda. No tratamento de ansiedade e depressão, por exemplo, muitos pacientes apresentam melhora nas primeiras semanas com a TCC. Em casos de terapia infantil ou terapia de casal, a duração pode ser diferente. O mais importante é que o processo é personalizado, avaliando sua evolução a cada sessão com o Psicólogo Sidnei, seja online ou em Novo Horizonte – SP.',
  },
  {
    question: 'Quantas sessões vou precisar?',
    answer:
      'A maioria dos pacientes realiza uma sessão por semana, mas isso pode variar. Pessoas buscando tratamento de ansiedade, depressão, laudo psicológico ou terapia de casal podem precisar de maior frequência inicial. Já no acompanhamento infantil, o ritmo depende da idade da criança e do objetivo terapêutico. O Psicólogo Sidnei orienta cada caso individualmente, garantindo que o tratamento seja eficaz e adequado à sua rotina.',
  },
  {
    question: 'O pagamento é seguro?',
    answer:
      'Sim. Todas as sessões com o Psicólogo Sidnei, tanto on-line quanto presenciais em Novo Horizonte – SP, possuem métodos de pagamento seguros e confiáveis. Os dados são protegidos e você escolhe entre Pix, transferência ou outras opções. Para solicitações como laudo psicológico, terapia infantil, terapia de casal ou tratamento de ansiedade, o processo é sempre transparente e realizado dentro das normas profissionais.',
  },
   {
    question: "Quais as formações do psicólogo Sidnei?",
    answer: "Universidade Paulista (UNIP) - Psicologia - 2010; Pós-graduação em Terapia Cognitivo-Comportamental (TCC); Pós-graduação em Terapia Junguiana; Pós-graduação em Neuropsicologia; Formação em Hipnose Clínica",
    
  },
]


  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas realizadas com frequência
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <FiChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  ) : (
                    <FiChevronDown className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ

