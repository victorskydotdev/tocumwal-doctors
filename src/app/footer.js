// import footerLogo from '../assets/brand.png';
import footerLogo from '../assets/updated-logo.png';
// indigene flag images
import indiFlag1 from '../assets/indigene-flag1.jpg';
import indiFlag2 from '../assets/indigene-flag2.jpg';

const footerContainer = document.querySelectorAll('.footer');

export const footerTemplate = `
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

			<div class="flag-wrap">
				<div class="wrapper">
					<img class="flag" src="${indiFlag1}" alt="" />
					<img class="flag" src="${indiFlag2}" alt="" />
				</div>

				<p class="acknowledgement">
					<strong>Acknowledgement of Country:</strong>
					<br> <br>
					Doctors@Tocumwal acknowledges the Traditional Custodians of this land. We honor their Elders—past, present, and emerging—and recognize the enduring connection of their people, spirits, and ancestors to our waterways and land.
				</p>
				
				
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
			<div class="appointment-wrap">
				<h4 class="heading">Book an appointment</h4>

				<p class="text">
					Our dedicated and compassionate doctors are here to provide you with the care and support you need.
				</p>

				<button class="call-btn">
					<a href="tel:0348115007">
						<i class="fa-solid fa-phone"></i>
						<span>03 4811 5007</span>
					</a>
				</button>
			</div>

			
		</div>
	</div>

	<div class="actions">
		<div class="actions-container">
			<div class="consult-info">
				<h3 class="title">Consultation hours</h3>

				<p class="text-content">Doctors@Tocumwal is open for appointments during the following hours:</p>
				
				<ul class="openClosedDays">
					<li><strong>Monday to Friday:</strong> 8:30 AM – 5:00 PM</li>
					<li><strong>Saturday:</strong> By appointment only</li>
					<li><strong>Sunday &amp; Public Holidays:</strong> Closed</li>
				</ul>

				<p class="text-content">Appointments can be made by calling (03 4811 5007) or through our online booking
				system.</p>
			</div>

			<!-- <div class="opening-info">
				<h3 class="title">Opening hours</h3>

				<p class="text-content">We value your feedback to ensure we provide the best possible service. Please send us your feedback below</p>
				
			</div> -->
			
			<div class="after-hours-info">
				<h3 class="title">After hour arrangement</h3>

				<p class="text-content">When our practice is closed and you require urgent medical attention:</p>
				
				<ul class="openClosedDays">
					<li>Please call 000 for emergencies</li>
					<li>For non-urgent medical advice, you can contact HealthDirect on 1800 022
					222 (24 hours, free call)</li>

					<li>Patients may also attend Tocumwal Hospital: 03 5874 9600</li>
				</ul>

				<p class="text-content">Our doctors receive urgent pathology or critical results after hours directly from
				the laboratories.</p>
			</div>

			<div class="feedback-info">
				<h3 class="title">Got any feedback?</h3>
				<p class="text-content">We welcome your feedback as it helps us improve our services.
				Patients can provide feedback in the following ways:</p>

				<ul class="openClosedDays">
					<li>Completing a feedback form, available at reception</li>

					<li>
						<span>Sending an email:</span>
						<a class="fback-link" href="mailto:feedback@tocumwaldoctors.com">feedback@tocumwaldoctors.com</a>
					</li>

						<li>Participating in patient satisfaction surveys conducted by CFEP
						If you have a concern or complaint, please speak to the Practice Manager
						directly so it can be addressed promptly. 
						<br />

						If you are unsatisfied with our response, you may contact the Health Care
						Complaints Commission (HCCC) on 1800 043 159 or visit
						<a href="https://www.hccc.nsw.gov.au.">www.hccc.nsw.gov.au.</a>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<div class="copyright-wrap">
		<p class="copyright-text">
			&copy;Copyright 2026, Doctors@Tocumwal. All rights reserved.
		</p>

		<div class="social-media-icons">
			<a
				href="https://www.tiktok.com/@tocumwaldoctors"
				target="_blank">
				<i class="fa-brands fa-tiktok"></i>
			</a>

			<a
				href="https://www.facebook.com/profile.php?id=61564525070104&sk=about"
				target="_blank">
				<i class="fa-brands fa-facebook-f"></i>
			</a>

			<a href="https://instagram.com/tocumwaldoctors" target="_blank">
				<i class="fa-brands fa-instagram"></i>
			</a>
			
			<a href="https://youtube.com/@tocumwaldoctors" target="_blank">
				<i class="fa-brands fa-youtube"></i>
			</a>

			<!--- <a href="http://linkedin.com/company/tocumwaldoctors" target="_blank">
				<i class="fa-brands fa-linkedin-in"></i>
			</a>

			<a href="https://x.com/tocumwaldoctors" target="_blank">
				<i class="fa-brands fa-x-twitter"></i>
			</a> -->
		</div>
	</div>
`;

const loadFooterImgs = () => {
	if (footerContainer) {
		footerContainer.forEach((footer) => {
			footer.innerHTML += footerTemplate;
		});
	}
};

export { loadFooterImgs };
