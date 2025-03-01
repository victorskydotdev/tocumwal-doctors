exports.handler = async (request, context) => {
	const logRequest = request;

	console.log(logRequest);

	return {
		statusCode: 200,
		body: JSON.stringify({ message: 'Success' }), // ✅ body must be a string
	};
	// try {
	// 	return {
	// 		statusCode: 200,
	// 		body: 'Email sent successfully',
	// 	};
	// } catch (error) {
	// 	console.error('Error sending email', error);
	// 	return {
	// 		statusCode: 500,
	// 		body: 'Email not sent',
	// 	};
	// }
};
