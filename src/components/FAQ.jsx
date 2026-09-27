import { faqHero , faqs } from "../data/gymData"
import SectionTitle from "./SectionTitle"
import FAQItem from "./FAQItem"
import "../styles/FAQ.css"

function FAQ(){

    return (
      <div className="faqContainer">

        <SectionTitle
          subtitle={faqHero.subtitle}
          title={faqHero.title}
          description={faqHero.description}
        />


        <section className="faqList">

          {faqs.map((faq)=>(
            <FAQItem key={faq.id} faq={faq}/>
          ))}

        </section>

      </div>
    )
}


export default FAQ
