import { CustomerSupportIcon } from "../../assets/Icons/CustomerSupportIcon";
import { PhoneIcon } from "../../assets/Icons/PhoneIcon";
import "./StillQuestionSection.scss";

export default function StillQuestionSection() {
  return (
    <div className="still-have-quesion-container">
      <div className="title">Still have a questions?</div>
      <div className="description">
        If you cannot find answer to your question in our FAQ, you can always
        contact us. We wil answer to you shortly!
      </div>
      <div className="customer-support-card-list">
        <div className="support-card">
          <span>
            <PhoneIcon />
          </span>
          <span className="contact-detail">+1 (646) 786-5060</span>
          <span>We are always happy to help.</span>
        </div>
        <div className="support-card">
          <span>
            <CustomerSupportIcon />
          </span>
          <span className="contact-detail">support@helpcenter.com</span>
          <span>Alternative way to get anwser faster.</span>
        </div>
      </div>
    </div>
  );
}
