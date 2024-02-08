import Imagem from "../../assets/Imagem.png";
import { Card } from "./components/Card";
import { ArticleContainer, Box1, SectionContainer } from "./style";
import { Differences } from "./components/Differences";

export function Home() {
  return (
    <>
      <ArticleContainer>
        <div>
          <Box1>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </Box1>

          <Differences />
        </div>

        <figcaption>
          <img src={Imagem} alt="" />
        </figcaption>
      </ArticleContainer>

      <SectionContainer>
        <h2>Nossos cafés</h2>

        <div>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </SectionContainer>
    </>
  );
}
