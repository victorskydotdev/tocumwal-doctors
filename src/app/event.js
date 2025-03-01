export const sendEventToNetFunct = () => {
	window.addEventListener('DOMContentLoaded', async (e) => {
		const endPoint = '.netlify/functions/submit-form';

		console.log('Hello from events');

		try {
			if (endPoint) {
				const response = await fetch(endPoint);
				const data = JSON.stringify(response.data);

				if (response.status === 200) {
					console.log('Returned from the serverless function');
				} else console.log('Nothing');
				// const res = await fetch(endPoint, {
				// 	method: 'GET',
				// 	headers: {
				// 		'Content-Type': 'application/json',
				// 	},
				// 	// body: 'Hello from events',
				// 	// http GET requests cannot have a body
				// });

				// if (!res.ok) {
				// 	console.log('this event did not fire');
				// } else console.log(res);
			} else console.log('Endpoint not avaailable');
		} catch (error) {
			console.log('Error:', error);
		}
	});
};
