import { motion } from "framer-motion"
import {
  FiHeart,
  FiSmile,
  FiUsers,
  FiShield,
  FiTarget,
  FiZap
} from "react-icons/fi"

const Benefits = () => {
  const benefits = [
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: 'Entendimento dos Pensamentos',
      description:
        'A TCC ajuda você a identificar padrões de pensamento negativos que influenciam diretamente suas emoções e comportamentos.',
    },
    {
      icon: <FiSmile className="w-8 h-8" />,
      title: 'Controle das Emoções',
      description:
        'Ao reestruturar pensamentos distorcidos, você aprende a regular melhor suas emoções e reduzir sofrimento emocional.',
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: 'Mudança de Comportamentos',
      description:
        'Com técnicas práticas, a TCC ajuda a modificar hábitos prejudiciais e substituir por comportamentos mais saudáveis.',
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: 'Metas Claras e Concretas',
      description:
        'O tratamento é orientado por metas específicas, mensuráveis e alcançáveis — facilitando acompanhar o progresso.',
    },
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: 'Ferramentas para o Dia a Dia',
      description:
        'Você aprende habilidades reais que pode usar fora da terapia, tornando-se mais autônomo e capaz de lidar com desafios.',
    },
    {
      icon: <FiZap className="w-8 h-8" />,
      title: 'Prevenção de Recaídas',
      description:
        'Ao final, você desenvolve estratégias para reconhecer sinais de alerta e manter sua evolução a longo prazo.',
    },
  ]

  return (
    <section
      id="beneficios"
      className="section-padding bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container-custom">
        
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
       <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Benefícios da psicoterapia
      </h2>

 <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
  A psicoterapia on-line com foco em Terapia Cognitivo-Comportamental (TCC)
  oferece atendimento acessível e profissional para pessoas de todo o Brasil.
  Se você busca um psicólogo TCC, tratamento para ansiedade, depressão,
  acompanhamento infantil ou terapia de casal, a abordagem é estruturada e
  comprovada cientificamente. Mesmo atendendo on-line, também é possível
  agendar sessões presenciais em Novo Horizonte – SP, garantindo praticidade
  para quem procura um psicólogo perto de mim com apoio moderno e acolhedor.
</p>

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-primary-600 mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a href="#contato" className="btn-primary inline-block">
            FALE COMIGO AGORA MESMO
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Benefits
