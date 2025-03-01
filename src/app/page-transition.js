const animateElem = document.querySelectorAll('.animate-element');
const secTransElems = document.querySelectorAll('.second-trans-element');

const enablePageTransition = () => {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry, index) => {
			if (entry.isIntersecting) {
				// console.log(entry.target);
				// console.log(entry.isIntersecting);
				setTimeout(() => {
					entry.target.classList.add('animate');
					entry.target.classList.add('animate-from-side');
				}, index * 200);
			} // else if (!entry.isIntersecting) {
			// 	setTimeout(() => {
			// 		entry.target.classList.remove('animate');
			// 		entry.target.classList.remove('animate-from-side');
			// 	}, index * 200);
			// }
		});
	});

	const options = {
		root: null,
		rootMargin: '1500px',
		threshold: 0.2,
	};

	if (animateElem) {
		animateElem.forEach((element) => {
			observer.observe(element, options);
		});
	}

	if (secTransElems) {
		secTransElems.forEach((element) => {
			observer.observe(element, options);
		});
	}
};

export { enablePageTransition };
