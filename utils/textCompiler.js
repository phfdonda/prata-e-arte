export default function textCompiler(props) {
  const { data } = props;

  const texts = data.map((row) => {
    return `${row.Código}`;
  });
  return texts;
}
