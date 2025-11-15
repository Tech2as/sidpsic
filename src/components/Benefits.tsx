import { FiHeart, FiSmile, FiUsers, FiShield, FiTarget, FiZap } from 'react-icons/fi'

const Benefits = () => {
  const benefits = [
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: 'Ansiedade',
      description: 'Tratamento e prevenção de transtornos de ansiedade',
    },
    {
      icon: <FiSmile className="w-8 h-8" />,
      title: 'Depressão',
      description: 'Apoio no tratamento de depressão e transtornos afetivos',
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: 'Relacionamentos',
      description: 'Melhoria na comunicação e relacionamentos interpessoais',
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: 'Autoestima',
      description: 'Desenvolvimento de autoconfiança e autoaceitação',
    },
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: 'Estresse',
      description: 'Gestão de estresse e técnicas de relaxamento',
    },
    {
      icon: <FiZap className="w-8 h-8" />,
      title: 'Crescimento Pessoal',
      description: 'Desenvolvimento pessoal e autoconhecimento',
    },
  ]

  return (
    <section id="beneficios" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Benefícios da psicoterapia on-line
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A terapia pode ser uma ferramenta poderosa para ajudar você a lidar com uma variedade de questões emocionais, incluindo prevenção e tratamento:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="text-primary-600 mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contato" className="btn-primary inline-block">
            FALE COMIGO AGORA MESMO
          </a>
        </div>
      </div>
    </section>
  )
}

export default Benefits

