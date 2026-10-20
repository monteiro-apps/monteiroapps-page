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

## Formulário de contato
O site é estático, então o formulário abre o WhatsApp com a mensagem pronta (número em `assets/js/main.js`).
Para receber por e-mail, troque por um serviço como Formspree: defina `action` e `method="POST"` no `<form>` e remova o script de envio.

## Identidade visual
Guia completo, cores, fontes e logos em [`brand/`](brand/IDENTIDADE-VISUAL.md).
