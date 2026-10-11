# Teste Técnico Front-End Jr | Econverse

Projeto desenvolvido como parte do processo seletivo para a oportunidade de **Desenvolvedor Front-End Jr na Econverse**.

O objetivo foi implementar uma interface de e-commerce utilizando React, TypeScript e Sass, com base no layout disponibilizado no Figma, priorizando organização de código, componentização, responsividade e experiência do usuário.

## Tecnologias utilizadas

- **React** — construção da interface com componentes reutilizáveis.
- **TypeScript** — tipagem estática e maior segurança no desenvolvimento.
- **Vite** — ambiente de desenvolvimento e build.
- **Sass (SCSS)** — organização e estilização dos componentes.
- **Lucide React** — biblioteca de ícones.
- **HTML semântico** — estruturação do conteúdo e boas práticas de acessibilidade.

## Funcionalidades

- Interface de e-commerce baseada no layout do Figma.
- Cabeçalho com campo de busca e ícones de navegação.
- Banner promocional.
- Exibição de categorias de produtos.
- Listagem de produtos com informações e preços.
- Consumo de dados de produtos em formato JSON.
- Navegação entre produtos.
- Modal com informações do produto selecionado.
- Controles para aumentar e diminuir a quantidade no modal.
- Mensagem de confirmação simulada ao clicar em comprar.
- Fechamento do modal pelo botão, pela tecla `Esc` ou ao clicar fora dele.
- Seções de parceiros, marcas e produtos relacionados.
- Formulário visual de newsletter e rodapé.
- Layout responsivo para desktop e dispositivos móveis.

> **Observação:** a confirmação de compra é uma simulação de interface. O projeto não realiza pagamentos nem possui integração com um carrinho real.

## Layout de referência

A interface foi desenvolvida com base no protótipo fornecido pela Econverse:

[Figma — Teste Front-End Jr](https://www.figma.com/file/rWnzPeoxgynuNPsJjV0VmV/Teste-Front-End-Jr?node-id=0%3A1)

## Fonte dos produtos

Os dados dos produtos são obtidos a partir do arquivo JSON disponibilizado para o teste:

[API de produtos — Econverse](https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json)

## Como executar o projeto

**Pré-requisito:** Node.js e npm instalados.

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

A aplicação ficará disponível no endereço exibido pelo Vite, normalmente:

`http://localhost:5173`

### 5. Gere a versão de produção

```bash
npm run build
```

Para visualizar a versão de produção localmente:

```bash
npm run preview
```

## Responsividade

O projeto utiliza media queries em SCSS para adaptar os componentes a diferentes tamanhos de tela.

Foram considerados aspectos como:

- Ajuste do cabeçalho e da navegação em telas menores.
- Organização das categorias em dispositivos móveis.
- Adaptação dos cards de produtos.
- Reorganização dos elementos do modal para telas pequenas.
- Ajuste das seções de marcas, newsletter e rodapé.

## Organização do projeto

O código foi dividido em componentes React, com arquivos de estilização SCSS específicos, buscando facilitar a manutenção e a reutilização.

A aplicação utiliza TypeScript para definir as estruturas de dados dos produtos e as propriedades dos componentes.

## Considerações finais

O desenvolvimento deste teste proporcionou a oportunidade de aplicar conhecimentos de React, TypeScript, Sass, consumo de dados e construção de interfaces responsivas.

O foco foi entregar uma aplicação organizada, funcional e alinhada à proposta visual disponibilizada, demonstrando boas práticas de desenvolvimento Front-End.

---

**Desenvolvido por Daniel Araujo Chaves**

[GitHub](https://github.com/DaniChaves10) | [LinkedIn](https://www.linkedin.com/in/daniel-araujo10/)