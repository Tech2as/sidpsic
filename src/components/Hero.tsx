import { FcShop } from "react-icons/fc";
import { FaWhatsapp } from "react-icons/fa";


const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Sua saúde mental de formas simples. Sessões{' '}
            <span className="text-primary-600">a partir de R$&nbsp;49,90</span>
          </h1>
          
         {/* <p className="text-xl md:text-2xl text-gray-600 mb-4">
            Psicóloga Humanista – Psicoterapia online para todos os países
          </p> */}
          
          <p className="text-lg text-gray-500 mb-8">
            Terapia Cognitiva Comportamental (TCC).
          </p>
          
          <p className="text-base text-gray-600 mb-10">
            Consultas presenciais e 100% online!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <a
            href="https://wa.me/5517991869977"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-semibold shadow-md
                      transition-all duration-300 hover:bg-[#128C7E] hover:shadow-lg"
          >
            <FaWhatsapp size={20} />
            AGENDE PELO WHATSAPP
          </a>

            <a
              href="#contato"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              <FcShop size={20} />
             CONSULTÓRIO EM NOVO HORIZONTE - SP
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

