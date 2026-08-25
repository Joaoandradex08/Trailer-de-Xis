# 🍔 Trailer de Xis

Projeto desenvolvido com **HTML, CSS e JavaScript** com o objetivo de praticar e demonstrar o uso dos principais métodos de manipulação de arrays em JavaScript:

* `map()`
* `reduce()`
* `filter()`
* `forEach()`

O projeto simula o cardápio de um trailer de lanches, permitindo visualizar os produtos, aplicar desconto, calcular valores totais e filtrar apenas os lanches.

---

## 📸 Sobre o projeto

<img width="1920" height="969" alt="image" src="https://github.com/user-attachments/assets/fac863a8-d327-42d3-988e-54d2d4b52d9a" />


O **Trailer de Xis** possui uma interface visual inspirada em trailers de lanches, com um cardápio contendo comidas e bebidas.

A aplicação permite ao usuário interagir com diferentes botões para executar operações sobre o array de produtos.

Entre as funcionalidades estão:

* 🍔 Mostrar todos os produtos
* 💰 Aplicar desconto de 10%
* 🧾 Calcular o valor total dos produtos
* 🥪 Filtrar apenas os lanches
* 🖥️ Exibir os resultados diretamente na página através do DOM

---

## 🚀 Funcionalidades

### 🍔 Mostrar todos

<img width="1920" height="976" alt="image" src="https://github.com/user-attachments/assets/f43a01a0-cc30-4c76-8ac8-95ed0040955d" />


Ao clicar no botão **"Mostrar tudo"**, todos os produtos presentes no array são exibidos na tela.

O projeto utiliza `forEach()` para percorrer os produtos e montar dinamicamente o HTML de cada item.

Cada produto apresenta:

* Imagem
* Nome
* Preço

A função responsável por isso é `showAll()`.

---

### 💸 Cupom de 10%

<img width="1920" height="972" alt="image" src="https://github.com/user-attachments/assets/972b6448-ca45-45c0-b812-b772e002e3a3" />


O botão **"Cupom 10%"** aplica um desconto de 10% em todos os produtos.

Para isso, foi utilizado o método `map()`.

```javascript
const newPrice = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9
}))
```

O `map()` cria um **novo array**, mantendo os produtos originais e alterando apenas o preço.

Depois do cálculo, o novo array é enviado para a função responsável por exibir os produtos.

---

### 🧮 Valor total

<img width="1917" height="617" alt="image" src="https://github.com/user-attachments/assets/ac61e9d6-2e96-4136-b9cc-d0bf9009073a" />


O botão **"Valor total"** calcula:

* Valor total sem desconto
* Valor total com desconto
* Valor economizado

Para calcular os valores, foi utilizado o método `reduce()`.

```javascript
const result = menuOptions.reduce(
    (acc, value) => acc + value.price,
    0
)
```

O `reduce()` percorre todos os produtos e acumula seus preços em um único valor.

O projeto também calcula quanto o cliente economizaria utilizando o desconto:

```javascript
const totalDiscount = result - priceDiscount
```

Essas informações são exibidas dinamicamente na página.

---

### 🥪 Filtrar apenas os lanches

<img width="1920" height="736" alt="image" src="https://github.com/user-attachments/assets/1a69ff25-4c89-4c25-a6d2-e9102099902c" />


O botão **"Lanches"** utiliza o método `filter()` para mostrar somente os produtos que possuem `food: true`.

```javascript
const newMenu = menuOptions.filter(
    snacks => snacks.food == true
)
```

Dessa maneira, bebidas como Coca-Cola, Polar e Água não são exibidas quando o usuário seleciona apenas os lanches.

---

## 🎯 Objetivo do projeto

Este projeto foi desenvolvido principalmente para colocar em prática conceitos fundamentais de **JavaScript**, especialmente a manipulação de arrays.

O objetivo foi entender, na prática, como diferentes métodos podem ser utilizados para resolver problemas comuns em aplicações web.

### Conceitos praticados

* Arrays
* Objetos
* Funções
* Arrow Functions
* Template Literals
* `forEach()`
* `map()`
* `reduce()`
* `filter()`
* Spread Operator (`...`)
* DOM
* `querySelector()`
* `innerHTML`
* `addEventListener()`
* Eventos de clique
* Manipulação dinâmica de elementos HTML

---

## 💡 O que aprendi

Com este projeto, pratiquei como trabalhar com arrays de objetos e transformar seus dados de acordo com a necessidade da aplicação.

Também pude entender melhor a diferença entre os métodos:

**`forEach()`**

Percorre os elementos do array e executa uma função para cada item.

**`map()`**

Cria um novo array transformando cada elemento do array original.

**`filter()`**

Cria um novo array contendo apenas os elementos que atendem a determinada condição.

**`reduce()`**

Percorre os elementos e reduz o array a um único resultado, sendo muito útil para cálculos e somas.

---

## 👨‍💻 Autor

**João de Andrade**

Projeto desenvolvido como parte dos estudos de **JavaScript e desenvolvimento Front-End**.

---

⭐ Se você gostou do projeto, considere deixar uma estrela no repositório!
