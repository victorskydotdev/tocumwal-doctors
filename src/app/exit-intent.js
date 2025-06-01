import img from '../assets/exit-intent-img.jpg';

const exitIntentModal = document.querySelector('.exit-intent-modal');
const exitIntentImgWrap = document.querySelector('.exit-intent-img');
const exitCloseBtn = document.querySelector('.exit-close-btn');

const imgTemplate = () => {
	return `
		<img src="${img}" alt="">
	`;
};

let exitIntent = false;
let hasShownModal = false;

export const triggerExitIntent = () => {
	if (!exitIntentImgWrap || !imgTemplate || !exitIntentModal || !exitCloseBtn)
		return;

	exitIntentImgWrap.innerHTML = imgTemplate();

	if (!exitIntent) {
		document.addEventListener('mouseout', (event) => {
			if (event.clientY <= 0 && !hasShownModal) {
				hasShownModal = true;
				exitIntentModal.classList.add('show-exit-intent-popup');
			}
		});

		exitIntent = true;
	}

	if (exitCloseBtn) {
		exitCloseBtn.addEventListener('click', () => {
			// alert('button clicked');

			exitIntentModal.classList.remove('show-exit-intent-popup');
		});
	}
};
