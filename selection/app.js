const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
	img.src =
		'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg';
}

const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
	img.src =
		'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg';
}

const links = document.querySelectorAll('p a');

for (let link of links) {
	console.log(link.href);
}
