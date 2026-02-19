const crypto = require('crypto');

exports.handler = async (event, context) => {
	try {
		const { event_name, event_source_url, action_source } = JSON.parse(
			event.body,
		);

		const userPhone = '08100784622';

		const phone = userPhone.replace(/\D/g, '');
		const normalizedPhone = phone.startsWith('0')
			? `234${phone.slice(1)}`
			: phone;

		const hashedPhone = crypto
			.createHash('sha256')
			.update(normalizedPhone)
			.digest('hex');

		const userEmail = 'victorsky90@gmail.com';
		const email = userEmail.toLocaleLowerCase().trim();
		const hashedEmail = crypto.createHash('sha256').update(email).digest('hex');

		const clientIP = event.headers['client-ip'];

		const payload = {
			data: [
				{
					event_name,
					event_source_url,
					action_source,
					event_time: Math.floor(Date.now() / 1000),
					user_data: {
						client_ip_address: clientIP,
						client_user_agent: event.headers['user-agent'],
						em: hashedEmail,
						ph: hashedPhone,
					},
				},
			],

			test_event_code: 'TEST12345',
		};

		console.log('Payload on Serverless:', payload);

		const accessToken = process.env.OVARIAN_EVENT_ACCESS_TOKEN;
		const pixelId = process.env.META_PIXEL_ID_OVARIAN;

		console.log('Access Token:', accessToken, 'and Pixel ID:', pixelId);

		const fbEndPoint = `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`;

		const response = await fetch(fbEndPoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		});

		if (!response.ok) console.log('Response not ok');

		const data = await response.json();

		console.log('Data: ', data);

		return {
			statusCode: 200,
			body: JSON.stringify({ success: true, data: data }),
		};
	} catch (error) {
		console.error('Error: ', error);

		return {
			statusCode: 500,
			body: JSON.stringify({ success: false, error: error.message }),
		};
	}
};
