export function showCards(data) {
	const container = document.querySelector('.cards');
  container.innerHTML = '';

	data.sort(() => Math.random() - 0.5);

	data.map((info) => {
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
