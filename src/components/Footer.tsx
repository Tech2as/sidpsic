import { FiPhone, FiMail, FiInstagram } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer id="contato" className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Outras formas de me contatar</h3>
            <div className="space-y-3">
              <a
                href="tel:+5561995531434"
                className="flex items-center gap-3 hover:text-primary-400 transition-colors"
              >
                <FiPhone className="w-5 h-5" />
                <span>(61) 995531434</span>
              </a>
              <a
                href="https://instagram.com/psicamilasilva"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-primary-400 transition-colors"
              >
                <FiInstagram className="w-5 h-5" />
                <span>@psicamilasilva</span>
              </a>
              <a
                href="mailto:contatopsicamilasilva@gmail.com"
                className="flex items-center gap-3 hover:text-primary-400 transition-colors"
              >
                <FiMail className="w-5 h-5" />
                <span>contatopsicamilasilva@gmail.com</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <div className="space-y-2">
              <a href="#home" className="block hover:text-primary-400 transition-colors">
                Home
              </a>
              <a href="#beneficios" className="block hover:text-primary-400 transition-colors">
                Benefícios da Terapia
              </a>
              <a href="#sobre" className="block hover:text-primary-400 transition-colors">
                Sobre Mim
              </a>
              <a href="#como-funciona" className="block hover:text-primary-400 transition-colors">
                Como Funciona
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Agende sua consulta</h3>
            <p className="text-gray-300 mb-4">
              Entre em contato e agende sua primeira sessão de psicoterapia online.
            </p>
            <a
              href="https://wa.me/5561995531434"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Fale pelo WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            Copyright 2025. Todos os Direitos Reservados
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

