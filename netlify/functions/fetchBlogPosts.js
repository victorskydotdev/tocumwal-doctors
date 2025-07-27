require('dotenv').config();

const accessToken = process.env.ACCESS_TOKEN_SECRET;
const spaceId = process.env.SPACE_ID;
const contentfulEnvironment = process.env.ENVIRONMENT;

console.log(contentfulEnvironment);

// console.log(accessToken, spaceId, contentfulEnvironment);

exports.handler = async (event, context) => {
	const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/${contentfulEnvironment}/entries?access_token=${accessToken}&content_type=blogPosts&include=1`;

	try {
		const response = await fetch(url);
		const data = await response.json();

		console.log('Fetched data:', data);

		const assetMap = new Map();
		data.includes?.Asset?.forEach((asset) => {
			assetMap.set(asset.sys.id, asset.fields.file.url);
		});

		const blogposts = data.items.map((post) => {
			const fields = post.fields;
			const imageId = fields.imageMasthead?.sys?.id;
			const imageUrl = assetMap.get(imageId);

			console.log('Full fields object:', JSON.stringify(fields, null, 2));

			return {
				id: post.sys.id,
				blogTitle: fields.title,
				intro: fields.introParagraph,
				post1: fields.blogContent,
				post2: fields.blogContent2,
				post3: fields.blogContent3,
				post4: fields.blogContent4,
				dateTime: fields.dateTime,
				image: imageUrl ? `https:${imageUrl}` : null,
			};
		});

		return {
			statusCode: 200,
			body: JSON.stringify({ blogposts }),
		};
	} catch (error) {
		return {
			statusCode: 500,
			body: JSON.stringify({
				message: 'Error fetching blog posts',
				error: error.message,
			}),
		};
	}
};

// const postGotten = post.find(post => post.id === blogPostId);
