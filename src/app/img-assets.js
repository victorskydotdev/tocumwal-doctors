import heroBg from '../assets/tocumwal-hero-bg.jpg';
import aboutIntroImg from '../assets/toc-about-aside.jpg';
import docImg1 from '../assets/team-img1.png';
import docImg2 from '../assets/team-img2.jpg';

// about page img imports
import aboutHeroBg from '../assets/about-bg.png';
import sectionImgOneJpg from '../assets/about-img1.jpg';
import sectionImgTwoJpg from '../assets/about-img1.jpg';
import medProfImg from '../assets/med-professional.jpg';
import wavebg from '../assets/wave.jpg';
// end of img assets import

// dom variables
const heroImgWrap = document.querySelector('.hero-img-wrap');
const aboutSectionImgWrap = document.querySelector('.about-section-img');
const docImg1Wrap = document.querySelector('.doc-img1');
const docImg2Wrap = document.querySelector('.doc-img2');

// contact page imgs
const contactBgWrap = document.querySelector('.bg-img-wrap');

// about page imgs
const aboutImgWrap = document.querySelector('.about-img-wrap');
const sectionImgOne = document.querySelector('.section2-img1');
const sectionImgTwo = document.querySelector('.section2-img2');
const medProfImgWrap = document.querySelector('.med-prof');
const waveBgWrap = document.querySelector('.section4-bg');

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

	const contactBgTemplate = `
    <img class="contact-bg" src="${heroBg}" alt="" />
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

	if (contactBgWrap) {
		contactBgWrap.innerHTML += contactBgTemplate;
	}

	// about img function script
	if (aboutImgWrap) {
		const aboutHeroTemplate = `
		<img src="${aboutHeroBg}" class="about-hero" alt="office reception image" />
	`;

		aboutImgWrap.innerHTML += aboutHeroTemplate;
	}

	if (sectionImgOne) {
		const sectionImgOneTemp = `
    <img src="${sectionImgOneJpg}" alt="" />
  `;

		sectionImgOne.innerHTML += sectionImgOneTemp;
	}

	if (sectionImgTwo) {
		const sectionImgTwoTemp = `
    <img src="${sectionImgTwoJpg}" alt="" />
  `;

		sectionImgTwo.innerHTML += sectionImgTwoTemp;
	}

	if (medProfImgWrap) {
		const medProfTemplate = `
			<img src="${medProfImg}" alt="" />
		`;

		medProfImgWrap.innerHTML += medProfTemplate;
	}

	if (waveBgWrap) {
		const waveBgTemplate = `
			<img src="${wavebg}" alt="" />
		`;

		waveBgWrap.innerHTML += waveBgTemplate;
	}
};

export { loadImgAssets };
