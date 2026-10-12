# Teste Técnico Front-End Jr | Econverse

Projeto desenvolvido como parte do processo seletivo para a vaga de **Desenvolvedor Front-End Jr na Econverse**.

O objetivo foi reproduzir uma interface de e-commerce a partir de um protótipo disponibilizado no Figma, utilizando **React, TypeScript e Sass**, com foco em componentização, responsividade, organização do código e experiência do usuário.

## 🌐 Demonstração online

**[Acessar aplicação — Teste Front-End Econverse](https://teste-front-end-eta-ten.vercel.app/)**

## 🛠️ Tecnologias utilizadas

- **React** — desenvolvimento da interface com componentes reutilizáveis.
- **TypeScript** — tipagem estática de componentes e dados.
- **Vite** — ambiente de desenvolvimento e geração da versão de produção.
- **Sass (SCSS)** — estilização e organização dos estilos.
- **Lucide React** — biblioteca de ícones.
- **HTML semântico** — estruturação do conteúdo e boas práticas de acessibilidade.

## ✨ Funcionalidades

- Interface de e-commerce baseada no protótipo do Figma.
- Layout responsivo para desktop, tablets e dispositivos móveis.
- Cabeçalho com campo de busca e ícones de navegação.
- Banner promocional e exibição de categorias.
- Listagem dinâmica de produtos utilizando dados JSON.
- Carrossel de produtos com controles de navegação.
- Modal com imagem, nome, descrição e preço do produto selecionado.
- Seleção de quantidade com controles de incremento e decremento.
- Feedback visual de adição simulada ao carrinho.
- Fechamento do modal pelo botão, pela tecla `Esc` ou ao clicar fora dele.
- Controle de foco e bloqueio da rolagem da página enquanto o modal está aberto.
- Seções de parceiros, marcas, newsletter e rodapé.

**Observação:** a compra é simulada e não realiza pagamentos nem atualiza um carrinho persistente. Alguns elementos, como busca, abas de categorias e newsletter, foram implementados para reprodução visual do layout.

## 🎨 Layout de referência

A interface foi desenvolvida com base no protótipo disponibilizado pela Econverse:

[Figma — Teste Front-End Jr](https://www.figma.com/file/rWnzPeoxgynuNPsJjV0VmV/Teste-Front-End-Jr?node-id=0%3A1)

## 📦 Fonte dos produtos

Os produtos são carregados a partir de uma cópia local do arquivo JSON oficial, localizada em:

`public/data/produtos.json`

Fonte original:

[JSON de produtos — Econverse](https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json)

A utilização do arquivo local permite executar a aplicação sem depender da disponibilidade do servidor externo.

## 🚀 Como executar o projeto

**Pré-requisitos:** Node.js e npm instalados.

### 1. Clone o repositório

```bash
git clone https://github.com/DaniChaves10/teste-front-end.git
```

### 2. Acesse a pasta do projeto

```bash
cd teste-front-end
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

A aplicação ficará disponível no endereço informado pelo Vite, normalmente:

`http://localhost:5173`

### 5. Gere a versão de produção

```bash
npm run build
```

Para visualizar a versão de produção localmente:

```bash
npm run preview
```

## 📱 Responsividade

A interface utiliza media queries em SCSS para adaptar os componentes a diferentes tamanhos de tela.

Entre as adaptações implementadas estão:

- Reorganização do cabeçalho e da barra de pesquisa.
- Navegação horizontal em telas menores.
- Ajuste da disposição das categorias.
- Carrossel com quantidade de produtos visíveis adaptada à largura da tela.
- Reorganização do modal para dispositivos móveis.
- Adaptação das seções de conteúdo e do rodapé.

## 📂 Organização do projeto

O projeto foi estruturado em componentes React reutilizáveis, com arquivos SCSS específicos para cada seção.

Também foram utilizados diretórios para organizar:

- Componentes da interface.
- Serviços de carregamento de dados.
- Tipagens TypeScript.
- Estilos globais.
- Imagens e demais recursos estáticos.

Essa organização facilita a manutenção e a evolução da aplicação.

## ♿ Acessibilidade

Foram adotadas práticas como:

- Uso de elementos HTML semânticos.
- Textos alternativos para imagens.
- Identificação acessível de botões.
- Fechamento do modal pelo teclado.
- Gerenciamento de foco no modal.
- Feedback de ações por meio de mensagens de status.

## 👨‍💻 Desenvolvedor

**Daniel Araujo Chaves**

[GitHub](https://github.com/DaniChaves10) | [LinkedIn](https://www.linkedin.com/in/daniel-araujo10/)