import React from "react";
import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { classes, classesHero } from "../data/gymData";
import ClassCard from "../components/ClassCard";
import CTASection from "../components/CTASection";
import "../styles/ClassCard.css"
function ClassesPage() {

const [selectedCategory, setSelectedCategory] = useState("All");

const categories = [
  "All",
  "Strength",
  "Cardio",
  "Yoga",
  "HIIT",
  "Personal Training",
  "Dance",
];

const filteredClasses = 
selectedCategory === "All"
? classes
: classes.filter(
    (item) => item.category ===  selectedCategory
)

  return (
    <main>
      <section>
        <SectionTitle
          subtitle={classesHero.subtitle}
          title={classesHero.title}
          description={classesHero.description}
        />

               <div className="classesCard-section">
                <div className="category-filter">
        {categories.map((category) => (
            <button
            key={category}
            className="filter-btn"
            onClick={() => setSelectedCategory(category)}
            >
            {category}
            </button>
        ))}
        </div>

          <div className="classes-grid">
            {filteredClasses.map((item) => (
              <ClassCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

         <section className="cta-section">
         <CTASection/>
      </section>

    </main>
  );
}

export default ClassesPage;
