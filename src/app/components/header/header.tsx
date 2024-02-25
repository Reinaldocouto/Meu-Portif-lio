import Image from 'next/image'

import "./header.scss"

export function Header(){
    return(
        <div className="header">
          <div>
            <h1>Olá, eu sou o Reinaldo! 👋</h1>
            <h2>Desenvolvedor de Software</h2>
          </div>
          <Image
            src="/foto_perfil.jpg"
            alt="Foto de Perfil"
            width={250}
            height={290}
            priority
          />
        </div>
    )
}