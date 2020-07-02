# NextLevelWeek1
Projeto construido durante a semana NLW da Rocketseat. Projeto Ecoleta, ecomerce voltado para coleta de materiais reciclaveis.

**Resumo de aulas e o que foi construído**

#### Dia 1 - 
* Tecnologias FrontEnd </br>
	- HTML</br>
	- CSS</br>
	- Javascript</br>

* Tecnologias BackEnd </br>
    - Linguagem Javascript</br>
		- Node.js</br>
		- git bash</br>
		- Banco de dados SQL</br>
		- SQLite</br>
	

#### Projeto: ecoleta - marketplace coleta de resíduos

**Aula 1 -** Criação da pagina web utilizando HTML e CSS conforme modelo apresentado.
* Criação da index.html, com aplicação de conceitos como:</br>
	- head: definição de titulo da pagina "<title>" </br>
	      link para fontes utilizadas no projeto e importadas do google fonts</br>
	      importação dos arquivos .CSS utilizados como main.css, home.css e responsive.css</br>
	- body: criação de nomeação de divs para estilização com css;</br>
	      criação de cabeçalho \<header\> com imagem e tag \<a\> para botão com funcionalidade de cadastro</br>
	      criação de tag \<main\> com informações sobre a pagina com tag \<h1\> e \<p\> e criação de botao utilizando a tag \<a\> e \<span\> para adição de link e imagem, respectivamente</br>
* Criação do main.css, com aplicação de conceitos como declaração de propriedades que podem ser repetidas em um projeto css utilizando :root e estilização dos componentes principais da página como html, body, a e as tags h1 a h6
* Criação da home.css com aplicação de conceitos de estilizaçao dos componentes utilizando o modelo BOX MODEL - modelo de caixa
* #page-home com definição de largura, altura, espaçamentos, preenchimentos, bordas, cor, fundo, maneira vista pelo html (display) utilizando display: flex;, posicionamento, alinhamento, etc.
* Criação do responsive.css, com aplicação de conceitos de estilização de componentes com responsividade na pagina como botoes, imagens, etc.

**Aula 2 -** Refatoração do codigo para melhoria da qualidade do codigo visando manutenibilidade;</br>
* Ajuste de componentes de acordo com simulação de tamanhos de tela visando a responsividade definindo as regras com \@media querys.
* Desenvolvimento da página de cadastro dos pontos de coleta da aplicação (create-point.html):
	- Criação de formulário com informações como nome, endereço, numero, cidade, estado da entidade e dos itens de coleta
* Introdução de conceitos de JavaScript para criação de funcionalidade:
  - Variaveis, tipos de dados
  - Estrutura de dados - Objeto
  - Funções
  - Condicionais
  - Loop Repetições

* Criação de arquivo .js para popular o select de estado e cidade no formulario

**Aula 3 -** Soluções de pendencias e bugs pós aula 2;
* Construção da seção Itens de coleta da pagina de cadastro dos pontos de coleta
	- Criação e estilização de lista \<li\>
	- Adição e remoção de classe utilizando javascript
* Configuração de layout da pagina de pesquisa dos pontos de coleta e da pagina de listagem dos pontos
	- Criação do HTML no index.html 
	- Criação do arquivo modal.css para estilização da pagina

**Aula 4 -** Construção do Back-end da aplicação</br>
Responsabilidades: Receber requisições do front-end, preparar as respostas (regras de negocio) e enviar as
respostas ao front-end. Tratamento dos dados enviados e armazenamento.
	* Tecnologias: 
    - Linguagem Javascript
		- Node.js
		- git bash
		- Banco de dados SQL
		- SQLite

* Codigo
	Estrutura de pastas do projeto
	* Criação do servidor: Modulos extras, packages, dependencias.
		- instalação dos modulos
		-	configuração do servidor: Instalação do express, nodemon -D(monitoramento de alterações no projeto para
reiniciar o servidor)
				- Criar e iniciar \- npm init e npm start(node src/server.js)
				- Pagina Inicial \- configuração do nodemon e criação do get para pagina inicial
				- Arquivos estáticos \-  configuração da pasta public com server.use
		- Rotas da aplicação \- Criação das rotas (caminhos de funcionamento da aplicação)
		- Template Engine - transforma o html em arquivo com funções, estrutura de repetição, etc
		-	nunjucks - html dinamico
					- import
					- extends
					- block
          
          
**Aula 5 -** Banco de Dados</br>
	* Salvar os dados utilizando linguagem SQL
	* Tecnologia utilizada: SQLite
* Instalação do SQLite
* Criação do banco de dados da aplicação
	- Criação de tabelas - Entidades e relações
* Operações no banco de dados:
	- inserir, deletar, selecionar
* Utilização do arquivo de banco de dados na aplicação utilizando o comando module.exports = db
* Atualização do search-results.html para utilização dos dados dinamicos da base de dados
	- utilização das estruturas if e for do nunjucks
* Criação da logica de cadastro das informações da aplicação na base de dados
	- descrição dos dados enviados pela url
	- Configuração do envio de dados utilizando post
* Criação da pagina point-created.html para confirmação de cadastro de entidade
* Implementação da pesquisa de conteudo das entidades

Adicionais:

	- pagina de erro de cadastro
	- pag de erro de conexao no banco de dados
	- Pag de atualização de dados de um ponto de coleta
