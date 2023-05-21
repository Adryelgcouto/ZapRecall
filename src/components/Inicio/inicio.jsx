import logo from "../../assets/logo.png";
import { ContentInicio } from "./inicio.style";
export function Inicio() {
  return (
    <>
      <ContentInicio>
        <div >
          <img src={logo} alt="" />
          <h1>ZapRecall</h1>
          <button>Inciar Recall!</button>
        </div>
      </ContentInicio>
    </>
  );
}
