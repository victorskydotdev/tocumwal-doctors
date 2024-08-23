import footerLogo from '../assets/brand.png';

const footerContainer = document.querySelector('.footer');

const loadFooterImgs = () => {
	const footerTemplate = `
		<div class="container">
				<div class="wrap">
					<div class="footer-brand-logo">
						<img class="hero-bg" src="${footerLogo}" alt="" />
					</div>

					<div class="email-wrap">
						<div class="icon"></div>
						<p class="text">info@tocumwaldoctors.com</p>
					</div>

					<div class="location-wrap">
						<div class="icon"></div>
						<p class="text">Tocumwal doctors HQ</p>
					</div>
				</div>

				<div class="wrap">
					<h4 class="heading">Quick links</h4>

					<ul class="list-wrap">
						<li class="list">Home</li>
						<li class="list">Our services</li>
						<li class="list">
							<a href="/contact.html">Contact us</a>
						</li>
					</ul>
				</div>

				<div class="wrap">
					<h4 class="heading">Book an appointment</h4>

					<p class="text">
						Our well-trained doctors are on standby to speak with you.
					</p>

					<button class="call-btn">
						<a href="tel:+8100784622">
							<i class="fa-solid fa-phone"></i>
							<span>0810-078-4622</span>
						</a>
					</button>
				</div>
			</div>

			<div class="copyright-wrap">
				<p class="copyright-text">
					&copy; copyright, Tocumwal Doctors. All rights reserved.
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
