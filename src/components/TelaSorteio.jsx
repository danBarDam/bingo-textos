import Texto from "./Texto.jsx";
import { parPorId } from "../utils.js";

const numCartela = (n) => String(n).padStart(3, "0");

export default function TelaSorteio({ estado, ocupado, sortear, desempatar, pedirNovaPartida, confirmando }) {
  const { sorteadas, total, jogadores } = estado;
  const atual = sorteadas.length ? parPorId(sorteadas[sorteadas.length - 1]) : null;
  const acabou = sorteadas.length === total;

  return (
    <>
      <Vencedores estado={estado} ocupado={ocupado} desempatar={desempatar} />

      <div className="sorteio">
        <div className="globo">
          <div key={sorteadas.length} className={"destaque " + (atual ? "gira" : "vazio")}>
            <div className="miolo">
              {atual ? <Texto>{`${sorteadas.length}ª`}</Texto> : "Clique em Sortear para começar"}
            </div>
          </div>
          {atual && <p className="frase-atual">{atual.sorteio}</p>}
          <div className="contador">
            {sorteadas.length} de {total} sorteadas · {jogadores} {jogadores === 1 ? "jogador" : "jogadores"}
          </div>
          <div className="acoes">
            <button className="btn primario" onClick={sortear} disabled={acabou || ocupado}>
              {acabou ? "Todas sorteadas" : "Sortear frase"}
            </button>
            <button className={"btn" + (confirmando ? " confirmar" : "")} onClick={pedirNovaPartida} disabled={ocupado}>
              {confirmando ? "Confirmar nova partida" : "Nova partida"}
            </button>
          </div>
        </div>

        <div className="painel">
          <h2>FRASES SORTEADAS</h2>
          {sorteadas.length === 0 && <p className="esperando">Nenhuma ainda.</p>}
          {/* Só o que já saiu, sem as respostas: a tela pode estar projetada para a turma */}
          <ol className="lista-sorteadas">
            {[...sorteadas].reverse().map((id, i) => (
              <li key={id}>
                <span className="num">{sorteadas.length - i}</span>
                {parPorId(id).sorteio}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

/* Anúncio de quem ganhou, com o desempate quando mais de um completou na mesma palavra */
function Vencedores({ estado, ocupado, desempatar }) {
  const { ganhadores, empatados, desempate, candidatos, precisaDesempate, vencedor } = estado;
  if (!ganhadores.length) return null;

  const porPub = Object.fromEntries(ganhadores.map((g) => [g.pub, g]));
  const depois = ganhadores.filter((g) => !empatados.includes(g.pub));
  const v = vencedor && porPub[vencedor];

  return (
    <section className="anuncio" aria-live="polite">
      {v ? (
        <>
          <div className="anuncio-rot">{desempate.length ? "Vencedor no desempate" : "BINGO!"}</div>
          <div className="anuncio-nome">🏆 {v.nome}</div>
          <div className="anuncio-sub">Cartela nº {numCartela(v.num)}</div>
        </>
      ) : (
        <>
          <div className="anuncio-rot">Empate!</div>
          <div className="anuncio-nome pequeno">{candidatos.map((p) => porPub[p]?.nome).join(" × ")}</div>
          <div className="anuncio-sub">
            {desempate.length ? "Empataram de novo no desempate." : "Completaram na mesma frase."} Cada um recebe um
            número de 1 a 10 e o maior vence.
          </div>
        </>
      )}

      {precisaDesempate && (
        <button className="btn primario" onClick={desempatar} disabled={ocupado}>
          {desempate.length ? "Desempatar de novo (1 a 10)" : "Desempate (1 a 10)"}
        </button>
      )}

      {desempate.length > 0 && (
        <div className="rodadas">
          {desempate.map((rodada, i) => {
            const max = Math.max(...Object.values(rodada));
            return (
              <div key={i} className="rodada">
                <span className="rodada-rot">Rodada {i + 1}</span>
                {Object.entries(rodada).map(([pub, n]) => (
                  <span key={pub} className={"ficha" + (n === max ? " maior" : "")}>
                    {porPub[pub]?.nome} <b>{n}</b>
                  </span>
                ))}
              </div>
            );
          })}
        </div>
      )}

      {depois.length > 0 && (
        <div className="anuncio-depois">
          Completaram depois: {depois.map((g) => `${g.nome} (${g.ganhouEm}ª frase)`).join(", ")}
        </div>
      )}
    </section>
  );
}
