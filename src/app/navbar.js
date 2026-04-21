// import logo from '../assets/updated-logo.png';
import logo from '../assets/updated-logo.png';
import { infoTemplate } from '../app/info-sheet-template';

import web from '../assets/nav-icons/web.svg';
import burgerIcon from '../assets/nav-icons/burger.svg';
import callIcon from '../assets/nav-icons/call.svg';
import mail from '../assets/nav-icons/mail.svg';
// end of img asset import

// selectors shortcut helper
const $ = (id) => document.getElementById(id); // id
const $$ = (className) => document.querySelector(className); // class names
const $$$ = (classNames) => document.querySelectorAll(classNames);

// dom variables
const navContainer = document.querySelector('.header-nav');
const domBody = document.querySelector('body');

export const loadNavbar = () => {
	const navTemplate = `
		<nav class="nav-container">

			<div class="top-nav">
				<div class="button-wrap">
					<button class="pop-menu-btn">
						<img src="${burgerIcon}" alt="" />
					</button>
				</div>

				<ul class="top-links">
					<li>
						<span>
							<img src="${callIcon}" alt="" />
						</span>

						<div class="link-text">
							<p>Call your GP</p>
							<a class="top-nav-link" href="tel+0348115007">(03)-4811-5007</a>
						</div>
					</li>

					<li>
						<span>
							<img src="${web}" alt="" />
						</span>

						<div class="link-text">
							<p>Online appointments</p>
							<a class="top-nav-link" href="https://onlineappts3.medi2apps.com/Appointments/Doctors%20@%20Tocumwal?app=1">Book now</a>
						</div>
					</li>

					<li>
						<span>
							<img src="${mail}" alt="" />
						</span>

						<div class="link-text">
							<p>Give us a feedback</p>
							<a class="top-nav-link" href="mailto:feedback@tocumwaldoctors.com">feedback@tocumwaldoctors.com</a>
						</div>
					</li>
				</ul>
			</div>


			<!-- main navbar -->
			<div class="wrapper main-nav">
				<div class="brand-logo">
					<a class="logo-wrap" href="/">
						<img class="logo logo-element" src="${logo}" alt="Tocumwal doctors brand logo" />
					</a>
				</div>

				<div class="wrap" id="mobile-menu">
					<ul class="nav-links">
						<li class="link"><a href="/">Home</a></li>
						<li class="link"><a href="/about.html">About</a></li>
						<li class="link"><a href="/#services">Services</a></li>
					
						<li class="link"><a href="/blog">Blog</a></li>
						
						<div class="link" id="dropdown-wrap">
							<a class="dropdown-link" id="dropdown-link-btn">
								<span class="link-text">Patient Information</span>
								<i class="dropDicon fi fi-rr-angle-small-down"></i>
							</a>

							<ul class="patient-info-dropdown" id="patient-info-dropdown-wrap">
								<li class="dd-link">
									<a href="/fees-billing.html">Fees & Billing</a>
								</li>
								<li class="dd-link">
									<button class="patient-info-btn">Patient Info Sheet</button>
								</li>
								<li class="dd-link">
									<a href="/appointments.html">Appointments</a>
								</li>
								<li class="dd-link">
									<a href="/privacy-policy.html">Privacy Policy</a>
								</li>
							</ul>
						</div>

						<!--
						<li class="link"><a href="/contact.html">Contact</a></li>
						-->
						
					</ul>

					<div class="btn-wrap">
						<a class="btn" href="https://onlineappts3.medi2apps.com/Appointments/Doctors%20@%20Tocumwal?app=1" target="_blank">Book an appointment</a>
					</div>

					<div class="close-btn">
						<!-- <i class="fa-solid fa-xmark"></i> -->
					</div>

					<button class="hamburger" id="hamburger">
				
							<i class="fa-solid fa-bars"></i>
				
					</button>
				</div>
			</div>
		</nav>
	`;

	if (navContainer) {
		navContainer.innerHTML += navTemplate;
		const mobileMenu = document.querySelector('.nav-links');
		const closeBtn = document.querySelector('.close-btn');

		// main navbar
		const mainNav = document.querySelector('.main-nav');

		// mobile menu interaction
		document.addEventListener('click', (e) => {
			const isHamburger = e.target.closest('#hamburger');

			if (isHamburger) {
				console.log(mobileMenu);
				mobileMenu.classList.toggle('show-mobile-menu');
			}
		});

		window.addEventListener('scroll', (e) => {
			if (window.scrollY >= 300) {
				mainNav.classList.add('fixed-navbar');
				$$('.hamburger').classList.add('show-navbar-btn');
			} else mainNav.classList.remove('fixed-navbar');
		});

		document.addEventListener('click', (e) => {
			const btn = e.target.closest('#dropdown-link-btn');
			const wrap = $('patient-info-dropdown-wrap');
			const links = $$$('.dd-link');
			const total = links.length;

			// closeMenu
			const closeMenu = (e) => {
				wrap.classList.remove('isActive');

				links.forEach((link) => {
					link.classList.remove('show-dd-links');
				});
			};

			if (btn) {
				wrap.classList.toggle('isActive');

				const isOpening = wrap.classList.contains('isActive');

				links.forEach((link, i) => {
					const delay = isOpening ? i * 300 : (total - i - 1) * 100;

					link.addEventListener('click', () => {
						if (i === 1) {
							navContainer.classList.add('z-index');
						}
					});

					setTimeout(() => {
						link.classList.toggle('show-dd-links');
					}, delay);
				});
			}

			if (e.target.closest('.show-dd-links')) {
				closeMenu();
			}
		});

		// display the patient info modal
		const displayPatientInfoModal = () => {
			const patientInfoBtn = document.querySelector('.patient-info-btn');

			const patientInfoModal = document.querySelector(
				'.patient-info-sheet-modal',
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
	}
};
