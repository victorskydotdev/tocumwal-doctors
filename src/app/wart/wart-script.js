import wartHeroImg from '../../assets/wart/wart-free-skin2.jpg';

import img1 from '../../assets/wart/wart-feet.jpg';
import img2 from '../../assets/wart/wart-free-feet.jpg';
import img3 from '../../assets/wart/clear-skin-lady3.jpg';

import img4 from '../../assets/wart/img1.jpg';
import img5 from '../../assets/wart/img3.jpg';
import img6 from '../../assets/wart/img3.jpg';

// imgs array
const images = [img1, img2, img3];

import img7 from '../../assets/wart/wart-machine-image1.jpg';

import clearFacedPatient from '../../assets/wart/clear-faced-patient.jpg';
import doctorsImg from '../../assets/wart/doctors.jpg';
import gpSectionImg from '../../assets/wart/nurse-wart-img.jpg';

import wartBoyImg from '../../assets/wart/wart-boy-img.png';

// slide images
import slideImg1 from '../../assets/wart/slider-img1.jpg';
import slideImg2 from '../../assets/wart/slider-img2.jpg';
import slideImg3 from '../../assets/wart/slider-img3.jpg';
import slideImg4 from '../../assets/wart/slider-img4.jpg';
import slideImg5 from '../../assets/wart/slider-img5.jpg';

// slideImgs array
const slideImgs = [
	slideImg1,
	slideImg2,
	slideImg3,
	slideImg4,
	slideImg5,
	slideImg1,
	slideImg2,
	slideImg3,
	slideImg4,
	slideImg5,
];

// images array for the benefits divs
const wrapImagesArr = [img4, img5, img6, img6, img6, img6];

const faceCard = document.querySelectorAll('.face-card');
const wartMachineImgWrap = document.querySelector('.machine-img');
const firstImgWrap = document.querySelector('.first-img-wrap');
const positionedWartImg = document.querySelector('.pos-wart-img');
const doctorsImgWrap = document.querySelector('.darma-img-wrap');

const wartAdultWrap = document.querySelector('.adult-img-wrap');
const wartChildWrap = document.querySelector('.child-img-wrap');

const benefitsWrap = document.querySelectorAll('.benefit');

const wartAdSection = document.querySelector('.wart-ad-img');

// slide images elements
const slideImgsWrap = document.querySelectorAll('.slide-img');

// buttons array
const wartBtn = document.querySelectorAll('.wart-appoint-btn');

// trigger the appointment booking functionality on the buttons
if (wartBtn) {
	wartBtn.forEach((btn) => {
		btn.addEventListener('click', () => {
			window.open(
				'https://onlineappts3.medi2apps.com/Appointments/Doctors%20@%20Tocumwal?app=1',
				'_blank'
			);
		});
	});
}

export const renderWartHeroImg = () => {
	if (faceCard) {
		faceCard.forEach((card, index) => {
			const imgSrc = images[index];
			card.innerHTML += `<img src="${imgSrc}" alt="Wart Treatment" class="img" />`;
		});
	}

	if (slideImgsWrap) {
		slideImgsWrap.forEach((imgCard, index) => {
			const imgSrc = slideImgs[index];

			imgCard.innerHTML = `<img src='${imgSrc}' alt="" />`;
		});
	}

	if (firstImgWrap) {
		firstImgWrap.innerHTML += `<img src="${img7}" />`;
	}

	if (positionedWartImg) {
		positionedWartImg.innerHTML += `<img src="${gpSectionImg}" alt="" />`;
	}

	if (wartMachineImgWrap) {
		wartMachineImgWrap.innerHTML += `<img src="${img7}" alt="Wart Removal Machine Demo" />`;
	}

	if (doctorsImgWrap) {
		doctorsImgWrap.innerHTML += `<img src="${doctorsImg}" alt="Doctors at Tocumwal" />`;
	}

	if (wartAdultWrap && wartChildWrap) {
		wartChildWrap.innerHTML += `<img src="${wartBoyImg}" alt="" />`;
		wartAdultWrap.innerHTML += `<img src="${clearFacedPatient}" alt="" />`;
	}

	if (benefitsWrap) {
		benefitsWrap.forEach((element, index) => {
			const wrapImgSrc = wrapImagesArr[index];

			// element.innerHTML += `<img src="${wrapImgSrc}" alt="benefits image" />`;
		});
	}

	if (wartAdSection) {
		wartAdSection.innerHTML += `<img src="${img7}" alt="Wart Treatment Hero" class="img" />`;
	}
};
