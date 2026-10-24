// Monteiro Apps — scripts do site
(function () {
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  // Menu hambúrguer (telas menores que 768px)
  var botaoMenu = document.querySelector('.topo__menu');
  var menu = document.getElementById('menu-principal');
  if (botaoMenu && menu) {
    var alternarMenu = function (abrir) {
      menu.classList.toggle('aberto', abrir);
      botaoMenu.setAttribute('aria-expanded', abrir ? 'true' : 'false');
      botaoMenu.setAttribute('aria-label', abrir ? 'Fechar menu' : 'Abrir menu');
    };
    botaoMenu.addEventListener('click', function () {
      alternarMenu(botaoMenu.getAttribute('aria-expanded') !== 'true');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) alternarMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('aberto')) {
        alternarMenu(false);
        botaoMenu.focus();
      }
    });
  }

  // App de exemplo no topo da página: o visitante pode tocar e experimentar
  var app = document.getElementById('app-demo');
  if (app) {
    var META = 30;
    var CLIENTES = ['Carla M.', 'Bruno S.', 'Juliana R.', 'Pedro A.', 'Marina L.', 'Rafael C.', 'Beatriz F.', 'Lucas T.'];
    var ITENS = ['Bolo de cenoura', 'Brigadeiros (50)', 'Torta de limão', 'Bolo de pote (6)', 'Cookies (12)', 'Pudim'];
    var estado = {
      total: 24,
      vendas: 1240,
      clientes: 6,
      pedidos: [
        { numero: 24, cliente: 'Fernanda P.', item: 'Bolo de chocolate', valor: 85, entregue: false },
        { numero: 23, cliente: 'Thiago N.', item: 'Brigadeiros (30)', valor: 48, entregue: true },
        { numero: 22, cliente: 'Aline G.', item: 'Torta de morango', valor: 72, entregue: true }
      ]
    };
    var $ = function (nome) { return app.querySelector('[data-app="' + nome + '"]'); };
    var real = function (v) { return 'R$ ' + v.toLocaleString('pt-BR'); };
    var avisoTimer;

    var avisar = function (texto) {
      var aviso = $('aviso');
      aviso.textContent = texto;
      aviso.classList.add('visivel');
      clearTimeout(avisoTimer);
      avisoTimer = setTimeout(function () { aviso.classList.remove('visivel'); }, 2200);
    };

    var itemPedido = function (p, novo) {
      var li = document.createElement('li');
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'app__pedido' + (novo ? ' novo' : '');
      b.setAttribute('data-numero', p.numero);
      b.innerHTML =
        '<span class="app__pedido-icone" aria-hidden="true">#' + p.numero + '</span>' +
        '<span class="app__pedido-texto"><b></b><small></small></span>' +
        '<span class="app__status' + (p.entregue ? ' app__status--ok' : '') + '">' + (p.entregue ? 'Entregue' : 'Preparando') + '</span>';
      b.querySelector('b').textContent = p.cliente;
      b.querySelector('small').textContent = p.item + ' · ' + real(p.valor);
      li.appendChild(b);
      return li;
    };

    var desenhar = function (novoNumero) {
      $('total').textContent = estado.total;
      $('vendas').textContent = real(estado.vendas);
      $('clientes').textContent = estado.clientes;
      $('barra').style.width = Math.min(100, (estado.total / META) * 100) + '%';
      var faltam = META - estado.total;
      $('meta').textContent = faltam > 0 ? 'Faltam ' + faltam + ' para a meta de ' + META : 'Meta do dia batida! 🎉';

      var ultimos = $('ultimos');
      var todos = $('todos');
      ultimos.innerHTML = '';
      todos.innerHTML = '';
      estado.pedidos.forEach(function (p, i) {
        if (i < 2) ultimos.appendChild(itemPedido(p, p.numero === novoNumero));
        todos.appendChild(itemPedido(p, p.numero === novoNumero));
      });
    };

    var irPara = function (tela) {
      app.querySelectorAll('.app__tela').forEach(function (t) {
        t.classList.toggle('ativa', t.getAttribute('data-tela') === tela);
      });
      app.querySelectorAll('.app__abas button').forEach(function (b) {
        var ativa = b.getAttribute('data-ir') === tela;
        b.classList.toggle('ativa', ativa);
        if (ativa) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current');
      });
      app.querySelector('.app__conteudo').scrollTop = 0;
    };

    app.addEventListener('click', function (e) {
      var alvo = e.target.closest('button');
      if (!alvo) return;

      if (alvo.hasAttribute('data-ir')) {
        irPara(alvo.getAttribute('data-ir'));
      } else if (alvo.getAttribute('data-app') === 'novo') {
        var numero = estado.pedidos[0].numero + 1;
        var pedido = {
          numero: numero,
          cliente: CLIENTES[Math.floor(Math.random() * CLIENTES.length)],
          item: ITENS[Math.floor(Math.random() * ITENS.length)],
          valor: 30 + Math.floor(Math.random() * 14) * 5,
          entregue: false
        };
        estado.pedidos.unshift(pedido);
        estado.total += 1;
        estado.vendas += pedido.valor;
        if (Math.random() < 0.5) estado.clientes += 1;
        desenhar(numero);
        var total = $('total');
        total.classList.remove('pulsa');
        void total.offsetWidth;
        total.classList.add('pulsa');
        avisar(estado.total === META ? 'Parabéns, Ana! Meta do dia batida 🎉' : 'Pedido #' + numero + ' de ' + pedido.cliente + ' recebido!');
      } else if (alvo.classList.contains('app__pedido')) {
        var n = Number(alvo.getAttribute('data-numero'));
        estado.pedidos.forEach(function (p) { if (p.numero === n) p.entregue = !p.entregue; });
        desenhar();
        var p = estado.pedidos.filter(function (x) { return x.numero === n; })[0];
        avisar(p.entregue ? 'Pedido #' + n + ' entregue ✓' : 'Pedido #' + n + ' voltou para preparo');
      } else if (alvo.classList.contains('app__chave')) {
        var ligado = alvo.getAttribute('aria-checked') !== 'true';
        alvo.setAttribute('aria-checked', ligado ? 'true' : 'false');
        avisar(alvo.getAttribute('aria-label') + (ligado ? ': ligado' : ': desligado'));
      }
    });

    desenhar();
  }

  // Formulário de contato: envia para o e-mail via FormSubmit (veja o README)
  var form = document.getElementById('form-contato');
  var aviso = document.getElementById('form-aviso');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    aviso.classList.remove('ok');

    var obrigatorios = [form.nome, form.email, form.ideia];
    for (var i = 0; i < obrigatorios.length; i++) {
      if (!obrigatorios[i].value.trim() || !obrigatorios[i].checkValidity()) {
        aviso.textContent = obrigatorios[i] === form.email && obrigatorios[i].value.trim()
          ? 'Confira o seu e-mail: parece que falta alguma coisa.'
          : 'Preencha nome, e-mail e sua ideia para enviar.';
        obrigatorios[i].focus();
        return;
      }
    }

    var botao = form.querySelector('button[type="submit"]');
    botao.disabled = true;
    botao.textContent = 'Enviando...';
    aviso.textContent = '';

    fetch(form.action, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    })
      .then(function (r) { return r.json().then(function (dados) { return { ok: r.ok, dados: dados }; }); })
      .then(function (res) {
        if (!res.ok || String(res.dados.success) !== 'true') throw new Error(res.dados.message || 'Falha no envio');
        aviso.textContent = 'Mensagem enviada! Vamos responder no seu e-mail em breve.';
        aviso.classList.add('ok');
        form.reset();
      })
      .catch(function () {
        aviso.textContent = 'Não foi possível enviar agora. Tente de novo ou fale com a gente pelo WhatsApp.';
      })
      .then(function () {
        botao.disabled = false;
        botao.textContent = 'Enviar por e-mail';
      });
  });
})();
