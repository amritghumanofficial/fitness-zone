import { useState } from "react";

import "../styles/FAQ.css"
function FAQItem({faq}){
    const [isOpen , setIsOpen] = useState(false)
 
    return (
        <div className="faqItem">

            <div 
              className="faqQuestion"
              onClick={() => setIsOpen(!isOpen)}
            >


                <h3>{faq.question}</h3>
                <span>
                    {isOpen ? "-" : "+"}
                </span>


            </div>

            {isOpen && (
                <div className="faqAnswer">
                    <p>{faq.answer}</p>
                    </div>
            )}
        </div>
    )
}

export default FAQItem