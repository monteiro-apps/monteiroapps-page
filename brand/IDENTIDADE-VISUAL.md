# Monteiro Apps — Identidade Visual (v1.1)

Empresa de desenvolvimento de aplicativos **iOS e Android** (Flutter), sediada no Rio de Janeiro.
Estilo: **minimalista, profissional e clean** — muito espaço em branco, roxo como assinatura e coral como toque de energia.

Slogan: **"Seu app, do papel à loja."**

---

## 1. Logo

**Logo oficial: A · Monograma.** Um "M" de traço único, com pontas arredondadas, dentro de um ícone no formato de app (cantos arredondados), com um **ponto coral** no canto superior direito — como o aviso de notificação de um app.

- Ícone: quadrado 120 × 120, raio 32, fundo `#5532E0`.
- "M": `M34 82V40l26 26 26-26v42`, traço 12 (13 em tamanhos muito pequenos), branco, pontas e junções arredondadas.
- Ponto: círculo em (98, 22), raio 9, `#FF6F61`.
- Nome: **Monteiro** em Sora 700 + **Apps** em Sora 400, letter-spacing −0.035em.

| Versão | Fundo | Ícone | "Monteiro" | "Apps" |
|---|---|---|---|---|
| Positiva | claro | roxo, M branco | Grafite | Roxo |
| Negativa | roxo | branco, M roxo | Branco | Branco |
| Escura | grafite | roxo, M branco | Branco | Lilás `#B9A8FF` |

Arquivos em `brand/logos/`:
- `simbolo.svg`
- `simbolo-negativo.svg`
- `avatar-circular.svg` (para redes sociais)
- `logo-horizontal-positiva.svg`
- `logo-horizontal-negativa.svg`
- `logo-horizontal-escura.svg`

> Os logos horizontais usam texto com a fonte Sora. Para impressão, converta o texto em contornos (Figma/Illustrator).

**Regras de uso**
- Tamanho mínimo do ícone: 24 px. Área de respiro: metade da altura do ícone em volta da logo.
- Não distorcer, não girar, não trocar as cores fora das três versões, não aplicar sombra nem gradiente.
- O ponto coral faz parte do símbolo: não remover nem mover.

Opções exploradas e não adotadas (ficam no canvas como referência): B · Duas telas, C · m com toque, D · Só tipográfica e E · Camadas.

---

## 2. Cores

| Nome | Hex | Uso |
|---|---|---|
| **Roxo Monteiro** (principal) | `#5532E0` | Logo, botões principais, links, destaques |
| Roxo Profundo | `#2A1670` | Hover/pressionado, fundos de impacto |
| Lavanda | `#EDE9FE` | Fundos suaves, tags, seleção, números sobre grafite |
| Lilás | `#B9A8FF` | Botões secundários sobre fundo roxo, rótulos sobre grafite |
| **Coral** (destaque) | `#FF6F61` | Selos, avisos, chamadas pontuais, ponto do símbolo |
| Grafite | `#17151F` | Texto principal e fundos escuros |
| Cinza Ardósia | `#6B6878` | Texto secundário, legendas |
| Texto corpo | `#4A4757` | Parágrafos sobre fundo claro |
| Névoa | `#F6F5FA` | Fundo das telas |
| Borda | `#E7E4F0` | Bordas e divisores |
| Branco | `#FFFFFF` | Cards e superfícies |

**Proporção:** cerca de 60% tons claros, 25% grafite, 10% roxo e 5% coral.

**Contraste (acessibilidade)**
- Texto sobre o coral e sobre o lilás: sempre **Grafite**. Branco sobre esses tons não tem contraste suficiente.
- Texto coral só sobre **fundos escuros** (grafite). Sobre fundo claro, use o coral apenas em formas, selos, sublinhados e pontos.
- Texto branco sobre Roxo Monteiro e Roxo Profundo: ok.

---

## 3. Tipografia (Google Fonts)

- **Sora** (400, 600, 700) — logotipo, títulos e números de destaque. Geométrica e tecnológica.
- **DM Sans** (400, 500, 700) — textos, botões e interface. Muito legível em telas pequenas.

```html
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
```

| Estilo | Fonte | Tamanho | Peso | Espaçamento |
|---|---|---|---|---|
| H1 | Sora | 40–68 px | 700 | −0.04em |
| H2 | Sora | 30–44 px | 700 | −0.03em |
| H3 | Sora | 20–24 px | 600 | −0.02em |
| Corpo | DM Sans | 16 px, altura 1.5 | 400 | normal |
| Legenda | DM Sans | 13 px, MAIÚSCULAS | 500 | +0.14em |

Recurso de marca: sublinhado coral grosso em uma palavra-chave do título (ex.: "à **loja**").

---

## 4. Formas e espaçamento

- Cantos bem arredondados: 12 px (campos), 18–24 px (cards), 32 px (blocos grandes), pílula (999 px) em botões e selos.
- Cards brancos com borda `#E7E4F0` de 1 px, sem sombra.
- Grade base de 8 px, container de 1200 px, respiro de 96 px entre seções.
- Ícones de interface: traço de 2 px, pontas arredondadas, cor roxa, dentro de um quadrado lavanda de 48 px.
- Áreas de toque de no mínimo 44 px.

---

## 5. Voz

Próxima, clara e confiante, sem jargão. Fala com quem tem uma ideia e não sabe por onde começar.
Exemplos:
- "Seu app, do papel à loja."
- "Quero tirar meu app do papel."
- "Quatro etapas, sem complicação."

---

## 6. Aplicações

- **Capa do LinkedIn (perfil pessoal):** 1584 × 396 px, fundo roxo, conteúdo alinhado à direita (a foto cobre o canto inferior esquerdo), separadores coral.
- **Cartão de visita:** 90 × 50 mm. Frente roxa com a logo negativa; verso branco com nome, cargo e contatos.
- **Banner:** fundo grafite, rótulo coral, slogan branco, botão coral com texto grafite.
- **Site:** veja `index.html` neste repositório.

Os tokens em formato de código estão em `brand/tokens.json` e no topo de `assets/css/styles.css`.
