import { GlobalStyle } from "./global.styled";
import { Inicio } from "./components/Inicio/inicio";
import { Perguntas } from "./components/pergunta/perguntas";
import { Footer } from "./components/footer/footer";
function App() {
  return (
      <>
      <GlobalStyle/>
      <Inicio />
      <Perguntas/>
      <Footer/>
      </>
      
    
  );
}

export default App;
