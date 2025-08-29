import wartHeroImg from '../../assets/wart/wart-free skin.jpg';

import img1 from '../../assets/wart/wart-feet.jpg';
import img2 from '../../assets/wart/wart-free-feet.jpg';
import img3 from '../../assets/wart/clear-skin-lady3.jpg';

import img4 from '../../assets/wart/img1.jpg';
import img5 from '../../assets/wart/img3.jpg';
import img6 from '../../assets/wart/img3.jpg';

import img7 from '../../assets/wart/wart-machine-image1.jpg';

import firstShowcaseImg from '../../assets/wart/clear-skin-lady.jpg';
import doctorsImg from '../../assets/wart/doctors.jpg';

const images = [img1, img2, img3];

// images array for the benefits divs
const wrapImagesArr = [img4, img5, img6, img6, img6, img6];

const faceCard = document.querySelectorAll('.face-card');
const wartMachineImgWrap = document.querySelector('.machine-img');
const doctorsImgWrap = document.querySelector('.darma-img-wrap');
const benefitsWrap = document.querySelectorAll('.benefit');

const wartAdSection = document.querySelector('.wart-ad-img');

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

	if (wartMachineImgWrap) {
		wartMachineImgWrap.innerHTML += `<img src="${img7}" alt="Wart Removal Machine Demo" />`;
	}

	if (doctorsImgWrap) {
		doctorsImgWrap.innerHTML += `<img src="${doctorsImg}" alt="Doctors at Tocumwal" />`;
	}

	if (benefitsWrap) {
		benefitsWrap.forEach((element, index) => {
			const wrapImgSrc = wrapImagesArr[index];

			element.innerHTML += `<img src="${wrapImgSrc}" alt="benefits image" />`;
		});
	}

	if (wartAdSection) {
		wartAdSection.innerHTML += `<img src="${img7}" alt="Wart Treatment Hero" class="img" />`;
	}
};
