(function () {
  const D = window.DELI;
  const L = D.links;
  const page = document.body.dataset.page || "";
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const brl = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const sv = (p) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  const icons = {
    whats: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>',
    pin: sv('<path d="M12 22s7-6.3 7-12a7 7 0 0 0-14 0c0 5.7 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/>'),
    clock: sv('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
    insta: sv('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>'),
    menu: sv('<path d="M4 7h16M4 12h16M4 17h16"/>'),
    close: sv('<path d="M6 6l12 12M18 6 6 18"/>'),
    sacola: sv('<path d="M5 8h14l-1 12H6L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>'),
    mais: sv('<path d="M12 5v14M5 12h14"/>'),
    menos: sv('<path d="M5 12h14"/>'),
    link: sv('<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3A4 4 0 0 0 11 18.7l1-1"/>'),
    taca: sv('<path d="M5 4h14l-1.5 6a5.5 5.5 0 0 1-11 0L5 4Z"/><path d="M12 15.5V21M8 21h8M8.5 4c.5-2 2-2.5 3.5-2.5S15 2 15.5 4"/>'),
    waffle: sv('<rect x="3" y="6" width="18" height="12" rx="3"/><path d="M9 6v12M15 6v12M3 12h18"/>'),
    coxinha: sv('<path d="M12 3c2 0 3 2 4 5s3 5 3 8c0 3-3 5-7 5s-7-2-7-5c0-3 2-5 3-8s2-5 4-5Z"/><path d="M9 14c1 1 2 1.5 3 1.5"/>'),
    cuscuz: sv('<path d="M4 13h16c0 4-3.5 7-8 7s-8-3-8-7Z"/><path d="M6 13c0-4 2.5-7 6-7s6 3 6 7M10 3.5c.5.5.5 1.2 0 1.7M14 3.5c.5.5.5 1.2 0 1.7"/>'),
    batata: sv('<path d="M5 11h14l-1.5 10h-11L5 11Z"/><path d="M8 11 7 4M11 11l-.5-8M14 11l.5-8M17 11l1-6"/>'),
    poke: sv('<path d="M3 12h18c0 4.5-4 8-9 8s-9-3.5-9-8Z"/><path d="M7 12c0-2 1.2-3 2.5-3S12 10 12 12M12 12c0-2.5 1.5-4 3-4s2.5 1.5 2.5 4"/>'),
    pizza: sv('<path d="M3 6c5-3 13-3 18 0l-9 16L3 6Z"/><circle cx="10" cy="9" r="1" fill="currentColor"/><circle cx="14.5" cy="10.5" r="1" fill="currentColor"/><circle cx="12" cy="14" r="1" fill="currentColor"/>'),
    sorvete: sv('<path d="M7 11a5 5 0 0 1 10 0H7Z"/><path d="m7 11 5 11 5-11"/>')
  };

  /* ---------- cabeçalho e rodapé ---------- */
  const links = [
    ["index.html", "Início", "inicio"],
    ["cardapio.html", "Cardápio", "cardapio"],
    ["contato.html", "Venha nos visitar", "contato"]
  ];
  const brand = `<a class="brand" href="index.html" aria-label="Deli Sabores & Cia, página inicial"><img src="img/logo.png" alt="" width="46" height="46"><span>Deli<small>Sabores &amp; Cia</small></span></a>`;

  const header = document.getElementById("header");
  if (header) {
    header.innerHTML = `
    <header class="topbar">
      <div class="container topbar__inner">
        ${brand}
        <nav class="nav" id="nav" aria-label="Principal">
          ${links.map(([href, t, id]) => `<a href="${href}"${id === page ? ' aria-current="page"' : ""}>${t}</a>`).join("")}
        </nav>
        <a class="btn btn--amarelo btn--sm" href="${L.conversa}" target="_blank" rel="noopener">${icons.whats}Pedir no WhatsApp</a>
        <button class="menu-toggle" type="button" aria-controls="nav" aria-expanded="false" aria-label="Abrir menu">${icons.menu}</button>
      </div>
    </header>`;
    const btn = header.querySelector(".menu-toggle");
    const nav = header.querySelector(".nav");
    const toggle = (open) => {
      nav.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", open);
      btn.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
      btn.innerHTML = open ? icons.close : icons.menu;
    };
    btn.addEventListener("click", () => toggle(!nav.classList.contains("is-open")));
    nav.addEventListener("click", (e) => { if (e.target.closest("a")) toggle(false); });
  }

  const footer = document.getElementById("footer");
  if (footer) {
    footer.innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer__grid">
          <div>
            ${brand}
            <p class="footer__slogan">${D.slogan}!</p>
            <p style="font-size:15px">Almoço, pizza, sushi, sorvetes, açaí e sobremesas premium no Cabo de Santo Agostinho.</p>
          </div>
          <div>
            <h4>Páginas</h4>
            <ul>${links.map(([href, t]) => `<li><a href="${href}">${t}</a></li>`).join("")}<li><a href="${L.pedido}" target="_blank" rel="noopener">Cardápio no Ola Click</a></li></ul>
          </div>
          <div>
            <h4>Fale com a gente</h4>
            <ul>
              <li><a href="${L.conversa}" target="_blank" rel="noopener">WhatsApp ${L.whatsappTexto}</a></li>
              <li><a href="${L.instagram}" target="_blank" rel="noopener">Instagram ${L.instagramUser}</a></li>
            </ul>
          </div>
          <div>
            <h4>Onde estamos</h4>
            <ul><li><a href="${L.mapa}" target="_blank" rel="noopener">${D.endereco.linha1}<br>${D.endereco.linha2}</a></li></ul>
          </div>
        </div>
        <div class="footer__fim"><span>© ${new Date().getFullYear()} Deli Sabores &amp; Cia</span><span>Avaliada com 4,7 estrelas no Google.</span></div>
      </div>
    </footer>
    <a class="fab-whats" href="${L.conversa}" target="_blank" rel="noopener" aria-label="Falar no WhatsApp">${icons.whats}</a>
    <div class="mobile-cta">
      <a class="btn btn--whats" href="${L.conversa}" target="_blank" rel="noopener">${icons.whats}WhatsApp</a>
      <a class="btn btn--contorno" href="${L.mapa}" target="_blank" rel="noopener">${icons.pin}Como chegar</a>
    </div>`;
  }

  /* ---------- início ---------- */
  const vitEl = document.querySelector("[data-vitrine]");
  if (vitEl) vitEl.innerHTML = D.vitrine.map((v) => `
    <a class="vit cor-${v.cor} reveal" href="${v.link}">
      <span class="vit__foto"><img src="img/fotos/${v.foto}.jpg" alt="" loading="lazy"></span>
      <span class="vit__txt"><h3>${v.nome}</h3><p>${v.sub}</p></span>
    </a>`).join("");

  const feedEl = document.querySelector("[data-feed]");
  if (feedEl) feedEl.innerHTML = D.feed.map(([f, alt]) => `<a href="${L.instagram}" target="_blank" rel="noopener" aria-label="Ver no Instagram: ${esc(alt)}"><img src="img/fotos/${f}.jpg" alt="${esc(alt)}" loading="lazy"></a>`).join("");

  /* ---------- cardápio + sacola ---------- */
  const cardEl = document.querySelector("[data-cardapio]");
  if (cardEl) {
    const chips = document.querySelector("[data-chips]");
    const lista = D.cardapio;
    chips.innerHTML = lista.map((c, i) => `<a class="chip${i === 0 ? " is-active" : ""}" href="#${c.id}">${c.nome}</a>`).join("") + `<a class="chip" href="#outros">Mais da casa</a>`;
    cardEl.innerHTML = lista.map((c) => `
      <section class="cat" id="${c.id}" aria-labelledby="t-${c.id}">
        <div class="cat__head">
          <span class="cat__ic">${icons[c.icone] || ""}</span>
          <div><h2 id="t-${c.id}">${c.nome}</h2>${c.nota ? `<p>${c.nota}</p>` : ""}</div>
          ${c.foto ? `<img class="cat__foto" src="img/fotos/${c.foto}.jpg" alt="" loading="lazy">` : ""}
        </div>
        <ul class="itens">
          ${c.itens.map((it, i) => `
          <li class="item">
            <div class="item__txt">
              <span class="item__linha"><span class="item__nome">${it.n}</span><span class="item__pontos" aria-hidden="true"></span><span class="item__preco">${brl(it.p)}</span></span>
              ${it.d ? `<span class="item__desc">${it.d}</span>` : ""}
            </div>
            <button class="item__add" type="button" data-add="${c.id}|${i}" aria-label="Adicionar ${esc(it.n)} à sacola">${icons.mais}</button>
          </li>`).join("")}
        </ul>
      </section>`).join("") + `
      <section class="cat cat--outros" id="outros" aria-labelledby="t-outros">
        <div class="cat__head"><span class="cat__ic">${icons.pizza}</span><div><h2 id="t-outros">Mais da casa</h2><p>Almoço, pizzas, sushi, drinks e croissants também fazem parte do cardápio da Deli.</p></div></div>
        <p class="placeholder">[Valores e sabores de almoço, pizzas, sushi, drinks e croissants ainda não estão aqui. Confirmar com o dono.]</p>
        <div class="outros__btns">
          <a class="btn btn--magenta" href="${L.pedido}" target="_blank" rel="noopener">${icons.link}Ver cardápio completo</a>
          <a class="btn btn--whats" href="${D.wa("Olá, Deli! Queria saber o cardápio de pizzas, sushi e almoço de hoje.")}" target="_blank" rel="noopener">${icons.whats}Perguntar no WhatsApp</a>
        </div>
      </section>`;

    const chipEls = [...chips.querySelectorAll(".chip")];
    const obs = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      chipEls.forEach((c) => c.classList.toggle("is-active", c.getAttribute("href") === "#" + e.target.id));
      const a = chips.querySelector(".is-active");
      if (a) chips.scrollTo({ left: a.offsetLeft - 20, behavior: "smooth" });
    }), { rootMargin: "-160px 0px -60% 0px" });
    cardEl.querySelectorAll(".cat").forEach((s) => obs.observe(s));
    if (location.hash) { const alvo = document.getElementById(location.hash.slice(1)); if (alvo) requestAnimationFrame(() => alvo.scrollIntoView({ behavior: "auto" })); }
    iniciarSacola();
  }

  function iniciarSacola() {
    const todos = {};
    D.cardapio.forEach((c) => c.itens.forEach((it, i) => { todos[`${c.id}|${i}`] = { ...it, cat: c.nome }; }));
    let sacola = {};
    try { sacola = JSON.parse(localStorage.getItem("deli-sacola") || "{}") || {}; } catch (e) { sacola = {}; }
    Object.keys(sacola).forEach((k) => { if (!todos[k] || !(sacola[k] > 0)) delete sacola[k]; });
    const salvar = () => { try { localStorage.setItem("deli-sacola", JSON.stringify(sacola)); } catch (e) { /* sem storage */ } };

    document.body.insertAdjacentHTML("beforeend", `
      <div class="sacola-barra" role="region" aria-label="Sua sacola" aria-live="polite">
        <div class="sacola-barra__info"><strong data-s-qtd></strong><span data-s-total></span></div>
        <button class="btn btn--amarelo" type="button" data-s-abrir>${icons.sacola}Ver sacola</button>
      </div>
      <dialog class="sacola-dialog" aria-labelledby="s-titulo">
        <div class="sacola-dialog__in">
          <div class="dlg-topo">
            <h2 class="h3" id="s-titulo">Sua sacola</h2>
            <button class="x" type="button" data-s-fechar aria-label="Fechar">${icons.close}</button>
          </div>
          <ul class="sacola-lista" data-s-lista></ul>
          <p class="sacola-total">Total dos itens <strong data-s-total2></strong></p>
          <fieldset class="entrega"><legend>Como prefere receber?</legend>
            <input type="radio" name="ent" id="ent-r" value="Retirar na loja" checked><label for="ent-r">Retirar na loja</label>
            <input type="radio" name="ent" id="ent-e" value="Entrega"><label for="ent-e">Entrega</label>
          </fieldset>
          <label class="campo">Seu nome<input type="text" data-s-nome placeholder="Como podemos te chamar?"></label>
          <label class="campo">Observações<textarea data-s-obs rows="2" placeholder="Ex.: sem cebola, sabor do cuscuz, endereço de entrega…"></textarea></label>
          <p class="nota">O pedido segue para o WhatsApp da Deli, que confirma sabores, taxa de entrega e forma de pagamento.</p>
          <div class="btns">
            <button class="btn btn--contorno btn--sm" type="button" data-s-limpar>Limpar</button>
            <a class="btn btn--whats btn--sm" data-s-enviar target="_blank" rel="noopener" style="flex:1">${icons.whats}Enviar pedido</a>
          </div>
        </div>
      </dialog>`);

    const barra = document.querySelector(".sacola-barra");
    const dlg = document.querySelector(".sacola-dialog");
    const val = (s) => dlg.querySelector(s).value.trim();
    const qtdTotal = () => Object.values(sacola).reduce((a, b) => a + b, 0);
    const valorTotal = () => Object.entries(sacola).reduce((a, [k, q]) => a + todos[k].p * q, 0);

    function mensagem() {
      const linhas = Object.entries(sacola).map(([k, q]) => `• ${q}x ${todos[k].n} (${brl(todos[k].p * q)})`);
      const ent = dlg.querySelector('[name="ent"]:checked').value;
      const extra = [val("[data-s-nome]") && `Nome: ${val("[data-s-nome]")}`, `Preferência: ${ent}`, val("[data-s-obs]") && `Obs.: ${val("[data-s-obs]")}`].filter(Boolean);
      return `Olá, Deli! Montei meu pedido no site:\n\n${linhas.join("\n")}\n\nTotal dos itens: ${brl(valorTotal())}\n${extra.join("\n")}`;
    }
    const atualizarLink = () => { dlg.querySelector("[data-s-enviar]").href = D.wa(mensagem()); };

    function render() {
      const n = qtdTotal();
      barra.classList.toggle("is-on", n > 0);
      document.body.classList.toggle("tem-sacola", n > 0);
      barra.querySelector("[data-s-qtd]").textContent = `${n} ${n === 1 ? "item" : "itens"} na sacola`;
      barra.querySelector("[data-s-total]").textContent = brl(valorTotal());
      dlg.querySelector("[data-s-total2]").textContent = brl(valorTotal());
      dlg.querySelector("[data-s-lista]").innerHTML = n ? Object.entries(sacola).map(([k, q]) => `
        <li><span class="sl__nome">${esc(todos[k].n)}<small>${brl(todos[k].p)} · ${esc(todos[k].cat)}</small></span>
        <span class="step"><button type="button" data-s-menos="${k}" aria-label="Tirar um ${esc(todos[k].n)}">${icons.menos}</button><b>${q}</b><button type="button" data-s-mais="${k}" aria-label="Adicionar um ${esc(todos[k].n)}">${icons.mais}</button></span></li>`).join("") : "<li>Nenhum item ainda.</li>";
      document.querySelectorAll("[data-add]").forEach((b) => {
        const q = sacola[b.dataset.add] || 0;
        b.classList.toggle("tem", q > 0);
        b.innerHTML = q > 0 ? `<b>${q}</b>` : icons.mais;
      });
      atualizarLink();
      salvar();
    }

    document.addEventListener("click", (e) => {
      const add = e.target.closest("[data-add]");
      if (add) { sacola[add.dataset.add] = (sacola[add.dataset.add] || 0) + 1; render(); return; }
      const mais = e.target.closest("[data-s-mais]");
      if (mais) { sacola[mais.dataset.sMais]++; render(); return; }
      const menos = e.target.closest("[data-s-menos]");
      if (menos) { const k = menos.dataset.sMenos; if (--sacola[k] <= 0) delete sacola[k]; render(); if (!qtdTotal()) dlg.close(); return; }
      if (e.target.closest("[data-s-abrir]")) dlg.showModal();
      if (e.target.closest("[data-s-fechar]")) dlg.close();
      if (e.target.closest("[data-s-limpar]")) { sacola = {}; render(); dlg.close(); }
    });
    dlg.addEventListener("input", atualizarLink);
    dlg.addEventListener("change", atualizarLink);
    dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
    render();
  }

  /* ---------- links e ícones dinâmicos ---------- */
  document.querySelectorAll("[data-link]").forEach((a) => {
    const k = a.dataset.link;
    if (L[k]) { a.href = L[k]; a.target = "_blank"; a.rel = "noopener"; }
  });
  document.querySelectorAll("[data-icon]").forEach((el) => { el.insertAdjacentHTML("afterbegin", icons[el.dataset.icon] || ""); });
  document.querySelectorAll("[data-endereco]").forEach((el) => { el.innerHTML = `${D.endereco.linha1}<br>${D.endereco.linha2}`; });
  document.querySelectorAll("[data-map]").forEach((el) => {
    el.innerHTML = `<iframe src="${L.mapaEmbed}" title="Mapa: ${D.endereco.linha1}, ${D.endereco.linha2}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  });

  /* ---------- animação ao rolar ---------- */
  const rev = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting || e.boundingClientRect.top < 0) { e.target.classList.add("is-in"); io.unobserve(e.target); } }), { threshold: .12 });
    rev.forEach((r) => io.observe(r));
  } else rev.forEach((r) => r.classList.add("is-in"));
})();
