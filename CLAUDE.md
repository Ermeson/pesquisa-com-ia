# appmapa — guia de conteúdo do `index.html`

Este projeto é um **único arquivo** (`index.html`, Tailwind via CDN) que renderiza uma
apresentação estilo "mapa mental" (inspirada no modo de apresentação do XMind/Ahha):
título fixo que se desloca do centro para o topo, tópicos revelados um a um e rolagem
vertical suave entre eles.

Este documento existe para orientar **qualquer agente (ou eu mesmo, no futuro)** a
alimentar o deck com conteúdo novo sem quebrar o comportamento ou o visual já ajustado.
Sempre que o usuário pedir para adicionar/editar slides, siga as regras abaixo.

## Onde mexer

Editar **apenas** o bloco `<div id="deck-source" class="hidden">...</div>` no `index.html`.
Todo o resto (CSS no `<head>`, o `<script>` no fim do `<body>`) é o "motor" da
apresentação — só deve ser tocado se o usuário pedir mudança de comportamento/visual,
não para adicionar conteúdo.

## Modelo de conteúdo (HTML autoral)

```html
<section>                          <!-- um capítulo (ramo do mapa) -->
  <article>
    <h1>Título do capítulo</h1>    <!-- repita o MESMO texto em todo article do capítulo -->
    <p>Parágrafo opcional, direto sob o h1 (sem h2) = introdução do capítulo.</p>
  </article>
  <article>
    <h1>Título do capítulo</h1>    <!-- repetição obrigatória -->
    <h2>Título do tópico</h2>      <!-- é o que sobe para o topo nesse passo -->
    <p>Texto do tópico...</p>
    <ul>
      <li>Item de lista</li>
      <li>Outro item</li>
    </ul>
    <pre><code>prompt de exemplo, se houver</code></pre>
  </article>
</section>
```

### Regras de estrutura

- **Cada `<section>` = um capítulo.** O `h1` do primeiro `<article>` da seção é usado
  como título do capítulo; repita o mesmo texto de `h1` em todos os `<article>` daquela
  `<section>` (o motor lê só o primeiro, mas mantenha consistente para clareza de quem
  for editar depois).
- **Cada `<article>` = um passo/tópico.** Um `<article>` sem `<h2>` mas com conteúdo
  (`<p>`, `<ul>` etc. direto após o `h1`) vira a **introdução do capítulo** — aparece
  como texto de abertura acima da lista de tópicos.
- **`<article>` só com `<h1>`** (sem `<h2>`, sem conteúdo) = capítulo "capa": mostra
  apenas o título sozinho em tela cheia, sem lista de tópicos nem passo de detalhe.
  Use isso para slides de transição/divisor (ex.: "Introdução ao uso de IA Gen").
- **`<article>` com `<h2>`** = um tópico navegável. Tudo que vier depois do `<h2>`
  dentro do `<article>` (`<p>`, `<ul>/<li>`, `<pre><code>`) é o bloco de conteúdo
  revelado quando esse tópico está ativo.
- Tags de conteúdo suportadas dentro de um tópico: `<p>` (texto/rótulo), `<ul>`/`<ol>`
  com `<li>` (vira bullet com ícone), `<pre><code>` (vira um cartão de código escuro
  com cabeçalho "PROMPT"). Não use outras tags de bloco — o CSS não foi desenhado pra
  elas.

### Sequência de exibição gerada automaticamente

Para cada capítulo, o motor monta, nesta ordem:

1. **Capa** — `h1` sozinho, centralizado em tela cheia.
2. **Lista** (só se houver introdução e/ou tópicos) — `h1` sobe e fica fixo no topo;
   abaixo aparecem a introdução (se houver) e a lista em prévia de todos os `<h2>` do
   capítulo, em cinza, ainda sem conteúdo.
3. **Um slide por tópico** — o `<h2>` daquele tópico assume o lugar do título fixo no
   topo (o `h1` some), e o conteúdo do tópico é revelado abaixo, item a item.
4. Ao acabar os tópicos, avançar leva à capa do próximo capítulo, repetindo o ciclo.

Não é preciso mexer no script para isso — é consequência direta de como você estrutura
`<section>`/`<article>`/`<h1>`/`<h2>` no bloco de conteúdo.

## Diretrizes de escrita (convenção usada até aqui)

- Idioma: português do Brasil.
- Cada `<p>` de tópico: **até ~30 palavras**, frase única, direta, sem enrolação.
- `<li>`: curto (uma linha/ideia), começa direto no substantivo/verbo, sem ponto final.
- Blocos `<pre><code>`: exemplos de prompt curtos (2–4 linhas), sem aspas tipográficas
  especiais — use `"` normais. Vira automaticamente um cartão escuro com o rótulo
  "PROMPT" no cabeçalho, não precisa estilizar manualmente.
- Evite `<h2>` duplicado dentro do mesmo capítulo (cada um vira um passo distinto).

## O que NÃO fazer ao adicionar conteúdo

- Não adicionar classes Tailwind de tamanho de fonte (`text-*`) ou de largura
  (`max-w-*`) em elementos do conteúdo — todo o dimensionamento de texto e largura já
  é controlado por CSS central (`clamp()` em `.outline-item`, `.detail-content p/li`,
  `.chapter-intro`, `.slide-content`). Adicionar classes manuais quebra a
  proporcionalidade responsiva.
- Não usar `<h3>` ou headings mais profundos — o motor só entende `h1` (capítulo) e
  `h2` (tópico).
- Não remover/alterar `id="deck-source"` nem a estrutura `section > article`.

## Referência rápida do visual/motor (para contexto, não para copiar manualmente)

- Crachá de autoria: só na primeira tela do deck (a capa inicial) e na tela final
  "Obrigado!" — não nas capas dos demais capítulos — aparece automaticamente, acima
  do título e alinhada à esquerda, a foto redonda, grande
  (`clamp(5rem, 10vw, 7.5rem)`, `https://avatars.githubusercontent.com/u/4398869?v=4`)
  e o nome "Prof. Ermeson Silva" (`#title-badge` dentro de `#title-wrap`, controlado
  por JS: visível apenas quando `current === 0` ou é o último slide). É padrão do
  motor — não precisa (e não deve) ser adicionado manualmente no `#deck-source`.
- Tela final "Obrigado!": além do crachá de autoria, mostra também o e-mail
  `ermeson.silva@fapce.edu.br` logo abaixo do título (`#title-email`), visível apenas
  nesse último slide. Essa tela é sempre adicionada pelo motor (ver capítulo final
  fixo no script) — também não é conteúdo do `#deck-source`.
- Fonte: Inter (Google Fonts), carregada no `<head>`.
- Marcador de lista: ícone SVG "quadrado arredondado + chevron" (`markerSVG` no
  script), reaproveitado tanto na lista-prévia (opacidade menor) quanto nos bullets do
  tópico ativo (opacidade maior).
- Largura do conteúdo: `.slide-content { width: 90%; }`.
- Navegação inferior: 4 botões (`skip-prev-btn`, `prev-step-btn`, `next-step-btn`,
  `skip-next-btn`) — os do meio andam um passo, os das pontas pulam para a capa do
  capítulo anterior/seguinte. Não há mais setas fixas nas laterais da tela.
- Selo vertical fixo no canto inferior direito (`#watermark`): "Inovação e Tecnologia
  em Saúde", cinza (`#a3a3a3`), sem letter-spacing.
- Teclado: `←`/`→`/`↑`/`↓`/espaço navegam; `Home`/`End` vão ao primeiro/último slide.
  Roda do mouse e swipe (touch) também funcionam.

## Checklist ao receber um pedido de novo conteúdo

1. Identificar quantos capítulos (`<section>`) o usuário quer.
2. Para cada capítulo: decidir se é capa-only, tem introdução (parágrafo sob o `h1`)
   e/ou lista de tópicos (`h2` + conteúdo).
3. Escrever os `<article>` seguindo exatamente o modelo acima, repetindo o `h1`.
4. Manter parágrafos dentro do limite de palavras pedido (ou ~30 palavras se não for
   especificado).
5. Inserir apenas dentro de `#deck-source` — não tocar CSS/JS.
6. Abrir o arquivo no navegador para conferir antes de reportar como concluído.
