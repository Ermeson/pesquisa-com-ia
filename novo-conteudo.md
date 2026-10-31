# **Fluxo de Análise de Conteúdo com Gemini Notebook**

## **1\. Definição dos objetivos**

* Quais os objetivos da análise?  
  * Uma análise precisa partir de um objetivo de busca. O que gostaria de encontrar na literatura?  
  * Ex:
    * Identificar os principais desafios do uso da IA Generativa no ensino médico;  
    * Quais são os principais benefícios do uso de IA Generativa na formação em medicina?
    * Quais são os principais autores que tratam deste tema?
    * Quais são os temas de pesquisa que permanecem em aberto?  
    * Em qual medida existem métodos para ensino de IA na graduação?

## **2\. Organização do corpus**

* Inicie clusterizando o corpus de análise  
  * Separe os arquivos que serão analisados e renomeie-os com um padrão. Ex: artigo-1.pdf, artigo-2.pdf, etc…Isso vai ajudar no rastreio da informação.

## **3\. Criação dos códigos**

* Com base nos objetivos da análise, estabeleça os códigos de análise. Você pode usar qualquer ferramenta de IA que preferir: Claude, Gemini, ChatGPT, etc…  
  * `Prompt: Você é um assistente de pesquisa e vai apoiar uma análise de conteúdo segundo Bardin. Com base nos **objetivos da análise** a seguir e nos artigos em PDF fornecidos, proponha até **20 códigos** para orientar a análise do corpus. Organize o resultado em uma tabela com as colunas **Categoria**, **Código** e **Descrição do código**. As categorias e os códigos devem estar alinhados aos objetivos e fundamentados no conteúdo das fontes. Regra: não acrescente informações que não estejam nos artigos. Os objetivos da análise são: [informe os objetivos desta análise]`

## **4\. Análise dos materiais**

* Anexe os materiais ao Gemini Notebook e crie um prompt de contextualização.  
  * Prompt: Os arquivos anexados são o corpus documental desta pesquisa para uma \*\*análise de conteúdo segundo Bardin\*\*. Leia-os como um conjunto de artigos científicos e use apenas as informações presentes nesses materiais. Considere os objetivos da análise e os códigos definidos anteriormente como referência para as próximas etapas. Preserve o sentido original dos textos, diferencie os artigos quando necessário e indique a fonte usada para cada informação. Se algo não estiver claro ou não aparecer nos arquivos, informe isso em vez de inferir. Nunca faça inferências. Quando não houver a informação, informe na resposta.  
* Conduza a primeira etapa de análise. Faça por categorias.  
  * Lembre-se de sempre rastrear: Afirmação, Evidência, Autor, Documento.  
  * Prompt: Conduza a primeira etapa da análise de conteúdo segundo Bardin, examinando os artigos com base nos códigos definidos anteriormente. Analise \*\*um código por vez\*\*, começando por \*\*\[nome do código\]\*\*. Identifique trechos pertinentes e apresente cada achado em uma tabela com as colunas \*\*Afirmação\*\*, \*\*Evidência\*\* (trecho ou síntese fiel), \*\*Autor-ano\*\* e \*\*Documento\*\* (nome do arquivo). Relacione cada afirmação ao código, preserve o contexto do trecho e não infira informações que não estejam nas fontes. Se não encontrar evidências para o código, informe isso claramente.  
* Fundamente a discussão.  
  * Em um arquivo separado, organize os achados.

## **5\. Técnicas para garantir rigor**

* Encontre lacunas na literatura.  
  * Prompt: Com base nos artigos do corpus, identifique lacunas na literatura relacionadas aos objetivos da análise. Considere temas pouco explorados ou ausentes, limitações apontadas pelos autores e questões que permanecem sem resposta. Para cada lacuna, apresente uma tabela com Lacuna identificada, Justificativa baseada no corpus, Evidência, Autor-ano e Documento (nome do arquivo). Diferencie lacunas explicitamente apontadas pelos autores das observadas a partir do conjunto de artigos. Use apenas as fontes fornecidas e não trate ausência de informação no corpus como ausência na literatura em geral.  
* Principais métodos do *corpus*.  
  * Prompt: Com base nos artigos, identifique os métodos utilizados e agrupe os estudos que adotam métodos semelhantes. Apresente uma tabela com Grupo de métodos, Descrição, Estudos incluídos (autor-ano) e Evidência (trecho ou síntese fiel), indicando também o Documento (nome do arquivo) de cada estudo. Preserve as diferenças entre métodos semelhantes, use apenas informações do corpus e sinalize quando um estudo não informar claramente seu método.  
* Limitações nos estudos.  
  * Prompt: Com base nos artigos do corpus, identifique as limitações de cada estudo. Registre apenas limitações mencionadas pelos autores ou claramente sustentadas pelo texto, sem inferências. Apresente uma tabela com Limitação, Tipo (declarada pelos autores ou identificada no texto), Evidência, Autor-ano e Documento (nome do arquivo). Se um artigo não mencionar limitações, indique isso claramente.  
* Pesquisas futuras (agenda de pesquisa).  
  * Prompt: Com base nos artigos do corpus, identifique as pesquisas futuras sugeridas pelos autores e organize-as em uma agenda de pesquisa. Agrupe sugestões semelhantes e apresente uma tabela com \*\*Tema ou questão de pesquisa\*\*, \*\*Pesquisa futura sugerida\*\*, \*\*Justificativa no corpus\*\*, \*\*Autor-ano\*\* e \*\*Documento\*\* (nome do arquivo). Diferencie recomendações explícitas dos autores de possibilidades sintetizadas a partir do conjunto de estudos. Use apenas informações das fontes, sem apresentar inferências como recomendações dos autores.

 **6\. Retroalimentar o método**

* Adicionar estas ferramentas e técnicas a seção de método.  
  * Exemplo: A análise de conteúdo foi conduzida com apoio do Gemini Notebook, utilizado para organizar e examinar o corpus de artigos científicos. Inicialmente, os documentos foram inseridos na plataforma e contextualizados como fontes da pesquisa, tendo como referência os objetivos da análise. Em seguida, foram elaboradas categorias e códigos alinhados a esses objetivos. O conteúdo dos artigos foi analisado por código, com registro das afirmações, evidências textuais, autoria e documento de origem. Também foram sintetizadas as lacunas apontadas ou observáveis no corpus, os métodos empregados, as limitações dos estudos e as sugestões de pesquisas futuras. As respostas geradas foram conferidas com os documentos originais, preservando-se a rastreabilidade das evidências e distinguindo as informações explicitamente declaradas pelos autores das sínteses produzidas a partir do conjunto de estudos. Maiores detalhes estão disponibilizados no Termo de Declaração de Uso de IA, no Anexo A.

**7\. Realize um polimento no texto**

* Cuidado com o texto truncado/blocado.  
  * O fluxo de análise deve ser cadenciado, com progressão lógica entre os argumentos e as afirmações. **Evite texto copiado e colado, sob qualquer hipótese.**
