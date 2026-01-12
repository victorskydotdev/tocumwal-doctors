import introImg from '../../assets/website-intro-post.jpg';

const welcomeModal = document.querySelector('.site-welcome-modal');

const modalPopup = () => {
	const template = (params) => {
		return `
      <div class="container">
        <div class="wrap">
          <h3 class="text">
            <span>Hey</span>
            <span>there,</span>
            <span>We</span>
            <span>are</span>
            <span>wishing</span>
            <span>you</span>
            <span>a</span>
            <span>heartfelt</span>
            <span>Happy</span>
            <span>and</span>
            <span>Healthy</span>
            <span>New</span>
            <span>Year 🎉</span>
          </h3>

          <img class="img site-intro-img" src="${params}" alt="Welcome image" />

          <div class="btn-wrap">
            <button class="to-site-btn">Continue to site</button>
          </div>
        </div>
        
      </div>
    `;
	};

	function loadSiteIntro() {
		welcomeModal.classList.add('display-welcome-modal');
		welcomeModal.innerHTML = template(introImg);

		const spans = document.querySelectorAll('span');
		const siteIntroImg = document.querySelector('.site-intro-img');
		const toSiteBtn = document.querySelector('.to-site-btn');

		setTimeout(() => {
			spans.forEach((span, index) => {
				setTimeout(() => {
					span.classList.add('animate-text');

					setTimeout(() => {
						span.classList.remove('animate-text');
					}, 6000);
				}, index * 200);
			});
		}, 800);

		setTimeout(() => {
			siteIntroImg.classList.add('scale-img');

			setTimeout(() => {
				toSiteBtn.classList.add('btn-slide-up');
			}, 300);
		}, 9000);
	}

	setTimeout(() => {
		loadSiteIntro();
	}, 50);
};

const continueToSite = () => {
	document.addEventListener('click', (e) => {
		if (e.target.closest('.to-site-btn')) {
			console.log('button clicked');

			welcomeModal.classList.remove('display-welcome-modal');
		}
	});
};

continueToSite();

export { modalPopup };
