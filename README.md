# Desafio processo seletivo Coopercarga :truck:

### 1 - Qual a saída do algoritmo?
  A saída do algoritmo é uma lista de números primos, ordenadas em páginas, cada uma com 4 colunas de 50 filas. Os números dentro de uma página estão organizados de forma crescente nas colunas.

### 2 - Você julga que este código é limpo? Aponte quais erros o programador cometeu que prejudicaram a qualidade do código. Obs: não existe nenhum bug escondido no código.
  Não, o programador cometeu uma série de erros:
  - Usar nomes confusos e nada intuitivos para a classe e as variáveis, tornando a leitura e compreensão excessivamente complicadas;
  - A função main é grande e possui diversas responsabilidades, atrapalhando o entendimento e escalabilidade do código;
  - Possui código repetitivo ou desnecessário, mudando valores de variáveis logo após declara-las.

### 3 - Refatore o código do arquivo utilizando conceitos de Clean Code, de maneira que o código se torne mais limpo, legível e de fácil manutenção.
  A [refatoração](https://github.com/iskandarzero/desafio-coopercarga/blob/main/main.js) foi realizada no arquivo main.js.

### 4 - Explique como o conceito de middlewares no Express.js pode ser utilizado para evitar repetição de código.
  Muitas vezes em uma aplicação nós precisamos verificar erros ou checar, por exemplo, se uma requisição possui um token de verificação. Esse processo geralmente acontece em diferentes rotas ou camadas da aplicação, e para evitar ter que repetir código em toda implementação de rota, podemos usar um middleware para realizar essa checagem.

### 5 - Tendo em vista duas abordagens de backend: uma utilizando um ORM (como Prisma e Sequelize) e outra utilizando apenas um query builder (como o Knex), quais as vantagens e desvantagens de cada abordagem?
  Utilizando um ORM temos as seguintes vantagens:
  - Utilizar fundamentos do POO na API, como polimorfismo;
  - Provê maior abstração em comparação a um query builder;
  - Previne o código contra erros de digitação;
  - Se distancia dos comandos SQL, realizando mais ações com menos código;
  - Facilita o processo de mock de objetos para testes.

  Utilizando um query builder temos as seguintes vantagens:
  - Realizar operações mais complexas;
  - Permite criar queries que funcionam independente do sistema de banco de dados SQL;
  - Diferente do SQL normalmente, permite adicionar palavras-chave do SQL sem uma ordem específica.

### 6 - Faça uma query em SQL que traga em cada linha o nome de jogadores que se enfrentaram mais de duas vezes, onde em cada partida a soma dos pontos foi maior que 30 e a duração do jogo foi maior que 90 minutos. Não podem haver resultados repetidos.
  ```
  SELECT DISTINCT
  CASE WHEN J1.id < J2.id THEN J1.nome ELSE J2.nome END AS "Jogador 1",
  CASE WHEN J1.id < J2.id THEN J2.nome ELSE J1.nome END AS "Jogador 2"
  FROM Partidas P1
  JOIN Jogador J1 ON P1.jogador1_id = J1.id
  JOIN Jogador J2 ON P1.jogador2_id = J2.id
  WHERE P1.pontos_jogador1 + P1.pontos_jogador2 > 30
  AND P1.duracao > 90
  AND (SELECT COUNT(*) FROM Partidas P2
  WHERE (P1.jogador1_id = P2.jogador1_id AND P1.jogador2_id = P2.jogador2_id)
  OR (P1.jogador1_id = P2.jogador2_id AND P1.jogador2_id = P2.jogador1_id)) > 2;
  ```
  
### 7 - Dado o array no arquivo data.json, crie um interface em React.js, CSS e Bootstrap mostre os itens como se fosse um marketplace de roupas.
  Além dos arquivos da aplicação, o [deploy](https://desafio-coopercarga.vercel.app/) está aqui.
