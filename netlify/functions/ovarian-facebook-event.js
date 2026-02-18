const crypto = require('crypto');
const { json } = require('stream/consumers');

exports.handler = async (event, context) => {
	try {
		const body = JSON.parse(event.body);

		console.log(event.headers['user-agent']);

		const { event_name, event_source_url, action_source } = JSON.parse(
			event.body,
		);

		const payload = {
			data: [
				{
					event_name,
					event_source_url,
					action_source,
					event_time: Math.floor(Date.now() / 1000),
					user_data: {
						client_ip_address: event.headers['x-forwarded-for'],
						client_user_agent: event.headers['user-agent'],
					},
				},
			],
			test_event_code: 'TEST12345',
		};

		const accessToken = process.env.OVARIAN_EVENT_ACCESS_TOKEN;
		const pixelId = process.env.META_PIXEL_ID;

		console.log('Access token: ', accessToken, 'and PixelID: ', pixelId);

		// console.log('Payload Data: ', payload.data);
		// console.log(
		// 	`URL: https://graph.facebook.com/v25.0/${pixelId}/events?access_token=${accessToken}`,
		// );

		const response = await fetch(
			`https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payload),
			},
		);
		// .then((res) => res.json())
		// .then((data) => {
		// 	console.log(data);
		// });

		// TEST38839

		// if (!response.ok) {
		// 	console.log('Error Message:', response);
		// }

		const data = await response.json();

		console.log(data);

		return {
			statusCode: 200,
			body: JSON.stringify({ data: data }),
		};
	} catch (error) {
		console.error('Meta Conversion API error:', error);

		return {
			statusCode: 500,
			body: JSON.stringify({ error: error.message }),
		};
	}
};
