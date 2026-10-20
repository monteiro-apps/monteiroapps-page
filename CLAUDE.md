# Monteiro Apps — site institucional

Site estático (HTML + CSS + JS puro, sem build) publicado no GitHub Pages.

## Estrutura
- `index.html` — landing page (menu, abertura, tecnologias, serviços, como funciona, projetos, contato, rodapé)
- `assets/css/styles.css` — estilos; os tokens da marca ficam em `:root` no topo
- `assets/js/main.js` — ano do rodapé, menu hambúrguer (< 768px) e formulário (abre o WhatsApp com a mensagem pronta)
- `assets/img/` — favicon e símbolo
- `brand/` — identidade visual: `IDENTIDADE-VISUAL.md` (guia), `tokens.json`, `logos/*.svg`

## Regras da marca (siga sempre — detalhes em brand/IDENTIDADE-VISUAL.md)
- Use só as variáveis CSS de `:root`; não invente cores novas.
- Roxo `#5532E0` é a cor principal; coral `#FF6F61` só em toques pontuais (selos, sublinhados, pontos). Proporção ~60% claros, 25% grafite, 10% roxo, 5% coral.
- Texto sobre coral ou lilás é sempre grafite `#17151F`. Texto coral só sobre fundo escuro.
- Títulos em Sora (700/600, letter-spacing negativo); textos em DM Sans.
- Cantos arredondados (botões em pílula, cards 24px), cards brancos com borda `#E7E4F0`, sem sombras nem gradientes.
- O símbolo é sempre o "M" no ícone roxo com o ponto coral no canto — não alterar o SVG.
- Textos em português do Brasil, tom próximo e claro.
- Acessibilidade: HTML semântico, áreas de toque ≥ 44px, contraste AA, `aria-hidden` em SVGs decorativos.
- Mobile first: tudo precisa funcionar em 360px de largura.

## Pendências (procure `TODO (pendente)` / `TODO` no `index.html`)
- Imagens reais dos projetos (`assets/img/projetos/*.png`).
- Instagram/LinkedIn no bloco de contato: os `<li>` já existem com `hidden` e `href=""` — preencher e remover `hidden`.
- `og:url` e `og:image` (comentados no `<head>`).
- Domínio próprio (ex.: monteiroapps.com.br) → arquivo `CNAME` + configuração do Pages.
