# Compilets

Este projeto é uma aplicação web desenvolvida com _React_, _TypeScript_ e _Vite_. Ele fornece uma estrutura básica para o desenvolvimento de um compilador para a disciplina de Compiladores, com suporte para _Hot Module Replacement (HMR)_ e algumas regras de _ESLint_ que mantêm a consistência do código.

## Descrição

O compilador é projetado para uma linguagem customizada definida pelo professor, com foco na análise léxica e sintática. Para isso, utilizamos as bibliotecas `Moo` (para tokenização) e `Nearley` (para análise sintática), que juntas permitem a construção de um compilador funcional e extensível.

Desenvolvido por [Igor José Rodrigues](https://github.com/Igorjr19/) e [Matheus Augustho de Moura Nazaro](https://github.com/mnazaro/), o projeto é uma aplicação modular que facilita o entendimento da estrutura do compilador e permite incrementos futuros.

## Funcionalidades

- **Editor de Código**: Um editor de código simples usando `react-simple-code-editor`.
- **Análise Léxica e Sintática**: Tokenização de código e análise sintática usando `moo` e `nearley`.
- **Interface de Usuário**: Componentes de interface do usuário como botões, formulários e modais usando `react-bootstrap`.
- **Validação de Arquivos**: Carregamento e validação de arquivos de texto.

## Estrutura do Projeto

```plaintext
.gitignore
.husky/
.vscode/
public/
src/
  App.css
  App.tsx
  components/
  lexic/
    enum/
    language.ts
    lexic.ts
    tokenizer.ts
  main.tsx
  syntatic/
    generated/
    grammar.ne
  vite-env.d.ts
eslint.config.js
index.html
package.json
README.md
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

## Configuração do ESLint

Para desenvolver uma aplicação de produção, recomendamos atualizar a configuração para habilitar regras de lint com reconhecimento de tipos:

- Configure a propriedade `parserOptions` no nível superior como mostrado abaixo:

```typescript
export default {
  // outras regras...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
};
```

## Como Executar o Projeto

1. **Instale as depêndencias:**

```
npm install
```

2. **Execute o servidor de desenvolvimento:**

```
npm run dev
```

3. **Construa o projeto para produção:**

```
npm run build
```

4. **Excute os testes:**

```
npm test
```

## Contribuição

Se você deseja contribuir com este projeto, por favor, siga as diretrizes de contribuição e envie um pull request.
