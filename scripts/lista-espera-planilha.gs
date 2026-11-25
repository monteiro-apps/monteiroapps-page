/**
 * Lista de espera do curso "Esquadrão de agentes de IA" → Google Planilhas.
 *
 * Como instalar (uma vez só, no computador):
 * 1. Abra a planilha "Lista de espera · Esquadrão de agentes de IA" no Google Drive.
 * 2. Menu Extensões › Apps Script. Apague o que estiver lá e cole este arquivo inteiro. Salve.
 * 3. Botão Implantar › Nova implantação › tipo "App da Web".
 *    - Executar como: Eu
 *    - Quem pode acessar: Qualquer pessoa
 * 4. Autorize com a sua conta Google e copie o "URL do app da Web" (termina em /exec).
 * 5. Cole esse URL no atributo data-planilha do <form id="form-espera"> em curso.html.
 *
 * Cada inscrição vira uma linha: Data, Nome, E-mail, WhatsApp, Página.
 */
function doPost(e) {
  var p = (e && e.parameter) || {};
  if (p._honey) return resposta({ ok: true }); // robô: ignora sem avisar

  var nome = limpar(p.nome, 120);
  var email = limpar(p.email, 160);
  if (!nome || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return resposta({ ok: false, erro: 'dados' });

  var trava = LockService.getScriptLock();
  trava.waitLock(10000);
  try {
    var aba = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    aba.appendRow([new Date(), nome, email, limpar(p.whatsapp, 40), limpar(p.pagina, 80) || 'curso']);
  } finally {
    trava.releaseLock();
  }
  return resposta({ ok: true });
}

// Corta o tamanho e impede que um texto vire fórmula na planilha (=, +, -, @).
function limpar(valor, max) {
  var t = String(valor || '').trim().slice(0, max);
  return /^[=+\-@]/.test(t) ? "'" + t : t;
}

function resposta(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
