import { useState } from 'react'
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      author: 'G.B',
      rating: 5,
      text: 'Nossa obrigado, maravilhosa essa atividade. Camila como você é incrível.',
    },
    {
      author: 'P.L',
      rating: 5,
      text: 'Você é atenciosa, acolhedora, empática e super profissional, faz 2 sessões que começamos e já to vendo diferença.',
    },
    {
      author: 'J.S',
      rating: 5,
      text: 'Oi Camila se passaram dois anos e eu nunca esqueci dos seus atendimentos. Você mudou a minha vida. Obrigada.',
    },
    {
      author: 'Y.H',
      rating: 5,
      text: 'Obrigada Camila, hoje eu comecei a identificar os meus comportamentos negativos',
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Depoimentos dos pacientes
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-lg p-8 md:p-12 relative">
            <div className="text-center">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-lg md:text-xl text-gray-700 mb-6 italic">
                "{testimonials[currentIndex].text}"
              </p>
              
              <p className="text-gray-600 font-semibold">
                {testimonials[currentIndex].author}
              </p>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all text-primary-600 hover:bg-primary-50"
              aria-label="Depoimento anterior"
            >
              <FiChevronLeft size={24} />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all text-primary-600 hover:bg-primary-50"
              aria-label="Próximo depoimento"
            >
              <FiChevronRight size={24} />
            </button>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

