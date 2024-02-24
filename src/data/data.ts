import { v4 as uuidv4 } from "uuid";

import Tradicional from "../assets/ExpressoTradicional.png";
import Americano from "../assets/ExpressoAmericano.png";
import Cremoso from "../assets/ExpressoCremoso.png";
import Gelado from "../assets/ExpressoGelado.png";
import CafeComLeite from "../assets/CafeComLeite.png";
import Latte from "../assets/Latte.png";
import Capuccino from "../assets/Capuccino.png";
import Macchiato from "../assets/Macchiato.png";
import Mocaccino from "../assets/Mocaccino.png";
import ChocolateQuente from "../assets/ChocolateQuente.png";
import Cubano from "../assets/Cubano.png";
import Havaiano from "../assets/Havaiano.png";
import Arabe from "../assets/Arabe.png";
import Irlandes from "../assets/Irlandes.png";

export const coffeeData = [
  {
    id: uuidv4(),
    image: Tradicional,
    badges: ["TRADICIONAL"],
    type: "Expresso Tradicional",
    info: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    amount: 1,
  },
  {
    id: uuidv4(),
    image: Americano,
    badges: ["TRADICIONAL"],
    type: "Expresso Americano",
    info: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
    amount: 1,
  },
  {
    id: uuidv4(),
    image: Cremoso,
    badges: ["TRADICIONAL"],
    type: "Expresso Cremoso",
    info: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
    amount: 1,
  },
  {
    id: uuidv4(),
    image: Gelado,
    badges: ["TRADICIONAL", "GELADO"],
    type: "Expresso Gelado",
    info: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
    amount: 1,
  },
  {
    id: uuidv4(),
    image: CafeComLeite,
    badges: ["TRADICIONAL", "COM LEITE"],
    type: "Café com Leite",
    info: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
    amount: 1,
  },
  {
    id: uuidv4(),
    image: Latte,
    badges: ["TRADICIONAL", "COM LEITE"],
    type: "Latte",
    info: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
    amount: 1,
  },
  {
    id: uuidv4(),
    image: Capuccino,
    badges: ["TRADICIONAL", "COM LEITE"],
    type: "Capuccino",
    info: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
    amount: 1,
  },
  {
    id: uuidv4(),
    image: Macchiato,
    badges: ["TRADICIONAL", "COM LEITE"],
    type: "Macchiato",
    info: "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
    amount: 1,
  },
  {
    id: uuidv4(),
    image: Mocaccino,
    badges: ["TRADICIONAL", "COM LEITE"],
    type: "Mocaccino",
    info: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
    amount: 1,
  },
  {
    id: uuidv4(),
    image: ChocolateQuente,
    badges: ["ESPECIAL", "COM LEITE"],
    type: "Chocolate Quente",
    info: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
    amount: 1,
  },
  {
    id: uuidv4(),
    image: Cubano,
    badges: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
    type: "Cubano",
    info: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
    amount: 1,
  },
  {
    id: uuidv4(),
    image: Havaiano,
    badges: ["ESPECIAL"],
    type: "Havaiano",
    info: "Bebida adocicada preparada com café e leite de coco",
    price: 9.9,
    amount: 1,
  },
  {
    id: uuidv4(),
    image: Arabe,
    badges: ["ESPECIAL"],
    type: "Árabe",
    info: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
    amount: 1,
  },
  {
    id: uuidv4(),
    image: Irlandes,
    badges: ["ESPECIAL", "ALCOÓLICO"],
    type: "Irlandês",
    info: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.9,
    amount: 1,
  },
];
