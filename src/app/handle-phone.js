const fixedPhone = document.querySelector('.positioned-phone');

export const showPhoneOnScroll = () => {};
document.addEventListener('scroll', () => {
	if (fixedPhone) {
		if (scrollY >= 400) {
			fixedPhone.classList.add('show-phone');
		} else fixedPhone.classList.remove('show-phone');
	} else return;
});
