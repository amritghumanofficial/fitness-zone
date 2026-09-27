import React from 'react'
import { pricingHero , pricingPlans, pricingComparison, } from '../data/gymData'

import '../styles/Pricing.css'

import SectionTitle from '../components/SectionTitle'
import PricingCard from '../components/PricingCard'
import FAQ from '../components/FAQ'
function PricingPage(){
    return (
        <main>
        
        <section >
            <SectionTitle
            subtitle={pricingHero.subtitle}
            title={pricingHero.title}
            description={pricingHero.description}
            />
        </section>

        <section>
            <div className="pricing-card-container">
        {pricingPlans.map(plan=>(
            <PricingCard plan={plan}/>          
        ))}
            </div>
        </section>


            <section className='featuresComparison'>

            <SectionTitle
                subtitle={pricingComparison.subtitle}
                title={pricingComparison.title}
                description={pricingComparison.description}
            />


            <table className="comparisonTable">

                <thead className="comparisonHead">
                <tr>
                    <th>Feature</th>
                    <th>Basic</th>
                    <th>Standard</th>
                    <th>Premium</th>
                </tr>
                </thead>


                <tbody className="comparisonBody">

                {pricingComparison.features.map((feature, index)=>(
                    <tr key={index} className="comparisonRow">
                    <td>{feature.feature}</td>
                    <td>{feature.basic}</td>
                    <td>{feature.standard}</td>
                    <td>{feature.premium}</td>
                    </tr>
                ))}

                </tbody>

            </table>

        </section>


                <section className='faqSection'>
                    <FAQ/>
                </section>
        </main>
    )
}

export default PricingPage