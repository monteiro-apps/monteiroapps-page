# Monteiro Apps

Site institucional da **Monteiro Apps** — aplicativos iOS e Android com Flutter.
*"Seu app, do papel à loja."*

## Ver localmente
Abra o `index.html` no navegador, ou rode um servidor simples:

```bash
python3 -m http.server 8000
# acesse http://localhost:8000
```

## Publicar no GitHub Pages
1. No repositório, vá em **Settings › Pages**.
2. Em **Build and deployment**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`.
3. Salve. Em alguns minutos o site fica em `https://<usuario-ou-org>.github.io/<repositorio>/`.

Domínio próprio: crie um arquivo `CNAME` com o domínio (ex.: `monteiroapps.com.br`) e configure o DNS conforme a documentação do GitHub Pages.

## Contato
- **WhatsApp:** botão que abre a conversa com a mensagem pronta (link `wa.me` no `index.html`).
- **Formulário:** envia para monteirooapps@gmail.com pelo [FormSubmit](https://formsubmit.co) (`action` do `<form>`).
  1. No **primeiro envio**, o FormSubmit manda um e-mail de ativação para monteirooapps@gmail.com. Clique em confirmar. Até lá as mensagens não chegam.
  2. Depois de ativar, o FormSubmit mostra um endereço aleatório (ex.: `https://formsubmit.co/ajax/abc123...`). Troque o e-mail no `action` por ele, para o seu e-mail não ficar visível no código.

## Identidade visual
Guia completo, cores, fontes e logos em [`brand/`](brand/IDENTIDADE-VISUAL.md).
