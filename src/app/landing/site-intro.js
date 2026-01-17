// import introImg from '../../assets/website-intro-post.jpg';
import introImg from '../../assets/workout4women/workout4women-1.jpg';

const welcomeModal = document.querySelector('.site-welcome-modal');

const modalPopup = () => {
	const template = (params) => {
		return `
      <div class="container">
        <div class="wrap">
          <h3 class="text">
            <span>Hello</span>
            <span>there!</span>
            <span>Our</span>
            <span>staff</span>
            <span>are</span>
            <span>embarking</span>
            <span>on an 80km</span>
            <span>walk</span>
            <span>for Ovarian Cancer.</span>
            <span>We'll love to</span>
            <span>have you</span>
            <span>support</span>
            <span>us</span>
          </h3>

          <img class="img site-intro-img" src="${params}" alt="Welcome image" />

          <div class="btn-wrap">
            <button class="to-site-btn">Continue to site</button>
          </div>
        </div>
        
      </div>
    `;
	};

	let siteIntro = false;
	let hasShownSiteIntro =
		sessionStorage.getItem('hasShownSiteIntro') === 'true';

	function loadSiteIntro() {
		if (!welcomeModal) return;

		if (!siteIntro && !hasShownSiteIntro) {
			welcomeModal.classList.add('display-welcome-modal');
			welcomeModal.innerHTML = template(introImg);

			const spans = document.querySelectorAll('span');
			const siteIntroImg = document.querySelector('.site-intro-img');
			const toSiteBtn = document.querySelector('.to-site-btn');

			hasShownSiteIntro = sessionStorage.setItem('hasShownSiteIntro', 'true');
			hasShownSiteIntro = true;

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

			siteIntro = true;
		}
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
