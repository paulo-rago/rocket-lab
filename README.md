# Rocket Lab

## 🚀 Introdução

**Rocket Lab** é uma aplicação web desenvolvida em React e TypeScript que simula um pequeno e-commerce de produtos. Nela, usuários podem navegar pelos produtos, adicionar itens ao carrinho e realizar um *checkout* simulando uma compra. Após a compra, é possível visualizar uma lista de pedidos realizados.

Este projeto foi criado de forma didática, utilizando tecnologias modernas como React, Vite e Tailwind CSS.

---

## 🛠️ Tecnologias Utilizadas

- **React** – Biblioteca para construção de interfaces.
- **Vite** – Ferramenta de build e servidor de desenvolvimento.
- **TypeScript** – Superset do JavaScript, adicionando tipagem estática.
- **React Router DOM** – Gerenciamento de rotas SPA.
- **Tailwind CSS** – Framework de CSS utilitário.
- **React Hook Form** – Gerenciamento de formulários.
- **React Window** – Renderização eficiente de listas.

---

## 📦 Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/paulo-rago/rocket-lab.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd rocket-lab
   ```

3. Instale as dependências:
   ```bash
   pnpm install
   ```
   > Ou utilize `npm install` ou `yarn install`.

---

## ▶️ Execução

Para rodar a aplicação no ambiente de desenvolvimento:

```bash
pnpm run dev
```

Abra o navegador e acesse:

```
http://localhost:5173
```

Para gerar um build de produção:

```bash
pnpm run build
```

Para pré-visualizar o build:

```bash
pnpm run preview
```

---

## 🗺️ Estrutura de Pastas

```
rocket-lab/
├── public/              # Arquivos estáticos (index.html, imagens públicas)
├── src/                 # Código fonte
│   ├── assets/          # Imagens e outros assets
│   ├── pages/           # Páginas da aplicação
│   │   ├── component/   # Componentes reutilizáveis
│   │   ├── Home.tsx     # Página inicial
│   │   └── Orders.tsx   # Página de pedidos
│   ├── App.tsx          # Definição de rotas e layout principal
│   ├── main.tsx         # Ponto de entrada do React
│   └── index.css        # Configurações e estilos do Tailwind
├── vite.config.ts       # Configuração do Vite
├── package.json         # Dependências e scripts
└── README.md            # Documentação
```

---

## 🔗 Rotas

- `/` – Página inicial (produtos, carrinho e checkout).
- `/orders` – Página de pedidos realizados.

---

## 🎨 Estilização com Tailwind CSS

- Estilos feitos diretamente nas classes dos elementos JSX.
- Configurado em `src/index.css` utilizando as diretivas:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

---

## 🧩 Componentes Principais

- **Header** – Cabeçalho com navegação.
- **Footer** – Rodapé da aplicação.
- **Home** – Página inicial com listagem de produtos e acesso ao checkout.
- **Checkout** – Formulário para finalizar a compra.
- **Orders** – Página que lista os pedidos realizados.
- **Gallery** – Galeria de imagens dos produtos.
- **Button** – Botão reutilizável estilizado.

---

## 💾 Armazenamento Local

- Os pedidos são salvos no **Local Storage** do navegador.
- O carrinho é temporário e se perde ao atualizar a página.
- Os pedidos permanecem armazenados até que o cache/local storage do navegador seja limpo.

---

## 🚀 Sobre o Projeto

O Rocket Lab foi desenvolvido com o objetivo de explorar conceitos de desenvolvimento frontend moderno, utilizando React, Vite, Tailwind CSS e boas práticas de desenvolvimento.

Sinta-se à vontade para explorar, estudar, utilizar e melhorar este projeto!
