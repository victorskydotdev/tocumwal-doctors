// helpers
const $ = (id) => document.getElementById(id);

export const renderBlogArticlesOnBlogPage = async () => {
	if ($('blog-posts-wrap')) {
		// article template
		const articleTemplate = (article) => {
			return `
        <div class="wrapper">
          <div class="blog-img-wrap">
            <img src="${article.image}" class='article-img' alt="${article.id}"/>
          </div>

          <div class="blog-text-wrap">
            <h4 class="blog-title">
              ${article.blogTitle}
            </h4>

            <div class="btn-wrap">
              <button data-id="${article.id}" class="blog-btn">Read this article</button>
            </div>
          </div>
        </div>
      `;
		}; // end of article template

		// fetching the endpoint for the blog fetched by the backend API endpoint
		const url = '/.netlify/functions/fetchBlogPosts';

		try {
			const response = await fetch(url);

			if (!response) {
				throw new Error('Encountered an error');
			} else {
				const fetchedBlogArticles = await response.json();

				const assetMap = new Map();
				fetchedBlogArticles?.data?.includes?.Asset?.forEach((fetchedAsset) => {
					assetMap.set(fetchedAsset.sys.id, fetchedAsset.fields.file.url);
				});

				const blogArticles = fetchedBlogArticles?.data?.items?.map(
					(article) => {
						const fields = article.fields;
						const imageId = fields.imageMasthead?.sys?.id;
						const imageUrl = assetMap.get(imageId);

						// console.log(fields);

						return {
							id: article.sys.id,
							blogTitle: fields.title,
							article: fields.blogContent,
							dateTime: fields.dateTime,
							image: imageUrl ? `https:${imageUrl}` : null,
						};
					},
				);

				const articlesHTML = blogArticles
					.map((article) => articleTemplate(article))
					.join('');

				const blogArticlesWrap = $('blog-posts-wrap');

				blogArticlesWrap.innerHTML = articlesHTML;

				const blogBtns = document.querySelectorAll('.blog-btn');

				if (blogBtns) {
					blogBtns.forEach((btn) => {
						btn.addEventListener('click', (e) => {
							e.preventDefault();

							const blogPostId = e.target.getAttribute('data-id');

							const blogPost = blogArticles.find(
								(article) => article.id === blogPostId,
							);

							if (blogPost) {
								sessionStorage.setItem(
									'selectedBlogPost',
									JSON.stringify(blogPost),
								);
							}

							window.location.href = '/blog/post.html';
						});
					});
				}
			}
		} catch (error) {
			console.log('Error:', error);
		}
	}
};
