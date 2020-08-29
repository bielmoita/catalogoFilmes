<h1 align="center">CATALOGO FILMES </h1>

<p align="center">
<img src="https://img.shields.io/badge/Angular-9.1.1-red"> <img src="https://img.shields.io/badge/NETLIFY-DEPLOY-blue">
</p>

### Tópicos 
:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Funcionalidades](#funcionalidades)

:small_blue_diamond: [Deploy da Aplicação](#deploy-da-aplicação-dash)

:small_blue_diamond: [Pré-requisitos](#pré-requisitos)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)

## Descrição do projeto
<p align="justify">
Contrução de um front em <i>Angular</i> para consumir a API do Back-END em Java/mySQL. o Catalogi de filmes permite voce visualizar Filmes, cadastrar e ler sobre a sinopse.
</p>

## Funcionalidades

:heavy_check_mark: Construção de um Front  

:heavy_check_mark: Consumo da API do Back-end

:heavy_check_mark: Cadastro de filmes  

:heavy_check_mark: Visualização dos Filmes em cards  

:heavy_check_mark: Responsividade

## Deploy da Aplicação :dash:

> Link do deploy da aplicação em construção - em construção para ser no netlify

## Pré-requisitos

:warning: [Node](https://nodejs.org/en/download/)

:warning: [Angular](https://angular.io/)

:warning: [Java](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html)

:warning: [Eclipse](https://www.eclipse.org/downloads/)

:warning: [mySQL](https://dev.mysql.com/downloads/)


## Como rodar a aplicação :arrow_forward:

No terminal, clone o projeto: 

```
git clone https://github.com/bielmoita/catalogoFilmes.git
```
Vamos iniciar rodando o back-END:
Abra o Eclipse, ou a IDE Java de sua preferencia.
Importe o projeto para a IDE com as preferencias do MAVEN (Que é o gerenciador de dependencias do projeto).

Na estrutura abrir a opção de filmes:
```
filmes - src/main/java
```
Executar o arquivo: <b>CatalogoDeFilmesApplication.java</b>

lembre-se de verificar o arquivo de configuração do mySQL na estrutura:
```
src/main/resources
```
No arquivo
<b>application.properties</b> verificar o usuario e senha administrador da sua base de dados.

Quando executar a aplicação verificar a inicialização com o Spring-boot.

Passo 2 - o Front
Agora vamos executar no front
Ainda no Terminal digite o comando abaixo
```
cd catalogoFilmes/FRONT/catalogo-filmes
```

Para ter certeza que esta dentro do diretório correto execute o comando:
```
ls -la
```
deve ser exibido uma estrutura semelhante a essa:
```
drwxr-xr-x 1 NOME DE USUARIO 197121      0 ago 27 00:09 ./
drwxr-xr-x 1 NOME DE USUARIO 197121      0 ago 25 20:01 ../
-rw-r--r-- 1 NOME DE USUARIO 197121    274 ago 25 20:01 .editorconfig
-rw-r--r-- 1 NOME DE USUARIO 197121    625 ago 27 00:09 .gitignore
-rw-r--r-- 1 NOME DE USUARIO 197121   3974 ago 25 21:32 angular.json
-rw-r--r-- 1 NOME DE USUARIO 197121    429 ago 25 20:01 browserslist
drwxr-xr-x 1 NOME DE USUARIO 197121      0 ago 27 00:16 dist/
drwxr-xr-x 1 NOME DE USUARIO 197121      0 ago 25 20:01 e2e/
-rw-r--r-- 1 NOME DE USUARIO 197121   1027 ago 25 20:01 karma.conf.js
drwxr-xr-x 1 NOME DE USUARIO 197121      0 ago 27 00:06 node_modules/
-rw-r--r-- 1 NOME DE USUARIO 197121   1631 ago 25 21:30 package.json
-rw-r--r-- 1 NOME DE USUARIO 197121 521230 ago 25 21:30 package-lock.json
-rw-r--r-- 1 NOME DE USUARIO 197121   1031 ago 25 20:01 README.md
drwxr-xr-x 1 NOME DE USUARIO 197121      0 ago 27 00:09 src/
-rw-r--r-- 1 NOME DE USUARIO 197121    210 ago 25 20:01 tsconfig.app.json
-rw-r--r-- 1 NOME DE USUARIO 197121    489 ago 25 20:01 tsconfig.json
-rw-r--r-- 1 NOME DE USUARIO 197121    270 ago 25 20:01 tsconfig.spec.json
-rw-r--r-- 1 NOME DE USUARIO 197121   3125 ago 25 20:01 tslint.json
```
Agora, tendo a certeza que esta no diretorio certo e ja tendo instalado o Node e o Angular (Conforme pré-requisitos).
execute o comando:
```
ng serve -o
```
Aguarde ele compilar e rodar, o mesmo irá abrir uma aba ou janela do seu browser preferencial no seu computador.

## Desenvolvedores/Contribuintes :octocat:
[<img src="https://avatars2.githubusercontent.com/u/49874403?s=400&u=732c2387f6b14597528e693927cd5af874c144d4&v=4" width=115><br><sub>Gabriel Fernando</sub>](https://www.linkedin.com/in/gabriel-fernando-mcsilva/) 

## Licença 

Copyright :copyright: 2020 - CATÁLOGO FILMES
