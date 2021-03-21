<h2 align="center">Desafio Vaga Tesseract</h2>


<h3 align="center">
  <img alt="JavaScript"
    src="https://miro.medium.com/max/2642/1*SFRIvE6brmBfCqjT7ZEniA.png" width="380px"/>
</h3>
<hr/>


## ⚙️ Tecnologias:
- CSS3
- JavaScript 
- React 
- React Components

## ⚙️ Estrutura do Desafio:

- Arquivo `.gitignore`
- Arquivo `package.json`
- Arquivo `package-lock.json`
- Pasta `node_modules`: Armazena os pacotes das dependências que definimos no arquivo package.json. Também deve ser observado que este diretório é definido dentro de .gitignore para que todas as dependências infinitas não sejam carregadas para o repositório Git. Portanto, quem baixar o projeto instalará as dependências [diretamente da web](https://www.npmjs.com/
)
- Pasta `public`: Ele contém os arquivos estáticos que nos permitirão montar o aplicativo.
- Pasta `src` (source): A pasta src é a pasta onde nosso código React está localizado.
## ⚙️ Explicação do Desafio:
Este desafio consiste em construir uma pequena página web que se conecte com a **API GitHub**, 2 enpoints são dados, um que mostra os membros públicos da organização do `Grupo Tesseract` e outro encarregado de procurar os membros pertencentes ao **GitHub**.

Após a primeira conexão, traremos a lista de usuários pertencentes à organização que será exibida em cartões parecidos com a silhueta de um ser humano e conterão a imagem do perfil GitHub e o nome de usuário.

O aplicativo tem também em um motor de busca, que filtra os membros por login.

**Nota:** A filtragem é obtida após inserir o nome de usuário *completo* do membro.

Também podemos clicar em cada cartão para ver mais detalhes de cada membro, com os dados que iremos subtrair do segundo enpoint, como: nome do usuário, número de repositórios, número de seguidores e a data de adesão ao GitHub.

## ⚙️ Lógica geral para a resolução do Desafio:
Para resolver esse desafio, decidi usar o framework ReactJs.
Depois de estudar o problema proposto, decidi construir a aplicação com base na criação de um componente de classe que nos dará toda a operabilidade, facilitará o início da instância do componente através de um construtor, que finalmente nos ajudará a renderizar o informações recebidas em um arquivo HTML.

## ⚙️ Pasta src ou Source:

- Arquivo Index.js:
Se abrirmos o arquivo index.js. Vamos analisar o conteúdo do arquivo:

*Linha 1:* importe o módulo React que, como vimos, temos dentro das dependências do arquivo package.json e nos permitirá criar interfaces.

*Linha 2:* importe o módulo React-dom que, como vimos, temos dentro das dependências do arquivo package.json e nos permitirá criar interfaces para o navegador / web.

*Linha 3:* temos a importação para App que está chamando o arquivo App.js no diretório src.

*Linha 5:* é aquela usada pelo React e aquela que adiciona o código que falta ao documento HTML (a imagem, o parágrafo e o link). O que ReactDOM.render realmente faz (que eu quero pintar, onde eu quero pintá-lo) é adicionar um componente dentro do elemento do elemento com id "root" de index.html usando a instrução JavaScript document.getElementById ("root") .

- Arquivo App.js:
Se analisarmos o arquivo do App, podemos ver que primeiro importamos o React porque ele é o encarregado de desenhar as interfaces.
Temos a importação para o arquivo Home que está chamando o arquivo Home.js no diretório pages do src.
O esqueleto do componente é uma classe (chamada App) que estende o componente que vem com o React e que contém vários métodos do ciclo de vida do componente.
O componente também requer um método render (), este método retorna HTML.

- Arquivo style.css:
Que molda a parte visual de nosso aplicativo.

- Pasta pages/Home.js:
A primeira coisa que vemos é que estamos exportando o React e os outros componentes que ajudarão a construir a operação do aplicativo.

Em geral, este arquivo contém o componente de classe que inicializa nosso aplicativo. Entre outros parâmetros que iniciamos no construtor, vamos chamar a primeira API REST, que retorna as informações dos membros do Grupo Tesseract em formato JSON.

Com o ECMAScript6 teremos acesso à função fetch que através de promessas simplifica e facilita a realização de um pedido. Na primeira promessa teríamos a resposta completa do servidor, o que fazemos é retornar a resposta no formato JSON para acessar os dados, dessa forma na segunda promessa teríamos o array de objetos *Members*.

Definimos o objeto dentro do estado do componente, como um array inicial vazio.
Na resposta com os dados, a segunda promessa, definimos o estado dos Membros com os dados recebidos.

Em seguida, implementamos o método Render. Se o método *Members* tiver elementos, podemos renderizar o componente.

Esses dados e validações serão recebidos dos componentes criados na pasta `components`.

Depois de receber tudo o que precisamos, começamos a operar nosso mecanismo de pesquisa chamando um evento onChange em nosso `input`. **Infelizmente, não consegui fazer uma busca dinâmica, ou seja, o mecanismo de busca funciona apenas quando escrevemos o nome completo do usuário**.

Com os dados recebidos dos componentes, passo a adicionar eventos handleClick e handleBack, o primeiro permite que ao clicar em um membro, exibir informações daquela pessoa e o segundo evento é adicionado ao botão para voltar ou para o início, que como o próprio nome diz, permite ao usuário retornar à lista de membros do `Grupo Tesseract`.

- Pasta components / Arquivo Members.js:
Começamos exportando React, componentes e tipos de acessórios adicionando um campo chamado propTypes, para ter certeza de que o objeto * Membro * possui propriedades válidas para renderizar, neste caso, a foto do perfil do membro e nome de usuário.

- Pasta componentes / Arquivo MemberGitHub.js:
Neste arquivo vamos conectar o segundo enpoint de nosso pedido da mesma forma que fizemos no primeiro, inicializamos com um construtor, usamos fetch para chamar os dados, convertemos para o formato JSON para prosseguir com sua manipulação e renderização .

Neste caso, usaremos este enpoint apenas para encontrar os dados pertencentes aos membros exclusivos do `Grupo Tesseract`.

Declaramos a variável de usuário para proceder à comparação e renderização dos dados recebidos, tais como: imagem do perfil, nome, número de repositórios, número de seguidores e a data em que o usuário criou sua conta GitHub.
Esses dados nos permitirão encaixar todas as peças do quebra-cabeça no arquivo *Home.js*


##  Instalação


## 🏁 Para rodar o projeto:

Clone este repositório em sua máquina:

```bash
$ git clone https://github.com/Gremis/DesafioVagaTesseract.git
```

cd `DesafioVagaTesseract` e rode:

```bash
npm install
```

para iniciar:

```bash
npm run start
```

<br/>

##  Conclusão

Sem mais ao que fazer referência, só me resta dizer que fico grata pela oportunidade e ao seu dispor no caso de dúvidas ou outras sugestões.

Atenciosamente,

[Gremis Tovar](https://www.linkedin.com/in/gremis-tovar-987673135/) 
