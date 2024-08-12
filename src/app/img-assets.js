import heroBg from '../assets/tocumwal-hero-bg.jpg';
import aboutIntroImg from '../assets/toc-about-aside.jpg';
import docImg1 from '../assets/team-img1.png';
import docImg2 from '../assets/team-img2.jpg';

// end of img assets import

// dom variables
const heroImgWrap = document.querySelector('.hero-img-wrap');
const aboutSectionImgWrap = document.querySelector('.about-section-img');
const docImg1Wrap = document.querySelector('.doc-img1');

const docImg2Wrap = document.querySelector('.doc-img2');

const loadImgAssets = () => {
	const heroImgTemplate = `
    <img class="hero-bg" src="${heroBg}" alt="" />
  `;

	const aboutSectionImgTemplate = `
	<img class="about-section-bg" src="${aboutIntroImg}" alt="" />
  `;

	const doc1ImgTemplate = `
    <img class="about-section-bg" src="${docImg1}" alt="" />
  `;

	const doc2ImgTemplate = `
    <img class="about-section-bg" src="${docImg2}" alt="" />
  `;

	if (heroImgWrap) {
		heroImgWrap.innerHTML += heroImgTemplate;
	}

	if (aboutSectionImgWrap) {
		aboutSectionImgWrap.innerHTML += aboutSectionImgTemplate;
	}

	if (docImg1Wrap && docImg2Wrap) {
		docImg1Wrap.innerHTML += doc1ImgTemplate;
		docImg2Wrap.innerHTML += doc2ImgTemplate;
	}
};

export { loadImgAssets };
