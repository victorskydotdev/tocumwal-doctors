// import logo from '../assets/updated-logo.png';
import logo from '../assets/updated-logo.png';
import { infoTemplate } from '../app/info-sheet-template';

// end of img asset import

// dom variables
const navContainer = document.querySelector('.header-nav');
const domBody = document.querySelector('body');

export const loadNavbar = () => {
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
					
						<li class="link"><a href="/#blog-section">Updates</a></li>
						
						<li class="link" id="dropdown-btn">
							<a class="dropdown-link">
								<span class="link-text">Patient Information</span>
								<i class="dropDicon fi fi-rr-angle-small-down"></i>
							</a>

							<ul class="patient-info-dropdown">
								<li class="dd-link1">
									<a href="/fees-billing.html">Fees & Billing</a>
								</li>
								<li class="dd-link2">
									<button class="patient-info-btn">Patient Info Sheet</button>
								</li>
								<li class="dd-link3">
									<a href="/appointments.html">Appointments</a>
								</li>
								<li class="dd-link4">
									<a href="/privacy-policy.html">Privacy Policy</a>
								</li>
							</ul>
						</li>

						<!--
						<li class="link"><a href="/contact.html">Contact</a></li>
						-->
						
					</ul>

					<div class="btn-wrap">
						<a class="btn" href="https://onlineappts3.medi2apps.com/Appointments/Doctors%20@%20Tocumwal?app=1" target="_blank">Book an appointment</a>
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

		const dropdownBtn = document.getElementById('dropdown-btn');
		const dropDownCard = document.querySelector('.patient-info-dropdown');
		const icon = document.querySelector('.dropDicon');

		const triggerDropDown = () => {
			dropdownBtn.addEventListener('click', () => {
				const isActive = dropdownBtn.classList.contains('isActive');

				if (isActive) {
					// Remove classes if dropdown is already active (closing)

					dropdownBtn.classList.remove('isActive');
					mobileMenu.classList.remove('show-mobile-menu');

					// delay the opacity
					setTimeout(() => {
						dropDownCard.classList.remove('opacity');
						dropDownCard.classList.remove('dropdown');
						icon.classList.remove('icon-rotate');
					}, 300);
				} else {
					// Add classes if dropdown is not active (opening)
					dropdownBtn.classList.add('isActive');
					icon.classList.add('icon-rotate');
					dropDownCard.classList.add('dropdown');

					// delay the opacity
					setTimeout(() => {
						dropDownCard.classList.add('opacity');
					}, 300);
				}
			});
		};
		triggerDropDown();

		// display the patient info modal
		const displayPatientInfoModal = () => {
			const patientInfoBtn = document.querySelector('.patient-info-btn');

			const patientInfoModal = document.querySelector(
				'.patient-info-sheet-modal'
			);

			if (!patientInfoBtn && patientInfoModal) {
				console.log('elements not in the DOM');
			} else {
				patientInfoBtn.addEventListener('click', () => {
					domBody.style.overflow = 'hidden';
					patientInfoModal.classList.add('display-patInfo-modal');

					patientInfoModal.innerHTML += infoTemplate();
					const patientInfoWrap = document.querySelector('#patient-info-wrap');

					setTimeout(() => {
						patientInfoWrap.classList.add('opacity');
					}, 1000);
				});
			}
		};

		displayPatientInfoModal(); // call the patientInfoModal function

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
		// console.log(logoElement);

		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				navContainer.classList.add('height');
				navContainer.classList.add('background');
				logoElement.classList.add('logo-scroll');
			} else {
				logoElement.classList.remove('logo-scroll');
				navContainer.classList.remove('height');
				navContainer.classList.remove('background');
			}
		});
	}
};
