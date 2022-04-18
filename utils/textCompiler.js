import { Document } from "docx";
import { setHeaders } from "utils/variableSetter";
import {
  theMetal,
  whatIsThisStone,
  whatIsPrataEspecial,
  yourJewel,
  intro,
} from "utils";

export default function textCompiler(props) {
  const { data } = props;
  const { code, jewel, metal, stone, product, link } = data[0];
  const text = `
    ${docTitle(code, product)}
    ${header(jewel, metal, link)}
    ${intro(jewel, metal).title}
    ${intro(jewel, metal).description}
    ${intro(jewel, metal).text}
    ${whatIsPrataEspecial(metal).title}
    ${whatIsPrataEspecial(metal).text}
    ${whatIsThisStone(stone).title}
    ${whatIsThisStone(stone).text}
    ${whatGoesWith(jewel, metal, stone)}
    ${takingCareOf(jewel, metal, stone)}
    ${buyYourJewelsWithUs(jewel, metal, stone, line)}  
  `;

  return text;
}
