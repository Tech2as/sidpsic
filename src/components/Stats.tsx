import { FiMapPin } from "react-icons/fi";
import { FcTabletAndroid } from "react-icons/fc";



const Stats = () => {
  const stats = [
    { number: '9+', label: 'Anos de experiência' },
    { number: '110+', label: 'Atendimentos' },
    { number: <FcTabletAndroid/>, label: 'Atendimento online' },
    { number: <FiMapPin />, label: 'Consultório em Novo Horizonte - SP' },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-gradient-to-br from-primary-50 to-white border border-primary-100 hover:shadow-lg transition-shadow"
            >
              {stat.number && (
             <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2 flex justify-center">
              {stat.number}
            </div>
              )}
              <div className="text-gray-700 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

