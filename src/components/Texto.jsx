/* Texto que se ajusta à caixa: quanto maior a palavra (ou a frase), menor a letra */
export default function Texto({ children }) {
  const texto = String(children);
  // Quebra de linha só entre palavras ou depois de hífen ("Guarda-" / "chuva")
  const maiorPalavra = Math.max(...texto.split(/\s+|(?<=-)/).map((p) => p.length));
  const f = Math.min(135 / maiorPalavra, 80 / Math.sqrt(texto.length), 26);
  return (
    <div className="txt">
      <span style={{ "--f": f.toFixed(1) }}>{texto}</span>
    </div>
  );
}
