# Portfólio Profissional
> Website de portfólio profissional desenvolvido para apresentar minha trajetória acadêmica e profissional, meus projetos, minhas experiências e meus canais de contato.

## Autores do projeto Portfólio Profissional:

**Gabriella Fernanda Silva Pinto**<br>
**Igor Vidal Meneghini**<br>
**Izabella Romano Bizerra Seabra**<br>
**Natália dos Reis Santos**

**Instituição:** Pontifícia Universidade Católica de Minas Gerais — PUC Minas  
**Curso:** Engenharia de Software  
**Disciplina:** Projeto de Software  
**Professora:** Milena Menezes Adão  
**Atividade:** Laboratório 1 — Segundo semestre de 2026

## Acesso ao projeto

- **Em breve.**

## Sobre o projeto

Este projeto consiste em um site estático, responsivo e bilíngue, desenvolvido com tecnologias nativas da web. O objetivo é reunir, em um único ambiente, informações sobre minha formação, minhas habilidades, minha trajetória profissional e os projetos desenvolvidos ao longo da minha formação em Engenharia de Software.

O portfólio foi estruturado em quatro páginas principais:

- **Sobre mim:** apresentação pessoal, formação acadêmica, áreas de atuação, habilidades e objetivos profissionais.
- **Projetos:** linha do tempo de projetos, com filtros por categoria.
- **Experiências:** histórico de experiências e trajetória profissional.
- **Contato:** canais de comunicação e formulário com validação no navegador.

## Funcionalidades

- Navegação entre as páginas do portfólio.
- Layout responsivo para computadores, tablets e celulares.
- Menu de navegação adaptado para dispositivos móveis.
- Alternância de idioma entre português e inglês.
- Armazenamento da preferência de idioma.
- Filtragem de projetos pelas categorias **Todos**, **Web**, **Dados**, **Mobile** e **Acadêmico**.
- Validação dos campos de nome, e-mail e mensagem no formulário de contato.
- Abertura do aplicativo de e-mail do usuário por meio de um link `mailto:`.
- Atualização automática do ano exibido no rodapé.
- Recursos de acessibilidade, como marcação semântica, atributos ARIA, navegação pelo teclado e respeito à preferência de redução de movimento.

## Tecnologias utilizadas

| Tecnologia | Utilização no projeto |
| --- | --- |
| **HTML5** | Estrutura semântica das páginas, formulários, conteúdos e elementos de navegação. |
| **CSS3** | Estilização visual, design responsivo, variáveis CSS, animações, organização de componentes e adaptação para diferentes tamanhos de tela. |
| **JavaScript** | Menu mobile, troca de idioma, filtro de projetos, validação do formulário e atualização automática do rodapé. |
| **Git** | Controle de versão do código-fonte. |
| **GitHub** | Armazenamento e gerenciamento do repositório. |

### Recursos de HTML, CSS e JavaScript aplicados

- HTML semântico, com elementos como `header`, `main`, `section`, `nav`, `aside` e `footer`.
- Atributos de acessibilidade, como `aria-label`.
- Atributos personalizados `data-*` para tradução, filtros e controle de componentes.
- CSS Custom Properties para centralização de cores, espaçamentos, tipografia e demais definições visuais.
- CSS Grid, Flexbox e media queries para composição do layout responsivo.
- Manipulação do DOM e tratamento de eventos com JavaScript nativo.

## Dependências, bibliotecas e frameworks

O projeto foi desenvolvido com **HTML, CSS e JavaScript puro**, sem dependências externas obrigatórias.

## Estrutura de diretórios

```text
portfolioProfissional/
├── assets/
│   ├── css/
│   │   └── style.css                 
│   ├── img/
│   │
│   └── js/
│       └── main.js                   
├── docs/
│   ├── screenshots/                  
│   └── wireframes/
│       └── png/
├── contato.html                      
├── experiencias.html                 
├── index.html                        
├── projetos.html                     
└── README.md                         
```

## Instalação e execução local

### Pré-requisitos

Para executar o projeto, é necessário apenas:

- Um navegador atualizado, como Google Chrome, Microsoft Edge, Mozilla Firefox ou Safari.
- Uma cópia dos arquivos do projeto.

### 1. Baixe ou clone o repositório

Caso tenha o Git instalado, execute:

```bash
git clone https://github.com/gabriellananda/portfolioProfissional.git
```

Em seguida, acesse o diretório do projeto:

```bash
cd portfolioProfissional
```

Também é possível acessar o repositório no GitHub, selecionar **Code > Download ZIP**, baixar o arquivo e extrair seu conteúdo.

### 2. Escolha uma forma de execução

#### Opção A — Abrir diretamente no navegador

1. Abra a pasta `portfolioProfissional`.
2. Localize o arquivo `index.html`.
3. Abra esse arquivo em um navegador de sua preferência.

Como o projeto é estático, não é necessário instalar pacotes ou executar comandos de build.

#### Opção B — Executar com Live Server no Visual Studio Code

1. Abra a pasta do projeto no Visual Studio Code.
2. Instale a extensão **Live Server**.
3. Clique com o botão direito no arquivo `index.html`.
4. Selecione **Open with Live Server**.
5. Acesse o endereço exibido no navegador, geralmente:

```text
http://127.0.0.1:5500/index.html
```
