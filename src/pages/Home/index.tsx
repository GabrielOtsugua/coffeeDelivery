import Imagem from "../../assets/Imagem.png";
import { Card } from "./components/Card";
import { ArticleContainer, Box1, SectionContainer } from "./style";
import { Differences } from "./components/Differences";
import { coffeeData } from "../../data/data";
import { Fade, Slide } from "react-awesome-reveal";

export function Home() {
  return (
    <>
      <Fade>
        <Slide direction="down" triggerOnce={true} duration={500}>
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
        </Slide>
      </Fade>

      <Fade delay={500}>
        <SectionContainer>
          <h2>Nossos cafés</h2>

          <div>
            {coffeeData.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                image={item.image}
                badges={item.badges}
                type={item.type}
                info={item.info}
                price={item.price}
                amount={item.amount}
              />
            ))}
          </div>
        </SectionContainer>
      </Fade>
    </>
  );
}
