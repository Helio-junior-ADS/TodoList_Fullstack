# TodoList_Fullstack

# Sobre o projeto
## Projeto desenvolvido para unir estudo de Frontend com backend. Um sistema de tarefas, na qual o usuário pode inserir, atualizar e deletar, havendo também a possibilidade de selecionar o status da tarefa (CONCLUÍDO, EM ANDAMENTO OU PENDENTE). Não foi usado framework no script, utilizado apenas o vanila para o código. Nenhum processador de CSS também foi usado. O foco desse projeto foi estudar o código HTML, CSS, JS e SQL ao máximo.


# O que foi exercitado: BACKEND.
* ## Arquitetura MVC
* ## O que são as promessas e como trabalhar com código assíncrono em NodeJS
* ## Criar uma conexão com SGBD/mysql 2 e fazer uma autenticação junto do servidor, fazendo assim uma exceção de erro para o servidor.
* ## Usar a Lib do mysql/promises como ORM para criar os models do projeto.
* ## Linguagem SQL para as chamadas no DB, Como não foi usado um ORM direto e sim um método da própria classe do mysql2. (execute)
* ## Middleware de Validação para os verbos POST e PUT. 


# O que foi exercitado: FRONTEND.
* ## OBS: Não foi usado nenhuma Lib ou Framework para o projeto
* ## Html, Css e Js vanilla. 
* ## Manipulação do DOM. 


# Tecnologias/Ferramentas 
+ ### Express.
+ ### Dotenv.
+ ### Nodemon.
+ ### Mysql2.
+ ### Fetch Api.
+ ### Eslint.

# Melhorias
## As seguintes melhorias precisam ser feitas para aprimoramento do projeto.
### Principais Pontos de Melhoria:
+ ### Criação de uma rota privada para Autenticação do usuário.
+ ### Alteração da cor na mudança do Status da tarefa.
+ ### Criar uma time para cada tarefa afetando o estado do status.
+ ### Criação de teste unitario.

# Documentação


+ ### Dar um NPM install para instalar as dependências do projeto. 
+ ### Para acessar basta utilizar, COMANDO: npm run dev. 
+ ### Preencher o arquivo .env com as variáveis utilizadas.
+ ### Tipos de campos para modelagem da table : CREATE TABLE tasks (
id INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(45) NOT NULL,
status VARCHAR(45) NOT NULL,
created_at VARCHAR(45) NOT NULL
)
# 🦸 Autor
Desenvolvido por Hélio Júnior 👨‍💻 [Entre em contato!](https://www.linkedin.com/in/h%C3%A9lio-j%C3%BAnior-81aa6612a/)
