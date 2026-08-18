import { useEffect } from 'react';
import './App.css'
import { IconCarousel } from './Carrousel/Carrousel'
import { animate, motion, useMotionValue, useScroll, useTransform } from "motion/react"
import { Instagram, Linkedin, Whatsapp } from './icons';
import report1 from './assets/report1.png';
import report2 from './assets/report2.png';
import report5 from './assets/report5.png';
import report6 from './assets/report6.png';
import report9 from './assets/report9.png';
import report8 from './assets/report8.png';

function App() {
  const { scrollYProgress } = useScroll();
  const countItau = useMotionValue(0);
  const approvalItau = useTransform(countItau, Math.round);
  const countApproval = useMotionValue(0);
  const approval = useTransform(countApproval, Math.round);
  const countCV = useMotionValue(0);
  const cv = useTransform(countCV, Math.round);

  useEffect(() => {
      const controls = animate(countItau, 34, { duration: 1 });
      return () => controls.stop();
  }, [countItau])
  useEffect(() => {
      const controls = animate(countApproval, 280, { duration: 2 });
      return () => controls.stop();
  }, [countApproval])
  useEffect(() => {
      const controls = animate(countCV, 400, { duration: 2.5 });
      return () => controls.stop();
  }, [countCV])

  const testimonials = [
    {
      id: 1,
      name: "Giulianna Fachinelli",
      body: "\"Conheci o Joseph em um momento importante de transição de carreira, e seu apoio foi fundamental. Ele fez uma análise completa do meu currículo e compartilhou dicas valiosas. É um profissional dedicado, com um olhar analítico e humano, que recomendo sem dúvidas.\"",
      linkedin: "https://www.linkedin.com/in/giuliannafachinelli/",
      img: report6
    },
    {
      id: 2,
      name: "Vitor Hugo Santana de Oliveira",
      body: "\"Graças aos feedbacks certeiros, paciência e olhar estratégico do Joseph, consegui melhorar significativamente meu currículo, o que foi fundamental para conquistar uma vaga como estagiário na área de Produtos no Itaú. Recomendo de olhos fechados para quem busca uma orientação que faz diferença na prática.\"",
      linkedin: "https://www.linkedin.com/in/vitorhsant/",
      img: report5
    },
    {
      id: 3,
      name: "João Pedro Peixoto",
      body: "\"Tive a oportunidade de contar com o apoio do José na construção do meu currículo e fiquei extremamente satisfeito com o resultado. Sua abordagem estratégica tornou o documento mais atrativo e alinhado às exigências do mercado.\"",
      linkedin: "https://www.linkedin.com/in/jo%C3%A3o-pedro-peixoto-a8b802266/",
      img: report9
    },
    {
      id: 4,
      name: "Mariane Alves Tenório",
      body: "\"Quero agradecer ao Joseph por toda a ajuda na reformulação do meu currículo e do meu perfil no Gupy. Todas as modificações foram importantes para que eu fosse notada pelos recrutadores. Além disso, as dicas que ele me deu sobre entrevistas foram essenciais, graças a isso, consegui me destacar e fui aprovada no Itaú.\"",
      linkedin: "https://www.linkedin.com/in/mariane-alves-tenorio/",
      img: report2
    },
    {
      id: 5,
      name: "Dhyogennes Quintino",
      body: "\"Tive a oportunidade de ter contato com o trabalho do Joseph Santos, ele é um excelente profissional, demonstra um elevado conhecimento técnico, é uma pessoa que se comunica bem, é muito paciente e entrega valor. Solicitei análise e ajuste de meu Linkedin, Gupy e currículo, e em menos de um mês consegui um retorno devido ao trabalho realizado por ele.\"",
      linkedin: "https://www.linkedin.com/in/dhyogennes-quintino-b2459b3a8/",
      img: report1
    },
    {
      id: 6,
      name: "Alexia Alberiz",
      body: "\"Recebi as orientações do Joseph e isso foi decisivo no meu processo. Ele me guiou com clareza e ainda reformulou meu currículo. Me motivou a perseguir as oportunidades certas e acreditou, desde o início, que eu poderia sim ser aprovada no Santander com a estratégia correta. E deu certo: hoje iniciei no Santander.\"",
      linkedin: "https://www.linkedin.com/in/alexia-alberiz",
      img: report8
    }
  ]

  return (
    <>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <main>
        <motion.div
            id="scroll-indicator"
            style={{
                scaleX: scrollYProgress,
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                originX: 0,
                background: "linear-gradient(135deg, var(--green-dark) 0%, var(--green-neon) 50%, var(--green) 100%)",
            }}
          />
        <div className='page landing-page'>
          <section className='about'>
              <div className='social'>
                <a                
                  href="https://www.instagram.com/perfil.aprovado/" 
                  target="_blank" 
                  rel="noopener noreferrer">
                  <Instagram />
                </a>
                <a 
                  href="https://www.linkedin.com/in/josephsantoss/" 
                  target="_blank" 
                  rel="noopener noreferrer">
                  <Linkedin />
                </a>
                <a 
                  href="https://api.whatsapp.com/send/?phone=5511963991859&text&type=phone_number&app_absent=0/" 
                  target="_blank" 
                  rel="noopener noreferrer">
                  <Whatsapp />
                </a>
              </div>
          </section>
          <section className='marketing'>
            <motion.div className='marketing-slogans'>
              <h2><motion.span>{approvalItau}</motion.span> Aprovações no <span className='itau'>Itaú</span></h2>
              <h2>+<motion.span>{approval}</motion.span> Aprovações</h2>
              <h2>+<motion.span>{cv}</motion.span> Currículos</h2>
            </motion.div>
            <div className='actions'>
              <a className='linkedin glow-on-hover'
                href="https://www.linkedin.com/in/josephsantoss/details/recommendations/" 
                target="_blank" 
                rel="noopener noreferrer">
                  Experiências de Clientes
              </a>
              <a className='save'
                href="https://api.whatsapp.com/send/?phone=5511963991859&text&type=phone_number&app_absent=0/" 
                target="_blank" 
                rel="noopener noreferrer">Faça seu pedido</a>
            </div>
          </section>
        </div>
        <IconCarousel />
        <div className='page grid-page'>
          <div className='grid-container'>
            {testimonials.map((t) => (
              <div className={`box box-${t.id}`} style={{gridArea: `box-${t.id}`}} key={`box-${t.id}`}>
                <img src={t.img} alt={t.name} className='image-clients'/>
                <div className='name'>
                  <h3>{t.name}</h3>
                  <a 
                    href={t.linkedin}
                    target="_blank" 
                    rel="noopener noreferrer">
                    <Linkedin />
                  </a>
                </div>
                <div className='body'>
                  {t.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default App
