const feedbackBtn = document.querySelector('.feedback-btn');
const feedbackFormModal = document.querySelector('.feedback-form-modal');

const feedbackTemp = () => {
	return `
		<div class="container feedback-form-wrap">
			<div class="form-wrap">
				<form class="feedback-form" id="feedback-form">
					<div class="heading-wrap">
						<h3 class="heading">Patient feedback</h3>
						<p class="subheading">We value your feedback, please let us know how we can improve!</p>
					</div>
			
					<div class="form-fields-wrap">
						<div class="wrap">
							<input
							type="text"
							name="name"
							id="name"
							placeholder="*Your Name" required />
						</div>

						<div class="wrap">
							<input
							type="text"
							name="phone"
							id="phone"
							placeholder="*Your Phone Number" required />
						</div>

						<div class="wrap">
							<input
							type="email"
							name="subscriber-email"
							id="subscriber-email"
							placeholder="*myemail@domain.com" required />
						</div>
						
						<div class="wrap">
							<select for="submit-mode">
								<option value="">Would you like to submit this form anonymously?</option>
								<option value="yes">Yes</option>
								<option value="no">No!</option>
							</select>
						</div>
						
						<div class="wrap">
							<select for="submit-category">
								<option value="">You feedback is regarding:</option>
								<option value="doctor">Doctor</option>
								<option value="nurse">Nurse</option>
								<option value="reception/admin">Reception/Admin</option>
								<option value="general clinic feedback">General clinic feedback</option>
							</select>
						</div>

						<div class="wrap">
							<textarea id="feedback" name="feedback" placeholder="*Please provide a summary of your experience. Add as much detail as you would like.
							" required></textarea>
						</div>

						<div class="consent-wrap">
							<input type="checkbox" name="consent" id="consent" required>

							<label for="consent">
								I consent to my feedback being used for quality improvement purposes. <button class="consent-btn" type="button">Learn More</button>
							</label>
						</div>

						<div class="btn-wrap">
							<button type="submit">Submit Feedback</button>
						</div>

						<div class="close-btn" id="close-btn">
							<i class="fa-solid fa-xmark"></i>
							<span>Close</span>
						</div>
					</div>
				</form>
			</div>
		</div>
	`;
};

export const submitFBackForm = () => {
	if (feedbackBtn && feedbackTemp) {
		feedbackBtn.addEventListener('click', () => {
			feedbackFormModal.classList.add('display-feedback-modal');
			feedbackFormModal.innerHTML = feedbackTemp();

			const feedbackWrap = document.querySelector('.feedback-form-wrap');
			const closeBtn = document.querySelector('#close-btn');

			if (!closeBtn) {
				console.log('No close button in the DOM!');
			} else {
				closeBtn.addEventListener('click', () => {
					setTimeout(() => {
						feedbackFormModal.classList.remove('display-feedback-modal');
					}, 800);

					feedbackWrap.classList.remove('opacity');
				});
			}

			setTimeout(() => {
				feedbackWrap.classList.add('opacity');
			}, 800);

			const feedbackForm = document.getElementById('feedback-form');
			feedbackForm.addEventListener('submit', (e) => {
				e.preventDefault();

				const formData = new FormData(feedbackForm);
				alert('Form not submitted due to official email not connected');

				// console.log(formData);
			});
		});
	}
};
