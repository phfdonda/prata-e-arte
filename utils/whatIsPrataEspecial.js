export default function whatIsPrataEspecial(metal) {
  const prataRodinada = {
    title: "O que é prata rodinada",
    text: `
        Você sabe o que é prata rodinada? Nada mais é do que a própria prata folheada ao ródio, um elemento metálico    da família da platina. 

        Encontrado em minas, é considerado por especialistas como um dos metais mais nobres do mundo. Sua cor   assemelha-se à prata, mas apresenta um brilho mais intenso, conferindo uma cor mais viva para suas jóias. 

        Além disso, outra vantagem do banho de ródio é que aumenta a durabilidade e reduz as chances de sofrer  arranhões. Isso faz com que a peça  de prata rodinada seja uma excelente ideia de presente. Afinal, é bela e     resistente, capaz de encantar qualquer pessoa!
    `,
  };

  const prataLeve = {
    title: "Prata Leve: o que é e por que vale a pena",
    text: `Você já ouviu falar de Prata Leve, o que é?

    É uma combinação inteligente entre uma liga leve e a prata. Tal liga, feita de metais leves e resistentes, dá a     forma sem acrescentar tanto peso à peça. A prata é usada para cobrir a liga - uma técnica chamada de    “folheamento” - que empresta graça e beleza à peça. 

    Você consegue assim completar seu porta-joias com as mais diversas peças, mantendo o visual refinado da prata nas   mais diversas ocasiões.
    `,
  };

  if (metal == "prata rodinada") {
    return prataRodinada;
  } else if (metal == "prata leve") {
    return prataLeve;
  }
}
