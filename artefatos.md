# Artefatos com IA Generativa

## Agentes de IA

### O que são

Sistemas de IA configurados para perseguir um objetivo, interpretar informações e executar uma sequência de etapas ou ações. Podem usar ferramentas e consultar fontes, com supervisão humana adequada.

### Exemplos em Medicina

- Agente que organiza artigos fornecidos pelo docente e destaca métodos, resultados e limitações.
- Agente tutor que conduz uma discussão de caso clínico por etapas, fazendo perguntas ao estudante.
- Agente que transforma um protocolo de aula em um roteiro de revisão, sujeito à conferência do professor.

### Cuidado

Um agente pode produzir informações incorretas. Verifique fontes, conteúdo clínico e adequação pedagógica antes de usar.

## Skills de IA

### O que são

Instruções e recursos reutilizáveis que ensinam um sistema de IA a realizar uma tarefa de modo consistente. Podem definir etapas, critérios, formato de saída e materiais de referência.

### Exemplos em Medicina

- Skill para estruturar resumos de artigos com objetivo, método, resultados e limitações.
- Skill para criar questões de múltipla escolha alinhadas a objetivos de aprendizagem e explicar cada alternativa.
- Skill para padronizar referências bibliográficas conforme a norma solicitada.

### Diferença prática

Uma skill descreve como executar uma tarefa; um agente pode usar uma ou mais skills para cumprir um objetivo em várias etapas.

## Artefatos

### Criar referência ABNT

**Ideia central:** A partir de uma entrada, como DOI, URL ou dados bibliográficos, converte os dados para uma referência no padrão ABNT solicitado.

**Ferramenta:** Claude

**Prompt:**

```
Crie uma skill para Claude e Gemini que transforme informações bibliográficas em referências no padrão ABNT. Ela deve aceitar dados completos, incompletos ou fragmentados, como trechos de texto, anotações, URLs, DOI, fotos transcritas ou combinações desses elementos.

A skill deve gerar, para cada obra:
1. Citação no texto — a forma de chamada correspondente, incluindo autor e ano e, quando aplicável, página.
2. Referência completa — a entrada formatada para a lista de referências ao final do artigo.
Regras de funcionamento
- Identifique o tipo de fonte: livro, capítulo, artigo científico, trabalho acadêmico, página da web, legislação, norma, evento, relatório, entre outros.
- Extraia e organize os dados disponíveis: autoria, título, edição, local, editora, ano, periódico, volume, número, páginas, DOI, URL e data de acesso.
- Aplique as regras ABNT vigentes e compatíveis com o tipo de fonte. Não invente dados ausentes.
- Quando a informação não for suficiente para formatar com segurança, indique o que está faltando e faça perguntas objetivas. Se possível, apresente uma versão provisória claramente identificada.
- Preserve nomes, títulos, datas e demais dados fornecidos. Sinalize possíveis inconsistências em vez de corrigi-las silenciosamente.
- Para citações diretas, use a página informada. Se ela não tiver sido fornecida, não a invente; indique que a página precisa ser confirmada.
- Se houver DOI ou URL, inclua-o conforme aplicável. Informe a data de acesso quando necessária e fornecida; se estiver faltando, solicite-a em vez de presumir.
- Se não for possível confirmar qual norma ou edição da ABNT deve ser seguida, declare a edição adotada e peça confirmação quando isso puder alterar o resultado.
Formato da resposta
Para cada fonte, responda assim:

Citação no texto:
(SOBRENOME, ano, p. x)
ou a forma narrativa equivalente, conforme o caso.

Referência:
Referência formatada conforme a ABNT.

Dados faltantes ou observações:
Liste apenas o que precisa ser confirmado. Se estiver completo, escreva "Nenhum dado pendente".

Ao final, apresente também uma lista consolidada de referências, em ordem alfabética, pronta para inserir no artigo.

Exemplos de citação no texto
Use os exemplos abaixo como referência e adapte-os aos dados disponíveis e às regras ABNT aplicáveis:
- Um autor, citação entre parênteses: (SILVA, 2020)
- Um autor, citação narrativa: Silva (2020) afirma que...
- Dois autores: (SILVA; SOUZA, 2020)
  Na forma narrativa: Silva e Souza (2020)...
- Três autores: (SILVA; SOUZA; PEREIRA, 2020)
  Na forma narrativa: Silva, Souza e Pereira (2020)...
- Quatro ou mais autores: (SILVA et al., 2020)
  Na forma narrativa: Silva et al. (2020)...
- Citação direta com página: (SILVA, 2020, p. 35)
  Na forma narrativa: Silva (2020, p. 35) afirma que...
- Citação de página sem numeração: (SILVA, 2020, n. p.) — use apenas quando a fonte não tiver páginas numeradas e a norma aplicável permitir essa indicação.
- Mesmo autor e mesmo ano: (SILVA, 2020a) e (SILVA, 2020b) — use letras para distinguir obras diferentes do mesmo autor publicadas no mesmo ano, de modo consistente entre as citações e a lista de referências.
- Citação de uma obra mencionada por outra: (AUTOR ORIGINAL, ano, apud AUTOR CONSULTADO, ano) — use apud somente quando a obra original não tiver sido consultada diretamente; inclua na lista de referências a obra efetivamente consultada.
- Instituição como autora: (ORGANIZAÇÃO MUNDIAL DA SAÚDE, 2022) ou, após apresentar a sigla, (OMS, 2022), desde que a identificação da instituição fique clara.
- Mais de uma fonte na mesma citação: (SILVA, 2020; SOUZA, 2022).
Os exemplos são ilustrativos. Não deduza páginas, anos, autoria ou letras de ordenação que não estejam nos dados. Adapte a pontuação e a chamada ao tipo de citação, à norma ABNT vigente e às exigências editoriais informadas pelo usuário.
```

### Criar conclusão

**Ideia central:** A partir de um texto, sintetiza os principais pontos do artigo em uma proposta de conclusão, sem acrescentar afirmações que não estejam apoiadas pelo texto.

**Ferramenta:** Claude

**Prompt:**

```
## Prompt

Você é um assistente de redação científica. Sua tarefa é analisar o conteúdo integral de um artigo e ajudar a elaborar sua conclusão, respeitando rigorosamente o que está documentado no próprio texto.

### Objetivo

A partir do artigo fornecido:

1. identificar o tipo de artigo e seus objetivos;
2. fazer uma triagem dos pontos relevantes para a conclusão;
3. propor um roteiro lógico de conclusão, adequado ao tipo de artigo;
4. **aguardar a aprovação do roteiro**;
5. somente após a aprovação, redigir a conclusão com **300 a 600 palavras**.

### Regras de integridade científica

- Baseie toda afirmação exclusivamente no conteúdo fornecido do artigo.
- Não invente, complete, extrapole ou presuma resultados, métodos, implicações, limitações, referências ou dados que não estejam claramente sustentados pelo texto.
- Diferencie achados observados, interpretações dos autores e implicações propostas.
- Não atribua causalidade, generalize para outras populações ou contextos nem declare novidade ou relevância clínica, teórica ou prática sem apoio explícito no artigo.
- Se houver lacunas, inconsistências ou informações insuficientes, sinalize-as e não as preencha por inferência.
- Não introduza informações novas na conclusão. Não crie citações ou referências.
- Preserve o grau de certeza e as ressalvas presentes no artigo. Se o texto não sustentar uma afirmação, omita-a.

### Etapa 1 — Triagem e proposta de roteiro

Leia o artigo integralmente antes de propor o roteiro. Identifique, com base no texto:

- tipo de artigo (por exemplo, estudo empírico, revisão sistemática, estudo metodológico, ensaio teórico, relato de caso ou outro);
- pergunta, objetivo ou hipótese;
- desenho, abordagem ou escopo, quando relevante;
- principais achados ou argumentos;
- contribuição explicitamente sustentada;
- implicações que o artigo apresenta ou permite afirmar com segurança;
- limitações reconhecidas pelos autores e limites de interpretação;
- lacunas de informação que impeçam uma conclusão mais específica.

Em seguida, apresente:

**A. Síntese da triagem**
Liste os pontos acima de forma concisa. Para cada ponto, indique a seção ou trecho do artigo que o sustenta, sempre que possível. Não transforme interpretação em fato.

**B. Roteiro proposto para a conclusão**
Apresente uma sequência de tópicos adequada ao tipo de artigo. Considere, conforme aplicável:

1. resposta ao objetivo, pergunta ou tese;
2. síntese dos achados ou argumentos centrais;
3. contribuição para o campo, limitada ao que o artigo sustenta;
4. implicações pertinentes ao tipo e ao escopo do estudo;
5. limitações ou ressalvas necessárias para interpretar os resultados;
6. próximo passo de pesquisa, apenas se estiver justificado pelo artigo.

Explique brevemente por que essa ordem é apropriada para o tipo de artigo identificado. Não redija ainda a conclusão.

**C. Pontos que exigem confirmação ou não podem ser afirmados**
Indique ambiguidades, contradições ou alegações que não estejam suficientemente fundamentadas. Não resolva essas questões inventando conteúdo.

Ao final, peça ao usuário que aprove ou ajuste o roteiro. **Pare nessa etapa e aguarde a resposta.**

### Etapa 2 — Redação após aprovação

Somente depois de o usuário aprovar o roteiro:

- redija a conclusão em **português**, salvo se o usuário solicitar outro idioma;
- produza entre **300 e 600 palavras**;
- siga o roteiro aprovado e mantenha a estrutura adequada ao tipo de artigo;
- use linguagem acadêmica clara, precisa e proporcional às evidências;
- sintetize, sem repetir extensamente resultados, métodos ou discussão;
- não inclua títulos ou subtítulos, a menos que o usuário ou as normas do journal solicitem;
- não acrescente fatos, explicações, recomendações, limitações ou perspectivas que não estejam ancorados no artigo;
- ao final, informe o número aproximado de palavras.

Se, após a aprovação, perceber que o roteiro depende de uma afirmação sem respaldo no artigo, não a inclua: explique brevemente a lacuna e redija apenas o que estiver sustentado.
```

### Criar resumo expandido

**Ideia central:** A partir do artigo, produz um resumo mais detalhado, organizado conforme as seções e os critérios definidos para a atividade.

**Ferramenta:** Claude

**Prompt:**

```
### Prompt para elaborar o resumo expandido

> Você receberá em anexo o texto completo de um artigo científico. Sua tarefa é identificar a estrutura, o tipo de estudo e o conteúdo do artigo e, com base exclusivamente nele, elaborar um resumo expandido para submissão a um evento científico.
>
> **Fidelidade ao original**
>
> - Use somente informações, dados, interpretações, argumentos, fontes e citações presentes no artigo enviado. Não acrescente conhecimento externo, conclusões novas, referências ou detalhes presumidos.
> - Preserve o sentido dos argumentos e das conclusões. Não atribua aos autores afirmações que não fizeram.
> - Mantenha as citações associadas às ideias correspondentes e preserve as fontes usadas no original.
> - Se uma informação necessária não estiver no artigo, não a invente. Omita-a ou indique brevemente que ela não foi informada, conforme a pertinência para a seção.
> - Não crie resultados, procedimentos, critérios de seleção, limitações ou implicações que não estejam descritos no artigo.
>
> **Leitura e adaptação**
>
> 1. Antes de redigir, identifique as seções do artigo e localize nelas o objetivo, a fundamentação relevante, os procedimentos metodológicos, os resultados ou argumentos centrais, as conclusões e as referências.
> 2. Identifique o tipo de trabalho — por exemplo, pesquisa empírica, estudo de caso, ensaio teórico, revisão narrativa, revisão integrativa ou revisão sistemática — usando somente evidências do próprio artigo.
> 3. Adapte a apresentação ao tipo identificado. Por exemplo, se for uma revisão sistemática, deixe claro esse caráter e sintetize os procedimentos de busca, seleção e análise **somente quando estiverem descritos no texto**. Para estudos empíricos, priorize o delineamento, os participantes ou materiais, os procedimentos e os principais resultados informados.
> 4. Reorganize e sintetize o conteúdo para atender às seções abaixo. Não force uma correspondência literal entre os títulos das seções originais e os do resumo expandido; distribua cada conteúdo onde fizer mais sentido, sem alterar seu significado.
>
> **Estrutura obrigatória**
>
> - **Título do trabalho**
> - **Nome dos autores**
> - **Resumo** — parágrafo único, com no máximo **70 palavras**. Apresente objetivo, tipo de estudo ou método, conteúdo ou resultado central e conclusão, conforme disponíveis no artigo.
> - **Palavras-chave** — de **3 a 5**, selecionadas entre os conceitos centrais do artigo. Não introduza temas ausentes no original.
> - **Introdução** — contextualize o tema com base na argumentação e nas fontes do artigo; apresente a questão ou problema e o objetivo.
> - **Método** — descreva o tipo de estudo e os procedimentos relatados no original. Se o artigo não apresentar uma seção metodológica formal, não invente um método: informe, de modo conciso e fiel, como o trabalho foi conduzido segundo o que está efetivamente descrito.
> - **Discussão** — sintetize e articule os argumentos, resultados e interpretações centrais, preservando as citações e as relações entre as evidências e as conclusões dos autores.
> - **Considerações Finais** — recupere as conclusões efetivamente apresentadas no artigo e, se houver, suas limitações ou recomendações. Não extrapole os achados.
> - **Referências** — inclua as fontes citadas no resumo expandido, mantendo os dados bibliográficos disponíveis no original e formatando-as segundo a **ABNT NBR 6023**. Não complete dados bibliográficos por pesquisa externa nem invente elementos ausentes.
>
> **Limite e distribuição**
>
> O documento completo, **incluindo as referências**, deve caber em no máximo **5 páginas**. Como a paginação depende da formatação do evento, produza um texto conciso, com margem de segurança, e informe ao final que a contagem de páginas precisa ser conferida no modelo de formatação da submissão.
>
> Distribua o espaço de forma proporcional à relevância e ao conteúdo do artigo, usando como orientação — e não como cotas rígidas — a seguinte divisão do espaço disponível para o corpo do texto:
>
> - **Introdução:** cerca de 20%
> - **Método:** cerca de 15%
> - **Discussão:** cerca de 45%
> - **Considerações Finais:** cerca de 20%
>
> Considere o espaço ocupado pelo título, autores, resumo, palavras-chave e referências ao ajustar essas proporções. Dê mais espaço à seção que concentra a contribuição principal do artigo, sem deixar de apresentar método e conclusões. Em revisões sistemáticas ou outros trabalhos com procedimentos específicos, reserve espaço suficiente para tornar esses procedimentos compreensíveis, mantendo a síntese dentro do limite total.
>
> **Verificação antes de entregar**
>
> - Confira que o resumo tem até 70 palavras e é um único parágrafo.
> - Confira que há de 3 a 5 palavras-chave.
> - Confira se cada afirmação pode ser sustentada pelo artigo original e se as citações estão junto às ideias correspondentes.
> - Confira se o método e o tipo de trabalho foram representados sem inferências indevidas.
> - Confira se as referências listadas correspondem às fontes citadas e se não foram acrescentadas fontes externas.
> - Reduza repetições e detalhes secundários para manter o documento dentro do limite de 5 páginas, sem eliminar elementos essenciais dos argumentos.
>
> Apresente somente o resumo expandido concluído, com os títulos das seções indicados. Não inclua comentários sobre seu processo de análise.
```

### Criar flashcards

**Ideia central:** A partir do conteúdo, cria cartões interativos de pergunta e resposta para apoiar a revisão ativa.

**Ferramenta:** Claude

**Prompt:**

```
---
name: flashcards-estudo
description: Transforma qualquer conteúdo (anexos como PDF, DOCX, PPTX, TXT, imagens, links ou texto colado) em flashcards interativos de estudo, entregues como uma página HTML única e estática em que cada cartão vira com animação para revelar a resposta. Use esta skill SEMPRE que o usuário pedir flashcards, cartões de estudo, cartões de memorização, "fichas de revisão", revisão ativa, repetição espaçada, "me ajude a estudar esse material", "transforme esse PDF/link em cartões", ou anexar um material e pedir para estudar, memorizar ou revisar o conteúdo, mesmo que não use a palavra "flashcard". A quantidade padrão é 5 cartões, caso o usuário não informe.
---

# Flashcards de Estudo

Converte um material (arquivo, link ou texto) em um baralho de flashcards interativo, em um único arquivo HTML que funciona offline, sem dependências externas.

Por que isso importa: flashcards funcionam por recuperação ativa. O estudante tenta lembrar antes de ver a resposta, e isso fixa o conteúdo melhor do que reler. Portanto, a qualidade de cada cartão (uma ideia por cartão, pergunta que exige lembrar algo) pesa mais do que a quantidade.

## Fluxo

### 1. Identificar a entrada
- **Anexos**: leia o conteúdo com a ferramenta adequada ao formato (PDF, DOCX, PPTX, planilhas, imagens). Se o conteúdo já estiver visível no contexto, use-o diretamente.
- **Links**: busque o conteúdo da página com WebFetch. Se o link exigir login ou falhar, informe ao usuário e peça o texto ou o arquivo.
- **Texto colado**: use como está.
- **Várias fontes**: combine, evitando cartões duplicados.
- **Sem material algum**: peça o conteúdo em uma frase curta. Não invente o conteúdo a partir de conhecimento geral, pois os cartões devem refletir o material que o usuário quer estudar.

### 2. Definir a quantidade
- Se o usuário informou um número ("faça 12 flashcards"), use exatamente esse número.
- Se não informou, crie **5**.
- Se o número pedido for maior do que o material sustenta, entregue o que o conteúdo comporta com qualidade e avise em uma linha, em vez de encher com cartões repetitivos.

### 3. Escolher o que vira cartão
Se o usuário indicou o foco (um capítulo, um tema, "só as definições"), siga o que ele pediu. Caso contrário, analise o material e selecione as informações mais importantes, priorizando:
1. Conceitos centrais e definições-chave
2. Relações de causa e efeito, e porquês
3. Distinções entre conceitos facilmente confundidos
4. Etapas, classificações ou modelos (um cartão por etapa ou critério central, não o modelo inteiro de uma vez)
5. Dados, datas, nomes ou fórmulas que o material trata como essenciais

Evite detalhes periféricos, exemplos anedóticos e informações que dependem de contexto visual que o cartão não carrega. Distribua os cartões pelo material, sem concentrar tudo no início.

### 4. Escrever os cartões
Cada cartão tem:
- **tipo**: rótulo curto no topo da frente (ex.: "Conceito", "Pergunta", "Definição", "Comparação", "Aplicação")
- **frente**: uma pergunta, um termo ou um conceito a ser lembrado
- **verso**: a resposta ou o complemento do conceito

Diretrizes de redação:
- Uma ideia por cartão. Se a resposta precisa de um parágrafo longo, divida em dois cartões.
- A frente deve provocar recuperação: "Qual é a diferença entre X e Y?" ensina mais do que "Fale sobre X".
- O verso deve ser direto, em até 2 a 4 frases, com a informação suficiente para o estudante conferir se acertou. Pode incluir uma pista ou um exemplo curto quando ajudar a compreensão.
- Escreva no idioma do material (ou do usuário, se o material for misto), com linguagem clara e fiel à fonte.
- Não use markup nos textos. O template insere o texto como texto puro, o que evita problemas de segurança e de escape.

## Verificação rápida antes de entregar
- O número de cartões bate com o pedido (ou 5 por padrão)?
- Cada cartão tem frente, verso e tipo preenchidos?
- Nenhum cartão repete outro ou depende de contexto que ele não traz?
- O HTML abre sem erro de script (JSON válido, sem placeholders restantes)?

## Exemplo

**Pedido:** "Anexei o capítulo sobre redes neurais. Faça 3 flashcards."

**Resultado esperado:** um `flashcards-redes-neurais.html` com 3 cartões, por exemplo:
- Conceito — frente: "O que faz a função de ativação em um neurônio artificial?" / verso: "Introduz não linearidade na saída do neurônio, permitindo que a rede aprenda relações que uma combinação linear não consegue representar."
- Comparação — frente: "Qual a diferença entre época e lote (batch) no treinamento?" / verso: "Uma época é uma passagem completa por todos os dados de treino; um lote é o subconjunto usado para cada atualização dos pesos dentro da época."
- Pergunta — frente: "Para que serve o backpropagation?" / verso: "Calcula o gradiente do erro em relação a cada peso, propagando-o da saída para as camadas anteriores, para que o otimizador ajuste os pesos."
```

### Criar caso clínico

**Ideia central:** A partir de um conteúdo, cria um caso interativo em etapas, com perguntas para o estudante raciocinar e receber feedback.

**Ferramenta:** Gemini

**Prompt:**

```
Com base no conteúdo fornecido, crie um caso clínico interativo dividido em etapas (anamnese, exame físico, hipóteses diagnósticas, exames complementares e conduta). A cada etapa, apresente uma pergunta para que eu, como estudante, raciocine antes de avançar, e só então revele a resposta esperada com uma breve justificativa clínica baseada no material fornecido. Use apenas informações compatíveis com o conteúdo fornecido e com a prática clínica reconhecida, sinalizando quando estiver generalizando além do material. Conteúdo de referência: [cole ou anexe o material]
```

### Criar questões

**Ideia central:** A partir de uma base de conteúdo, cria questões no estilo ENAMED, com alternativas, gabarito e justificativas, de acordo com os objetivos de aprendizagem.

**Ferramenta:** Claude

**Prompt:**

```
Você é um especialista em elaboração de itens de avaliação de aprendizagem de alto nível pedagógico, com vasta experiência na confecção de provas nos padrões ENADE. Sua tarefa é criar 5 questões inéditas e de alta complexidade com base exclusivamente no material fornecido em anexo.

### REGRAS DE ELABORAÇÃO E RIGOR PEDAGÓGICO:

1. Estrutura do Enunciado (Texto-Base + Situação-Problema):
   - Proibido perguntar sobre texto puramente: Evite perguntas diretas sobre "segundo o autor" ou "de acordo com o texto". O artigo deve servir de embasamento conceitual.
   - Caso Clínico ou Situação-Problema Prática: Apresente um cenário fictício realista (estudo de caso, dados de pesquisa, dilema profissional ou tomada de decisão ética/clínica/gestão) em que o aluno precise APLICAR os conceitos do artigo para resolver a situação.
   - Comando Claro: O comando final do enunciado deve exigir raciocínio crítico, análise de causa/efeito, diagnóstico diferencial ou escolha de conduta adequada.
2. Engenharia de Distratores e Resposta Correta:
   - Sem Pistas Lógicas: Evite termos absolutos ("sempre", "nunca", "exclusivamente") ou diferenças de extensão/estilo entre as alternativas que deem pistas da resposta certa.
   - Distratores Plausíveis e Fundamentados: Todos os distratores (alternativas erradas) devem representar equívocos conceituais comuns, diagnósticos incorretos porém verossímeis, ou condutas inadequadas frequentemente adotadas na prática.
   - Isomorfismo: Todas as opções (A, B, C, D, E) devem ter tamanho, estrutura gramatical e tom de complexidade idênticos.
3. Gabarito Justificado e Evidência:
   - Para cada questão, inclua uma justificativa detalhada explicando por que a alternativa correta é a certa e por que cada um dos distratores está incorreto.
   - No campo "evidencia", extraia o trecho literal (citação exata) do artigo que fundamenta a conduta/conceito abordado na questão.

### FORMATO DE SAÍDA (JSON):

Retorne exclusivamente um JSON com as questões, seguindo rigorosamente a estrutura abaixo:
{
"$schema": "http://json-schema.org/draft-07/schema#",
"titulo_prova": "Exemplo de Avaliação",
"materia": "Conhecimentos Gerais",
"total_questoes": 1,
"questoes": [
{
"id": 1,
"enunciado": "Qual é o planeta do Sistema Solar conhecido como o 'Planeta Vermelho'?",
"alternativas": [
{
"letra": "A",
"texto": "Vênus"
},
{
"letra": "B",
"texto": "Júpiter"
},
{
"letra": "C",
"texto": "Marte"
},
{
"letra": "D",
"texto": "Saturno"
},
{
"letra": "E",
"texto": "Mercúrio"
}
],
"resposta_correta": "C",
"evidencia": "Marte possui uma coloração avermelhada devido à grande quantidade de óxido de ferro (ferrugem) presente em sua superfície."
}
]
}
```

### Criar app de quiz

**Ideia central:** Um aplicativo que recebe questões no estilo ENAMED para estudo, permite respondê-las e apresenta feedback.

**Ferramenta:** Lovable

**Prompt:**

```
Um aplicativo web de quiz interativo. Ele deve mostrar uma questão por vez e aguardar o usuário selecionar a questão e clicar em checar resposta. Neste momento, o aplicativo fará a correção da questão e mostrará o campo "evidência" que justifica de onde a questão foi retirada. Em seguida, o usuário pode ir para a próxima questão.
A arquitetura do aplicativo: na tela inicial do aplicativo, o usuário deve carregar o arquivo JSON que contém as questões e monta no front-end o quiz. Isso deve permitir que o usuário use o aplicativo com várias questões diferentes. Para cada carregamento, o sistema deve embaralhar as questões e alternativas, mas nunca errar a alternativa correta que está no documento. Ao final, a partir da quantidade de questões disponíveis e corretas, o app deve calcular o percentual de acerto do usuário. Use uma interface clean.

Este é o formato como as questões serão carregadas via JSON no sistema, adeque-o a receber múltiplas questões em um mesmo arquivo:
{
"$schema": "http://json-schema.org/draft-07/schema#",
"titulo_prova": "Exemplo de Avaliação",
"materia": "Conhecimentos Gerais",
"total_questoes": 1,
"questoes": [
{
"id": 1,
"enunciado": "Qual é o planeta do Sistema Solar conhecido como o 'Planeta Vermelho'?",
"alternativas": [
{
"letra": "A",
"texto": "Vênus"
},
{
"letra": "B",
"texto": "Júpiter"
},
{
"letra": "C",
"texto": "Marte"
},
{
"letra": "D",
"texto": "Saturno"
},
{
"letra": "E",
"texto": "Mercúrio"
}
],
"resposta_correta": "C",
"evidencia": "Marte possui uma coloração avermelhada devido à grande quantidade de óxido de ferro (ferrugem) presente em sua superfície."
}
]
}
```
