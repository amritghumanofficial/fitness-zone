// src/data/galleryData.js

import facilityImg from "../assets/images/galleryImages/gym-interior.png";
import strengthImg from '../assets/images/galleryImages/strength-zone.png';
import cardioImg from '../assets/images/galleryImages/cardio-area.png';
import classesImg from '../assets/images/galleryImages/group-class.png';
import trainingImg from '../assets/images/galleryImages/personal-training.png';
import yogaImg from '../assets/images/galleryImages/yoga-zone.png';

export const galleryImages = [
  {
    id: 1,
    title: "Modern Gym Interior",
    category: "Facility",
    img: facilityImg,  
    alt: "Modern gym facility with city view"
  },
  {
    id: 2,
    title: "Strength Training Zone",
    category: "Strength",
    img: strengthImg,
    alt: "Heavy deadlift in industrial gym"
  },
  {
    id: 3,
    title: "Cardio Area",
    category: "Cardio",
    img: cardioImg,
    alt: "Spinning class with neon lights"
  },
  {
    id: 4,
    title: "Group Workout Class",
    category: "Classes",
    img: classesImg,
    alt: "Yoga class from aerial view"
  },
  {
    id: 5,
    title: "Personal Training Session",
    category: "Training",
    img: trainingImg,
    alt: "Female trainer spotting client"
  },
  {
    id: 6,
    title: "Yoga & Mobility Zone",
    category: "Yoga",
    img: yogaImg,
    alt: "Hip opener stretch with yoga props"
  }
];