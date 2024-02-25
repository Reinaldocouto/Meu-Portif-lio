import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experience"/>
          <p>Desenvolvedor experiente com histórico em projetos acadêmicos e colaborações na Faculdade FIAP. 
            Especializado em desenvolvimento web, mobile e desktop, 
            comprometido em oferecer soluções eficientes e inovadoras para atender 
            às demandas de clientes.</p>
          <div className="experience-time">
            <Skill image="/react.png" measure={1} years="1 ano"/>
            <Skill image="/ts.png" measure={1} years="1 ano"/>
            <Skill image="/js.png" measure={2} years="2 anos"/>
            <Skill image="/java.png" measure={2} years="2 anos"/>
          </div>
        </div>
    )
}