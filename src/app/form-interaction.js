const feedbackForm = document.querySelector('.feedback-form');

export const submitForm = () => {
	if (feedbackForm) {
		feedbackForm.addEventListener('submit', async (e) => {
			e.preventDefault();

			const formData = new FormData(e.target);

			const jsonData = {};

			for (const [key, value] of formData.entries()) {
				jsonData[key] = value;
			}

			try {
				const endPoint = '.netlify/functions/submit-form';

				const res = await fetch(endPoint, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(jsonData),
				});

				if (!res.ok) {
					console.log('Form not submitted!');
				} else {
					alert('Form sumitted successfully');
				}
			} catch (error) {
				console.error('Error:', error);
			}
		});
	}
};
