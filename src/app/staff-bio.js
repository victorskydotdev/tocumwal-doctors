import staffOneImg from '../assets/team-img1.jpg';
import staffTwoImg from '../assets/team-img2.jpg';

const staffBioBtn = document.querySelectorAll('.view-bio-btn');
const mainModalContainer = document.querySelector('.bio-modal-container');
const modalContainer = document.querySelector('.modal-container');
const closeBtn = document.querySelector('.modal-close-btn');
const domBody = document.querySelector('.dom-body');

const showStaffBio = () => {
	staffBioBtn.forEach((btn) => {
		const btnId = btn.dataset.id;
		const btnIdTwo = btn.dataset.id;

		btn.addEventListener('click', (e) => {
			if (btnId === 'btn-1') {
				const staffTemplate = `
          
          <div class="modal-content">
            <div class="dp-wrap">
              <img src="${staffOneImg}" class="img" alt="Dr.Emeka Ike's image" />
            </div>
            <h3 class="heading-title">Dr. Emeka Ike</h3>
            <h4 class="subtext">Your trusted healthcare partner</h4>

            <div class="text-wrap">
              <p class="text">
                Dr. Emeka Ike grew up in Nigeria and graduated with a medical degree from
                Abia State University. He further honed his medical expertise by training
                in various hospitals across the United Kingdom, New Zealand, and Australia
                as an advanced psychiatry registrar. Seeking a sea change, Dr. Emeka
                transitioned to general practice in the beautiful town of Tumbarumba,
                where he served the community for seven years. During this time, he gained
                a broad range of experience in rural general practice, including chronic
                disease management, acute and inpatient care, aged care, and procedural
                skills
              </p>

              <p class="text">
                Dr. Emeka enjoys all aspects of family medicine but has a particular
                interest in mental health, workcover injury, chronic disease, and skin
                cancer management. He is a Fellow of the Royal Australian College of
                General Practitioners (RACGP) and holds an advanced certificate in skin
                cancer medicine and a master's degree in public health. His dedication to
                mental health is evident in his registration to provide detailed mental
                health assessments and psychological therapy
              </p>

              <p class="text">
                Dr. Emeka values the privilege of practicing medicine and ensures his
                patients have ample time to share their personal health stories. He adopts
                an individualized care approach, listens carefully, and tailors treatment
                plans to help patients manage their unique health situations. Outside of
                work, Dr. Emeka loves spending time with his wife and two children,
                engaging in charity work, especially for the underprivileged, and tending
                to his vegetable garden. He is excited to start a new adventure in
                Tocumwal
              </p>

              <p class="text">
                In addition to his clinical duties, Dr. Emeka also mentors General
                Practice trainees, constantly updating his knowledge to ensure the highest
                standards of care for his patients. His passion for caring for the rural,
                underprivileged, and those struggling in life makes him a valuable asset
                to the community.
              </p>
            </div>
          </div>
        `;

				modalContainer.innerHTML += staffTemplate;

				mainModalContainer.classList.add('display');
				domBody.classList.add('body-overflow');

				closeBtn.addEventListener('click', () => {
					mainModalContainer.classList.remove('display');
					modalContainer.innerHTML = '';
					domBody.classList.remove('body-overflow');
				});
			} else if (btnIdTwo === 'btn-2') {
				const staffTemplate = `
          
          <div class="modal-content">
            <div class="dp-wrap">
              <img src="${staffTwoImg}" class="img" alt="Dr.Emeka Ike's image" />
            </div>
            <h3 class="heading-title">Chioma Ikeh</h3>
            <h4 class="subtext">Practice Manager</h4>

            <div class="text-wrap">
              <p class="text">
                Our practice manager, Chioma Ikeh, ensures the smooth operation of our practice and is dedicated to maintaining the highest standards of patient care and service. She is also a registered nurse with many years of experience working in Australia.
              </p>              
            </div>
          </div>
        `;

				modalContainer.innerHTML += staffTemplate;

				mainModalContainer.classList.add('display');
				domBody.classList.add('body-overflow');

				closeBtn.addEventListener('click', () => {
					mainModalContainer.classList.remove('display');
					modalContainer.innerHTML = '';

					domBody.classList.remove('body-overflow');
				});
			} else console.log('No');
		});
	});
};

export { showStaffBio };
