# Portfólio Profissional — Gabriella Fernanda Silva Pinto

> Website de portfólio profissional desenvolvido para apresentar minha trajetória acadêmica e profissional, meus projetos, minhas experiências e meus canais de contato.

**Instituição:** Pontifícia Universidade Católica de Minas Gerais — PUC Minas  
**Curso:** Engenharia de Software  
**Disciplina:** Projeto de Software  
**Professora:** Milena Menezes Adão  
**Atividade:** Laboratório 1 — Segundo semestre de 2026

## Acesso ao projeto

- **Site publicado:** https://gabriellananda.github.io/portifolioProfissional/
- **Repositório no GitHub:** https://github.com/gabriellananda/portifolioProfissional

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
- Armazenamento da preferência de idioma no `localStorage` do navegador.
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
| **Web Storage API** | Persistência da preferência de idioma por meio do `localStorage`. |
| **SVG** | Ícones e imagens vetoriais utilizados na interface e na apresentação dos projetos. |
| **Git** | Controle de versão do código-fonte. |
| **GitHub** | Armazenamento e gerenciamento do repositório. |
| **GitHub Pages** | Publicação e hospedagem do site na nuvem. |

### Recursos de HTML, CSS e JavaScript aplicados

- HTML semântico, com elementos como `header`, `main`, `section`, `nav`, `aside` e `footer`.
- Atributos de acessibilidade, como `aria-label`, `aria-expanded`, `aria-pressed`, `aria-current`, `aria-invalid` e `aria-live`.
- Atributos personalizados `data-*` para tradução, filtros e controle de componentes.
- CSS Custom Properties para centralização de cores, espaçamentos, tipografia e demais definições visuais.
- CSS Grid, Flexbox e media queries para composição do layout responsivo.
- Manipulação do DOM e tratamento de eventos com JavaScript nativo.
- Expressão regular para validação de endereços de e-mail.

## Dependências, bibliotecas e frameworks

O projeto foi desenvolvido com **HTML, CSS e JavaScript puros**, sem dependências externas obrigatórias.

Não são utilizados:

- Frameworks JavaScript, como React, Angular ou Vue.
- Frameworks CSS, como Bootstrap ou Tailwind CSS.
- Bibliotecas JavaScript externas, como jQuery.
- Gerenciadores de pacotes, como npm ou Yarn.
- Processos de compilação, empacotamento ou build.
- Banco de dados, API própria ou servidor de backend.

Por essa razão, não existem arquivos como `package.json`, `requirements.txt` ou `node_modules`. Para visualizar o projeto, basta utilizar um navegador atualizado.

### Ferramentas opcionais para desenvolvimento local

| Ferramenta | Finalidade | Obrigatória? |
| --- | --- | --- |
| **Git** | Clonar o repositório e acompanhar as alterações do projeto. | Não, caso o código seja baixado em arquivo ZIP. |
| **Visual Studio Code** | Editar os arquivos do projeto. | Não. |
| **Extensão Live Server** | Iniciar um servidor local com recarregamento automático no navegador. | Não. |
| **Python 3** | Iniciar um servidor HTTP local com `python -m http.server`. | Não. |

## Estrutura de diretórios

```text
portifolioProfissional/
├── assets/
│   ├── css/
│   │   └── style.css                 # Estilos globais e layout responsivo
│   ├── img/
│   │   ├── favicon.jpg               # Ícone exibido na aba do navegador
│   │   ├── perfil.jpg                # Imagem de perfil
│   │   ├── projeto-01.svg            # Imagem vetorial de projeto
│   │   ├── projeto-02.svg            # Imagem vetorial de projeto
│   │   └── projeto-03.svg            # Imagem vetorial de projeto
│   └── js/
│       └── main.js                   # Interações e funcionalidades do site
├── docs/
│   ├── screenshots/                  # Diretório reservado para capturas de tela
│   └── wireframes/
│       └── png/
│           ├── Contatos.png          # Wireframe da página de contato
│           ├── Experiências.png      # Wireframe da página de experiências
│           ├── Projetos.png          # Wireframe da página de projetos
│           └── Sobre mim.png         # Wireframe da página inicial
├── contato.html                      # Página de contato e formulário
├── experiencias.html                 # Página de experiências profissionais
├── index.html                        # Página inicial e apresentação pessoal
├── projetos.html                     # Página de projetos e filtros
└── README.md                         # Documentação do projeto
```

## Instalação e execução local

### Pré-requisitos

Para executar o projeto, é necessário apenas:

- Um navegador atualizado, como Google Chrome, Microsoft Edge, Mozilla Firefox ou Safari.
- Uma cópia dos arquivos do projeto.

O uso de Git, Python ou Visual Studio Code é opcional e depende da forma escolhida para baixar e executar o site.

### 1. Baixe ou clone o repositório

Caso tenha o Git instalado, execute:

```bash
git clone https://github.com/gabriellananda/portifolioProfissional.git
```

Em seguida, acesse o diretório do projeto:

```bash
cd portifolioProfissional
```

Também é possível acessar o repositório no GitHub, selecionar **Code > Download ZIP**, baixar o arquivo e extrair seu conteúdo.

### 2. Escolha uma forma de execução

#### Opção A — Abrir diretamente no navegador

1. Abra a pasta `portifolioProfissional`.
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

#### Opção C — Executar com o servidor HTTP do Python

Com o terminal aberto na pasta principal do projeto, execute:

```bash
python -m http.server 8000
```

Em ambientes nos quais o executável do Python 3 é identificado como `python3`, utilize:

```bash
python3 -m http.server 8000
```

Depois, acesse:

```text
http://localhost:8000/
```

Para encerrar o servidor local, utilize `Ctrl + C` no terminal.

## Funcionamento do formulário de contato

O formulário realiza a validação dos dados diretamente no navegador, sem utilizar backend ou serviço de envio automático.

São verificadas as seguintes regras:

- **Nome:** preenchimento obrigatório e mínimo de 3 caracteres.
- **E-mail:** preenchimento obrigatório e formato válido.
- **Mensagem:** preenchimento obrigatório e mínimo de 10 caracteres.

Quando os campos são preenchidos corretamente, o sistema gera um link `mailto:` e abre o aplicativo de e-mail configurado no dispositivo com uma mensagem previamente preenchida.

> O envio efetivo depende de um aplicativo ou serviço de e-mail configurado pelo usuário. Nesta versão, o projeto não envia mensagens automaticamente nem armazena informações em banco de dados.

## Publicação na nuvem

O projeto utiliza o **GitHub Pages**, serviço de hospedagem de sites estáticos integrado ao GitHub.

Para publicar ou atualizar a aplicação:

1. Acesse o repositório `gabriellananda/portifolioProfissional` no GitHub.
2. Abra a seção **Settings**.
3. No menu lateral, selecione **Pages**.
4. Em **Build and deployment**, escolha a opção **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/ (root)`.
6. Salve as configurações e aguarde a conclusão da publicação.
7. Acesse o site pelo endereço:

   https://gabriellananda.github.io/portifolioProfissional/

## Observações importantes

- Os arquivos HTML e CSS fazem referência a fontes locais no diretório `assets/fonts/`. Caso essa pasta não esteja presente na versão utilizada, o navegador poderá aplicar as fontes alternativas definidas no CSS.
- Alguns contatos e links presentes no projeto são demonstrativos e devem ser substituídos pelos dados reais antes de uma publicação definitiva.
- A pasta `docs/wireframes/png/` reúne os wireframes das principais telas do portfólio.

## Autora

**Gabriella Fernanda Silva Pinto**  
Estudante de Engenharia de Software — PUC Minas  
GitHub: https://github.com/gabriellananda
