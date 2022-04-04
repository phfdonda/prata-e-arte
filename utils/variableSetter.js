export function setHeaders(data) {
  return {
    code: data[0][0],
    type: data[0][1],
    metal: data[0][2],
    stone: data[0][3],
    line: data[0][4],
    product: data[0][5],
    link: data[0][6],
  };
}

// "Código"
// "Tipo"
// "Metal"
// "Pedra"
// "Linha"
// "Produto"
// "Link produto"
// "Entrega"
