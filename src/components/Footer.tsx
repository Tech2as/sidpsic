import { FiPhone, FiInstagram, FiMapPin, FiMail } from 'react-icons/fi'
import { FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contato" className="bg-gray-900 text-white">
      <div className="container-custom section-padding">

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* COLUNA 1 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Formas de contato</h3>
            <div className="space-y-3">
              <a
                href="tel:+5517991869977"
                className="flex items-center gap-3 hover:text-primary-400 transition-colors"
              >
                <FiPhone className="w-5 h-5" />
                <span>(17) 99186-9977</span>
              </a>

              <a
                href="https://www.instagram.com/quesadapsicologia?utm_source=qr&igsh=bHQ3OTVrbG0wbHpn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-primary-400 transition-colors"
              >
                <FiInstagram className="w-5 h-5" />
                <span>@quesadapsicologia</span>
              </a>

              <a
                href="https://www.youtube.com/@tcccomsidnei"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-primary-400 transition-colors"
              >
                <FaYoutube className="w-5 h-5" />
                <span>Youtube</span>
              </a>

                 <a
                href="mailto:psicologosidnei@yahoo.com"
                className="flex items-center gap-3 hover:text-primary-400 transition-colors"
              >
                <FiMail className="w-5 h-5" />
                <span>psicologosidnei@yahoo.com</span>
              </a>
            </div>
          </div>

          {/* COLUNA 2 — ENDEREÇO + MAPA */}
   <div>
  <h3 className="text-xl font-bold mb-4">Endereço</h3>

  <div className="flex items-start gap-3 mb-2 text-gray-300">
    <FiMapPin size={22} className="text-primary-400" />

    <a
      href="https://maps.app.goo.gl/XkNvs1FnxF66gpnE8"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-primary-400 transition-colors"
    >
      <div>Rua Henrique Tomitão Cardoso, 496</div>
      <div>Residencial Machado 3</div>
      <div>Novo Horizonte – SP</div>
      <div>CEP 14965-580</div>
    </a>
  </div>
<div className="text-gray-300 mb-4 text-[11px] sm:text-xs leading-relaxed">
  Para consultas presenciais, o valor é de <span className="font-semibold">R$ 69,90</span>
</div>
</div>


          {/* COLUNA 3 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Agende sua consulta</h3>
            <p className="text-gray-300 mb-4">
              Entre em contato e agende sua primeira sessão de psicoterapia online.
            </p>

            <a
              href="https://wa.me/5517991869977?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20psicoterapia."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-semibold shadow-md
                      transition-all duration-300 hover:bg-[#128C7E] hover:shadow-lg"
            >
              <FaWhatsapp size={20} />
              Fale pelo WhatsApp
            </a>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>Copyright 2025. Todos os Direitos Reservados</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
