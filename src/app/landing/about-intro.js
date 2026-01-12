import checkMark from '../../assets/icons/check-mark.svg';

const iconWrap = document.querySelectorAll('.about-intro-icon');

const aboutIntroSection = (e) => {
	if (!iconWrap) return;

	iconWrap.forEach((wrap) => {
		wrap.innerHTML = `<img src="${checkMark}" alt="ckeck-mask" />`;
	});
};

export { aboutIntroSection };
