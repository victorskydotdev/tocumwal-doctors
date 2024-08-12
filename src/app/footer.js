import footerLogo from '../assets/brand.png';

const footerLogoWrap = document.querySelector('.footer-brand-logo');

const loadFooterImgs = () => {
	const footerLogoTemplate = `
    <img class="hero-bg" src="${footerLogo}" alt="" />
  `;

	if (footerLogoWrap) {
		footerLogoWrap.innerHTML += footerLogoTemplate;
	}
};

export { loadFooterImgs };
