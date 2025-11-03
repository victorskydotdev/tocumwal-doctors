const blogBodyClass = document.querySelector('.blog-post');

const pageName = 'Doctors@Tocumwal Blog & Updates';

const blogPostCards = document.querySelectorAll('.blog-card');

const blogPostTemplate = (post) => {
	return `
		<div class="blog-img-wrap">${post.image}</div>

		<div class="blog-text-wrap">
			<h4 class="blog-title">
				${post.title}
			</h4>
		</div>

		<div class="btn-wrap">
			<button data-id="${post.id}" class="blog-btn">Read this article</button>
		</div>
	`;
};

const fetchBlogPosts = async () => {
	const url = '/.netlify/functions/fetchBlogPosts';
	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error('Network response was not ok');
		} else {
			const fetchedData = await response.json();

			// console.log(data);

			const assetMap = new Map();
			fetchedData?.data?.includes?.Asset?.forEach((asset) => {
				assetMap.set(asset.sys.id, asset.fields.file.url);
			});

			const blogPosts = fetchedData?.data?.items?.map((post) => {
				const fields = post.fields;
				const imageId = fields.imageMasthead?.sys?.id;
				const imageUrl = assetMap.get(imageId);

				return {
					id: post.sys.id,
					blogTitle: fields.title,
					article: fields.blogContent,
					dateTime: fields.dateTime,
					image: imageUrl ? `https:${imageUrl}` : null,
				};
			});

			console.log('Fetched blog posts:', blogPosts);

			// console.log('Data fetched from blogPosts:', blogPosts);

			blogPostCards.forEach((card, index) => {
				if (!blogPosts[index]) {
					card.innerHTML = `
						<div class="no-data-wrap">
							<p class="no-data-content">No blog posts available.</p>
						</div>
					`;
				} else {
					const post = blogPosts[index];

					card.innerHTML = blogPostTemplate({
						image: post.image
							? `<img src="${post.image}" alt="${post.blogTitle}">`
							: '',
						title: post.blogTitle,
						id: post.id,
					});

					console.log(post.image);

					const blogBtns = document.querySelectorAll('.blog-btn');

					if (blogBtns) {
						blogBtns.forEach((btn) => {
							btn.addEventListener('click', (e) => {
								e.preventDefault();

								const blogPostId = btn.getAttribute('data-id');
								// console.log('Blog post ID:', blogPostId);

								const blogPost = blogPosts.find(
									(post) => post.id === blogPostId
								);

								// console.log('Selected blog post:', blogPost);
								if (blogPost) {
									sessionStorage.setItem(
										'selectedBlogPost',
										JSON.stringify(blogPost)
									);
								}

								// redirect to the blog post page after we have found the matching blog post with the ID
								// console.log('Redirecting to blog post page...');
								window.location.href = '/blog/post.html';
							});
						});
					}
				}
			});

			// console.log('Blog posts fetched successfully:', blogPosts);
			modifyBlogPageTitle();
		}
	} catch (error) {
		console.error('Error fetching blog posts:', error);
	}
};

fetchBlogPosts();

const modifyBlogPageTitle = () => {
	if (blogBodyClass) {
		document.title = `Winter health guide by ${pageName}`;
	} else console.log('Dynamic page title not loading');
};

export { modifyBlogPageTitle };
