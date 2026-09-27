import strengthTraining from "../assets/images/classes/strength-training.png";
import hiitBlast from "../assets/images/classes/hiitBlast.png"
import yogaMobility from "../assets/images/classes/yogaMobility.png"
import cardioBurn from "../assets/images/classes/cardio-burn.png";
import personalTraining from "../assets/images/classes/personalTraining.png"
import zumbaDance from "../assets/images/classes/zumba-Dance.png"
import weightLossProgram from "../assets/images/classes/weightLossProgram.png"
import crossfitBasics from "../assets/images/classes/crossfitBasics.png"

export const features = [
  {
    id: 1,
    title: "Modern Equipment",
    description:
      "Train with advanced machines and high-quality workout equipment designed for all fitness levels.",
    iconIdea: "🏋️",
  },
  {
    id: 2,
    title: "Certified Trainers",
    description:
      "Get professional guidance from experienced trainers who help you train safely and effectively.",
    iconIdea: "👥",
  },
  {
    id: 3,
    title: "Flexible Timings",
    description:
      "Workout at your convenience with early morning and late evening gym hours.",
    iconIdea: "🕒",
  },
  {
    id: 4,
    title: "Nutrition Guidance",
    description:
      "Support your fitness journey with practical diet tips and healthy lifestyle guidance.",
    iconIdea: "🍎",
  },
];

export const classesHero = {
  subtitle : "Our Classes",
  title : "Find The Right Workout For Your Goal",
  description : "Explore our fitness programs designed for strength, fat loss, flexibility, endurance, and overall wellness."
}


export const classes = [
  {
    id: 1,
    name: "Strength Training",
    category: "Strength",
    duration: "60 min",
    difficulty: "Intermediate",
    trainer: "Aman Singh",
    schedule: "Mon, Wed, Fri - 6:00 PM",
    image : strengthTraining,
    description:
      "Build muscle, improve power, and learn proper weight training techniques.",
  },
  {
    id: 2,
    name: "HIIT Blast",
    category: "HIIT",
    duration: "45 min",
    difficulty: "Advanced",
    trainer: "Rohit Verma",
    schedule: "Tue, Thu - 7:00 AM",
    image : hiitBlast,
    description:
      "Burn calories fast with high-intensity workouts that improve stamina and endurance.",
  },
  {
    id: 3,
    name: "Yoga & Mobility",
    category: "Yoga",
    duration: "50 min",
    difficulty: "Beginner",
    trainer: "Priya Sharma",
    schedule: "Mon, Wed, Sat - 8:00 AM",
    image : yogaMobility,
    description:
      "Improve flexibility, balance, breathing, and recovery with guided yoga sessions.",
  },
  {
    id:4,
    name: "Cardio Burn",
    category: "Cardio",
    duration: "40 min",
    difficulty: "Beginner",
    trainer: "Rohit Verma",
    schedule: "Mon-Fri - 6:30 AM",
    image : cardioBurn,
    description: "Improve heart health and burn calories with fun and energetic cardio workouts."
  },
  {
    id: 5,
    name: "Personal Training",
    category: "Personal Training",
    duration: "60 min",
    difficulty: "All Levels",
    trainer: "Karan Gill",
    schedule: "Flexible Slots",
    image : personalTraining,
    description:"One-on-one coaching with custom workout plans based on your fitness goals."
  },
  {
      id: 6,
      name: "Zumba Dance",
      category: "Dance",
      duration: "45 min",
      difficulty: "Beginner",
      trainer: "Simran Kaur",
      schedule: "Tue, Thu, Sat - 6:00 PM",
      image : zumbaDance,
      description: "Enjoy energetic dance workouts that help burn calories and improve stamina."
  },
  {
    id : 7,
    name: "Weight Loss Program",
    category: "Cardio",
    duration: "55 min",
    difficulty: "Intermediate",
    trainer: "Neha Kapoor",
    schedule: "Mon, Wed, Fri - 7:00 PM",
    image : weightLossProgram,
    description: "A focused program combining cardio, strength, and nutrition guidance for fat loss."
  },
  {
    id: 8 ,
    name: "CrossFit Basics",
    category: "Strength",
    duration: "50 min",
    difficulty: "Advanced",
    trainer: "Aman Singh",
    schedule: "Sat, Sun - 9:00 AM",
    image : crossfitBasics,
    description: "Improve strength, speed, agility, and conditioning with functional fitness workouts."
  }
];

export const stats = [
  {id: 1,
    number: 500,
    suffix :"+",
    label : "Happy Members",
    icon: "😊"
  },
  {
    id:2,
    number: 15,
    suffix: "+",
    label: "Expert Trainers",
    icon: "💪 / 🧑‍🏫"
  },
  {
    id:3,
    number: 25,
suffix: "+",
label: "Weekly Classes",
icon: "🏋️ / 📅"
  },
  {
    id:4,
    number: 8,
    suffix: "+",
    label: "Years Experience",
    icon: "🏆 / ⭐"
  }
]

export const trainersHero = {
  subtitle: "Our Trainers",
  title : "Train With Certified Fitness Experts",
  description : "Meet our experienced trainers who guide, motivate, and support you at every step of your fitness journey."
}

export const trainers = [
  {
    id: 1,
    name: "Aman Singh",
    specialization: "Strength Coach",
    experience: "7 Years",
    certification: "Certified Strength & Conditioning Coach",
    bio: "Helps members build strength, muscle, and confidence with safe weight training.",
    links: [
  "instagram",
  "facebook"
]
  },
  {
    id: 2,
    name: "Priya Sharma",
    specialization: "Yoga Instructor",
    experience: "5 Years",
    certification: "Certified Yoga & Mobility Trainer",
    bio: "Focuses on flexibility, mobility, breathing, and stress relief through yoga.",
    links: [
  "instagram",
  "youtube"
]
  },
  {
    id: 3,
    name: "Rohit Verma",
    specialization: "HIIT Specialist",
    experience: "6 Years",
    certification: "Functional Fitness Coach",
    bio: "Designs energetic workouts for fat loss, endurance, and athletic performance.",
    links: [
  "instagram",
  "facebook"
]
  },

  {
    id: 4,
    name: "Neha Kapoor",
    specialization: "Nutrition Coach",
    experience: "4 Years",
    certification: "Sports Nutrition Specialist",
    bio: "Guides members with practical diet advice and healthy lifestyle habits.",
    links: [
      "instagram", 
      "linkedin"]
  },
  {
    id: 5,
    name: "Karan Gill",
    specialization: "Personal Trainers",
    experience : "8 Years",
    certification: "Certified Personal Fitness Trainer",
    bio: "Creates personalized workout plans for muscle gain, fat loss, and body transformation.",
    links: [
      "instagram",
       "facebook"]
  },
  {
    id: 6,
    name: "Simran Kaur",
    specialization: "Zumba Instructor",
    experience: "5 Years",
    certification: "Certified Dance Fitness Instructor",
    bio: "Leads fun and energetic dance workouts that improve stamina and burn calories.",
    links: [
      "instagram", "youtube"]
      }
];


export const trainerBenefitsHeader = {
  subtitle: "Expert Guidance",
  title: "Why Train With Our Coaches?",
  description: "Our trainers focus on safe techniques, personalized support, and consistent progress."
}

export const trainerBenefits = [
  {
    id: 1,
    icon: "Target",
    title: "Personalized Guidance",
    description: "Get workout plans based on your fitness level, goals, and body type."
  },
  {
    id: 2,
    icon: "ShieldCheck",
    title: "Safe Training",
    description: "Learn correct form and reduce the risk of injuries during workouts."
  },
  {
    id: 3,
    icon: "Flame",
    title: "Motivation & Accountability",
    description: "Stay consistent with regular support, progress tracking, and motivation."
  },
  {
    id: 4,
    icon: "Award",
    title: "Better Results",
    description: "Achieve your goals faster with structured training and expert feedback."
  }
];

export const testimonial = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "Gym Member",
    rating: 5,
    avatar: "AM",
    review: "Fitness Zone completely changed my routine. The trainers are supportive and the environment keeps me motivated every day."
  },
  {
    id :2,
    name: "Simran Kaur",
    role: "Weight Loss Member",
    rating: 5,
    avatar: "SK", 
    review: "I joined for weight loss and saw amazing progress. The classes are fun, challenging, and beginner-friendly."  
  },
  {
    id: 3,
    name: "Manpreet Singh",
    role: "Strength Training Member",
    rating: 5,
    avatar: "MS",
    review: "Best gym in Ludhiana. Clean space, modern equipment, and professional coaching."
  }
]

export const aboutHero = {
    subtitle: "About Us",
    title : "Building Stronger Bodies And Healthier Lives",
    description: "At Fitness Zone, we believe fitness is more than exercise — it is a lifestyle built on strength, discipline, and confidence."
  }


  export const aboutStory = {
  subtitle: "Our Story",
  title: "A Fitness Community Built For Everyone",
  paragraphs: [
    "Fitness Zone started with a simple goal — to make quality fitness training accessible to everyone. From beginners starting their first workout to experienced athletes pushing their limits, our gym provides the right environment to grow.",
    "With modern equipment, certified trainers, flexible timings, and a strong fitness community, we help our members build strength, improve health, and stay motivated every day."
  ],
  highlights: [
      {
        number: "8+",
        text: "Years Experience"
      },
      {
        number: "500+",
        text: "Happy Members"
      },
      {
        number: "15+",
        text: "Expert Trainers"
      }
  ]
}


export const aboutMissionVision = [
  {
    icon: "🎯",
    title: "Our Mission",
    description: "To help people become stronger, healthier, and more confident through expert training, modern facilities, and a supportive fitness environment."
  },
  {
    icon: "🚀",
    title: "Our Vision",
    description: "To become Ludhiana’s most trusted fitness destination for strength, wellness, and lifestyle transformation."
  }
];

export const aboutFeatures = [
  {
    id: 1,
    title: "Professional Trainers",
    description:
      "Certified coaches guide you with safe and effective workout techniques.",
    iconIdea: "👨‍🏫",
  },
  {
    id: 2,
    title: "Clean Environment",
    description:
      "Train in a hygienic and well-maintained fitness space.",
    iconIdea: "🧼",
  },
  {
    id: 3,
    title: "Modern Equipment",
    description:
      "Use high-quality machines and tools for every workout goal.",
    iconIdea: "🏋️",
  },
  {
    id: 4,
    title: "Personalized Plans",
    description:
      "Get workout guidance based on your fitness level and goals.",
    iconIdea: "📋",
  },
  {
    id: 5,
    title: "Affordable Membership",
    description:
      "Choose flexible membership plans designed for different budgets.",
    iconIdea: "💳",
  },
  {
    id: 6,
    title: "Community Support",
    description:
      "Stay motivated with a positive and energetic fitness community.",
    iconIdea: "🤝",
  },
];

export const bmiHero = {
  subtitle : "BMI Calculator",
  title : "Check Your Body Mass Index",
  description : "Enter your height and weight to calculate your BMI and understand your fitness category."
}

export const bmiInfo = {
    Underweight:{
        suggestion:"Focus on a balanced calorie surplus, strength training, and proper nutrition."
    },

    "Normal Weight":{
        suggestion:"Great job! Maintain your routine with regular workouts and balanced meals."
    },

    Overweight:{
        suggestion:"Combine strength training, cardio, and mindful eating to improve your fitness."
    },

    Obese:{
        suggestion:"Start with low-impact workouts and consult a health professional for a safe fitness plan."
    }
}


export const pricingHero = {
  subtitle : "Membership Plans",
  title : "Choose The Best Plan For Your Fitness Goal",
  description : "Flexible and affordable membership plans designed for beginners, regular members, and serious fitness transformations."
}

export const pricingPlans = [
  {id: 1,
    name: "Basic",
    price: "₹999/month",
    tagline: "Perfect for Beginners",
    features: [
      "Gym Access",
      "Basic Equipment",
      "Locker Facility",
      "Standard Support",
      "Flexible Timings"
    ],
    popular : false,
    buttonText : "Choose Basic" 
  },
  {
    id: 2,
    name: "Standard",
    price: "₹1,999/month",
    tagline: "Best for regular fitness lovers",
    badge : "Most Popular",
    features: [
      "Everything in Basic",
      "Group Classes",
      "Cardio Zone Access",
      "Trainer Guidance",
      "Basic Diet Tips",
      "Progress Tracking"
    ],
    popular : true,
    buttonText : "Choose Standard" 
  },
  {
    id: 3,
    name: "Premium",
    price: "₹3,499/month",
    tagline: "Best for serious transformation",
    features: [
     "Everything in Standard",
      "Personal Trainer",
      "Custom Workout Plan",
      "Nutrition Plan",
      "Priority Support",
      "Monthly Body Assessment"
    ],
    popular : false,
    buttonText : "Choose Premium" 
  
  }
]

export const pricingComparison = {
  subtitle: "Compare Plans",
  title: "Find What Fits You Best",
  description:
    "Compare membership benefits and choose the plan that matches your training needs.",

  features: [
    {
      feature: "Gym Access",
      basic: "Yes",
      standard: "Yes",
      premium: "Yes"
    },
    {
      feature: "Locker Facility",
      basic: "Yes",
      standard: "Yes",
      premium: "Yes"
    },
    {
      feature: "Group Classes",
      basic: "No",
      standard: "Yes",
      premium: "Yes"
    },
    {
      feature: "Trainer Guidance",
      basic: "No",
      standard: "Yes",
      premium: "Yes"
    },
    {
      feature: "Diet Tips",
      basic: "No",
      standard: "Basic",
      premium: "Advanced"
    },
    {
      feature: "Personal Trainer",
      basic: "No",
      standard: "No",
      premium: "Yes"
    },
    {
      feature: "Custom Workout Plan",
      basic: "No",
      standard: "No",
      premium: "Yes"
    },
    {
      feature: "Nutrition Plan",
      basic: "No",
      standard: "No",
      premium: "Yes"
    },
    {
      feature: "Priority Support",
      basic: "No",
      standard: "No",
      premium: "Yes"
    }
  ]
};

export const faqHero = {
  subtitle: "Questions",
  title: "Frequently Asked Questions",
  description:
    "Have questions about our memberships? Find quick answers below."
};



export const faqs = [
  {
    id: 1,
    question: "Can I try the gym before joining?",
    answer:
      "Yes, you can visit Fitness Zone and request a trial session before choosing a membership plan."
  },
  {
    id: 2,
    question: "Do you provide personal training?",
    answer:
      "Yes, personal training is available with our Premium plan or as an add-on service."
  },
  {
    id: 3,
    question: "Are there separate timings for women?",
    answer:
      "You can contact our team for current women-friendly batches and available training slots."
  },
  {
    id: 4,
    question: "Can I freeze my membership?",
    answer:
      "Membership freeze options may be available for selected plans. Please contact our front desk for details."
  },
  {
    id: 5,
    question: "Do you provide diet plans?",
    answer:
      "Basic diet tips are included in the Standard plan, while Premium members receive personalized nutrition guidance."
  },
  {
    id: 6,
    question: "What are your opening hours?",
    answer:
      "We are open Monday to Saturday from 5:00 AM to 10:00 PM."
  }
];
