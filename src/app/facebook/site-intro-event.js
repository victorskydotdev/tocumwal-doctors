const siteWelcomeModal = document.querySelector('.site-welcome-modal');

const sendSiteIntroEvent = () => {
	document.addEventListener('click', async (event) => {
		if (event.target.closest('.to-site-btn')) {
			try {
				const link = `/.netlify/functions/send-site-intro-event`;

				await fetch(link, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						event_name: 'SiteIntroButtonClick',
						event_source_url: window.location.href,
						action_source: 'website',
						user_data: {
							client_user_agent: navigator.userAgent,
						},
					}),
				})
					.then((res) => res.json())
					.then((data) => console.log(data));
			} catch (error) {
				console.error(error);
			}
		}
	});
};

export { sendSiteIntroEvent };
