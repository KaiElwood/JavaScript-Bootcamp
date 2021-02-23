function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const avatar = document.querySelector("#player");
const coin = document.querySelector('#coin');

window.addEventListener('keyup', (e) => {

	let isArrow = true;

	switch(e.key) {
		case 'ArrowDown':
			addVertical(avatar, 50)
			// avatar.style.top = (addDirection('top') + 50) + 'px';
			break;
		case 'ArrowUp':
			addVertical(avatar, -50)
			break;
		case 'ArrowLeft':
			addHorizontal(avatar, -50)
			break;
		case 'ArrowRight':
			addHorizontal(avatar, 50)
			break;
		default:
			isArrow = false;
	}

	if(isArrow){
		if(isTouching(avatar, coin)){
			moveCoin();
		}
	}
})

const addVertical = (element, amount) => {
	let curVal = extractPos(window.getComputedStyle(element).getPropertyValue('top'));
	console.log(curVal);
	element.style.top = `${curVal + amount}px`;
}

const addHorizontal = (element, amount) => {
	let curVal = extractPos(window.getComputedStyle(element).getPropertyValue('left'));
	element.style.left = `${curVal + amount}px`;
	element.style.transform = (amount < 0) ? 'scale(-1,1)' : 'scale(1,1)';
}

const extractPos = (pos) => {
	return parseInt(pos.slice(0,-2))
};

const moveCoin = () => {
	const y = Math.floor(Math.random() * window.innerHeight)
	const x = Math.floor(Math.random() * window.innerWidth)
	coin.style.top = `${y}px`;
	coin.style.left = `${x}px`;
}

moveCoin();
