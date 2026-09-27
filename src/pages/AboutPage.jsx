import React from "react";
import { Link } from "react-router-dom";

import SectionTitle from "../components/SectionTitle";
import { 
    aboutHero , 
    aboutStory , 
    aboutMissionVision,
    aboutFeatures,
    stats
} from "../data/gymData";

import StatsCounter from "../components/StatsCounter";

import '../styles/AboutPage.css'
function AboutPage() {
  return (
    <main>
        <section className="about-hero">
            <div className="about-hero-container">

          <SectionTitle
            subtitle={aboutHero.subtitle}
            title={aboutHero.title}
            description={aboutHero.description}
           />

            </div>
        </section>

        <section className="story-section">
        <div className="story-container">
            <div className="story-content">
                <SectionTitle
                subtitle={aboutStory.subtitle}
                title={aboutStory.title}/>
                {aboutStory.paragraphs.map((paragraph, index)=>(
                    <p key={index}>{paragraph}</p>

                ))
                }

            </div>
            <div className="story-card">
                {aboutStory.highlights.map((item, index)=>(
                    <div className="highlight-item" key={index}>
                        <h3 className="highlight-number">
                            {item.number}
                        </h3>

                        <p className="highlight-text">
                            {item.text}
                        </p>
                    </div>
                ))}

            </div>
        </div>

        </section>

        <section className="mission-section">
                <div className="mission-container">
                    {aboutMissionVision.map((item, index)=>(
                        <div className="mission-card" key={index}>
                              <div>
                                {item.icon}
                                </div>

                                <h3>
                                {item.title}
                                </h3>

                                <p>
                                {item.description}
                                </p>
                        </div>
                    ))}
                </div>
        </section>
            
                    <section className="about-features-section">
  <div className="about-features-wrapper">
    
    {/* 1. Main Header Content */}
    <div className="features-content">
      <SectionTitle
        subtitle="Why Choose Fitness Zone"
        title="More Than Just A Gym"
        description="We focus on training, motivation, cleanliness, community, and real fitness results."
      />
      <p>
        At Fitness Zone, we combine expert coaching, modern equipment, and a
        supportive community to help every member achieve lasting fitness results.
      </p>
    </div>

    {/* 2. Top Right Cards (Wrapper ke aage) */}
    <div className="top-features-cards">
      {aboutFeatures.slice(0, 2).map((feature) => (
        <div className="about-feature-card" key={feature.id}>
          <div className="feature-icon">{feature.iconIdea}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>

    {/* 3. Bottom Cards*/}
    <div className="bottom-features-cards">
      {aboutFeatures.slice(2).map((feature) => (
        <div className="about-feature-card" key={feature.id}>
          <div className="feature-icon">{feature.iconIdea}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>

  </div>
</section>
            <section className="about-stats-section">
  <SectionTitle
    subtitle="Our Achievements"
    title="Trusted By Fitness Lovers"
    description="Our growing community reflects the trust and results we deliver every day."
  />

  <div className="about-stats-container">
    {stats.map((item) => (
      <StatsCounter
        key={item.id}
        number={item.number}
        suffix={item.suffix}
        label={item.label}
        icon={item.icon}
      />
    ))}
  </div>
</section>


        <section className="about-cta">
  <div className="about-cta-container">
    <h2>Ready To Transform Your Lifestyle?</h2>

    <p>
      Join Fitness Zone and become part of a community that supports your
      fitness journey every step of the way.
    </p>

    <div className="about-cta-buttons">
               <Link to="/pricing">
            <button className="cta-primary-btn">Choose Your Plan</button>
          </Link>

          <Link to="/contact">
            <button className="cta-secondary-btn">Contact Us</button>
          </Link>
        </div>
  </div>
</section>

</main>

  );
}

export default AboutPage;