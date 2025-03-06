import consentImg from '../assets/consent-form-img.png';
import favicon from '../assets/favicon.png';
import transferImg from '../assets/transfer-img.jpg';
import faqImg from '../assets/faq-img.png';
import { footerTemplate } from './footer';

export const infoTemplate = () => {
	return `
    <div class="info-container" id="patient-info-wrap">
      <!--<div class="goback-btn">
        <button class="back-btn">
          <i class="fa-solid fa-arrow-left"></i>
          <span>Go back</span>
        </button>
      </div> -->
        

      <!-- patient info sheet heading section -->
      <div class="text-wrap">
        <h3 class="heading">Patient Information Sheet</h3>

        <p class="text">
          Certain medical procedures require your informed consent to ensure you understand the process, potential risks, and benefits. Below, you’ll find links to complete your consent forms online before your appointment. 
        </p>

        <p class="text">
          This helps streamline your visit and ensures your doctor has all necessary information beforehand.
        </p>

        <div class="btn-wrap">
          <button class="down-btn">
            <i class="dropDicon fi fi-rr-angle-small-down"></i>
          </button>
        </div>
      </div>
      <!-- end of patient info sheet heading section -->


      <!-- section 2 -->
      <div class="section-wrap " id="section-one-wrap">
        <div class="wrap">
          <div class="info-wrap">
            <h3 class="heading">Complete your forms <span class="highlight">online</span></h3>

            <p class="text">
              To streamline your visit and reduce wait times, please complete the necessary forms online before your appointment. Clicking on a link below will take you directly to the secure Medi2Apps platform, where your form will be submitted electronically and linked to your patient file in our system.
            </p>
          </div>

          
        </div>
      </div>
      <!-- end of section 2 -->

      <!-- section 3 -->
      <div class="section-three-wrap" id="section-two-wrap">
        <div class="wrap">
          <div class="link-card">
            <div class="icon">
              <img src="${favicon}" alt="icon" />
            </div>

            <h3 class="heading">Complete Venesection Consent Form</h3>

            <a href="https://m2a.tech/s?p=DRTCW1miLR" target="_blank" class="link">
              Click here</a>
          </div>

          <div class="link-card">
            <div class="icon">
              <img src="${favicon}" alt="icon" />
            </div>

            <h3 class="heading">Complete Punch Biopsy Consent Form</h3>

            <a href="https://m2a.tech/s?p=DRTCWhtirg" target="_blank" class="link">
              Click here</a>
          </div>

          <div class="link-card">
            <div class="icon">
              <img src="${favicon}" alt="icon" />
            </div>

            <h3 class="heading">Complete Foreign Body Removal Form</h3>

              <a href="https://m2a.tech/s?p=DRTCWZTe1l" target="_blank" class="link">
                Click here
              </a>
          </div>

          <div class="link-card">
            <div class="icon">
              <img src="${favicon}" alt="icon" />
            </div>

            <h3 class="heading">Complete Excision Biopsy Consent Form</h3>

            <a href="https://m2a.tech/s?p=DRTCW4GMiM" class="link" target="_blank">
              Click here
            </a>
          </div>
          
          <div class="link-card">
            <div class="icon">
              <img src="${favicon}" alt="icon" />
            </div>
            
            <h3 class="heading">Complete iron infusion Consent Form</h3>

            <a href="https://m2a.tech/s?p=DRTCWSOlYE" target="_blank" class="link">
              Click here
            </a>
          </div>

          
        </div>
      <!-- end of section 3 -->

      <!-- FAQ accordion section -->
      <div class="faq-container">
					<div class="text-area">
						<h2 class="heading">
              <img src="${faqImg}" alt="faq" />
							Frequently Asked Questions
						</h2>
					</div>

					<div class="accordion">
						<!-- accordion item one -->
						<div class="accordion-item">
							<div class="accordion-header-wrap">
                <div class="icon">
                  <img src="${favicon}" alt="icon" />
                </div>
								<h4 class="accordion-header">How do I complete my form?</h4>
								
							</div>

							<div class="accordion-content">
								<p>
                  Simply click on the relevant link above, and it will take you to our secure Medi2Apps platform where you can fill out and submit the form online. No downloads or printing required!
                </p>
							</div>
						</div>

						<div class="accordion-item">
							<div class="accordion-header-wrap">
                <div class="icon">
                  <img src="${favicon}" alt="icon" />
                </div>
								<h4 class="accordion-header">IDo I need to complete the form before my appointment?</h4>
						
							</div>

							<div class="accordion-content">
								<p>
                  Yes, we recommend completing your form before your appointment to save time and help us prepare for your visit. If you’re unable to do so, our reception team can assist you when you arrive.
                </p>
							</div>
						</div>

						<div class="accordion-item">
							<div class="accordion-header-wrap">
                <div class="icon">
                  <img src="${favicon}" alt="icon" />
                </div>
								<h4 class="accordion-header">Will my form be saved in my medical record?</h4>
							
							</div>

							<div class="accordion-content">
								<p>
                  Yes! Once you submit the form through Medi2Apps, it will be automatically linked to your patient file in our system, reducing paperwork and ensuring seamless care.
                </p>
							</div>
						</div>

						<div class="accordion-item">
							<div class="accordion-header-wrap">
                <div class="icon">
                  <img src="${favicon}" alt="icon" />
                </div>
								<h4 class="accordion-header">
									What if I need help filling out my form?
								</h4>
						
							</div>

							<div class="accordion-content">
								<p>
                  If you have any issues or questions, please contact our friendly reception team at <a href="tel+0348115007">(03) 4811 5007</a>, and we’ll be happy to assist you.
                </p>
							</div>
						</div>
					</div>
				</div>
      <!-- end of FAQ accordion section -->

      <div class="transfer-notice">
        <div class="transfer-wrap">
          <div class="transfer-text-wrap">
            <h3 class="heading">Transfer your medical records</h3>

            <p class="text">
              If you are joining Doctors@Tocumwal as a regular patient, you can request your medical records from your previous GP using our secure online form. This ensures continuity of care and helps our doctors provide the best treatment for you.
            </p>

            <div class="btn-wrap">
              <a href="https://m2a.tech/s?p=DRTCWwbn95" target="_blank" class="btn">Click to request your records</a>
            </div>
          </div>

          <div class="img-wrap">
            <img src="${transferImg}" alt="transfer" />
          </div>
        </v>
      </div>

    </div>

    <div class="footer-btn-wrap">
      
      <a href="/" class="footer-btn"><i class="fi fi-rr-house-blank"></i> <span>Go to home</span></a>
    </div>
  `;
};
