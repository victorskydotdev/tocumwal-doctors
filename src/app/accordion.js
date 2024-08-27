const accordionItems = document.querySelectorAll('.accordion-item');

const accordionFunct = () => {
	accordionItems.forEach((item) => {
		const header = item.querySelector('.accordion-header-wrap');
		header.addEventListener('click', () => {
			const content = item.querySelector('.accordion-content');
			const isExpanded = item.classList.contains('active');

			accordionItems.forEach((item) => item.classList.remove('active'));

			if (!isExpanded) {
				item.classList.add('active');
			}
		});
	});
};

export { accordionFunct };
