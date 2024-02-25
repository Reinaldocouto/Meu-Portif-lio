import { SectionTitle } from "../sectionTitle/section-title"
import Image from 'next/image'
import { SocialBtns } from "../social-btns/social-btns"

export function Projects(){
    return(
        <div className="projects">
        <SectionTitle text="Projetos"/>
        <div className="languages-info">
            
          <span>Estes são alguns dos projetos que desenvolvi:</span>
          <br />
          <p>Um site desenvolvido por mim:</p>
          <br />

          <Image
            src="/meusite.png"
            alt="Foto de Perfil"
            width={380}
            height={210}
            priority
          />
         
         <div className="buttons">
            <a className="btn-primary" href="https://jazerei.com.br">
            Acesse o Site!
          </a>
        </div>

          <a href="https://jazerei.com.br/">https://jazerei.com.br/</a>
        </div>
        <SectionTitle text=""/>
      </div>
    )
}