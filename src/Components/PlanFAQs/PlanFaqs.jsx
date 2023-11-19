import { FAQs } from "../../config/Constants";
import FaqQuesion from "./FaqQuestion/FaqQuesion";
import "./PlanFaqs.scss";

export default function PlanFaqs() {
  return (
    <div className="plan-faqs-container">
      <div className="faq-title">Frequently asked questions</div>
      <div className="question-listing">
        {FAQs.map((p, idx) => (
          <FaqQuesion key={idx + 1} question={p.question} answer={p.answer} />
        ))}
      </div>
    </div>
  );
}
