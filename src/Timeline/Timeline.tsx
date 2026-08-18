import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.styles.css'
import { ExclamationStar, Favicon, Gupy, Linkedin, Microphone } from '../icons';

export const Timeline = () => {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work timeline-icon"
                icon={<Gupy />}
            >
                <h3 className="vertical-timeline-element-title">Elaboração de Currículo</h3>
                <h4 className="vertical-timeline-element-subtitle">Vença os Algoritmos!</h4>
                <p>
                    Nada de templates prontos. Cada currículo é desenhado para os robôs (ATS), mas escrito para impressionar quem lê. Você se torna impossível de ignorar.
                </p>
            </VerticalTimelineElement>
                        <VerticalTimelineElement
                className="vertical-timeline-element--work timeline-icon"
                icon={<Linkedin />}
            >
                <h3 className="vertical-timeline-element-title">Estruturação de Perfil</h3>
                <h4 className="vertical-timeline-element-subtitle">Presença no Gupy e LinkedIn</h4>
                <p>
                    Otimização dos perfis para aumentar visibilidade e passar por filtros. Ajusto palavras-chave, narrativa e seções para destacar habilidades e deixar seu perfil profissional e claro.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work timeline-icon"
                icon={<ExclamationStar />}
            >
                <h3 className="vertical-timeline-element-title">Mentoria de Carreira</h3>
                <h4 className="vertical-timeline-element-subtitle">Personalidada</h4>
                <p>
                    Acompanhamento individual para acelerar sua evolução. Trabalhamos posicionamento, escolhas estratégicas, clareza de objetivos e caminhos reais. Você recebe direção prática, feedback e plano de ação.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work timeline-icon"
                icon={<Microphone />}
            >
                <h3 className="vertical-timeline-element-title">Preparação para Entrevistas</h3>
                <h4 className="vertical-timeline-element-subtitle">+5 Anos como RH</h4>
                <p>
                    Treino direto para melhorar sua performance em seleções. Você aprende a criar respostas fortes, comunicar autoridade e mostrar valor. Ajustamos postu-ra, narrativa e pontos de impacto.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timeline-icon-final'
                icon={<Favicon />}
            />
            </VerticalTimeline>
    );
}