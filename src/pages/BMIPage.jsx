import React from 'react'

import {bmiHero} from '../data/gymData'
import SectionTitle from '../components/SectionTitle'
import "../styles/BMICalculator.css"

import BMICalculator from "../components/BMICalculator";

function BmiPage(){
    return (
        <main>
            <section className="bmiHero">
               <SectionTitle
               subtitle={bmiHero.subtitle}
               title={bmiHero.title}
               description={bmiHero.description}
               />
            </section>


            <section className="bmi-calculator-section">

    <BMICalculator />

</section>

        </main>
    )
}

export default BmiPage