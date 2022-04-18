import { theJewel } from "utils/theJewel";
import theMetal from "utils/theMetal";
export default function intro(jewel, metal, stone) {
  return `
        A seguir, saiba mais sobre ${theMetal(
          metal
        )}: o que é e suas principais características. ${
    stone && whatIsThisStone(stone).call
  }  Além disso, saiba como combinar ${theJewel(
    jewel,
    "possessive"
  )} com suas roupas e outras joias, e quais são os principais cuidados que você deve ter com ${theJewel(
    jewel,
    "possessive"
  )} de ${metal}.
    `;
}
