# 🎬 Avaliador de Filmes & Estatísticas

> Projeto desenvolvido em Node.js para cálculo de estatísticas e classificação de filmes com base em notas de usuários, utilizando iteração por `forEach`, arquitetura modular e testes automatizados com `Mocha` e `node:assert`.

---

## 📌 Sobre o Projeto

O **Avaliador de Filmes** é uma aplicação que recebe um vetor de filmes contendo suas respectivas notas de avaliação, realiza a soma e média dessas avaliações e determina a classificação final do filme de acordo com a regra de negócio estabelecida.

### 🎯 Regra de Negócio (Classificação por Média)
- **Média $\ge$ 4.0**: `"Filme recomendado"`
- **Média entre 3.0 e 3.9**: `"Filme razoável"`
- **Média < 3.0**: `"Filme ruim"`

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

- **Runtime Environment:** [Node.js](https://nodejs.org/) (ES Modules - `"type": "module"`)
- **Test Runner:** [Mocha](https://mochajs.org/)
- **Assertion Library:** Node.js Native Assert (`node:assert`)
- **Versionamento & IDE:** Git, GitHub, Visual Studio Code

---

## 📁 Estrutura do Projeto

```text
avaliadorFilmes/
├── package.json
├── source/
│   └── avaliador.js      # Funções de aplicação e regras de negócio
└── test/
    └── avaliador.test.js # Suíte de testes automatizados com Mocha