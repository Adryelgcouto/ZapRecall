import { ContentPergunta, ContentCard } from "./perguntas.styled"
import { Pergunta } from "./pergunta"
import logo from "../../assets/logo.png"

export function Perguntas(){
  return(
    <ContentPergunta>
      <div>
        <img src={logo} alt="" />
        <h1>ZapRecall</h1>
      </div>
      <ContentCard>
       <Pergunta/>
       <Pergunta/>
       <Pergunta/>
      </ContentCard>

    </ContentPergunta>
  )
}