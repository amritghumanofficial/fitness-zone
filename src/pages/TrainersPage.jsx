import React from 'react'
import SectionTitle from '../components/SectionTitle'
import "../styles/TrainerCard.css"

import { trainersHero , trainers, trainerBenefitsHeader, trainerBenefits} from '../data/gymData'
import Trainers from '../components/TrainerCard'
import CTASection from '../components/CTASection'

import { FiTarget, FiShield, FiZap, FiAward } from "react-icons/fi";


function TrainersPage(){
    const benefitIcons = {
  Target: <FiTarget />,
  ShieldCheck: <FiShield />,
  Flame: <FiZap />,
  Award: <FiAward />
};

    return (

    <main> 
        <section>       
        <SectionTitle
        subtitle={trainersHero.subtitle}
        title={trainersHero.title}
        description={trainersHero.description}
        />
        </section>


        <section className="trainers-section">
    <div className="trainer-grid">
      {trainers.map((trainer) => (
        <Trainers key={trainer.id} {...trainer} />
      ))}
    </div>
  </section>

  <section className='benefit-section'>
    <SectionTitle
    subtitle={trainerBenefitsHeader.subtitle}
    title={trainerBenefitsHeader.title}
    description={trainerBenefitsHeader.description}
    />

     <div className='benefit-grid'>
        {trainerBenefits.map((benefit, index)=>(
            <div key={benefit.id} className='benefit-card'>
                <div className="benefit-icon">
          {benefitIcons[benefit.icon]}
        </div>
        <h3>{benefit.title}</h3>
        <p>{benefit.description}</p>
        </div>
        ))}
     </div>
  </section>

  <section >
    <CTASection/>
  </section>
    </main>
    )
}

export default TrainersPage