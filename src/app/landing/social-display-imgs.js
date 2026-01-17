import img1 from '../../assets/social-media-posts/1.jpg';
import img2 from '../../assets/social-media-posts/2.jpg';
import img3 from '../../assets/social-media-posts/3.jpg';
import img4 from '../../assets/social-media-posts/4.jpg';
import img5 from '../../assets/social-media-posts/5.jpg';
import img6 from '../../assets/social-media-posts/6.jpg';
import img7 from '../../assets/social-media-posts/7.jpg';
import img8 from '../../assets/social-media-posts/8.jpg';

const imgArr = [img1, img2, img3, img4, img5, img6, img7, img8];
const images = [
	{
		id: 1,
		img: img1,
	},

	{
		id: 2,
		img: img2,
	},

	{
		id: 3,
		img: img3,
	},

	{
		id: 4,
		img: img4,
	},

	{
		id: 5,
		img: img5,
	},

	{
		id: 6,
		img: img6,
	},

	{
		id: 7,
		img: img7,
	},

	{
		id: 8,
		img: img8,
	},
];

const mediaWraps = document.querySelectorAll('.social-media-img');

const displaySocialMediaPosts = () => {
	const imgTemplate = (cb) => {
		return `
      <img src="${cb}" alt="social media post" />
		
    `;
	};

	if (!mediaWraps) return;

	mediaWraps.forEach((wrap, index) => {
		wrap.innerHTML = imgTemplate(images[index].img);

		const imgElement = wrap.querySelector('img');

		if (!imgElement) return; // check if imgElement
		imgElement.setAttribute('data-id', images[index].id);

		imgElement.addEventListener('click', () => {
			const imgId = imgElement.getAttribute('data-id');

			// alert(`Image with ID: ${id}, clicked on`);
			const matchingImg = images.find((image) => image.id === parseInt(imgId)); // finding the image with the matching id

			// console.log(matchingImg.id);

			// image template that will be used to display matching image that was clicked on
			const expandImg = () => {
				return `
					<div class="img-container">
						<img src="${matchingImg.img}" alt="selected image" />
						
						<button class="modal-close-btn">
							<i class="fa-solid fa-xmark"></i>
						</button>
					</div>
					
				`;
			};

			// fetch the modal that would house the clicked image
			const expandImgModal = document.querySelector('.expand-img-modal');

			expandImgModal.classList.add('show-img-modal');

			// setTimeout(() => {
			expandImgModal.innerHTML = expandImg();
			const modalCloseBtn = document.querySelector('.modal-close-btn');

			if (!modalCloseBtn) return;

			modalCloseBtn.addEventListener('click', () => {
				expandImgModal.innerHTML = '';

				expandImgModal.classList.remove('show-img-modal');
			});
			// }, 200);
		});
	});
};

export { displaySocialMediaPosts };
