// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseImgURL =
	'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 1; i <= 500; i++) {
	const pokeBall = document.createElement('div');
	pokeBall.classList.add('pokemon');

	const imgPokemon = document.createElement('img');
	imgPokemon.src = `${baseImgURL}${i}.png`;

	const label = document.createElement('span');
	label.innerText = `#${i}`;

	pokeBall.appendChild(imgPokemon);
	pokeBall.appendChild(label);
	container.appendChild(pokeBall);
}
