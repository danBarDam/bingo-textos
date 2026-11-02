/* ============================================================
   TROQUE AQUI PELAS SUAS FRASES E PALAVRAS
   Cada par liga a frase do SORTEIO à palavra da CARTELA:
     ["Prato do Quênia...", "Ugali"]  →  sai a frase no sorteio, o jogador marca "Ugali"

   Precisa de pelo menos 9 pares (o tamanho da cartela).
   Evite citar na frase a resposta ou outra palavra da lista.
   ============================================================ */
const LISTA = [
  // Pesquisa 1: países e culturas africanas
  ["Prato do Senegal feito com peixe fresco e seco, arroz, vegetais e temperos.", "Thieboudienne"],
  ["Tartaruga gigante das Ilhas Seychelles, um dos animais terrestres mais velhos do mundo.", "Esmeralda"],
  ["Brincadeira de Moçambique em que as crianças pulam entre dois espaços seguindo comandos.", "Terra-Mar"],
  ["Dança do povo Guro, da Costa do Marfim, feita por um dançarino mascarado.", "Zaouli"],
  ["Manifestação de São Tomé e Príncipe que une teatro, música e figurinos.", "Tchiloli"],
  ["Prato do Quênia feito com farinha de milho e água.", "Ugali"],
  ["Evento anual de música em Essaouira, no Marrocos.", "Festival Gnawa"],
  ["Prato de Cabo Verde que representa a união e as tradições de seu povo.", "Cachupa"],
  ["Grande reservatório artificial de Gana, formado pela Barragem de Akosombo.", "Lago Volta"],
  ["Peças do povo iorubá usadas em cerimônias para honrar divindades e ancestrais.", "Máscaras da Nigéria"],
  ["Vestimenta tradicional do Marrocos.", "Djalaba"],
  ["Separa a África da Ásia e é conhecido por seus recifes de coral.", "Mar Vermelho"],
  ["Menor país da África continental.", "Gâmbia"],
  ["País cujo nome vem da abundância de um crustáceo em um rio, notada por navegadores portugueses.", "Camarões"],
  ["Dança do povo Wodaabe em que os homens usam pinturas faciais e adornos.", "Yaake"],
  ["Vestimenta longa e larga do Egito, com mangas compridas.", "Galabaya"],
  ["Grande construção religiosa do Mali, famosa por sua arquitetura.", "Mesquita de Djenné"],
  ["Maior país do continente africano.", "Argélia"],
  ["País com plantas e animais que não existem naturalmente em nenhum outro lugar do mundo.", "Madagascar"],
  ["Peças sagradas de povos como os Fang e os Punu, que representam a conexão com os antepassados.", "Máscaras do Gabão"],
  ["Pão achatado, esponjoso e levemente azedo da Etiópia e da Eritreia.", "Injera"],
  ["País africano com 16 idiomas oficiais.", "Zimbábue"],
  ["Prato da Tunísia de sêmola de trigo cozida no vapor, servido em um prato coletivo.", "Kosksi"],
  ["Dança da África do Sul com passos enérgicos, saltos, batidas de pés e cantos ancestrais.", "Dança zulu"],
  ["Prato de Angola feito com farinha de mandioca ou de milho e água.", "Funge"],
  ["Vestimenta ampla e solta usada por homens e mulheres do Senegal.", "Boubou"],
  ["Dança em roda da Guiné, acompanhada por tambores, que fica mais rápida ao longo do ritmo.", "Kuku"],
  ["Instituição de ensino superior mais antiga ainda em funcionamento, fundada em 859 no Marrocos.", "Universidade Al-Qarawiyyin"],
  ["Estruturas de pedra construídas há mais de 4.500 anos para servir de tumbas aos faraós.", "Pirâmides"],

  // Pesquisa 2 e 4: heranças africanas no Brasil
  ["Comunidade quilombola de São Paulo, uma das mais antigas do Brasil, que vive da agricultura e do artesanato.", "Ivaporunduva"],
  ["Ritmo de origem iorubá presente em cerimônias do Candomblé e na música popular brasileira.", "Ijexá"],
  ["Rede de comunidades da Capitania de Minas Gerais que resistiu à escravização no período colonial.", "Quilombo do Campo Grande"],
  ["Comunidade de Salgueiro, em Pernambuco, ligada à luta de mulheres negras pela liberdade e pela terra.", "Conceição das Crioulas"],
  ["Manifestação afro-brasileira de música, dança e percussão, inspirada nas tradições dos povos iorubás.", "Afoxé"],
  ["Manifestação do Maranhão que preserva cantos, danças e ritmos de origem africana.", "Tambor de Crioula"],
  ["Manifestação do Amapá que reúne cantos, dança e toques de caixas.", "Marabaixo"],
  ["Instrumento de palha trançada com sementes, que soa ao ser agitado e é usado na capoeira.", "Caxixi"],
  ["Instrumento de metal tocado com uma baqueta, que produz sons metálicos diferentes.", "Agogô"],
  ["Tradição da Bahia com música, canto, palmas e dança, reconhecida como Patrimônio Imaterial pela UNESCO.", "Samba de roda"],
  ["Grão trazido ao Brasil por povos africanos e usado em pratos como o baião de dois.", "Feijão-fradinho"],
  ["Alimento originário do continente africano que se tornou presente na culinária brasileira.", "Quiabo"],
  ["Prato cujo nome vem de línguas africanas e que reúne tradições indígenas, africanas e portuguesas.", "Mungunzá"],
  ["Ferramenta usada na mineração, na construção e na abertura de caminhos.", "Picareta"],
  ["Comunidade de resistência à escravização liderada por Tereza de Benguela.", "Quilombo do Piolho"],
  ["Ferramenta usada para abrir covas, capinar e preparar canteiros.", "Enxada"],
  ["Ferramenta usada para cortar madeira, derrubar árvores pequenas e dividir troncos.", "Machado"],
  ["Instrumento associado a povos bantu que marca o ritmo dos movimentos e cantos da capoeira.", "Berimbau"],
  ["Instrumento de percussão africano usado em celebrações, com grande variedade de sons e ritmos.", "Djembe"],
  ["Ingrediente originário da África Ocidental, marcante na culinária afro-brasileira.", "Azeite de dendê"],
  ["Instrumento feito com uma cabaça envolvida por uma rede de contas ou sementes.", "Xequerê"],
  ["Ferramenta agrícola manual que facilitou a colheita e a limpeza dos terrenos.", "Foice"],
  ["Fruto originário da África, cultivado há milhares de anos e trazido ao Brasil no período colonial.", "Melancia"],
  ["Comunidade quilombola da região da Chapada dos Veadeiros, em Goiás.", "Kalunga"],
  ["Um dos maiores e mais duradouros símbolos de resistência à escravização no Brasil.", "Quilombo dos Palmares"],
  ["Comunidades formadas principalmente por pessoas negras que resistiam à escravização e buscavam viver em liberdade.", "Quilombos"],
  ["Prato da Bahia, do Amazonas e do Pará feito com pão ou farinha, leite de coco, amendoim e castanha-de-caju.", "Vatapá"],
  ["Prato tradicional da culinária brasileira, resultado de influências indígenas e africanas.", "Caruru"],
  ["Alimento afro-brasileiro de massa envolvida em folhas de bananeira e cozida no vapor.", "Abará"],
  ["Alimento tradicional da culinária afro-brasileira preparado com massa frita.", "Acarajé"],
];

export const PARES = LISTA.map(([sorteio, cartela], i) => ({ id: i + 1, sorteio, cartela, nome: `${sorteio} → ${cartela}` }));

export const TAM_CARTELA = 9;         // 3x3
export const QTD_RECENTES = 3;        // quantas sorteadas aparecem na faixa da cartela
