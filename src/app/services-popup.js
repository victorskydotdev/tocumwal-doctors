const servicesPopupWrap = document.querySelector('.services-popup-wrap');
const servicesWrapElems = document.querySelectorAll('.services-wrap');

// manipulate the popup container
const displayPopup = () => {
	window.addEventListener('DOMContentLoaded', () => {
		if (servicesPopupWrap) {
			setTimeout(() => {
				servicesPopupWrap.classList.add('show-popup');
			}, 2500);

			window.addEventListener('scroll', () => {
				if (window.scrollY >= 1500) {
					servicesPopupWrap.classList.remove('show-popup');
				} else servicesPopupWrap.classList.add('show-popup');
			});
		}
	});
};

displayPopup();

export const animatePopup = () => {
	if (servicesWrapElems.length > 0) {
		let current = 0;

		// servicesWrapElems.forEach((element) => {
		// 	element.classList.remove('animate-popup');
		// });

		setInterval(() => {
			servicesWrapElems.forEach((element) => {
				element.classList.remove('animate-popup');
			});

			servicesWrapElems[current].classList.add('animate-popup');

			current = (current + 1) % servicesWrapElems.length;
		}, 3000);
	}
};
