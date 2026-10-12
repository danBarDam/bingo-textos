# Bingo de Palavras

Jogo de bingo com palavras em React (Vite), para jogar em vários computadores ao mesmo tempo: uma tela de **Sorteio** (com senha) e quantas **Cartelas** quiser.

## Como funciona

| Endereço | Quem usa | O que faz |
|---|---|---|
| `/` | Jogadores (aberto a todos) | Digita o nome → recebe uma cartela 4x4 e marca as palavras |
| `/sorteio` | Quem conduz o jogo (pede senha) | Sorteia as palavras, vê quantos jogadores entraram e quem ganhou |

- Ganha quem completar uma **linha, coluna ou diagonal** com palavras já sorteadas. O sistema detecta sozinho e o nome aparece na tela do sorteio.
- Marcar uma palavra **antes** de ela ser sorteada não vale (fica vermelha). É preciso desmarcar e marcar de novo depois que ela sair.
- Se mais de uma pessoa completar na **mesma palavra sorteada**, é empate: aparece o botão **Desempate**, que dá um número de 1 a 10 para cada empatado. O maior vence; se empatar de novo, repete só entre eles.
- **Nova partida** apaga os jogadores e os ganhadores. Quem estiver com a cartela aberta volta para a tela de nome (com o nome já preenchido) para pegar uma cartela nova.

## Rodar no computador

Precisa do [Node.js](https://nodejs.org) (versão 18 ou mais nova).

```bash
npm install
npm run dev
```

Abra http://localhost:5173 (cartela) e http://localhost:5173/sorteio (senha local: `bingo`).
No computador os dados ficam só na memória e somem quando o servidor para.
Para mudar a senha local, crie um arquivo `.env.local` com `SORTEIO_SENHA=suasenha`.

## Publicar no Vercel

1. Suba a pasta para um repositório no GitHub e importe no [Vercel](https://vercel.com/new) (ele detecta Vite sozinho).
2. No projeto do Vercel, vá em **Storage → Create Database → Upstash (Redis)**, use o plano grátis e conecte ao projeto. Isso cria as variáveis `KV_REST_API_URL` e `KV_REST_API_TOKEN`.
3. Em **Settings → Environment Variables**, crie `SORTEIO_SENHA` com a senha do sorteio.
4. Faça um novo deploy (**Deployments → Redeploy**) para as variáveis valerem.

Divulgue `https://seu-projeto.vercel.app` para os jogadores e use `https://seu-projeto.vercel.app/sorteio` na tela do sorteio.

## Onde mexer

| Arquivo | O que tem |
|---|---|
| `src/dados.js` | Lista de pares de palavras (sorteio → cartela), tamanho da cartela, quantas sorteadas aparecem na faixa |
| `src/AppSorteio.jsx` / `src/AppJogador.jsx` | Senha do sorteio / nome do jogador e comunicação com o servidor |
| `src/components/TelaSorteio.jsx` | Tela do sorteio, anúncio do vencedor e desempate |
| `src/components/TelaCartela.jsx` | Tela da cartela (faixa de sorteadas + grade + placar) |
| `src/utils.js` | Embaralhar, gerar cartela, verificar bingo (usado também pelo servidor) |
| `api/` | Servidor: `estado`, `sorteio` (com senha), `jogador`; regras em `api/_lib/jogo.js` |
| `src/styles.css` | Cores, fontes e layout |

## Trocando as palavras

Em `src/dados.js`, edite a lista. Cada linha é um par: a primeira palavra sai no sorteio, a segunda está na cartela.

```js
["Vaca", "Leite"],
```

São precisos pelo menos 16 pares (o tamanho da cartela). O tamanho da letra se ajusta sozinho, mas textos curtos ficam melhores.
