import React from 'react'

function PricingCard({plan}) {
  return (

    <div className='priceCard'>

      {plan.badge ? (
        <p className='priceBadge'>{plan.badge}</p>
      ) : null}

      <h3 className='planName'>{plan.name}</h3>

      <h2 className='planPrice'>{plan.price}</h2>

      <p className='planTagline'>{plan.tagline}</p>

      <ul className='planFeatures'>
        {plan.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <button className='planButton'>
        {plan.buttonText}
      </button>

    </div>
  )
}

export default PricingCard
