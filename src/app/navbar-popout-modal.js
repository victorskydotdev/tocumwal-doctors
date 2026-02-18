import img1 from '../assets/workout4women/workout4women-1.jpg';
import img2 from '../assets/workout4women/workout4women-2.jpg';
import img3 from '../assets/workout4women/workout4women-3.jpg';
import img4 from '../assets/workout4women/workout4women-4.jpg';

const body = document.querySelector('.dom-body');

const showPopoutModal = () => {
	const div = document.createElement('div');
	div.classList.add('menu-popout-modal');

	const containerDiv = document.createElement('div');
	containerDiv.classList.add('container');
	div.appendChild(containerDiv);
	containerDiv.textContent = 'Hello world';
	const closeBtnWrap = document.createElement('div');
	closeBtnWrap.classList.add('btn-wrap');

	const closeBtn = document.createElement('button');
	closeBtn.classList.add('btn', 'popout-close-btn');

	// appending the closeBtn into the closeBtnWrap
	closeBtnWrap.append(closeBtn);

	closeBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

	document.body.appendChild(div);
	div.appendChild(closeBtnWrap);

	const addTextTemplate = () => {
		return `

			<div class="text-area">
				<h3 class="info-heading will-animate">
					Hooray!!🥳 It's Ovarian Cancer Awareness 80km Walk
				</h3>

			<p class="text">At Doctors@Tocumwal, our staff are embarking on an exciting 80km walk in support for Ovarian Cancer awareness initiatives</p>

				<div class="button-wrap">
					<button class="btn" id="oca-learn-more-btn">Learn more</button>

					<a href="https://workout.ovariancancer.net.au/d-tocumwal?utm_medium=email&utm_source=raisely&utm_content=%5Bfinal%5D%20Fundraiser%20Welcome&utm_term=7a6b0972-dc35-4cc0-b893-462182e5fcbb" target="_blank" class="btn ovarian-btn">Support and Donate</a>
				</div>
				
			</div>
		`;
	};

	let currentIdx = 0;

	document.addEventListener('click', (event) => {
		if (event.target.closest('.pop-menu-btn')) {
			// alert('Pop out menu button clicked');

			setTimeout(() => {
				requestAnimationFrame(() => div.classList.add('is-open'));

				containerDiv.innerHTML = addTextTemplate();
				// const closeBtn = document.querySelector('.btn');
				const infoTexts = document.querySelectorAll('.will-animate');
				const learnMoreBtn = document.getElementById('oca-learn-more-btn');

				setTimeout(() => {
					containerDiv.classList.add('open-container');
				}, 500);

				setTimeout(() => {
					infoTexts.forEach((text, index) => {
						text.classList.remove('show-element');

						setTimeout(() => {
							text.classList.add('show-element');
						}, index * 300);
					});
				}, 1000);

				if (!closeBtn) {
					console.log("can't see the close btn");
				} else {
					setTimeout(() => {
						closeBtn.classList.add('show-btn');
					}, 2500);
				}

				document.addEventListener('click', (event) => {
					if (event.target.closest('.btn')) {
						infoTexts.forEach((text, index) => {
							text.classList.remove('show-element');
						});

						closeBtn.classList.remove('show-btn');

						setTimeout(() => {
							containerDiv.classList.remove('open-container');

							setTimeout(() => {
								div.classList.remove('is-open');
							}, 200);
						}, 300);
					}
				});

				if (!learnMoreBtn) return;

				learnMoreBtn.addEventListener('click', () => {
					// alert('Button clicked');

					window.location.href = '/#ovarian-cancer-section';
				});
			}, 0);
		}
	});
};

export { showPopoutModal };
