/* ============================================================
   TROQUE AQUI PELAS SUAS PALAVRAS
   Cada par liga a palavra do SORTEIO à palavra da CARTELA:
     ["Vaca", "Leite"]  →  sai "Vaca" no sorteio, o jogador marca "Leite"

   Precisa de pelo menos 16 pares (o tamanho da cartela).
   Textos curtos (até umas 3 palavras) ficam melhores na cartela.
   ============================================================ */
const LISTA = [
  ["Vaca", "Leite"],
  ["Abelha", "Mel"],
  ["Galinha", "Ovo"],
  ["Chuva", "Guarda-chuva"],
  ["Fogo", "Extintor"],
  ["Sol", "Óculos escuros"],
  ["Cachorro", "Osso"],
  ["Peixe", "Vara de pesca"],
  ["Neve", "Boneco de neve"],
  ["Macaco", "Banana"],
  ["Coelho", "Cenoura"],
  ["Noite", "Cama"],
  ["Dente", "Escova"],
  ["Bola", "Gol"],
  ["Carta", "Correio"],
  ["Bolo", "Vela"],
  ["Chave", "Porta"],
  ["Tinta", "Pincel"],
  ["Carro", "Combustível"],
  ["Planta", "Água"],
  ["Ovelha", "Lã"],
  ["Livro", "Mochila"],
  ["Música", "Fone"],
  ["Pizza", "Prato"],
];

export const PARES = LISTA.map(([sorteio, cartela], i) => ({ id: i + 1, sorteio, cartela, nome: `${sorteio} → ${cartela}` }));

export const TAM_CARTELA = 16;        // 4x4
export const LETRAS = ["B", "I", "N", "G"];
export const QTD_RECENTES = 5;        // quantas sorteadas aparecem na faixa da cartela
