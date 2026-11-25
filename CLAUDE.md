# Monteiro Apps — site institucional

Site estático (HTML + CSS + JS puro, sem build) publicado no GitHub Pages.

## Estrutura
- `index.html` — site da Jenny pela Monteiro Apps (abertura, destaques Habitex e Esquadrão de agentes de IA, sobre, projetos, me acha em, skills e stacks, serviços, como funciona com o app de exemplo interativo, contato no fim)
- `curso.html` — página de venda do curso "Esquadrão de agentes de IA" (vídeos animados com IA). O botão de compra está sem link até a plataforma ser escolhida (procure `TODO (pendente)`)
- `assets/css/site.css` — estilos do `index.html` e do `curso.html`; os tokens da marca ficam em `:root` no topo
- `assets/css/styles.css` — estilos da landing antiga (não usados pelas páginas atuais)
- `assets/js/main.js` — ano do rodapé, menu hambúrguer (< 768px) app de exemplo interativo e formulário (envia por e-mail via FormSubmit)
- `assets/img/` — favicon, símbolo e `projetos/*.svg` (ilustrações dos projetos)
- `brand/` — identidade visual: `IDENTIDADE-VISUAL.md` (guia), `tokens.json`, `logos/*.svg`

## Regras da marca (siga sempre — detalhes em brand/IDENTIDADE-VISUAL.md)
- Use só as variáveis CSS de `:root`; não invente cores novas.
- Roxo `#5532E0` é a cor principal; coral `#FF6F61` só em toques pontuais (selos, sublinhados, pontos). Proporção ~60% claros, 25% grafite, 10% roxo, 5% coral.
- Texto sobre coral ou lilás é sempre grafite `#17151F`. Texto coral só sobre fundo escuro.
- Títulos em Sora (700/600, letter-spacing negativo); textos em DM Sans.
- Cantos arredondados (botões em pílula, cards 24px), cards brancos com borda `#E7E4F0`, sem sombras nem gradientes.
- O símbolo é sempre o "M" no ícone roxo com o ponto coral no canto — não alterar o SVG.
- Textos em português do Brasil, tom próximo e claro. O público não é técnico: não citar linguagens, frameworks ou stacks (Flutter, código etc.), exceto na seção "Skills e stacks" e na frase de apresentação da Jenny, pedidas por ela em 25/11/2026.
- Acessibilidade: HTML semântico, áreas de toque ≥ 44px, contraste AA, `aria-hidden` em SVGs decorativos.
- Mobile first: tudo precisa funcionar em 360px de largura.

## Pendências (procure `TODO (pendente)` / `TODO` no `index.html`)
- Ativar o FormSubmit (primeiro envio) e trocar o e-mail do `action` pelo endereço aleatório (veja o README).
- Prints reais dos projetos, se quiser trocar as ilustrações em `assets/img/projetos/`.
- Instagram/LinkedIn no bloco de contato: os `<li>` já existem com `hidden` e `href=""` — preencher e remover `hidden`.
- `og:url` e `og:image` (comentados no `<head>`).
- Domínio próprio (ex.: monteiroapps.com.br) → arquivo `CNAME` + configuração do Pages.
