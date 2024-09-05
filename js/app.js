// Importa os dados do arquivo data.js
import { data } from "./data.js";

// Seleciona o elemento HTML com classe "cards" e armazena na variável container
const container = document.querySelector('.cards');

// Seleciona o elemento HTML com ID "input-search" e armazena na variável input
const input = document.querySelector('#input-search');

// Seleciona o elemento HTML com ID "button" e armazena na variável button
const button = document.querySelector('#button');

// Função para mostrar os cards na tela
function showCards() {
  // Embaralha os dados do array "data" aleatoriamente
  data.sort(() => Math.random() - 0.5);

  // Itera sobre cada item do array "data"
  data.map((info) => {
    // Constrói a estrutura HTML de cada card
    container.innerHTML += `
      <div class="card">
        <img src="./images/${info.image}" alt="${info.alt}" />
        <div class="info">
          <h3>${info.title}</h3>
          <p>${info.description}</p>
          <a href="${info.url}" target="_blank" rel="external">Acesse aqui</a>
        </div>
      </div>
    `;
  });
}

// Executa a função showCards para mostrar os cards iniciais
showCards();

// Adiciona um evento de clique ao botão "button"
button.addEventListener('click', () => {
  // Obtém o texto digitado no campo de busca e converte para minúsculo
  const text = input.value.toLowerCase();

  // Se o campo de busca estiver vazio, limpa o container e exibe todos os cards novamente
  if (text === '') {
    container.innerHTML = '';
    showCards();
    return;
  }

  // Filtra os dados com base na pesquisa do usuário (ignora maiúsculas e minúsculas)
  const search = data.filter(info => 
    Object.values(info).some(value => 
      String(value).toLowerCase().includes(text) 
    )
  );

  // Limpa o container antes de exibir os resultados da pesquisa
  container.innerHTML = '';

  // Itera sobre os resultados da pesquisa e exibe os cards correspondentes
  search.map((info) => {
    container.innerHTML += `
      <div class="card">
        <img src="./images/${info.image}" alt="${info.alt}" />
        <div class="info">
          <h3>${info.title}</h3>
          <p>${info.description}</p>
          <a href="${info.url}" target="_blank" rel="external">Acesse aqui</a>
        </div>
      </div>
    `;
  });
});