const crypto = require('crypto');

exports.handler = async (event, context) => {
	try {
		const body = JSON.parse(event.body);
		console.log('Body:', body);

		const { event_name, event_source_url, action_source, user_data } = body;

		// clean + hash phone
		const rawPhone = user_data.ph.replace(/\D/g, '');
		const normalizedPhone = rawPhone.startsWith('0')
			? `234${rawPhone.slice(1)}` // Nigeria example; adjust for your country
			: rawPhone;

		const hashedPhone = crypto
			.createHash('sha256')
			.update(normalizedPhone)
			.digest('hex');

		const payload = {
			data: [
				{
					event_name,
					action_source,
					event_time: Math.floor(Date.now() / 1000),
					event_source_url,
					user_data: {
						ph: hashedPhone,
						client_ip_address: event.headers['x-forwarded-for'] || '',
						client_user_agent: event.headers['user-agent'] || '',
					},
				},
			],
		};

		// console.log('Payload:', payload);

		const accessToken = process.env.META_ACCESS_TOKEN;
		const pixelId = process.env.META_PIXEL_ID;

		const response = await fetch(
			`https://graph.facebook.com/v16.0/${pixelId}/events?access_token=${accessToken}`,
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			}
		);

		const fbResponse = await response.json();

		return {
			statusCode: 200,
			body: JSON.stringify({ success: true, fbResponse }),
		};
	} catch (error) {
		console.error('Meta Conversion API error:', error);

		return {
			statusCode: 500,
			body: JSON.stringify({ error: error.message }),
		};
	}
};
