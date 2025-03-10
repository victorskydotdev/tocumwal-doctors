const MailGun = require('mailgun.js');

exports.handler = async (request, context) => {
	const logRequest = request;
	console.log(request.body);

	if (request.httpMethod !== 'POST') {
		return {
			statusCode: 405,
			body: JSON.stringify({ error: 'Method Not Allowed' }),
		};
	}

	async function sendMEssageWithMailgun() {
		try {
			const formData = JSON.parse(request.body);
			const { name, email, message } = formData;

			const mailgun = new MailGun();
			const mg = mailgun.client({
				username: 'api',
				key: process.env.MAILGUN_SECRET,
			});

			const DOMAIN = 'sandbox3ca55b77450b42a1abd704e6efae3fb4.mailgun.org';

			const toEmail = 'feedback@tocumwaldoctors.com';

			const response = await mg.messages.create(DOMAIN, {
				from: `Form Submission <no-reply@${DOMAIN}>`,
				to: toEmail,
				subject: 'New Form Submission',
				text: `You have received a new message from ${name} (${email``}):\n\n${message}`,
			});

			return {
				statusCode: 200,
				body: JSON.stringify({ success: true, response }),
			};
		} catch (error) {
			return {
				statusCode: 500,
				body: JSON.stringify({
					error: 'Failed to send email',
					details: error.message,
				}),
			};
		}
	}

	return await sendMEssageWithMailgun();
};
