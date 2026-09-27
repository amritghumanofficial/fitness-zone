import React from "react";
import { Link } from "react-router-dom";
import "../styles/FeaturesSection.css";
import HeroSection from "../components/HeroSection";
import SectionTitle from "../components/SectionTitle";
import FeatureCard from "../components/FeatureCard";
import ClassCard from "../components/ClassCard";
import StatsCard from "../components/StatsCounter";
import Gallery from "../components/GalleryGrid";
import Trainers from "../components/TrainerCard";
import TestimonialCard from "../components/TestimonialCard";
import CTASection from '../components/CTASection'
import { features, classes , stats,  trainers, testimonial} from "../data/gymData";

import { galleryImages } from "../data/galleryData";
function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="features-section">
        <SectionTitle
          subtitle="Why Choose Us"
          title="Everything You Need To Reach Your Fitness Goals"
          description="From expert coaching to modern equipment, we provide everything you need to stay fit and achieve your goals."
        />

        <div className="feature-cards-grid">
          {features.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </section>

      {/* Popular Classes Section */}
      <section className="classes-section">
        <SectionTitle
          subtitle="Our Classes"
          title="Popular Fitness Programs"
          description="Choose from strength, cardio, yoga, and high-intensity workout programs designed for every goal."
        />

        <div className="classes-grid">
          {classes.slice(0,3).map((gymClass) => (
            <ClassCard key={gymClass.id} {...gymClass} />
          ))}
        </div>

        <div className="classes-btn">
          <Link to="/classes" className="view-all-btn">
            View All Classes
          </Link>
        </div>

      </section>

      <section className="stats-section">
          <SectionTitle
          subtitle="Why Members Trust Us"
          title="Numbers That Show Our Strength"
          description="From expert trainers to active members, Fitness Zone continues to help people reach their fitness goals."
          />

        <div className="stats-grid">
          {stats.map((stat)=>(
            <StatsCard key={stat.id} {...stat} />
          ))}
        </div>
      </section>

        
      <section className="gallery-section">
        <SectionTitle
        subtitle="Our Gallery"
        title="Train In A Motivating Environment"
        description="Take a look inside Fitness Zone and experience the energy, focus, and dedication of our fitness community."
        />

          
        <div className="gallery-grid">
          {galleryImages.map((img)=>(
            <Gallery key={img.id} {...img} />
          ))}
        </div>

      </section>

      <section className="trainers-section">
        <SectionTitle
        subtitle="Expert Trainers"
        title="Meet Your Fitness Coaches"
        description="Our certified trainers guide, motivate, and support you throughout your fitness journey."
        />

        <div className="trainer-grid">
          {trainers.slice(0,3).map((trainer)=>(
            <Trainers key={trainer.id} {...trainer}/>
          ))}
        </div>
      </section>

      <section className="testimonials-section">
      <SectionTitle
        subtitle="Testimonials"
        title="What Our Members Say"
        description="Real stories from members who transformed their lifestyle with Fitness Zone."
      />

        <div className="testimonial-grid">

    {testimonial.map((item) => (
      <TestimonialCard
        key={item.id}
        {...item}
      />
    ))}

  </div>

      </section>

      <section className="cta-section">
    <CTASection/>
      </section>


    </div>
  );
}

export default HomePage;