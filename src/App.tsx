import { useEffect } from 'react';
import './App.css'
import { IconCarousel } from './Carrousel/Carrousel'
import { animate, motion, useMotionValue, useScroll, useTransform } from "motion/react"
import { Instagram, Linkedin, Whatsapp } from './icons';

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
        <div className='landing-page'>
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
      </main>
    </>
  )
}

export default App
