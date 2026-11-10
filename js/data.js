/* Todo o conteúdo editável do site da Deli Sabores & Cia.
   Textos entre colchetes [ ] são pendências para confirmar com o dono. */
window.DELI = (function () {
  const whatsapp = "https://wa.me/558183058121";
  const wa = (texto) => `${whatsapp}?text=${encodeURIComponent(texto)}`;
  const endereco = { linha1: "Rua Almirante Paulo Moreira, 778", linha2: "Cabo de Santo Agostinho · PE" };
  const q = encodeURIComponent("Rua Almirante Paulo Moreira, 778, Cabo de Santo Agostinho, PE");

  return {
    nome: "Deli Sabores & Cia",
    slogan: "Tudo o que você quiser, em um só lugar",
    endereco,
    wa,
    links: {
      whatsapp,
      conversa: wa("Olá, Deli! Vim pelo site e queria fazer um pedido."),
      whatsappTexto: "(81) 8305-8121",
      instagram: "https://www.instagram.com/deliacaiesorvetes/",
      instagramUser: "@deliacaiesorvetes",
      pedido: "https://deli-sorvetes-e-cia.ola.click/products",
      mapa: `https://www.google.com/maps/search/?api=1&query=${q}`,
      waze: `https://waze.com/ul?q=${q}&navigate=yes`,
      mapaEmbed: `https://maps.google.com/maps?q=${q}&z=16&output=embed`
    },
    dias: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
    /* Horários ainda não informados: tabela vazia = não mostra "aberto/fechado". [CONFIRMAR COM O DONO] */
    horarios: null,

    /* Categorias da vitrine (vêm do Instagram da Deli; as que têm "preco: false" ainda não têm preços no site) */
    vitrine: [
      { id: "tacas", nome: "Taças e sorvetes", sub: "Taças decoradas, sorvete e açaí", cor: "magenta", foto: "milkshake-oreo", link: "cardapio.html#tacas" },
      { id: "sobremesas", nome: "Sobremesas premium", sub: "Waffles, cartola, petit gateau", cor: "amarelo", foto: "waffle", link: "cardapio.html#sobremesas" },
      { id: "pizza", nome: "Pizzas", sub: "Redondas, no cesto, na mesa", cor: "laranja", foto: "pizza", link: "cardapio.html#outros" },
      { id: "sushi", nome: "Sushi e poke", sub: "Combinados, hot rolls e pokes", cor: "ciano", foto: "sushi-1", link: "cardapio.html#poke" },
      { id: "drinks", nome: "Drinks", sub: "Sem álcool e coloridos", cor: "verde", foto: "drink-limao", link: "cardapio.html#outros" },
      { id: "salgados", nome: "Salgados e almoço", sub: "Coxinha, croissant e prato do dia", cor: "roxo", foto: "coxinha", link: "cardapio.html#salgados" }
    ],

    /* Fotos do feed (mostradas pequenas, na faixa "do Instagram") */
    feed: [
      ["milkshake-oreo", "Milkshake de chocolate com chantilly e biscoito"],
      ["sushi-1", "Combinado de sushi com hot roll"],
      ["taca", "Taça de sorvete com borda de amendoim e morango"],
      ["pizza", "Pizza meio a meio"],
      ["waffle", "Waffle com sorvete de chocolate e morangos"],
      ["drink-maca", "Drink de maçã verde"],
      ["coxinha", "Coxinha cortada ao meio"],
      ["milkshake-cone", "Milkshake com casquinha e wafer"]
    ],

    /* Cardápio. "base" = o que todas as taças levam. Preços exatamente como no cardápio do Ola Click. */
    cardapio: [
      {
        id: "tacas", nome: "Taças decoradas", icone: "taca", foto: "taca",
        nota: "Todas levam sorvete ou açaí, banana, morango, leite condensado e leite em pó. Abaixo, o que cada uma tem a mais.",
        itens: [
          { n: "Amor Eterno", d: "Calda de brigadeiro, tubet, biscoito e granulado", p: 26.90 },
          { n: "Amor Selvagem", d: "Nutella, chantilly, tubet, bombom, cookies de chocolate e mais…", p: 28.90 },
          { n: "Lindo Amor", d: "Calda de uva, uva, surpresa de uva e granulado vermelho", p: 33.90 },
          { n: "Desejo de Amor", d: "Cookies de morango, tubet e chantilly", p: 24.90 },
          { n: "Louca Paixão", d: "Picolé, chantilly e granulado vermelho", p: 35.90 },
          { n: "Amor Gigi", d: "Casquinha, M&M, nutella, granulado colorido, marshmallow e mais…", p: 37.90 },
          { n: "Beijo Roubado", d: "Beijinho, brigadeiro, calda de brigadeiro, calda de beijinho e mais…", p: 35.90 },
          { n: "Doce Beijo", d: "Farinha de paçoca, chantilly, tubet, calda de brigadeiro e mais…", p: 26.90 },
          { n: "Amor Verdadeiro", d: "Beijinho, brigadeiro e nutella", p: 27.90 },
          { n: "Paixão sem Limites", d: "Tubet e calda de chocolate branco", p: 27.90 }
        ]
      },
      {
        id: "sobremesas", nome: "Sobremesas", icone: "waffle", foto: "waffle",
        itens: [
          { n: "Cartola tradicional", d: "Banana, queijo manteiga, açúcar e canela", p: 21.90 },
          { n: "Cartola de chocolate", d: "", p: 24.90 },
          { n: "Banana split", d: "3 bolas de sorvete, banana e coberturas", p: 19.90 },
          { n: "Waffle de mel", d: "Banana, morango, sorvete e mel", p: 19.90 },
          { n: "Waffle de nutella", d: "Banana, morango, sorvete e nutella", p: 22.90 },
          { n: "Waffle de kiwi", d: "Morango, kiwi, sorvete e calda de morango", p: 20.90 },
          { n: "Waffle de chocolate", d: "", p: 27.99 },
          { n: "Petit gateau", d: "", p: 19.90 },
          { n: "Salada de frutas", d: "", p: 17.90 }
        ]
      },
      {
        id: "salgados", nome: "Salgados", icone: "coxinha", foto: "coxinha",
        itens: [
          { n: "Coxinha", d: "Massa de batata crocante, preparada sem óleo. A melhor coxinha da região", p: 10.99 },
          { n: "Empada", d: "Saborosa e crocante", p: 11.99 },
          { n: "Pastel de forno", d: "Um pastelzão para você saborear", p: 10.49 },
          { n: "Croissant tradicional", d: "O salgado delicioso que mata sua fome", p: 11.99 },
          { n: "Folhado", d: "Assado no forno, sem óleo", p: 10.49 }
        ]
      },
      {
        id: "cuscuz", nome: "Cuscuz recheado", icone: "cuscuz",
        nota: "O prato que não pode faltar na vida do nordestino.",
        itens: [
          { n: "Cuscuz recheado, dois sabores", d: "", p: 13.99 },
          { n: "Cuscuz recheado, três sabores", d: "", p: 15.99 }
        ]
      },
      {
        id: "petiscos", nome: "Petiscos", icone: "batata",
        itens: [
          { n: "Calabresa com batata frita", d: "Uma porção para qualquer horário do dia", p: 36.90 },
          { n: "Porção de batata frita", d: "", p: 20.90 },
          { n: "Camarão ao alho e óleo", d: "", p: 40.90 },
          { n: "Tábua de frios", d: "Várias opções para você se deliciar", p: 46.90 },
          { n: "Carne de sol com fritas", d: "", p: 43.90 },
          { n: "Isca de frango com fritas", d: "", p: 35.90 }
        ]
      },
      {
        id: "poke", nome: "Poke", icone: "poke", foto: "sushi-1",
        itens: [
          { n: "Salmão natural maçaricado poke", d: "Base de pepino japonês, manga, cenoura e cebola roxa agridoce, com repolho roxo, crispy de couve, gergelim e mais…", p: 50.99 },
          { n: "Camarão empanado poke", d: "", p: 44.99 },
          { n: "Camarão natural poke", d: "", p: 45.99 },
          { n: "Kani poke", d: "", p: 40.99 }
        ]
      }
    ]
  };
})();
