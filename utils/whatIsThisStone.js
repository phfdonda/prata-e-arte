export default function whatIsThisStone(stone) {
  const whatIsZirconia = {
    call: "Descubra sobre a zircônia, a prima do diamante.",
    title: "E a zircônia: o que é?",
    text: `
        Agora que você já sabe sobre o metal de que é feita sua joia, é importante saber mais da zircônia, o que é e quais suas principais características.

        As zircônias são pedras conhecidas por serem similares ao diamante. A maioria das zircônias são produzidas artificialmente em laboratórios, mas também podem ser encontradas na natureza.
        
        Naturalmente, as zircônias podem ser encontradas na forma de dióxido de zircônio, que constituem um mineral raro chamado baddeleyíta.
        
        A pedra tem muitas similaridades com o diamante. Podemos destacar a coloração incolor e a resistência, o que é fundamental para atuar como substituta do diamante nas joias.
        `,
  };

  const whatIsPerola = {
    call: "Conheça a pérola, a joia dos mares, e seus significados profundos.",
    title: "Pérola: significado e curiosidades",
    text: `
    Não importa o que machuque seu coração, você sempre vai dar a volta por cima, mais bela e pura que nunca. Essa é a lição que se aprende a partir das pérolas. 

    Veja bem. Quando um corpo estranho invade uma ostra, o molusco logo o envolve em nácar e bicarbonato de cálcio para se proteger. É assim que nasce a pérola, um material orgânico esférico, belo e valioso. 
    
    Por essa razão, uma pérola tem significado, acima de tudo, de resiliência - a capacidade de se curar e superar dificuldades, transformar o sofrimento em pureza. Ter um anel com a esfera, além de elegante, é um lembrete de que você é capaz de superar qualquer problema. 
    `,
  };

  if (stone == "zircônia") {
    return whatIsZirconia;
  } else if (stone == "pérola") {
    return whatIsPerola;
  } else {
    return "";
  }
}
