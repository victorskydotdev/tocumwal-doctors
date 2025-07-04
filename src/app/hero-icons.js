import icon1 from '../assets/icons/blood-test.png';
import icon2 from '../assets/icons/first-aid-box.png';
import icon3 from '../assets/icons/health-check.png';
import icon4 from '../assets/icons/drugs.png';

const iconOneWrap = document.querySelector('.icon1');
const iconTwoWrap = document.querySelector('.icon2');
const iconThreeWrap = document.querySelector('.icon3');
const iconFourWrap = document.querySelector('.icon4');

const templateOne = () => {
	return `
    <img src="${icon1}" alt="" />
  `;
};
const templateTwo = () => {
	return `
    <img src="${icon2}" alt="" />
  `;
};
const templateThree = () => {
	return `
    <img src="${icon3}" alt="" />
  `;
};
const templateFour = () => {
	return `
    <img src="${icon4}" alt="" />
  `;
};

export const loadIcons = () => {
	if (iconOneWrap) {
		iconOneWrap.innerHTML = templateOne();
	}

	if (iconTwoWrap) {
		iconTwoWrap.innerHTML = templateTwo();
	}

	if (iconThreeWrap) {
		iconThreeWrap.innerHTML = templateThree();
	}

	if (iconFourWrap) {
		iconFourWrap.innerHTML = templateFour();
	}
};
