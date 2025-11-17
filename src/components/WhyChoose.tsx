const WhyChoose = () => {
  const images = [
    "/galeria1.jpg",
    "/galeria2.jpg",
    "/galeria3.jpg",
    "/galeria4.jpg",
    "/galeria5.jpg",
    "/galeria6.jpg",
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Galeria
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja um pouco do ambiente, atendimento e materiais utilizados.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={src}
                alt={`Imagem ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#home" className="btn-primary inline-block">
            MARQUE SUA CONSULTA AGORA MESMO!
          </a>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
