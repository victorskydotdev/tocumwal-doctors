import logoIcon from '../../assets/favicon.png';

const iconElements = document.querySelectorAll('.icon-element');

const displayIcon = (e) => {
	const iconTemplate = (event) => {
		return `
      <img src="${event}" alt="logo icon" />
    `;
	};

	iconElements.forEach((element, index) => {
		element.innerHTML = iconTemplate(logoIcon);
	});
};

export { displayIcon };
