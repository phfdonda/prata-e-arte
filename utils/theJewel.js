export default function theJewel(jewel, article = "indicative") {
  const feminine = ["tornozeleira", "gargantilha", "pulseira"];
  let reference;
  let possessive;
  let indicative;

  if (feminine.includes(jewel)) {
    reference = "ela";
    possessive = "sua";
    indicative = "a";
  } else {
    reference = "ele";
    possessive = "seu";
    indicative = "o";
  }

  if (article == "indicative") {
    return `${indicative} ${jewel}`;
  } else if (article == "possessive") {
    return `${possessive} ${jewel}`;
  } else {
    return reference;
  }
}
