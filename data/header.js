export default function header(title, jewel, metal, link) {
  const headerText = `
    Título: ${title}

    Palavra-chave principal: ${jewel} de ${metal}
    
    Palavras-chave secundárias:  ${whatIs(
      metal
    )}, compre suas joias, comprar joias, ideia de presente
    
    Meta-description: 
    
    Produto: 
    ${link}
    
    —----------------------------------
`;
  return headerText;
}

function prataEspecialEscurece(metal) {
  const pratasEspeciais = ["prata rodinada", "prata leve"];
  if (pratasEspeciais.includes(metal)) {
    return `${metal} escurece`;
  }
}

function whatIs() {
  const pratasEspeciais = ["prata rodinada", "prata leve"];
  if (pratasEspeciais.includes(metal)) {
    return `o que é ${metal}`;
  }
}
