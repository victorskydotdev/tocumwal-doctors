const ctaBtns = document.querySelectorAll('.cta-btn');

const eventUrl = `/.netlify/functions/sendEvent`;

export const sendEventData = () => {
	ctaBtns.forEach((button) => {
		button.addEventListener('click', async (e) => {
			e.preventDefault();

			// alert('CTA button clicked');

			try {
				// passing it into a response variable means that I want to do something with the response after the POST data has been sent
				const response = await fetch(eventUrl, {
					method: 'POST',
					headers: {
						'Content-type': 'application/json',
					},

					body: JSON.stringify({
						event_name: 'ButtonClick',
						event_source_url: window.location.href,
						action_source: 'website',
						user_data: {
							// For best match, send hashed email if you have it
							em: null,
							ph: '08100784622',
						},
					}),
				});

				if (!response.ok) {
					console.log("data wasn't sent");
				} else {
					const data = await response.json();

					console.log(data);
				}
			} catch (error) {
				console.log('Error sending eventData', error);
			}
		});
	});
};
