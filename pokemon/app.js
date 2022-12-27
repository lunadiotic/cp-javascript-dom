// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
const container = document.querySelector('#container');
const imgURL =
	'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 1; i <= 500; i++) {
	const pokemon = document.createElement('div');
	pokemon.classList.add('pokemon');

	const imgPokemon = document.createElement('img');
	imgPokemon.src = `${imgURL}${i}.png`;

	const label = document.createElement('span');
	label.innerText = `#${i}`;

	pokemon.appendChild(imgPokemon);
	pokemon.appendChild(label);
	container.appendChild(pokemon);
}
