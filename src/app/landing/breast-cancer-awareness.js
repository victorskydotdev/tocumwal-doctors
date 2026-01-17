import img1 from '../../assets/workout4women/workout4women-1.jpg';
import img2 from '../../assets/workout4women/workout4women-2.jpg';
import img3 from '../../assets/workout4women/workout4women-3.jpg';
import img4 from '../../assets/workout4women/workout4women-4.jpg';

const imgArr = [img1, img2, img3, img4];

const imgContainers = document.querySelectorAll('.bca-img');

const displayBreastCancerAwareImgs = () => {
	const imgTemplate = (cb) => {
		return `
	    <img src="${cb}" alt="breast awareness images" />
	  `;
	};
	imgContainers.forEach((wrap, index) => {
		wrap.innerHTML = imgTemplate(imgArr[index]);
	});
};

export { displayBreastCancerAwareImgs };
