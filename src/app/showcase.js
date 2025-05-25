import img1 from '../assets/showcase/bg1.jpg';
import img2 from '../assets/showcase/bg2.jpg';
import img3 from '../assets/showcase/bg3.jpg';
import img4 from '../assets/showcase/bg4.jpg';
import img5 from '../assets/showcase/bg5.jpg';
import img6 from '../assets/showcase/bg6.jpg';
import img7 from '../assets/showcase/bg7.jpg';
import img8 from '../assets/showcase/bg8.jpg';
import img9 from '../assets/showcase/bg9.jpg';

const showcaseWrap = document.querySelectorAll('.showcase1');
const showcaseWrapTwo = document.querySelectorAll('.showcase2');
const showcaseWrapThree = document.querySelectorAll('.showcase3');
const showcaseWrapFour = document.querySelectorAll('.showcase4');
const showcaseWrapFive = document.querySelectorAll('.showcase5');
const showcaseWrapSix = document.querySelectorAll('.showcase6');
const showcaseWrapSeven = document.querySelectorAll('.showcase7');
const showcaseWrapEight = document.querySelectorAll('.showcase8');
const showcaseWrapNine = document.querySelectorAll('.showcase9');

const helperFunction = (images) => {
	return `<img src="${images}" alt="" />`;
};

export const loadShowCaseImages = () => {
	showcaseWrap.forEach((el) => {
		el.innerHTML = helperFunction(img1);
	});
	showcaseWrapTwo.forEach((el) => {
		el.innerHTML = helperFunction(img2);
	});
	showcaseWrapThree.forEach((el) => {
		el.innerHTML = helperFunction(img3);
	});
	showcaseWrapFour.forEach((el) => {
		el.innerHTML = helperFunction(img4);
	});
	showcaseWrapFive.forEach((el) => {
		el.innerHTML = helperFunction(img5);
	});
	showcaseWrapSix.forEach((el) => {
		el.innerHTML = helperFunction(img6);
	});
	showcaseWrapSeven.forEach((el) => {
		el.innerHTML = helperFunction(img7);
	});
	showcaseWrapEight.forEach((el) => {
		el.innerHTML = helperFunction(img8);
	});
	showcaseWrapNine.forEach((el) => {
		el.innerHTML = helperFunction(img9);
	});
};
