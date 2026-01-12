const servicesInfoTrack = document.getElementById('services-info-track');
const slides = document.querySelectorAll('.slide');
const serviceNavBtns = document.querySelectorAll('.service-nav-btn');

let currentIdx = 0;

const slider = (e) => {
	if (slides.length > 0) {
		// console.log('Hello world');

		slides.forEach((slide, index) => {
			slide.classList.remove('show-slide');
		});

		slides[currentIdx].classList.add('show-slide');

		setInterval(() => {
			slides[currentIdx].classList.remove('show-slide');

			currentIdx = (currentIdx + 1) % slides.length;

			slides[currentIdx].classList.add('show-slide');
		}, 5000);

		// slides.forEach((slide, index) => {
		// 	const slideId = slide.getAttribute('data-id');
		// });
	}
};

let index = 0;

const animateNavBtns = () => {
	if (serviceNavBtns.length > 0) {
		serviceNavBtns.forEach((btn) => {
			btn.classList.remove('animate-nav-btns');
		});

		serviceNavBtns[index].classList.add('animate-nav-btns');

		setInterval(() => {
			serviceNavBtns[index].classList.remove('animate-nav-btns');

			index = (index + 1) % serviceNavBtns.length;

			serviceNavBtns[index].classList.add('animate-nav-btns');
		}, 5000);
	}
};

animateNavBtns();

export { slider };
