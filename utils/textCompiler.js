import { Document } from "docx";
import { setHeaders } from "../utils/variableSetter";

export default function textCompiler(props) {
  const { data } = props;
  const headers = setHeaders(data);

  // Código: "60036"
  // Entrega: "15/03/2022"
  // Linha: "Baby"
  // Link produto: "https://www.prataearte.com.br/brinco-de-ouro-18k-baby-gold-zirconia-azul-pr-10909-f60036-p11323?pp=/148.1748/"
  // Metal: "Ouro"
  // Pedra: "Zircônia"
  // Produto: "BRINCO DE OURO 18K BABY GOLD ZIRCÔNIA AZUL"
  // Tipo: "Brinco"

  //   const texts = data.map((row) => {
  // const doc = new Document({
  //   creator: "Caerre Digital",
  //   description: `${data.Produto}`,
  //   title: `${data.Código}_${data.Produto}`,
  //   sections: [
  //     {
  //       properties: {
  //         type: SectionType.CONTINUOUS,
  //       },
  //       children: [
  //         new Paragraph({
  //           text: `${data.Produto}`,
  //         }),
  //       ],
  //     },
  //   ],
  // });
  // console.log(texts);
  // return `${row.Código}_${row.Produto}`;
  //   });
  return headers;
}
