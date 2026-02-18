const ovarianEventBtns = document.querySelectorAll('.ovarian-btn');

// const

const sendOvarianEvent = () => {
	// ovarianEventBtns.forEach((btn) => {
	document.addEventListener('click', async (e) => {
		// e.preventDefault();
		if (e.target.closest('.ovarian-btn')) {
			const eventLink = '/.netlify/functions/ovarian-facebook-event';

			try {
				await fetch(eventLink, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						event_name: 'ovarianButtonClick',
						event_source_url: window.location.href,
						action_source: 'website',
						// user_data: {
						// 	em: null,
						// 	ph: '08100784622',
						// },
					}),
				})
					.then((res) => res.json)
					.then((data) => console.log(data));
			} catch (error) {
				console.error('Error:', error);
			}
		}
	});
	// });
};

export { sendOvarianEvent };

// 30 emili akiola street yaba
