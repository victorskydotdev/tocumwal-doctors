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
			<h3 class="info-heading">
				<span class="will-animate">No</span>
				<span class="will-animate">information</span>
				<span class="will-animate">here</span>
				<span class="will-animate">yet!</span>
			</h3>


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
			}, 0);
		}
	});
};

export { showPopoutModal };
