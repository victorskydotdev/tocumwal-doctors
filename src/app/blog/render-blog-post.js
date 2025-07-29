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

		const title = fetchedPost ? fetchedPost.blogTitle : post.blogTitle;
		const dataTime = fetchedPost ? fetchedPost.dateTime : post.dateTime;
		const image = fetchedPost ? fetchedPost.image : post.image;
		const intro = fetchedPost ? fetchedPost.intro : post.intro;
		const post1 = fetchedPost ? fetchedPost.post1 : post.post1;
		const post2 = fetchedPost ? fetchedPost.post2 : post.post2;
		const post3 = fetchedPost ? fetchedPost.post3 : post.post3;
		const post4 = fetchedPost ? fetchedPost.post4 : post.post4;

		if (fetchedPost) {
			articleElement.innerHTML = `
      
      <div class="container">
        <div class="masthead">
          <div class="heading-section">
            <p class="date-time">${dataTime}</p>
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
          <div class="blog-article-intro">
            <h3 class="intro">Introduction</h3>
            <p class="blog-article-intro-text">${marked(intro ? intro : '')}</p>
          </div>

          <div class="blog-article-posts">
            <p class="post">${marked(post1 ? post1 : '')}</p>
          </div>
        </div>
      </div>
		`;
		}
	}
};
