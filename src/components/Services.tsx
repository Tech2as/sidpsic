import { FiUser, FiUsers, FiActivity, FiFileText, FiHeart, FiScissors, FiBriefcase, FiHome } from 'react-icons/fi'

const Services = () => {
  const services = [
    { icon: <FiUsers className="w-6 h-6" />, title: 'Transtorno de ansiedade' },
    { icon: <FiUser className="w-6 h-6" />, title: 'Transtorno depressivo' },
    { icon: <FiActivity className="w-6 h-6" />, title: 'Transtorno de personalidade' },
    { icon: <FiFileText className="w-6 h-6" />, title: 'Crises de pânico' },
    { icon: <FiFileText className="w-6 h-6" />, title: 'Vícios em Jogos eletrônicos e casas de apostas' },
    { icon: <FiBriefcase className="w-6 h-6" />, title: 'Conflitos de casais' },
    { icon: <FiHeart className="w-6 h-6" />, title: 'Terapia infantil dificuldades de aprendizagem' },
    { icon: <FiScissors className="w-6 h-6" />, title: 'Emissão de documentos: Laudo psicológico' },
    { icon: <FiActivity className="w-6 h-6" />, title: 'Relatório psicológico' },
    { icon: <FiUsers className="w-6 h-6" />, title: 'Declarações e atestados' },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Como te ajudo?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 rounded-lg bg-gradient-to-br from-primary-50 to-white border border-primary-100 hover:shadow-md transition-all duration-300"
            >
              <div className="text-primary-600 flex-shrink-0 mt-1">
                {service.icon}
              </div>
              <h3 className="text-gray-800 font-medium">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

