import bg1 from '../../assets/showcase/bg5.jpg';
import bg2 from '../../assets/showcase/bg6.jpg';
import bg3 from '../../assets/showcase/bg8.jpg';
import bg4 from '../../assets/showcase/bg9.jpg';

const navBtns = document.querySelectorAll('.nav-btn');

const triggerAnimation = () => {
	if (navBtns.length > 0) {
		let current = 0;

		navBtns.forEach((btn) => {
			btn.classList.remove('indicator');
		});

		navBtns.forEach((btn) => btn.classList.remove('indicator'));

		setInterval(() => {
			navBtns.forEach((btn) => btn.classList.remove('indicator'));

			navBtns[current].classList.add('indicator');

			current = (current + 1) % navBtns.length;
		}, 4000);
	}
};

const animateImg = () => {
	const heroImageWrap = document.querySelector('.hero-wrap');
	const imgContainers = document.querySelectorAll('.hero-img');

	const imgsArr = [bg1, bg2, bg3, bg4];

	// animating the images
	if (!heroImageWrap || !imgContainers) return;
	console.log(heroImageWrap, imgContainers);

	imgContainers.forEach((wrap, idx) => {
		wrap.innerHTML = `<img src="${imgsArr[idx % imgContainers.length]}" />`;

		wrap.classList.remove('show-img');
	});

	let currentIndex = 0;

	// imgContainers.forEach((img) => {
	// 	img.classList.remove('show-img');
	// });

	imgContainers[currentIndex].classList.add('show-img');

	setInterval(() => {
		imgContainers[currentIndex].classList.remove('show-img');

		currentIndex = (currentIndex + 1) % imgContainers.length;

		imgContainers[currentIndex].classList.add('show-img');
		console.log('animation');
	}, 4000);
};

animateImg();

export { triggerAnimation };
