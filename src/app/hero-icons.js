import img from '../assets/6-months-bg.png';

const imgWrap = document.querySelector('.six-months-wrap');

export const loadIcons = () => {
	const template = () => {
		return `
			<img src="${img}" alt="celebration image" class="img" />
		`;
	};

	if (imgWrap) {
		imgWrap.innerHTML = template();
	}
};
