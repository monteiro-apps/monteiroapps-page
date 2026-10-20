// Monteiro Apps — formulário de contato
// O site é estático (GitHub Pages), então o formulário monta a mensagem
// e abre o WhatsApp. Para receber por e-mail, troque por um serviço
// como Formspree (veja o README).
(function () {
  var WHATSAPP = '5521992798870';

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

  var form = document.getElementById('form-contato');
  var aviso = document.getElementById('form-aviso');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var nome = form.nome.value.trim();
    var contato = form.contato.value.trim();
    var ideia = form.ideia.value.trim();

    if (!nome || !contato || !ideia) {
      aviso.textContent = 'Preencha nome, contato e sua ideia para enviar.';
      var vazio = !nome ? form.nome : !contato ? form.contato : form.ideia;
      vazio.focus();
      return;
    }

    var texto =
      'Olá, Monteiro Apps! Vim pelo site.\n\n' +
      'Nome: ' + nome + '\n' +
      'Contato: ' + contato + '\n\n' +
      'Minha ideia: ' + ideia;

    window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(texto), '_blank', 'noopener');
    aviso.textContent = 'Abrimos o WhatsApp com sua mensagem. É só tocar em enviar!';
    form.reset();
  });
})();
