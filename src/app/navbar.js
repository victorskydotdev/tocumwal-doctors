// import logo from '../assets/updated-logo.png';
import logo from '../assets/updated-logo.png';
// end of img asset import

// dom variables
const navContainer = document.querySelector('.header-nav');

const loadNavbar = () => {
	const navTemplate = `
		<nav class="nav-container">
				<div class="brand-logo">
					<a href="/">
						<img class="logo logo-element" src="${logo}" alt="Tocumwal doctors brand logo" />
					</a>
				</div>

				<div class="wrap" id="mobile-menu">
					<ul class="nav-links">
						<li class="link"><a href="/">Home</a></li>
						<li class="link"><a href="/about.html">About</a></li>
						<li class="link"><a href="/#services">Services</a></li>
						<li class="link"><a href="/#doctors">Doctors</a></li>
						<li class="link"><a href="/pricing.html">Pricing</a></li>
						<li class="link"><a href="/contact.html">Contact</a></li>
					</ul>

					<div class="btn-wrap">
						<a class="btn" href="http://">Book an appointment</a>
					</div>

					<div class="close-btn">
						<i class="fa-solid fa-xmark"></i>
					</div>
				</div>

				<div class="hamburger">
					<span></span>
				</div>
			</nav>
	`;

	if (navContainer) {
		navContainer.innerHTML += navTemplate;

		const hamburgerBtn = document.querySelector('.hamburger');
		const mobileMenu = document.getElementById('mobile-menu');
		const closeBtn = document.querySelector('.close-btn');

		if (hamburgerBtn) {
			hamburgerBtn.addEventListener('click', () => {
				// console.log(hamburgerBtn, mobileMenu);

				mobileMenu.classList.add('show-mobile-menu');
			});
		} else console.log('no such element exists in the DOM');

		if (closeBtn) {
			closeBtn.addEventListener('click', () => {
				mobileMenu.classList.remove('show-mobile-menu');
			});
		}

		const logoElement = document.querySelector('.logo-element');
		console.log(logoElement);

		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				navContainer.classList.add('height');
				logoElement.classList.add('logo-scroll');
			} else {
				logoElement.classList.remove('logo-scroll');
				navContainer.classList.remove('height');
			}
		});
	}
};

export { loadNavbar };
