// import footerLogo from '../assets/brand.png';
import footerLogo from '../assets/updated-logo.png';

const footerContainer = document.querySelector('.footer');

const loadFooterImgs = () => {
	const footerTemplate = `
		<div class="container">
				<div class="wrap">
					<div class="footer-brand-logo">
						<img class="hero-bg" src="${footerLogo}" alt="" />
					</div>

					<div class="email-wrap">
						<div class="icon"><i class="fi fi-br-envelope"></i></div>
						<p class="text">info@tocumwaldoctors.com</p>
					</div>

					<div class="location-wrap">
						<div class="icon"><i class="fi fi-bs-marker"></i></div>
						<p class="text">55A Deniliquin St, Tocumwal NSW 2714, Australia</p>
					</div>
				</div>

				<div class="wrap">
					<h4 class="heading">Quick links</h4>

					<ul class="list-wrap">
						<li class="list">
							<a href="/">Home</a>
						</li>
						<li class="list">
							<a href="/#services">Our services</a>
						</li>
						<li class="list">
							<a href="/contact.html">Contact us</a>
						</li>
						<li class="list">
							<a href="/terms.html">Terms & Policy</a>
						</li>
					</ul>
				</div>

				<div class="wrap">
					<h4 class="heading">Book an appointment</h4>

					<p class="text">
						Our dedicated and compassionate doctors are here to provide you with the care and support you need.
					</p>

					<button class="call-btn">
						<a href="tel:+61458231987">
							<i class="fa-solid fa-phone"></i>
							<span>+61 034 8115 007</span>
						</a>
					</button>
				</div>
			</div>

			<div class="copyright-wrap">
				<p class="copyright-text">
					&copy; copyright 2025, Doctors@Tocumwal. All rights reserved.
				</p>

				<div class="social-media-icons">
					<a
						href="https://www.facebook.com/profile.php?id=61564525070104&sk=about"
						target="_blank">
						<i class="fa-brands fa-facebook-f"></i>
					</a>

					<!-- <a href="#" target="_blank">
						<i class="fa-brands fa-instagram"></i>
					</a> -->

					<!-- <a href="#" target="_blank">
						<i class="fa-brands fa-linkedin-in"></i>
					</a> -->

					<!-- <a href="#" target="_blank">
						<i class="fa-brands fa-x-twitter"></i>
					</a> -->
				</div>
			</div>
	`;

	if (footerContainer) {
		footerContainer.innerHTML += footerTemplate;
	}
};

export { loadFooterImgs };
