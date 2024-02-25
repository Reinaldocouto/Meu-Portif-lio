import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info(){
    return(
        <div className="infos">
          <br />
        <SectionTitle text="Formação"/>
        <div className="educational-info">
          <span>🎓</span>
          <span>Cursando o 3º ano de Bacharel em Sistema de Informações - Faculdade FIAP - São Paulo/SP</span>
        </div>
      </div>
    )
}