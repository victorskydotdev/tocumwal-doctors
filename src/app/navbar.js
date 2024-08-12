import logo from '../assets/brand.png';
// end of img asset import

// dom variables
const logoContainer = document.querySelector('.brand-logo');

const loadNavbar = () => {
	const brandImgTemplate = `
    <img class="logo" src="${logo}" alt="" />
  `;

	if (logoContainer) {
		logoContainer.innerHTML += brandImgTemplate;
	}
};

export { loadNavbar };
