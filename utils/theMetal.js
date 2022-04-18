export default function theMetal(metal) {
  const feminine = ["prata", "platina", "prata rodinada", "prata leve"];
  if (feminine.includes(metal)) {
    return `a ${metal}`;
  } else {
    return `o ${metal}`;
  }
}
