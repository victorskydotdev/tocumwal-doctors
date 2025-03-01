const feedbackBtn = document.querySelector('.feedback-btn');

export const submitFBackForm = () => {
	if (feedbackBtn) {
		feedbackBtn.addEventListener('click', () => {
			alert('Form Not Connected');
		});
	}
};
