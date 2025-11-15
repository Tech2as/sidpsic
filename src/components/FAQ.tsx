import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'O que é a terapia?',
      answer: 'A terapia, também conhecida como psicoterapia, é um processo de autodescoberta, acolhimento e mudança. Ela é um espaço seguro e confidencial, conduzido por um psicólogo(a) habilitado(a), onde você pode falar abertamente sobre seus sentimentos, pensamentos, dificuldades e desafios da vida. O objetivo é ajudar você a compreender suas emoções, padrões de comportamento e a desenvolver ferramentas e estratégias para lidar melhor com suas questões, promovendo saúde mental, bem-estar e qualidade de vida.',
    },
    {
      question: 'Como funciona o atendimento online?',
      answer: 'O atendimento psicológico online é realizado por meio de videochamadas em plataformas seguras e adequadas (como Google Meet, Zoom ou outras, dependendo da sua preferência). O funcionamento é muito semelhante ao presencial: agendamos um horário, você acessa o link no momento da sessão e a conversa acontece de forma privada e confidencial. É necessário apenas ter uma boa conexão com a internet, um local reservado onde você não será interrompido e fones de ouvido para garantir sua privacidade. É uma modalidade prática, flexível e igualmente eficaz.',
    },
    {
      question: 'Terapia Online e presencial é a mesma coisa?',
      answer: 'Em termos de eficácia e resultados, sim, são a mesma coisa. O que muda é apenas o formato da interação. Ambos os modelos são regulamentados pelo Conselho Federal de Psicologia (CFP) e aplicam as mesmas técnicas e abordagens. A conexão terapêutica (o vínculo entre você e o psicólogo) pode ser estabelecida de forma plena tanto presencialmente quanto online. A escolha entre os dois modelos depende da sua preferência, rotina e necessidades de praticidade.',
    },
    {
      question: 'Qual o tempo de terapia?',
      answer: 'O tempo de duração de uma terapia é individual e variável. Depende da natureza da sua demanda, da sua dedicação ao processo e dos objetivos que definirmos juntos. Para algumas questões pontuais, o processo pode ser mais breve. Para questões mais profundas e de longa data, a terapia tende a ser de médio a longo prazo. O importante é que o processo é colaborativo: avaliamos seu progresso juntos periodicamente e você tem a liberdade de decidir, com meu apoio, quando encerrar ou pausar as sessões.',
    },
    {
      question: 'Quantas sessões vou precisar?',
      answer: 'As sessões geralmente ocorrem uma vez por semana, com duração de 50 minutos. No entanto, a frequência pode ser ajustada para quinzenal ou mais intensiva (duas vezes por semana), dependendo da sua necessidade e fase do tratamento. O número total de sessões é impossível prever no início, mas é algo que avaliaremos e discutiremos ao longo do processo, garantindo que você esteja sempre no controle e confortável com seu tratamento.',
    },
    {
      question: 'O pagamento é seguro?',
      answer: 'Sim, a segurança do seu pagamento é uma prioridade. Utilizamos plataformas de pagamento reconhecidas e seguras (mencione os métodos que você aceita, ex: Pix, transferência bancária, cartões via PagSeguro/Stripe, etc.) que garantem a proteção de seus dados financeiros. Os valores e a forma de pagamento são sempre combinados previamente e de forma transparente.',
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

