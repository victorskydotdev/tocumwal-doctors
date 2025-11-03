import avatar from '../../assets/favicon.png';
import { marked } from 'marked';
const articleElement = document.querySelector('.blog-article');

// marked configuration
marked.setOptions({
	breaks: true,
	gfm: true,
});

export const renderBlogPost = (post) => {
	if (articleElement) {
		const fetchedPost = JSON.parse(sessionStorage.getItem('selectedBlogPost'));

		console.log(fetchedPost);

		const title = fetchedPost ? fetchedPost.blogTitle : post.blogTitle;
		const dateTime = fetchedPost ? fetchedPost.dateTime : post.dateTime;
		const image = fetchedPost ? fetchedPost.image : post.image;
		const fetchedArticle = fetchedPost ? fetchedPost.article : post.article;

		// converting the markdown article format into HTML
		const article = marked(fetchedArticle);

		// formatting the date and time
		const formattedDate = new Date(dateTime).toLocaleDateString('en-us', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});

		if (fetchedPost) {
			articleElement.innerHTML = `
      
      <div class="container">
        <div class="masthead">
          <div class="heading-section">
            <p class="date-time">Published ${formattedDate}</p>
            <h1 class="blog-article-title">${title}</h1>

            <div class="author-wrap">
              <div class="avatar-img-wrap">
                <img src="${avatar}" alt="Tocumwal Doctors Logo" class="author-avatar">
              </div>

              <p class="author-name">Doctors At Tocumwal</p>
            </div>
          </div>

          <div class="img-wrap">
            ${
							image
								? `<img src="${image}" alt="${title}" class="blog-article-image">`
								: ''
						}
          </div>
        </div>

        <div class="blog-article-content">
         

          <div class="blog-article-posts">
            <p class="post">${article}</p>
          </div>
        </div>
      </div>
		`;
		}
	}
};
