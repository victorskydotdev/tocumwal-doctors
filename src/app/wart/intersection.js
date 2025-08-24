const intersectionObserver = new IntersectionObserver((entries) => {
	entries.forEach((el) => {
		if (el.isIntersecting) {
			el.target.classList.add('show-ad');
		} else {
			el.target.classList.remove('show-ad');
		}
	});
});

const wartAdElements = document.querySelectorAll('.wart-ad-animation');
const wartAdBtn = document.querySelector('.wart-ad-btn');

if (wartAdBtn) {
	wartAdBtn.addEventListener('click', () => {
		window.location.href = '/wart-treatment';
	});
}

export const runIntersectionOb = () => {
	wartAdElements.forEach((el) => {
		intersectionObserver.observe(el);
		// console.log('Hello world');
	});
};
