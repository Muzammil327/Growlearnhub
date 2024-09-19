interface Quiz {
  id: number
  name: string
  options: string[]
  correctOptions: string
  slug: string
  relatedQuizzes?: number[] // Array of related quiz IDs
}

const RandomData1: any[] = [
  {
    id: 1,
    name: "How do I find my blood type?",
    // catgeory:['skeletal-system', 'bones'],
    // catgeory:['world-knowledge', 'dams', 'tarbela dam', '9th'],
    options: [
      "Through a blood test at a medical facility",
      "By guessing based on family history",
      "By analyzing diet preferences",
      "Through a skin test"
    ],
    correctOptions: "Through a blood test at a medical facility",
    slug: "how-do-i-find-my-blood-type",
    relatedQuizzes: [1, 5, 7, 8, 10, 15, 22, 24, 25, 218, 219, 220, 221, 222, 223, 224, 225, 226]
  },
  {
    id: 2,
    name: "How do I test my IQ?",
    options: [
      "By taking an IQ test administered by a psychologist",
      "By solving daily crossword puzzles",
      "By calculating it from my grades",
      "By checking my birth certificate"
    ],
    correctOptions: "By taking an IQ test administered by a psychologist",
    slug: "how-do-i-test-my-iq"
  },
  {
    id: 3,
    name: "How can I boost my IQ?",
    options: [
      "By engaging in brain-training activities",
      "By eating spicy foods",
      "By sleeping less",
      "By avoiding all mental challenges"
    ],
    correctOptions: "By engaging in brain-training activities",
    slug: "how-can-i-boost-my-iq"
  },
  {
    id: 4,
    name: "How can I increase my IQ?",
    options: [
      "By reading, learning new skills, and problem-solving",
      "By watching TV for extended hours",
      "By consuming sugary foods",
      "By avoiding mental stimulation"
    ],
    correctOptions: "By reading, learning new skills, and problem-solving",
    slug: "how-can-i-increase-my-iq"
  },
  {
    id: 5,
    name: "What blood type do mosquitoes like?",
    options: ["Type O", "Type A", "Type B", "Type AB"],
    correctOptions: "Type O",
    slug: "what-blood-type-do-mosquitoes-like",
    relatedQuizzes: [227, 228, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246]
  },
  {
    id: 6,
    name: "What IQ is considered genius level?",
    options: ["130 or above", "90-100", "70-80", "50 or below"],
    correctOptions: "130 or above",
    slug: "what-iq-is-considered-genius-level"
  },
  {
    id: 7,
    name: "Which blood group is rare?",
    options: ["AB-", "O+", "A+", "B+"],
    correctOptions: "AB-",
    slug: "which-blood-group-is-rare",
    relatedQuizzes: [247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 261, 262, 263, 264, 265, 266, 267, 268]
  },
  {
    id: 8,
    name: "Which is the strongest blood group?",
    options: ["O-", "A+", "B-", "AB+"],
    correctOptions: "O-",
    slug: "which-is-the-strongest-blood-group",
    relatedQuizzes: [1, 5, 7, 8, 10, 15, 22, 24, 25, 218, 219, 220, 221, 222, 223, 224, 225, 226]
  },
  {
    id: 9,
    name: "What are the three smallest bones in the human body?",
    options: [
      "Stapes, Incus, Malleus",
      "Stapes, Incus, Hyoid",
      "Malleus, Incus, Femur",
      "Stapes, Incus, Clavicle"
    ],
    correctOptions: "Stapes, Incus, Malleus",
    slug: "what-are-the-three-smallest-bones-in-the-human-body",
    relatedQuizzes: [318, 319, 320, 321]
  },
  {
    id: 10,
    name: "Can blood type change?",
    options: [
      "Yes, with medical procedures",
      "No, blood type is permanent",
      "Yes, due to lifestyle changes",
      "No, blood type can only be tested, not changed"
    ],
    correctOptions: "No, blood type is permanent",
    slug: "can-blood-type-change",
    relatedQuizzes: [227, 228, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246]
  },
  {
    id: 11,
    name: "Can IQ be increased?",
    options: [
      "Yes, through mental exercises",
      "No, IQ is fixed at birth",
      "Yes, with medication",
      "No, it can only be measured, not changed"
    ],
    correctOptions: "Yes, through mental exercises",
    slug: "can-iq-be-increased"
  },
  {
    id: 12,
    name: "Can O+ donate to anyone?",
    options: [
      "Yes, to any blood type",
      "No, only to O+ and O-",
      "Yes, but only to A+ and B+",
      "No, it can only donate to O+"
    ],
    correctOptions: "Yes, to any blood type",
    slug: "can-o-plus-donate-to-anyone"
  },
  {
    id: 13,
    name: "How can I increase brain power?",
    options: [
      "Regular exercise and mental challenges",
      "Eating specific foods only",
      "Taking brain supplements",
      "By increasing sleep duration"
    ],
    correctOptions: "Regular exercise and mental challenges",
    slug: "how-can-i-increase-brain-power"
  },
  {
    id: 14,
    name: "How do I check my IQ?",
    options: [
      "Through an online test",
      "By visiting a psychologist",
      "Using a self-assessment tool",
      "No method is accurate"
    ],
    correctOptions: "By visiting a psychologist",
    slug: "how-do-i-check-my-iq"
  },
  {
    id: 15,
    name: "How many blood tests are typically done during pregnancy?",
    options: ["1-2 tests", "3-4 tests", "5-6 tests", "More than 6 tests"],
    correctOptions: "3-4 tests",
    slug: "how-many-blood-tests-during-pregnancy",
    relatedQuizzes: [227, 228, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246]
  },
  {
    id: 16,
    name: "How many days does it typically take to confirm pregnancy?",
    options: ["1-3 days", "7-10 days", "14-21 days", "30 days"],
    correctOptions: "7-10 days",
    slug: "how-many-days-to-confirm-pregnancy"
  },
  {
    id: 17,
    name: "How to calculate IQ?",
    options: [
      "Through standardized testing",
      "Using online IQ calculators",
      "By comparing to average scores",
      "No calculation method is accurate"
    ],
    correctOptions: "Through standardized testing",
    slug: "how-to-calculate-iq"
  },
  {
    id: 18,
    name: "How to check your IQ?",
    options: [
      "Through a certified IQ test",
      "By taking online quizzes",
      "Using a self-assessment tool",
      "No method is reliable"
    ],
    correctOptions: "Through a certified IQ test",
    slug: "how-to-check-your-iq"
  },
  {
    id: 19,
    name: "How to fall pregnant fast?",
    options: [
      "Track ovulation and maintain a healthy lifestyle",
      "Try different positions during intercourse",
      "Increase frequency of intercourse",
      "Consult a fertility specialist"
    ],
    correctOptions: "Track ovulation and maintain a healthy lifestyle",
    slug: "how-to-fall-pregnant-fast"
  },
  {
    id: 20,
    name: "Is 120 IQ good?",
    options: [
      "Yes, it is above average",
      "No, it is below average",
      "Yes, it is exceptional",
      "No, it is average"
    ],
    correctOptions: "Yes, it is above average",
    slug: "is-120-iq-good"
  },
  {
    id: 21,
    name: "Is 130 IQ good?",
    options: [
      "Yes, it is above average",
      "No, it is below average",
      "Yes, it is considered high",
      "No, it is average"
    ],
    correctOptions: "Yes, it is considered high",
    slug: "is-130-iq-good"
  },
  {
    id: 22,
    name: "Is AB+ blood rare?",
    options: [
      "Yes, it is one of the rarest types",
      "No, it is common",
      "Yes, but not very rare",
      "No, it is the most common type"
    ],
    correctOptions: "Yes, it is one of the rarest types",
    slug: "is-ab-plus-blood-rare",
    relatedQuizzes: [247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 261, 262, 263, 264, 265, 266, 267, 268]
  },
  {
    id: 23,
    name: "Is IQ genetic?",
    options: [
      "Yes, genetics play a significant role",
      "No, IQ is entirely environmental",
      "Yes, but environmental factors are more significant",
      "No, IQ is influenced by education only"
    ],
    correctOptions: "Yes, genetics play a significant role",
    slug: "is-iq-genetic"
  },
  {
    id: 24,
    name: "What blood type am I?",
    options: ["A, B, AB, or O", "Positive or Negative", "A or B", "AB or O"],
    correctOptions: "A, B, AB, or O",
    slug: "what-blood-type-am-i",
    relatedQuizzes: [1, 5, 7, 8, 10, 15, 22, 24, 25, 218, 219, 220, 221, 222, 223, 224, 225, 226]
  },
  {
    id: 25,
    name: "What blood type rejects pregnancy?",
    options: [
      "Rh-negative blood type",
      "Rh-positive blood type",
      "Type O blood type",
      "Type A blood type"
    ],
    correctOptions: "Rh-negative blood type",
    slug: "what-blood-type-rejects-pregnancy",
    relatedQuizzes: [227, 228, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246]
  },
  {
    id: 26,
    name: "What is a normal IQ?",
    options: ["Around 100", "Around 120", "Around 80", "Around 140"],
    correctOptions: "Around 100",
    slug: "what-is-a-normal-iq"
  },
  {
    id: 27,
    name: "What is Albert Einstein's IQ?",
    options: ["160", "180", "150", "190"],
    correctOptions: "160",
    slug: "what-is-albert-einsteins-iq"
  },
  {
    id: 28,
    name: "What is Einstein's IQ?",
    options: ["160", "180", "150", "190"],
    correctOptions: "160",
    slug: "what-is-einsteins-iq"
  },
  {
    id: 29,
    name: "Which is the largest island in the world?",
    options: ["Greenland", "Australia", "New Guinea", "Borneo"],
    correctOptions: "Greenland",
    slug: "which-is-the-largest-island-in-the-world"
  },
  {
    id: 30,
    name: "Is Australia an island?",
    options: [
      "Yes",
      "No",
      "It is a continent",
      "It is both an island and a continent"
    ],
    correctOptions: "It is a continent",
    slug: "is-australia-an-island"
  },
  {
    id: 31,
    name: "Is Greenland a country?",
    options: [
      "Yes",
      "No, it is part of Denmark",
      "No, it is a province",
      "Yes, but with limited sovereignty"
    ],
    correctOptions: "No, it is part of Denmark",
    slug: "is-greenland-a-country",
  },
  {
    id: 32,
    name: "What is the world's largest island?",
    options: ["Greenland", "Australia", "New Guinea", "Borneo"],
    correctOptions: "Greenland",
    slug: "what-is-the-worlds-largest-island"
  },
  {
    id: 33,
    name: "Where is Greenland located?",
    options: ["North America", "Europe", "Asia", "Antarctica"],
    correctOptions: "North America",
    slug: "where-is-greenland-located"
  },
  {
    id: 34,
    name: "Which island is the largest in the world?",
    options: ["Greenland", "Australia", "New Guinea", "Borneo"],
    correctOptions: "Greenland",
    slug: "which-island-is-the-largest-in-the-world"
  },

  {
    id: 35,
    name: "Do people live in Greenland?",
    options: ["Yes", "No", "Only scientists", "Only during the summer"],
    correctOptions: "Yes",
    slug: "do-people-live-in-greenland"
  },
  {
    id: 36,
    name: "Does Antarctica have a flag?",
    options: [
      "Yes",
      "No",
      "Only for research stations",
      "It has a symbolic flag"
    ],
    correctOptions: "It has a symbolic flag",
    slug: "does-antarctica-have-a-flag"
  },
  {
    id: 37,
    name: "In which continent is Greenland?",
    options: ["North America", "Europe", "Asia", "Antarctica"],
    correctOptions: "North America",
    slug: "in-which-continent-is-greenland"
  },
  {
    id: 38,
    name: "Is Australia bigger than the USA?",
    options: [
      "Yes",
      "No",
      "They are the same size",
      "Australia is slightly smaller"
    ],
    correctOptions: "No",
    slug: "is-australia-bigger-than-the-usa"
  },
  {
    id: 39,
    name: "Is Greenland part of Europe?",
    options: ["Yes", "No", "Only politically", "Only geographically"],
    correctOptions: "No",
    slug: "is-greenland-part-of-europe"
  },
  {
    id: 40,
    name: "What does the Israel flag look like?",
    options: [
      "Blue and white with a Star of David",
      "Blue and yellow with a Star of David",
      "Red and white with a Star of David",
      "Black and white with a Star of David"
    ],
    correctOptions: "Blue and white with a Star of David",
    slug: "what-does-the-israel-flag-look-like"
  },
  {
    id: 41,
    name: "What flag is black, red, and yellow?",
    options: ["Germany", "Belgium", "Spain", "Colombia"],
    correctOptions: "Germany",
    slug: "what-flag-is-black-red-and-yellow"
  },
  {
    id: 42,
    name: "What flag is blue and yellow?",
    options: ["Sweden", "Ukraine", "Kazakhstan", "Brazil"],
    correctOptions: "Ukraine",
    slug: "what-flag-is-blue-and-yellow"
  },
  {
    id: 43,
    name: "What is Denmark famous for?",
    options: ["Lego", "Vikings", "Fairy tales", "All of the above"],
    correctOptions: "All of the above",
    slug: "what-is-denmark-famous-for"
  },
  {
    id: 44,
    name: "What is the biggest island in the world?",
    options: ["Greenland", "Australia", "New Guinea", "Borneo"],
    correctOptions: "Greenland",
    slug: "what-is-the-biggest-island-in-the-world"
  },
  {
    id: 45,
    name: "What language is spoken in Greenland?",
    options: ["Greenlandic", "Danish", "Inuit languages", "All of the above"],
    correctOptions: "All of the above",
    slug: "what-language-is-spoken-in-greenland"
  },
  {
    id: 46,
    name: "Which country is closest to the equator?",
    options: ["Ecuador", "Kenya", "Brazil", "Indonesia"],
    correctOptions: "Ecuador",
    slug: "which-country-is-closest-to-the-equator"
  },
  {
    id: 47,
    name: "Which is bigger, Greenland or Australia?",
    options: [
      "Australia",
      "Greenland",
      "They are the same size",
      "Greenland is slightly bigger"
    ],
    correctOptions: "Australia",
    slug: "which-is-bigger-greenland-or-australia"
  },
  {
    id: 48,
    name: "Which is larger, Greenland or the USA?",
    options: [
      "The USA",
      "Greenland",
      "They are the same size",
      "Greenland is slightly larger"
    ],
    correctOptions: "The USA",
    slug: "which-is-larger-greenland-or-usa"
  },
  {
    id: 49,
    name: "Who discovered Greenland?",
    options: [
      "Erik the Red",
      "Christopher Columbus",
      "Leif Erikson",
      "Marco Polo"
    ],
    correctOptions: "Erik the Red",
    slug: "who-discovered-greenland"
  },
  {
    id: 50,
    name: "Who founded Greenland?",
    options: [
      "Erik the Red",
      "Leif Erikson",
      "Christopher Columbus",
      "Vikings"
    ],
    correctOptions: "Erik the Red",
    slug: "who-founded-greenland"
  },
  {
    id: 51,
    name: "Who owns Greenland?",
    options: ["Denmark", "Greenland", "Canada", "USA"],
    correctOptions: "Denmark",
    slug: "who-owns-greenland"
  },
  {
    id: 52,
    name: "Why is it called Greenland?",
    options: [
      "To attract settlers",
      "Because of its green valleys",
      "It was named by Vikings",
      "It is a translation error"
    ],
    correctOptions: "To attract settlers",
    slug: "why-is-it-called-greenland"
  },

  {
    id: 53,
    name: "Are there trees in Greenland?",
    options: ["Yes", "No", "Only in certain areas", "Only in the south"],
    correctOptions: "Only in certain areas",
    slug: "are-there-trees-in-greenland"
  },
  {
    id: 54,
    name: "Can you live in Greenland?",
    options: [
      "Yes",
      "No",
      "Only during the summer",
      "Only for research purposes"
    ],
    correctOptions: "Yes",
    slug: "can-you-live-in-greenland"
  },
  {
    id: 55,
    name: "Does Greenland have a military?",
    options: [
      "Yes",
      "No",
      "Only a small defense force",
      "It relies on Denmark for defense"
    ],
    correctOptions: "It relies on Denmark for defense",
    slug: "does-greenland-have-a-military"
  },
  {
    id: 56,
    name: "Greenland or Iceland?",
    options: [
      "Greenland is larger",
      "Iceland is larger",
      "They are the same size",
      "Iceland is colder"
    ],
    correctOptions: "Greenland is larger",
    slug: "greenland-or-iceland"
  },
  {
    id: 57,
    name: "How large is Greenland?",
    options: [
      "2.16 million square kilometers",
      "1.5 million square kilometers",
      "3.2 million square kilometers",
      "1 million square kilometers"
    ],
    correctOptions: "2.16 million square kilometers",
    slug: "how-large-is-greenland"
  },
  {
    id: 58,
    name: "How many cities are in Greenland?",
    options: ["3", "5", "10", "15"],
    correctOptions: "3",
    slug: "how-many-cities-are-in-greenland"
  },
  {
    id: 59,
    name: "Is Australia the largest island in the world?",
    options: ["Yes", "No, Greenland is", "No, New Guinea is", "No, Borneo is"],
    correctOptions: "No, Greenland is",
    slug: "is-australia-the-largest-island-in-the-world"
  },
  {
    id: 60,
    name: "Is Greenland a country, yes or no?",
    options: [
      "Yes",
      "No",
      "It is a self-governing territory",
      "It has limited sovereignty"
    ],
    correctOptions: "No",
    slug: "is-greenland-a-country-yes-or-no",
  },
  {
    id: 61,
    name: "Is Greenland bigger than Africa?",
    options: [
      "Yes",
      "No",
      "They are about the same size",
      "Greenland is slightly bigger"
    ],
    correctOptions: "No",
    slug: "is-greenland-bigger-than-africa"
  },
  {
    id: 62,
    name: "Is Greenland bigger than Canada?",
    options: [
      "Yes",
      "No",
      "They are about the same size",
      "Greenland is slightly bigger"
    ],
    correctOptions: "No",
    slug: "is-greenland-bigger-than-canada"
  },
  {
    id: 63,
    name: "Is Greenland bigger than India?",
    options: [
      "Yes",
      "No",
      "They are about the same size",
      "Greenland is slightly bigger"
    ],
    correctOptions: "Yes",
    slug: "is-greenland-bigger-than-india"
  },
  {
    id: 64,
    name: "Is Greenland in NATO?",
    options: ["Yes", "No", "Only Denmark is a member", "It is a future member"],
    correctOptions: "No",
    slug: "is-greenland-in-nato"
  },
  {
    id: 65,
    name: "What is Greenland known for?",
    options: ["Ice sheets", "Vikings", "Polar bears", "All of the above"],
    correctOptions: "All of the above",
    slug: "what-is-greenland-known-for"
  },
  {
    id: 66,
    name: "What is the oldest flag?",
    options: ["Denmark", "Sweden", "Scotland", "Nepal"],
    correctOptions: "Denmark",
    slug: "what-is-the-oldest-flag"
  },
  {
    id: 67,
    name: "What is the smallest continent on Earth?",
    options: ["Australia", "Europe", "Antarctica", "South America"],
    correctOptions: "Australia",
    slug: "what-is-the-smallest-continent-on-earth"
  },
  {
    id: 68,
    name: "Which country has the best army?",
    options: ["United States", "China", "Russia", "India"],
    correctOptions: "United States",
    slug: "which-country-has-the-best-army"
  },
  {
    id: 69,
    name: "Which country is both an island and a continent?",
    options: ["Australia", "Greenland", "Iceland", "New Zealand"],
    correctOptions: "Australia",
    slug: "which-country-is-both-an-island-and-a-continent"
  },
  {
    id: 70,
    name: "Which country owns Greenland?",
    options: ["Denmark", "Iceland", "Norway", "Sweden"],
    correctOptions: "Denmark",
    slug: "which-country-owns-greenland"
  },
  {
    id: 71,
    name: "Which country's flag is blue, white, and red?",
    options: ["France", "Australia", "Canada", "Iceland"],
    correctOptions: "France",
    slug: "which-countrys-flag-is-blue-white-and-red",
  },
  {
    id: 72,
    name: "Who controls Greenland?",
    options: ["Denmark", "Iceland", "Norway", "The United States"],
    correctOptions: "Denmark",
    slug: "who-controls-greenland"
  },
  {
    id: 73,
    name: "Who named Greenland?",
    options: [
      "Eric the Red",
      "Leif Erikson",
      "Christopher Columbus",
      "Vikings"
    ],
    correctOptions: "Eric the Red",
    slug: "who-named-greenland"
  },
  {
    id: 74,
    name: "Who owns Iceland and Greenland?",
    options: ["Denmark", "Iceland", "Norway", "Sweden"],
    correctOptions: "Denmark",
    slug: "who-owns-iceland-and-greenland"
  },
  {
    id: 75,
    name: "Who rules Greenland?",
    options: ["Denmark", "Iceland", "Norway", "The United States"],
    correctOptions: "Denmark",
    slug: "who-rules-greenland"
  },
  {
    id: 76,
    name: "Why is Australia not an island?",
    options: [
      "It is considered a continent",
      "It is too large to be an island",
      "It is surrounded by seas, not just oceans",
      "It is part of Oceania"
    ],
    correctOptions: "It is considered a continent",
    slug: "why-is-australia-not-an-island"
  },
  {
    id: 77,
    name: "Why is Greenland not a continent?",
    options: [
      "It is too small",
      "It is covered in ice",
      "It is part of North America",
      "It is not a landmass but a region"
    ],
    correctOptions: "It is part of North America",
    slug: "why-is-greenland-not-a-continent"
  },
  {
    id: 78,
    name: "Why is Greenland so big on maps?",
    options: [
      "Map projection distortion",
      "It is actually very large",
      "Maps are outdated",
      "It is zoomed in on maps"
    ],
    correctOptions: "Map projection distortion",
    slug: "why-is-greenland-so-big-on-maps"
  },
  {
    id: 79,
    name: "Can I buy land in Greenland?",
    options: [
      "Yes",
      "No",
      "Only with government permission",
      "Only as a foreigner"
    ],
    correctOptions: "No",
    slug: "can-i-buy-land-in-greenland"
  },
  {
    id: 80,
    name: "Is Greenland bigger than China?",
    options: [
      "Yes",
      "No",
      "They are the same size",
      "Greenland is slightly smaller"
    ],
    correctOptions: "No",
    slug: "is-greenland-bigger-than-china"
  },
  {
    id: 81,
    name: "Is Greenland bigger than Iceland?",
    options: [
      "Yes",
      "No",
      "They are the same size",
      "Greenland is slightly smaller"
    ],
    correctOptions: "Yes",
    slug: "is-greenland-bigger-than-iceland"
  },
  {
    id: 82,
    name: "Is it always cold in Greenland?",
    options: ["Yes", "No", "Only in winter", "Only in summer"],
    correctOptions: "No",
    slug: "is-it-always-cold-in-greenland"
  },
  {
    id: 83,
    name: "Is there land under Greenland?",
    options: ["Yes", "No", "It is all ice", "It is ocean"],
    correctOptions: "Yes",
    slug: "is-there-land-under-greenland"
  },
  {
    id: 84,
    name: "What country has a green, yellow, and red flag?",
    options: ["Brazil", "Mexico", "Spain", "France"],
    correctOptions: "Brazil",
    slug: "what-country-has-green-yellow-and-red-flag"
  },
  {
    id: 85,
    name: "What flag is Greece?",
    options: [
      "Blue and white stripes",
      "Red and white",
      "Blue and yellow",
      "Green and white"
    ],
    correctOptions: "Blue and white stripes",
    slug: "what-flag-is-greece"
  },
  {
    id: 86,
    name: "What flag is Saudi Arabia?",
    options: [
      "Green with white script",
      "Red and white stripes",
      "Blue and yellow",
      "Black and white"
    ],
    correctOptions: "Green with white script",
    slug: "what-flag-is-saudi-arabia"
  },
  {
    id: 87,
    name: "What flag is Turkey?",
    options: [
      "Red with white star and crescent",
      "Blue and white stripes",
      "Red and white stripes",
      "Green with white star"
    ],
    correctOptions: "Red with white star and crescent",
    slug: "what-flag-is-turkey"
  },
  {
    id: 88,
    name: "What is special about Greenland?",
    options: [
      "Largest island in the world",
      "Has a unique language",
      "Has no trees",
      "All of the above"
    ],
    correctOptions: "All of the above",
    slug: "what-is-special-about-greenland"
  },
  {
    id: 89,
    name: "What is the culture of Greenland?",
    options: [
      "Inuit culture",
      "Viking culture",
      "Nordic culture",
      "Western culture"
    ],
    correctOptions: "Inuit culture",
    slug: "what-is-the-culture-of-greenland"
  },
  {
    id: 90,
    name: "What is the meaning of Greenland?",
    options: ["Green land", "Frozen land", "New land", "Land of ice"],
    correctOptions: "Green land",
    slug: "what-is-the-meaning-of-greenland"
  },
  {
    id: 91,
    name: "What religion is Greenland?",
    options: ["Christianity", "Buddhism", "Islam", "Hinduism"],
    correctOptions: "Christianity",
    slug: "what-religion-is-greenland"
  },
  {
    id: 92,
    name: "Which country has a black and white flag?",
    options: ["Germany", "Japan", "South Korea", "Monaco"],
    correctOptions: "Germany",
    slug: "which-country-has-a-black-and-white-flag"
  },
  {
    id: 93,
    name: "Which country has green in its flag?",
    options: ["Brazil", "Japan", "Russia", "France"],
    correctOptions: "Brazil",
    slug: "which-country-has-green-in-its-flag"
  },
  {
    id: 94,
    name: "Which country has green, white, and red in its flag?",
    options: ["Mexico", "India", "Italy", "All of the above"],
    correctOptions: "All of the above",
    slug: "which-country-has-green-white-and-red"
  },
  {
    id: 95,
    name: "Which country has a yellow and red flag?",
    options: ["Spain", "Canada", "China", "Japan"],
    correctOptions: "Spain",
    slug: "which-country-has-yellow-and-red-flag"
  },
  {
    id: 96,
    name: "Which country is bigger, Greenland or India?",
    options: [
      "Greenland",
      "India",
      "They are the same size",
      "Greenland is slightly smaller"
    ],
    correctOptions: "India",
    slug: "which-country-is-bigger-greenland-or-india"
  },
  {
    id: 97,
    name: "Which country is colder?",
    options: ["Greenland", "Iceland", "Both are the same", "Neither"],
    correctOptions: "Greenland",
    slug: "which-country-is-colder"
  },
  {
    id: 98,
    name: "Which country's flag has red in it?",
    options: ["Canada", "United Kingdom", "South Korea", "All of the above"],
    correctOptions: "All of the above",
    slug: "which-countrys-flag-has-red-in-it",
  },
  {
    id: 99,
    name: "Which flag has a sun on it?",
    options: ["Japan", "Brazil", "Argentina", "Turkey"],
    correctOptions: "Argentina",
    slug: "which-flag-has-a-sun-on-it"
  },
  {
    id: 100,
    name: "Who is the leader of Greenland?",
    options: [
      "Kim Kielsen",
      "Mette Frederiksen",
      "Lars Løkke Rasmussen",
      "Thorvald Stoltenberg"
    ],
    correctOptions: "Kim Kielsen",
    slug: "who-is-the-leader-of-greenland"
  }
]

const RandomData2: any[] = [
  {
    id: 101,
    name: "Who runs Greenland?",
    options: ["Denmark", "Iceland", "Norway", "The United States"],
    correctOptions: "Denmark",
    slug: "who-runs-greenland"
  },
  {
    id: 102,
    name: "Why is Greenland a part of the USA?",
    options: [
      "It is not part of the USA",
      "It was purchased by the USA",
      "It is a territory of Denmark",
      "It is under US administration"
    ],
    correctOptions: "It is not part of the USA",
    slug: "why-is-greenland-a-part-of-usa"
  },
  {
    id: 103,
    name: "Why is Greenland so expensive?",
    options: [
      "High cost of living",
      "Low population density",
      "Remote location",
      "All of the above"
    ],
    correctOptions: "All of the above",
    slug: "why-is-greenland-so-expensive"
  },
  {
    id: 104,
    name: "Why is Greenland so famous?",
    options: [
      "Its ice sheet",
      "Its unique culture",
      "Its strategic location",
      "All of the above"
    ],
    correctOptions: "All of the above",
    slug: "why-is-greenland-so-famous"
  },
  {
    id: 105,
    name: "Why is Greenland very cold?",
    options: [
      "Its polar location",
      "High altitude",
      "Proximity to the Arctic",
      "All of the above"
    ],
    correctOptions: "All of the above",
    slug: "why-is-greenland-very-cold"
  },
  {
    id: 106,
    name: "Why are Iceland and Greenland named opposite?",
    options: [
      "Historical reasons",
      "Geographic features",
      "Discovery myths",
      "Naming conventions"
    ],
    correctOptions: "Discovery myths",
    slug: "why-are-iceland-and-greenland-named-opposite"
  },
  {
    id: 107,
    name: "Why live in Greenland?",
    options: [
      "Unique environment",
      "Cultural experience",
      "Adventure and isolation",
      "All of the above"
    ],
    correctOptions: "All of the above",
    slug: "why-live-in-greenland"
  },
  {
    id: 108,
    name: "What is the total length of Ravi River?",
    options: [
      "500 kilometers",
      "720 kilometers",
      "1000 kilometers",
      "1200 kilometers"
    ],
    correctOptions: "720 kilometers",
    slug: "what-is-the-total-length-of-ravi-river",
    relatedQuizzes: [109, 110, 111, 112]
  },
  {
    id: 109,
    name: "In which countries does the Ravi River flow?",
    options: [
      "India and Pakistan",
      "India and China",
      "Pakistan and Afghanistan",
      "India and Nepal"
    ],
    correctOptions: "India and Pakistan",
    slug: "in-which-countries-does-the-ravi-river-flow",
    relatedQuizzes: [108, 110, 111, 112]
  },
  {
    id: 110,
    name: "What is the primary source of the Ravi River?",
    options: [
      "Himalayas",
      "Karakoram Range",
      "Western Ghats",
      "Sulaiman Range"
    ],
    correctOptions: "Himalayas",
    slug: "what-is-the-primary-source-of-the-ravi-river",
    relatedQuizzes: [108, 109, 111, 112]
  },
  {
    id: 111,
    name: "Which major city is located near the Ravi River?",
    options: ["Lahore", "Karachi", "Delhi", "Islamabad"],
    correctOptions: "Lahore",
    slug: "which-major-city-is-located-near-the-ravi-river",
    relatedQuizzes: [108, 109, 110, 112, 136, 137, 177, 189, 385, 394, 396, 412, 438, 446, 448, 449, 453, 456, 457, 459]
  },
  {
    id: 112,
    name: "What type of river is the Ravi River classified as?",
    options: [
      "Glacial river",
      "Mountain river",
      "Plains river",
      "Desert river"
    ],
    correctOptions: "Mountain river",
    slug: "what-type-of-river-is-the-ravi-river-classified-as",
    relatedQuizzes: [108, 109, 110, 111]
  },
  {
    id: 113,
    name: "How many major rivers are there in India?",
    options: ["5", "7", "10", "12"],
    correctOptions: "7",
    slug: "how-many-major-rivers-are-there-in-india"
  },
  {
    id: 114,
    name: "How many rivers in india?",
    options: ["5", "7", "10", "12"],
    correctOptions: "7",
    slug: "how-many-rivers-in-india"
  },
  {
    id: 115,
    name: "The indus river originates from which region?",
    options: [
      "Himalayas",
      "Tibet Autonomous Region",
      "Karakoram Range",
      "Western Ghats"
    ],
    correctOptions: "Tibet Autonomous Region",
    slug: "the-indus-river-originates-from-which-region"
  },
  {
    id: 116,
    name: "Which river is known as the 'Sorrow of Punjab'?",
    options: ["Jhelum", "Chenab", "Ravi", "Indus"],
    correctOptions: "Chenab",
    slug: "which-river-is-known-as-the-sorrow-of-punjab",
    relatedQuizzes: [354, 377]
  },
  {
    id: 117,
    name: "Which Indian river is also called the 'Ganga of the South'?",
    options: ["Godavari", "Krishna", "Cauvery", "Yamuna"],
    correctOptions: "Godavari",
    slug: "which-indian-river-is-also-called-the-ganga-of-the-south"
  },
  {
    id: 118,
    name: "What is the total length of the Indus River?",
    options: [
      "1,000 kilometers",
      "2,000 kilometers",
      "3,000 kilometers",
      "3,180 kilometers"
    ],
    correctOptions: "3,180 kilometers",
    slug: "what-is-the-total-length-of-the-indus-river"
  },
  {
    id: 119,
    name: "What is the longest river in the world?",
    options: [
      "Amazon River",
      "Nile River",
      "Yangtze River",
      "Mississippi River"
    ],
    correctOptions: "Nile River",
    slug: "what-is-the-longest-river-in-the-world",
    relatedQuizzes: [122, 403, 360, 362, 334]
  },
  {
    id: 120,
    name: "Are guns legal in Japan?",
    options: ["Yes", "No", "Only for hunting", "Only for sports"],
    correctOptions: "No",
    slug: "are-guns-legal-in-japan"
  },
  {
    id: 121,
    name: "What is the deepest river on Earth?",
    options: [
      "Amazon River",
      "Congo River",
      "Yangtze River",
      "Mississippi River"
    ],
    correctOptions: "Congo River",
    slug: "what-is-the-deepest-river-on-earth"
  },
  {
    id: 122,
    name: "Which is the longest river in Asia?",
    options: ["Ganges River", "Yangtze River", "Mekong River", "Yellow River"],
    correctOptions: "Yangtze River",
    slug: "which-is-the-longest-river-in-asia",
    relatedQuizzes: [119, 403, 360, 362, 334]
  },
  {
    id: 123,
    name: "Why are guns legal in America?",
    options: [
      "Self-defense",
      "Second Amendment rights",
      "Cultural history",
      "All of the above"
    ],
    correctOptions: "All of the above",
    slug: "why-are-guns-legal-in-america"
  },
  {
    id: 124,
    name: "Are guns allowed in Korea?",
    options: ["Yes", "No", "Only for hunting", "Only for sports"],
    correctOptions: "No",
    slug: "are-guns-allowed-in-korea"
  },
  {
    id: 125,
    name: "Are guns illegal in France?",
    options: ["Yes", "No", "Only for hunting", "Only for sports"],
    correctOptions: "Yes",
    slug: "are-guns-illegal-in-france"
  },
  {
    id: 126,
    name: "Are guns legal in Italy?",
    options: ["Yes", "No", "Only for hunting", "Only for sports"],
    correctOptions: "Yes",
    slug: "are-guns-legal-in-italy"
  },
  {
    id: 127,
    name: "Are guns legal in Spain?",
    options: ["Yes", "No", "Only for hunting", "Only for sports"],
    correctOptions: "Yes",
    slug: "are-guns-legal-in-spain"
  },
  {
    id: 128,
    name: "Are guns legal in Thailand?",
    options: ["Yes", "No", "Only for hunting", "Only for sports"],
    correctOptions: "Yes",
    slug: "are-guns-legal-in-thailand"
  },
  {
    id: 129,
    name: "Can you own a gun in Russia?",
    options: ["Yes", "No", "Only for hunting", "Only for sports"],
    correctOptions: "Yes",
    slug: "can-you-own-a-gun-in-russia"
  },
  {
    id: 130,
    name: "Can you own a gun in Switzerland?",
    options: ["Yes", "No", "Only for hunting", "Only for sports"],
    correctOptions: "Yes",
    slug: "can-you-own-a-gun-in-switzerland"
  },
  {
    id: 131,
    name: "Do German police carry guns?",
    options: ["Yes", "No", "Only in emergencies", "Only in special units"],
    correctOptions: "Yes",
    slug: "do-german-police-carry-guns"
  },
  {
    id: 132,
    name: "Do police in Japan carry guns?",
    options: ["Yes", "No", "Only in emergencies", "Only in special units"],
    correctOptions: "Yes",
    slug: "do-police-in-japan-carry-guns"
  },
  {
    id: 133,
    name: "How is life in Qatar?",
    options: [
      "Luxurious",
      "Challenging for expats",
      "Expensive",
      "All of the above"
    ],
    correctOptions: "All of the above",
    slug: "how-is-life-in-qatar"
  },
  {
    id: 134,
    name: "How much is rent in Qatar?",
    options: [
      "$500 - $1,000",
      "$1,000 - $2,000",
      "$2,000 - $3,000",
      "$3,000 and above"
    ],
    correctOptions: "$1,000 - $2,000",
    slug: "how-much-is-rent-in-qatar"
  },
  {
    id: 135,
    name: "Is Doha better than Dubai?",
    options: ["Yes", "No", "Depends on preference", "Both are equal"],
    correctOptions: "Depends on preference",
    slug: "is-doha-better-than-dubai"
  },
  {
    id: 136,
    name: "What city has the most gun violence?",
    options: ["Chicago", "Los Angeles", "New York", "St. Louis"],
    correctOptions: "St. Louis",
    slug: "what-city-has-the-most-gun-violence",
    relatedQuizzes: [111, 136, 177, 189, 385, 394, 396, 412, 438, 446, 448, 449, 453, 456, 457, 459]
  },
  {
    id: 137,
    name: "Which country has the most guns?",
    options: ["United States", "Russia", "China", "India"],
    correctOptions: "United States",
    slug: "which-country-has-the-most-guns"
  },
  {
    id: 138,
    name: "Which country has the most murders?",
    options: ["Brazil", "Mexico", "Venezuela", "United States"],
    correctOptions: "Brazil",
    slug: "which-country-has-the-most-murders"
  },
  {
    id: 139,
    name: "Which country has the most rivers?",
    options: ["Brazil", "Russia", "China", "Canada"],
    correctOptions: "Russia",
    slug: "which-country-has-the-most-rivers",
  },
  {
    id: 140,
    name: "Which is the oldest river in the world?",
    options: ["Nile River", "New River", "Finke River", "Susquehanna River"],
    correctOptions: "Finke River",
    slug: "which-is-the-oldest-river-in-the-world"
  },
  {
    id: 141,
    name: "Which state has the most murders?",
    options: ["California", "Texas", "Florida", "Illinois"],
    correctOptions: "California",
    slug: "which-state-has-the-most-murders"
  },
  {
    id: 142,
    name: "Are guns banned in China?",
    options: ["Yes", "No", "Only for hunting", "Only for sports"],
    correctOptions: "Yes",
    slug: "are-guns-banned-in-china"
  },
  {
    id: 143,
    name: "Are guns illegal in Brazil?",
    options: ["Yes", "No", "Only for hunting", "Only for sports"],
    correctOptions: "No",
    slug: "are-guns-illegal-in-brazil"
  },
  {
    id: 144,
    name: "Are guns illegal in Singapore?",
    options: ["Yes", "No", "Only for hunting", "Only for sports"],
    correctOptions: "Yes",
    slug: "are-guns-illegal-in-singapore"
  },
  {
    id: 145,
    name: "Are guns legal in Punjab?",
    options: ["Yes", "No", "Only for hunting", "Only for sports"],
    correctOptions: "Yes",
    slug: "are-guns-legal-in-punjab"
  },
  {
    id: 146,
    name: "Can you smoke in Qatar?",
    options: [
      "Yes",
      "No",
      "Only in designated areas",
      "Only in private spaces"
    ],
    correctOptions: "Only in designated areas",
    slug: "can-you-smoke-in-qatar"
  },
  {
    id: 147,
    name: "Do you pay tax in Qatar?",
    options: ["Yes", "No", "Only on income", "Only on goods and services"],
    correctOptions: "No",
    slug: "do-you-pay-tax-in-qatar"
  },
  {
    id: 148,
    name: "In which country is water most expensive?",
    options: ["United Arab Emirates", "Singapore", "Switzerland", "Norway"],
    correctOptions: "United Arab Emirates",
    slug: "in-which-country-water-is-most-expensive"
  },
  {
    id: 149,
    name: "Is 25,000 QAR a good salary in Qatar?",
    options: ["Yes", "No", "Depends on lifestyle", "Depends on location"],
    correctOptions: "Depends on lifestyle",
    slug: "is-25000-qar-a-good-salary-in-qatar"
  },
  {
    id: 150,
    name: "Is Doha expensive to eat?",
    options: ["Yes", "No", "Depends on the restaurant", "Depends on the area"],
    correctOptions: "Depends on the restaurant",
    slug: "is-doha-expensive-to-eat"
  },
  {
    id: 151,
    name: "Is gun legal in London?",
    options: ["Yes", "No", "Only for hunting", "Only for sports"],
    correctOptions: "No",
    slug: "is-gun-legal-in-london"
  },
  {
    id: 152,
    name: "Is pork allowed in Qatar?",
    options: ["Yes", "No", "Only in certain areas", "Only for non-Muslims"],
    correctOptions: "No",
    slug: "is-pork-allowed-in-qatar"
  },
  {
    id: 153,
    name: "Is Qatar an expensive country?",
    options: ["Yes", "No", "Depends on the area", "Depends on lifestyle"],
    correctOptions: "Yes",
    slug: "is-qatar-an-expensive-country"
  },
  {
    id: 154,
    name: "Nile or Amazon?",
    options: ["Nile", "Amazon", "Both", "Neither"],
    correctOptions: "Amazon",
    slug: "nile-or-amazon"
  },
  {
    id: 155,
    name: "What are the gun laws in Japan?",
    options: [
      "Strict, with very few exceptions",
      "Permissive, with background checks",
      "Allow for hunting only",
      "Allow for sports only"
    ],
    correctOptions: "Strict, with very few exceptions",
    slug: "what-are-the-gun-laws-in-japan"
  },
  {
    id: 156,
    name: "What country has the worst gun violence?",
    options: ["United States", "Brazil", "Mexico", "South Africa"],
    correctOptions: "United States",
    slug: "what-country-has-the-worst-gun-violence",
  },
  {
    id: 157,
    name: "What is the best water on Earth?",
    options: [
      "Spring water",
      "Mineral water",
      "Purified water",
      "Distilled water"
    ],
    correctOptions: "Spring water",
    slug: "what-is-the-best-water-on-earth"
  },
  {
    id: 158,
    name: "Which country drinks the most water?",
    options: ["United States", "China", "India", "Brazil"],
    correctOptions: "United States",
    slug: "which-country-drinks-the-most-water"
  },
  {
    id: 159,
    name: "Which is the national river of Pakistan?",
    options: ["Indus River", "Ganges River", "Jhelum River", "Chenab River"],
    correctOptions: "Indus River",
    slug: "which-is-the-national-river-of-pakistan"
  },
  {
    id: 160,
    name: "Which is the richest country in water?",
    options: ["Brazil", "Canada", "Russia", "United States"],
    correctOptions: "Canada",
    slug: "which-is-the-richest-country-in-water"
  },
  {
    id: 161,
    name: "Which job is best for Qatar?",
    options: [
      "Oil and Gas Engineer",
      "Finance Manager",
      "Teacher",
      "Tourism Guide"
    ],
    correctOptions: "Oil and Gas Engineer",
    slug: "which-job-is-best-for-qatar"
  },
  {
    id: 162,
    name: "Which river is shortest in length?",
    options: ["Amazon River", "Nile River", "Yangtze River", "Murray River"],
    correctOptions: "Murray River",
    slug: "which-river-is-shortest-in-length"
  },
  {
    id: 163,
    name: "Which water is best for drinking in Pakistan?",
    options: [
      "Spring water",
      "Mineral water",
      "Filtered tap water",
      "Distilled water"
    ],
    correctOptions: "Filtered tap water",
    slug: "which-water-is-best-for-drinking-in-pakistan"
  },
  {
    id: 164,
    name: "Which desert in the Middle East is known for its large sand dunes?",
    options: [
      "Rub' al Khali",
      "Thar Desert",
      "Gobi Desert",
      "Patagonian Desert"
    ],
    correctOptions: "Rub' al Khali",
    slug: "desert-large-sand-dunes"
  },
  {
    id: 165,
    name: "Which desert is found along the coast of southwestern Africa and is one of the oldest deserts in the world?",
    options: [
      "Namib Desert",
      "Kalahari Desert",
      "Sahara Desert",
      "Atacama Desert"
    ],
    correctOptions: "Namib Desert",
    slug: "oldest-desert-world"
  },
  {
    id: 166,
    name: "Which desert is located between the Nile River and the Red Sea?",
    options: [
      "Nubian Desert",
      "Sahara Desert",
      "Libyan Desert",
      "Kalahari Desert"
    ],
    correctOptions: "Nubian Desert",
    slug: "desert-between-nile-and-red-sea"
  },
  {
    id: 167,
    name: "Which desert in Asia is known for its oases and Silk Road history?",
    options: [
      "Taklamakan Desert",
      "Gobi Desert",
      "Thar Desert",
      "Karakum Desert"
    ],
    correctOptions: "Taklamakan Desert",
    slug: "desert-silk-road-oases"
  },
  {
    id: 168,
    name: "Which is the smallest planet?",
    options: ["Mercury", "Mars", "Venus", "Earth"],
    correctOptions: "Mercury",
    slug: "which-is-the-smallest-planet"
  },
  {
    id: 169,
    name: "Which is the tallest mountain in the world?",
    options: ["K2", "Kangchenjunga", "Everest", "Makalu"],
    correctOptions: "Everest",
    slug: "which-is-the-tallest-mountain-in-the-world"
  },
  {
    id: 170,
    name: "Which is the wealthiest country in the world?",
    options: ["United States", "China", "Luxembourg", "Switzerland"],
    correctOptions: "Luxembourg",
    slug: "which-is-the-wealthiest-country-in-the-world"
  },
  {
    id: 171,
    name: "Which desert is the largest in North America?",
    options: [
      "Chihuahuan Desert",
      "Sonoran Desert",
      "Mojave Desert",
      "Great Basin Desert"
    ],
    correctOptions: "Chihuahuan Desert",
    slug: "largest-desert-north-america"
  },
  {
    id: 172,
    name: "Which is the coldest country in the world?",
    options: ["Russia", "Canada", "Greenland", "Antarctica"],
    correctOptions: "Antarctica",
    slug: "which-is-the-coldest-country-in-the-world-duplicate"
  },
  {
    id: 173,
    name: "What is the coldest planet?",
    options: ["Mercury", "Venus", "Earth", "Neptune"],
    correctOptions: "Neptune",
    slug: "what-is-the-coldest-planet-duplicate"
  },
  {
    id: 174,
    name: "Which planet is the coldest?",
    options: ["Mars", "Saturn", "Uranus", "Neptune"],
    correctOptions: "Neptune",
    slug: "which-planet-is-the-coldest-duplicate"
  },
  {
    id: 175,
    name: "Which finger is traditionally used for wedding rings?",
    options: ["Index finger", "Middle finger", "Ring finger", "Pinky finger"],
    correctOptions: "Ring finger",
    slug: "which-finger-is-traditionally-used-for-wedding-rings-duplicate"
  },
  {
    id: 176,
    name: "Which are cold ocean currents?",
    options: [
      "Gulf Stream",
      "California Current",
      "Kuroshio Current",
      "Brazil Current"
    ],
    correctOptions: "California Current",
    slug: "which-are-cold-ocean-currents"
  },
  {
    id: 177,
    name: "What is the coldest city in the US?",
    options: [
      "Anchorage, Alaska",
      "Minneapolis, Minnesota",
      "Fairbanks, Alaska",
      "Buffalo, New York"
    ],
    correctOptions: "Fairbanks, Alaska",
    slug: "what-is-the-coldest-city-in-the-us",
    relatedQuizzes: [111, 136, 189, 385, 394, 396, 412, 438, 446, 448, 449, 453, 456, 457, 459]

  },
  {
    id: 178,
    name: "What is the coldest continent?",
    options: ["Africa", "Asia", "Antarctica", "Europe"],
    correctOptions: "Antarctica",
    slug: "what-is-the-coldest-continent"
  },
  {
    id: 179,
    name: "What is the coldest desert in India?",
    options: [
      "Thar Desert",
      "Rann of Kutch",
      "Ladakh Desert",
      "Karakum Desert"
    ],
    correctOptions: "Ladakh Desert",
    slug: "what-is-the-coldest-desert-in-india"
  },
  {
    id: 180,
    name: "Which desert is located in western Argentina?",
    options: [
      "Monte Desert",
      "Patagonian Desert",
      "Salar de Uyuni",
      "Atacama Desert"
    ],
    correctOptions: "Monte Desert",
    slug: "desert-in-western-argentina"
  },
  {
    id: 181,
    name: "What is the coldest place in Karnataka?",
    options: ["Mysuru", "Chikmagalur", "Kodagu", "Hubli"],
    correctOptions: "Kodagu",
    slug: "what-is-the-coldest-place-in-karnataka"
  },
  {
    id: 182,
    name: "What is the coldest place in the US?",
    options: [
      "Anchorage, Alaska",
      "Minneapolis, Minnesota",
      "Fairbanks, Alaska",
      "Barrow, Alaska"
    ],
    correctOptions: "Barrow, Alaska",
    slug: "what-is-the-coldest-place-in-the-us"
  },
  {
    id: 183,
    name: "Cricket is the national game of which country?",
    options: ["India", "Australia", "England", "Pakistan"],
    correctOptions: "None of these",
    slug: "cricket-is-the-national-game-of-which-country"
  },
  {
    id: 184,
    name: "Football is the national game of which country?",
    options: ["Brazil", "Argentina", "Germany", "Spain"],
    correctOptions: "None of these",
    slug: "football-is-the-national-game-of-which-country"
  },
  {
    id: 185,
    name: "Kabaddi is the national game of which country?",
    options: ["India", "Pakistan", "Nepal", "Bangladesh"],
    correctOptions: "India",
    slug: "kabaddi-is-the-national-game-of-which-country",
  },
  {
    id: 186,
    name: "What is the lowest layer of the atmosphere?",
    options: ["Stratosphere", "Mesosphere", "Troposphere", "Thermosphere"],
    correctOptions: "Troposphere",
    slug: "what-is-the-lowest-layer-of-the-atmosphere"
  },
  {
    id: 187,
    name: "What is the lowest layer of Earth's atmosphere?",
    options: ["Stratosphere", "Mesosphere", "Troposphere", "Thermosphere"],
    correctOptions: "Troposphere",
    slug: "what-is-the-lowest-layer-of-earths-atmosphere"
  },
  {
    id: 188,
    name: "What fruit is the highest in vitamin C?",
    options: ["Orange", "Kiwi", "Strawberry", "Lemon"],
    correctOptions: "Kiwi",
    slug: "what-fruit-is-the-highest-in-vitamin-c"
  },
  {
    id: 189,
    name: "What is the coldest city on Earth?",
    options: ["Moscow", "Barrow", "Yakutsk", "Oymyakon"],
    correctOptions: "Oymyakon",
    slug: "what-is-the-coldest-city-on-earth",
    relatedQuizzes: [111, 136, 177, 385, 394, 396, 412, 438, 446, 448, 449, 453, 456, 457, 459]
  },
  {
    id: 190,
    name: "What is the coldest continent in the world?",
    options: ["Africa", "Asia", "Antarctica", "Europe"],
    correctOptions: "Antarctica",
    slug: "what-is-the-coldest-continent-in-the-world"
  },
  {
    id: 191,
    name: "What is the coldest country in the world?",
    options: ["Russia", "Canada", "Greenland", "Antarctica"],
    correctOptions: "Antarctica",
    slug: "what-is-the-coldest-country-in-the-world"
  },
  {
    id: 192,
    name: "What is the coldest country on Earth?",
    options: ["Russia", "Canada", "Greenland", "Antarctica"],
    correctOptions: "Antarctica",
    slug: "what-is-the-coldest-country-on-earth"
  },
  {
    id: 193,
    name: "What is the coldest day ever recorded?",
    options: [
      "January 20, 1985",
      "December 22, 1996",
      "July 18, 1983",
      "January 22, 1987"
    ],
    correctOptions: "July 18, 1983",
    slug: "what-is-the-coldest-day-ever-recorded"
  },
  {
    id: 194,
    name: "What is the coldest desert?",
    options: [
      "Sahara Desert",
      "Gobi Desert",
      "Antarctic Desert",
      "Karakum Desert"
    ],
    correctOptions: "Antarctic Desert",
    slug: "what-is-the-coldest-desert"
  },
  {
    id: 195,
    name: "What is the coldest layer of the atmosphere?",
    options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
    correctOptions: "Mesosphere",
    slug: "what-is-the-coldest-layer-of-the-atmosphere"
  },
  {
    id: 196,
    name: "What is the coldest location on Earth?",
    options: ["Oymyakon", "Vostok Station", "Barrow", "Yakutsk"],
    correctOptions: "Vostok Station",
    slug: "what-is-the-coldest-location-on-earth"
  },
  {
    id: 197,
    name: "What is the coldest month?",
    options: ["December", "January", "February", "March"],
    correctOptions: "January",
    slug: "what-is-the-coldest-month"
  },
  {
    id: 198,
    name: "What is the coldest place on Earth?",
    options: ["Oymyakon", "Vostok Station", "Barrow", "Yakutsk"],
    correctOptions: "Vostok Station",
    slug: "what-is-the-coldest-place-on-earth"
  },
  {
    id: 199,
    name: "What is the coldest spot on Earth?",
    options: ["Vostok Station", "Oymyakon", "Barrow", "Yakutsk"],
    correctOptions: "Vostok Station",
    slug: "what-is-the-coldest-spot-on-earth"
  },
  {
    id: 200,
    name: "What is the coldest temperature ever recorded?",
    options: ["-89.2°C", "-96.2°C", "-82.8°C", "-74.5°C"],
    correctOptions: "-89.2°C",
    slug: "what-is-the-coldest-temperature-ever-recorded"
  }
]

const RandomData3: any[] = [
  {
    id: 201,
    name: "What is the coldest temperature on Earth?",
    options: ["-89.2°C", "-96.2°C", "-82.8°C", "-74.5°C"],
    correctOptions: "-89.2°C",
    slug: "what-is-the-coldest-temperature-on-earth"
  },
  {
    id: 202,
    name: "What is the coldest temperature possible?",
    options: ["-273.15°C", "-200°C", "-100°C", "-50°C"],
    correctOptions: "-273.15°C",
    slug: "what-is-the-coldest-temperature-possible"
  },
  {
    id: 203,
    name: "What is the coldest temperature recorded?",
    options: ["-89.2°C", "-96.2°C", "-82.8°C", "-74.5°C"],
    correctOptions: "-89.2°C",
    slug: "what-is-the-coldest-temperature-recorded"
  },
  {
    id: 204,
    name: "What is the coldest thing on Earth?",
    options: ["Liquid nitrogen", "Dry ice", "Oxygen", "Helium"],
    correctOptions: "Dry ice",
    slug: "what-is-the-coldest-thing-on-earth"
  },
  {
    id: 205,
    name: "What is the coldest town in the world?",
    options: ["Yakutsk", "Barrow", "Oymyakon", "Norilsk"],
    correctOptions: "Oymyakon",
    slug: "what-is-the-coldest-town-in-the-world"
  },
  {
    id: 206,
    name: "What is the fruit with the least calories?",
    options: ["Apple", "Strawberry", "Watermelon", "Grapefruit"],
    correctOptions: "Strawberry",
    slug: "what-is-the-fruit-with-the-least-calories"
  },
  {
    id: 207,
    name: "What month is the coldest?",
    options: ["December", "January", "February", "March"],
    correctOptions: "January",
    slug: "what-month-is-the-coldest"
  },
  {
    id: 208,
    name: "Which country has two national anthems?",
    options: ["Switzerland", "Spain", "United Kingdom", "South Africa"],
    correctOptions: "South Africa",
    slug: "which-country-has-two-national-anthems",
  },
  {
    id: 209,
    name: "Which direction is the Qibla?",
    options: ["North", "South", "East", "West"],
    correctOptions: "East",
    slug: "which-direction-is-the-qibla"
  },
  {
    id: 210,
    name: "Which fruit is the lowest in sugar?",
    options: ["Apple", "Banana", "Orange", "Avocado"],
    correctOptions: "Avocado",
    slug: "which-fruit-is-the-lowest-in-sugar"
  },
  {
    id: 211,
    name: "Which is colder, the North or South Pole?",
    options: [
      "North Pole",
      "South Pole",
      "Both are the same",
      "It varies seasonally"
    ],
    correctOptions: "South Pole",
    slug: "which-is-colder-the-north-or-south-pole"
  },
  {
    id: 212,
    name: "Which is the coldest place on Earth?",
    options: ["Oymyakon", "Vostok Station", "Barrow", "Yakutsk"],
    correctOptions: "Vostok Station",
    slug: "which-is-the-coldest-place-on-earth"
  },
  {
    id: 213,
    name: "Which are the 7 Wonders of the World?",
    options: [
      "Great Wall of China, Petra, Christ the Redeemer, Colosseum, Machu Picchu, Chichen Itza, Taj Mahal",
      "Eiffel Tower, Sydney Opera House, Statue of Liberty, Colosseum, Christ the Redeemer, Great Wall of China, Taj Mahal",
      "Machu Picchu, Great Wall of China, Statue of Liberty, Eiffel Tower, Sydney Opera House, Colosseum, Taj Mahal",
      "Christ the Redeemer, Great Wall of China, Colosseum, Sydney Opera House, Statue of Liberty, Machu Picchu, Taj Mahal"
    ],
    correctOptions:
      "Great Wall of China, Petra, Christ the Redeemer, Colosseum, Machu Picchu, Chichen Itza, Taj Mahal",
    slug: "which-are-the-7-wonders-of-the-world"
  },
  {
    id: 214,
    name: "Which is the account number on a check?",
    options: [
      "Routing number",
      "Account number",
      "Check number",
      "Serial number"
    ],
    correctOptions: "Account number",
    slug: "which-is-the-account-number-on-a-check"
  },
  {
    id: 215,
    name: "Which is the bad cholesterol?",
    options: ["HDL", "LDL", "VLDL", "Chylomicrons"],
    correctOptions: "LDL",
    slug: "which-is-the-bad-cholesterol"
  },
  {
    id: 216,
    name: "Which is the best cold medicine?",
    options: ["NyQuil", "DayQuil", "Robitussin", "Mucinex"],
    correctOptions: "NyQuil",
    slug: "which-is-the-best-cold-medicine"
  },
  {
    id: 217,
    name: "Which is the best iPhone?",
    options: ["iPhone 13", "iPhone 14 Pro", "iPhone 14", "iPhone 15"],
    correctOptions: "iPhone 15",
    slug: "which-is-the-best-iphone"
  },
  {
    id: 218,
    name: "What is the average life span of red blood cells?",
    options: ["60 days", "90 days", "120 days", "150 days"],
    correctOptions: "120 days",
    slug: "average-life-span-of-red-blood-cells",
    relatedQuizzes: [247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 261, 262, 263, 264, 265, 266, 267, 268]
  },
  {
    id: 219,
    name: "Where are red blood cells produced in the body?",
    options: ["Heart", "Liver", "Bone marrow", "Lungs"],
    correctOptions: "Bone marrow",
    slug: "red-blood-cells-produced",
    relatedQuizzes: [1, 5, 7, 8, 10, 15, 22, 24, 25, 218, 219, 220, 221, 222, 223, 224, 225, 226]
  },
  {
    id: 220,
    name: "Which organ is responsible for the destruction of old red blood cells?",
    options: ["Kidneys", "Spleen", "Lungs", "Pancreas"],
    correctOptions: "Spleen",
    slug: "organ-responsible-for-red-blood-cells-destruction",
    relatedQuizzes: [227, 228, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246]
  },
  {
    id: 221,
    name: "What is the main function of red blood cells?",
    options: [
      "Carrying oxygen",
      "Fighting infections",
      "Digesting food",
      "Producing hormones"
    ],
    correctOptions: "Carrying oxygen",
    slug: "main-function-of-red-blood-cells",
    relatedQuizzes: [247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 261, 262, 263, 264, 265, 266, 267, 268]
  },
  {
    id: 222,
    name: "What protein in red blood cells binds to oxygen?",
    options: ["Albumin", "Hemoglobin", "Fibrinogen", "Myosin"],
    correctOptions: "Hemoglobin",
    slug: "protein-in-red-blood-cells-that-binds-oxygen",
    relatedQuizzes: [1, 5, 7, 8, 10, 15, 22, 24, 25, 218, 219, 220, 221, 222, 223, 224, 225, 226]
  },
  {
    id: 223,
    name: "What is the shape of a typical red blood cell?",
    options: ["Biconcave", "Spherical", "Cylindrical", "Oval"],
    correctOptions: "Biconcave",
    slug: "shape-of-red-blood-cell",
    relatedQuizzes: [227, 228, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246]
  },
  {
    id: 224,
    name: "Which vitamin is essential for the production of red blood cells?",
    options: ["Vitamin A", "Vitamin B12", "Vitamin D", "Vitamin E"],
    correctOptions: "Vitamin B12",
    slug: "vitamin-essential-for-red-blood-cells-production",
    relatedQuizzes: [247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 261, 262, 263, 264, 265, 266, 267, 268]
  },
  {
    id: 225,
    name: "What condition is caused by a low red blood cell count?",
    options: ["Leukemia", "Hemophilia", "Anemia", "Thrombosis"],
    correctOptions: "Anemia",
    slug: "condition-caused-by-low-red-blood-cell-count",
    relatedQuizzes: [1, 5, 7, 8, 10, 15, 22, 24, 25, 218, 219, 220, 221, 222, 223, 224, 225, 226]
  },
  {
    id: 226,
    name: "What is the typical count of red blood cells per microliter of blood?",
    options: ["1-2 million", "3-4 million", "4-6 million", "7-8 million"],
    correctOptions: "4-6 million",
    slug: "typical-count-of-red-blood-cells",
    relatedQuizzes: [227, 228, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246]
  },
  {
    id: 227,
    name: "How much of the human blood volume is made up of red blood cells?",
    options: ["10%", "25%", "45%", "60%"],
    correctOptions: "45%",
    slug: "percentage-of-blood-volume-red-blood-cells",
    relatedQuizzes: [247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 261, 262, 263, 264, 265, 266, 267, 268]
  },
  {
    id: 228,
    name: "Which organ produces erythropoietin, a hormone that stimulates red blood cell production?",
    options: ["Liver", "Spleen", "Kidneys", "Pancreas"],
    correctOptions: "Kidneys",
    slug: "organ-produces-erythropoietin",
    relatedQuizzes: [1, 5, 7, 8, 10, 15, 22, 24, 25, 218, 219, 220, 221, 222, 223, 224, 225, 226]
  },
  {
    id: 229,
    name: "Which component of hemoglobin binds to oxygen?",
    options: ["Iron", "Copper", "Magnesium", "Calcium"],
    correctOptions: "Iron",
    slug: "component-of-hemoglobin-binds-oxygen"
  },
  {
    id: 230,
    name: "What is the lifespan of a platelet?",
    options: ["7-10 days", "30 days", "90 days", "120 days"],
    correctOptions: "7-10 days",
    slug: "lifespan-of-platelet"
  },
  {
    id: 231,
    name: "What is the normal pH range of human blood?",
    options: ["6.8-7.2", "7.35-7.45", "7.8-8.2", "8.5-9.0"],
    correctOptions: "7.35-7.45",
    slug: "normal-ph-range-of-blood",
    relatedQuizzes: [227, 228, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246]
  },
  {
    id: 232,
    name: "Which type of blood cell is responsible for clotting?",
    options: [
      "Red blood cells",
      "White blood cells",
      "Platelets",
      "Plasma cells"
    ],
    correctOptions: "Platelets",
    slug: "blood-cells-responsible-for-clotting",
    relatedQuizzes: [247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 261, 262, 263, 264, 265, 266, 267, 268]
  },
  {
    id: 233,
    name: "What percentage of human blood is plasma?",
    options: ["20%", "40%", "55%", "70%"],
    correctOptions: "55%",
    slug: "percentage-of-blood-that-is-plasma",
    relatedQuizzes: [1, 5, 7, 8, 10, 15, 22, 24, 25, 218, 219, 220, 221, 222, 223, 224, 225, 226]
  },
  {
    id: 234,
    name: "What blood type is known as the universal donor?",
    options: ["Type A", "Type B", "Type AB", "Type O"],
    correctOptions: "Type O",
    slug: "universal-donor-blood-type",
    relatedQuizzes: [227, 228, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246]
  },
  {
    id: 235,
    name: "Which blood type is known as the universal recipient?",
    options: ["Type A", "Type B", "Type AB", "Type O"],
    correctOptions: "Type AB",
    slug: "universal-recipient-blood-type",
    relatedQuizzes: [247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 261, 262, 263, 264, 265, 266, 267, 268]
  },
  {
    id: 236,
    name: "Which of the following is a hereditary disorder affecting red blood cells?",
    options: ["Hemophilia", "Sickle cell anemia", "Leukemia", "Thalassemia"],
    correctOptions: "Sickle cell anemia",
    slug: "hereditary-disorder-affecting-red-blood-cells",
    relatedQuizzes: [1, 5, 7, 8, 10, 15, 22, 24, 25, 218, 219, 220, 221, 222, 223, 224, 225, 226]
  },
  {
    id: 237,
    name: "What is the oxygen-carrying capacity of hemoglobin in red blood cells called?",
    options: [
      "Oxygen saturation",
      "Oxygen affinity",
      "Oxygen pressure",
      "Oxygen demand"
    ],
    correctOptions: "Oxygen saturation",
    slug: "oxygen-carrying-capacity-of-hemoglobin",
    relatedQuizzes: [227, 228, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246]
  },
  {
    id: 238,
    name: "What condition is caused by an excess of red blood cells?",
    options: [
      "Thrombocytopenia",
      "Leukocytosis",
      "Polycythemia",
      "Aplastic anemia"
    ],
    correctOptions: "Polycythemia",
    slug: "condition-caused-by-excess-of-red-blood-cells",
    relatedQuizzes: [247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 261, 262, 263, 264, 265, 266, 267, 268]
  },
  {
    id: 239,
    name: "Which of the following blood components is primarily involved in immune responses?",
    options: ["Platelets", "White blood cells", "Red blood cells", "Plasma"],
    correctOptions: "White blood cells",
    slug: "blood-component-involved-in-immune-response",
    relatedQuizzes: [1, 5, 7, 8, 10, 15, 22, 24, 25, 218, 219, 220, 221, 222, 223, 224, 225, 226]
  },
  {
    id: 240,
    name: "Which organ filters and recycles red blood cells?",
    options: ["Liver", "Spleen", "Heart", "Kidneys"],
    correctOptions: "Spleen",
    slug: "organ-filters-recycles-red-blood-cells",
    relatedQuizzes: [227, 228, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246]
  },
  {
    id: 241,
    name: "Which is a characteristic feature of mature red blood cells?",
    options: [
      "They contain a nucleus",
      "They lack mitochondria",
      "They have organelles",
      "They are biconvex"
    ],
    correctOptions: "They lack mitochondria",
    slug: "characteristic-feature-of-mature-red-blood-cells",
    relatedQuizzes: [247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 261, 262, 263, 264, 265, 266, 267, 268]
  },
  {
    id: 242,
    name: "What is the color of oxygenated blood?",
    options: ["Red", "Blue", "Purple", "Yellow"],
    correctOptions: "Red",
    slug: "color-of-oxygenated-blood",
    relatedQuizzes: [1, 5, 7, 8, 10, 15, 22, 24, 25, 218, 219, 220, 221, 222, 223, 224, 225, 226]
  },
  {
    id: 243,
    name: "What is the condition where red blood cells become abnormally shaped, leading to blockages in blood vessels?",
    options: ["Sickle cell anemia", "Leukemia", "Hemophilia", "Polycythemia"],
    correctOptions: "Sickle cell anemia",
    slug: "condition-abnormally-shaped-red-blood-cells",
    relatedQuizzes: [227, 228, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246]
  },
  {
    id: 244,
    name: "What is the average diameter of a red blood cell?",
    options: ["4-5 µm", "6-7 µm", "8-9 µm", "10-12 µm"],
    correctOptions: "6-7 µm",
    slug: "average-diameter-of-red-blood-cell",
    relatedQuizzes: [247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 261, 262, 263, 264, 265, 266, 267, 268]
  },
  {
    id: 245,
    name: "Which element is crucial for the formation of hemoglobin in red blood cells?",
    options: ["Zinc", "Copper", "Iron", "Magnesium"],
    correctOptions: "Iron",
    slug: "element-crucial-for-hemoglobin-formation",
    relatedQuizzes: [1, 5, 7, 8, 10, 15, 22, 24, 25, 218, 219, 220, 221, 222, 223, 224, 225, 226]
  },
  {
    id: 246,
    name: "What type of anemia results from a deficiency in vitamin B12?",
    options: [
      "Pernicious anemia",
      "Sickle cell anemia",
      "Aplastic anemia",
      "Iron deficiency anemia"
    ],
    correctOptions: "Pernicious anemia",
    slug: "anemia-from-vitamin-b12-deficiency"
  },
  {
    id: 247,
    name: "Which blood disorder is characterized by an abnormal increase in white blood cells?",
    options: ["Anemia", "Polycythemia", "Leukocytosis", "Hemophilia"],
    correctOptions: "Leukocytosis",
    slug: "blood-disorder-abnormal-increase-in-white-blood-cells",
    relatedQuizzes: [227, 228, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246]
  },
  {
    id: 248,
    name: "Which condition causes bone marrow failure and affects the production of red blood cells?",
    options: ["Hemophilia", "Aplastic anemia", "Leukemia", "Thrombocytopenia"],
    correctOptions: "Aplastic anemia",
    slug: "bone-marrow-failure-affects-red-blood-cells",
    relatedQuizzes: [247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 261, 262, 263, 264, 265, 266, 267, 268]
  },
  {
    id: 249,
    name: "What is the term for the production of red blood cells?",
    options: ["Hemolysis", "Erythropoiesis", "Leukopoiesis", "Thrombopoiesis"],
    correctOptions: "Erythropoiesis",
    slug: "production-of-red-blood-cells",
    relatedQuizzes: [1, 5, 7, 8, 10, 15, 22, 24, 25, 218, 219, 220, 221, 222, 223, 224, 225, 226]
  },
  {
    id: 250,
    name: "Which blood component is primarily responsible for transporting carbon dioxide from the tissues to the lungs?",
    options: ["Plasma", "Platelets", "Red blood cells", "White blood cells"],
    correctOptions: "Red blood cells",
    slug: "component-transports-carbon-dioxide",
    relatedQuizzes: [227, 228, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246]
  },
  {
    id: 251,
    name: "What percentage of carbon dioxide in the blood is transported by red blood cells?",
    options: ["5%", "23%", "70%", "90%"],
    correctOptions: "23%",
    slug: "percentage-of-carbon-dioxide-transported-by-red-blood-cells",
    relatedQuizzes: [247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 261, 262, 263, 264, 265, 266, 267, 268]
  },
  {
    id: 252,
    name: "What is the primary gas transported by red blood cells?",
    options: ["Nitrogen", "Carbon dioxide", "Oxygen", "Hydrogen"],
    correctOptions: "Oxygen",
    slug: "primary-gas-transported-by-red-blood-cells",
    relatedQuizzes: [1, 5, 7, 8, 10, 15, 22, 24, 25, 218, 219, 220, 221, 222, 223, 224, 225, 226]
  },
  {
    id: 253,
    name: "What happens to red blood cells after their lifespan ends?",
    options: [
      "They are absorbed by the liver",
      "They are destroyed in the spleen",
      "They are converted into white blood cells",
      "They dissolve in plasma"
    ],
    correctOptions: "They are destroyed in the spleen",
    slug: "what-happens-to-red-blood-cells-after-lifespan",
    relatedQuizzes: [227, 228, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246]
  },
  {
    id: 254,
    name: "Which cells in the spleen are responsible for breaking down old red blood cells?",
    options: ["Macrophages", "Lymphocytes", "Neutrophils", "Eosinophils"],
    correctOptions: "Macrophages",
    slug: "cells-in-spleen-break-down-red-blood-cells",
    relatedQuizzes: [247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 261, 262, 263, 264, 265, 266, 267, 268]
  },
  {
    id: 255,
    name: "Which genetic condition leads to crescent-shaped red blood cells?",
    options: ["Thalassemia", "Sickle cell anemia", "Hemophilia", "Leukemia"],
    correctOptions: "Sickle cell anemia",
    slug: "genetic-condition-crescent-shaped-red-blood-cells",
    relatedQuizzes: [1, 5, 7, 8, 10, 15, 22, 24, 25, 218, 219, 220, 221, 222, 223, 224, 225, 226]
  },
  {
    id: 256,
    name: "What is the primary waste product carried by red blood cells to the lungs?",
    options: ["Ammonia", "Carbon dioxide", "Nitrogen", "Urea"],
    correctOptions: "Carbon dioxide",
    slug: "primary-waste-product-carried-by-red-blood-cells",
    relatedQuizzes: [227, 228, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246]
  },
  {
    id: 257,
    name: "Which organ is responsible for detecting low oxygen levels and increasing red blood cell production?",
    options: ["Liver", "Lungs", "Kidneys", "Spleen"],
    correctOptions: "Kidneys",
    slug: "organ-detects-low-oxygen-levels",
    relatedQuizzes: [247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 261, 262, 263, 264, 265, 266, 267, 268]
  },
  {
    id: 258,
    name: "What type of anemia results from an iron deficiency?",
    options: [
      "Megaloblastic anemia",
      "Sickle cell anemia",
      "Aplastic anemia",
      "Iron deficiency anemia"
    ],
    correctOptions: "Iron deficiency anemia",
    slug: "anemia-from-iron-deficiency"
  },
  {
    id: 259,
    name: "What is the normal range of hemoglobin in adult males?",
    options: ["8-12 g/dL", "12-14 g/dL", "14-18 g/dL", "18-20 g/dL"],
    correctOptions: "14-18 g/dL",
    slug: "normal-hemoglobin-range-adult-males"
  },
  {
    id: 260,
    name: "What is the normal range of hemoglobin in adult females?",
    options: ["10-12 g/dL", "12-14 g/dL", "14-16 g/dL", "16-18 g/dL"],
    correctOptions: "12-14 g/dL",
    slug: "normal-hemoglobin-range-adult-females"
  },
  {
    id: 261,
    name: "What is the life span of white blood cells?",
    options: ["1 day", "1-3 days", "10-12 days", "100 days"],
    correctOptions: "1-3 days",
    slug: "life-span-of-white-blood-cells",
    relatedQuizzes: [1, 5, 7, 8, 10, 15, 22, 24, 25, 218, 219, 220, 221, 222, 223, 224, 225, 226]
  },
  {
    id: 262,
    name: "What is the liquid portion of blood called?",
    options: ["Plasma", "Serum", "Lymph", "Hemoglobin"],
    correctOptions: "Plasma",
    slug: "liquid-portion-of-blood",
    relatedQuizzes: [227, 228, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246]
  },
  {
    id: 263,
    name: "Which component of the blood is responsible for fighting infections?",
    options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
    correctOptions: "White blood cells",
    slug: "blood-component-fighting-infections",
    relatedQuizzes: [247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 261, 262, 263, 264, 265, 266, 267, 268]
  },
  {
    id: 264,
    name: "Which of the following can cause a reduction in red blood cell count?",
    options: [
      "Dehydration",
      "Blood loss",
      "Excessive exercise",
      "Hyperventilation"
    ],
    correctOptions: "Blood loss",
    slug: "cause-reduction-red-blood-cell-count",
    relatedQuizzes: [1, 5, 7, 8, 10, 15, 22, 24, 25, 218, 219, 220, 221, 222, 223, 224, 225, 226]
  },
  {
    id: 265,
    name: "What happens if red blood cells are destroyed too quickly in the body?",
    options: ["Anemia", "Leukocytosis", "Polycythemia", "Thrombocytopenia"],
    correctOptions: "Anemia",
    slug: "red-blood-cells-destroyed-too-quickly",
    relatedQuizzes: [227, 228, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246]
  },
  {
    id: 266,
    name: "What is the typical lifespan of a red blood cell in newborns?",
    options: ["60 days", "90 days", "120 days", "150 days"],
    correctOptions: "90 days",
    slug: "lifespan-of-red-blood-cell-in-newborns",
    relatedQuizzes: [247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 261, 262, 263, 264, 265, 266, 267, 268]
  },
  {
    id: 267,
    name: "What is the main energy source for red blood cells?",
    options: ["Oxygen", "Glucose", "Lipids", "Proteins"],
    correctOptions: "Glucose",
    slug: "main-energy-source-for-red-blood-cells",
    relatedQuizzes: [1, 5, 7, 8, 10, 15, 22, 24, 25, 218, 219, 220, 221, 222, 223, 224, 225, 226]
  },
  {
    id: 268,
    name: "What is the average lifespan of red blood cells in a patient with sickle cell anemia?",
    options: ["30 days", "60 days", "90 days", "120 days"],
    correctOptions: "30 days",
    slug: "average-lifespan-of-red-blood-cells-sickle-cell-anemia",
    relatedQuizzes: [227, 228, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246]
  },
  {
    id: 269,
    name: "What is the world's largest desert?",
    options: ["Sahara", "Antarctica", "Arctic", "Gobi"],
    correctOptions: "Antarctica",
    slug: "worlds-largest-desert"
  },
  {
    id: 270,
    name: "Which desert is the largest hot desert in the world?",
    options: ["Sahara", "Kalahari", "Arabian", "Mojave"],
    correctOptions: "Sahara",
    slug: "largest-hot-desert"
  },
  {
    id: 271,
    name: "Which desert is known for having the highest sand dunes?",
    options: ["Namib Desert", "Gobi Desert", "Sahara Desert", "Thar Desert"],
    correctOptions: "Namib Desert",
    slug: "desert-highest-sand-dunes"
  },
  {
    id: 272,
    name: "Which desert spans much of northern China and southern Mongolia?",
    options: [
      "Gobi Desert",
      "Taklamakan Desert",
      "Thar Desert",
      "Karakum Desert"
    ],
    correctOptions: "Gobi Desert",
    slug: "desert-in-china-and-mongolia"
  },
  {
    id: 273,
    name: "Which desert is also known as the 'Empty Quarter'?",
    options: [
      "Arabian Desert",
      "Thar Desert",
      "Kalahari Desert",
      "Patagonian Desert"
    ],
    correctOptions: "Arabian Desert",
    slug: "empty-quarter-desert"
  },
  {
    id: 274,
    name: "Which desert covers most of Botswana and parts of Namibia and South Africa?",
    options: [
      "Kalahari Desert",
      "Namib Desert",
      "Atacama Desert",
      "Great Victoria Desert"
    ],
    correctOptions: "Kalahari Desert",
    slug: "desert-in-botswana-namibia-south-africa"
  },
  {
    id: 275,
    name: "Which desert is the driest non-polar desert in the world?",
    options: [
      "Atacama Desert",
      "Sahara Desert",
      "Kalahari Desert",
      "Mojave Desert"
    ],
    correctOptions: "Atacama Desert",
    slug: "driest-non-polar-desert"
  },
  {
    id: 276,
    name: "Which desert is located in southwestern North America?",
    options: [
      "Mojave Desert",
      "Sonoran Desert",
      "Great Basin Desert",
      "Chihuahuan Desert"
    ],
    correctOptions: "Mojave Desert",
    slug: "desert-in-southwestern-north-america"
  },
  {
    id: 277,
    name: "The Great Victoria Desert is located in which country?",
    options: ["Australia", "Argentina", "USA", "South Africa"],
    correctOptions: "Australia",
    slug: "great-victoria-desert-location"
  },
  {
    id: 278,
    name: "Which desert is known for its extreme cold temperatures?",
    options: [
      "Gobi Desert",
      "Antarctic Desert",
      "Patagonian Desert",
      "Arctic Desert"
    ],
    correctOptions: "Antarctic Desert",
    slug: "extreme-cold-desert"
  },
  {
    id: 279,
    name: "Which desert is famous for its salt flats in Bolivia?",
    options: [
      "Atacama Desert",
      "Patagonian Desert",
      "Salar de Uyuni",
      "Karakum Desert"
    ],
    correctOptions: "Salar de Uyuni",
    slug: "desert-salt-flats-in-bolivia"
  },
  {
    id: 280,
    name: "Which desert is known for its massive salt pans in southern Africa?",
    options: [
      "Makgadikgadi Pan",
      "Kalahari Desert",
      "Salar de Uyuni",
      "Atacama Desert"
    ],
    correctOptions: "Makgadikgadi Pan",
    slug: "desert-salt-pans-southern-africa"
  },
  {
    id: 281,
    name: "Which desert in India is also called the 'Great Indian Desert'?",
    options: [
      "Thar Desert",
      "Rann of Kutch",
      "Deccan Plateau",
      "Vindhya Range"
    ],
    correctOptions: "Thar Desert",
    slug: "great-indian-desert"
  },
  {
    id: 282,
    name: "Which desert lies in the northern part of Mexico and parts of the United States?",
    options: [
      "Chihuahuan Desert",
      "Sonoran Desert",
      "Great Basin Desert",
      "Patagonian Desert"
    ],
    correctOptions: "Chihuahuan Desert",
    slug: "desert-in-mexico-and-usa"
  },
  {
    id: 283,
    name: "Which desert has the hottest temperatures recorded on Earth?",
    options: [
      "Sahara Desert",
      "Death Valley",
      "Kalahari Desert",
      "Atacama Desert"
    ],
    correctOptions: "Death Valley",
    slug: "hottest-desert-temperatures"
  },
  {
    id: 284,
    name: "The Rub' al Khali Desert is located on which peninsula?",
    options: [
      "Arabian Peninsula",
      "Sinai Peninsula",
      "Yucatan Peninsula",
      "Iberian Peninsula"
    ],
    correctOptions: "Arabian Peninsula",
    slug: "rub-al-khali-desert-location"
  },
  {
    id: 285,
    name: "Which desert is the largest in the United States?",
    options: [
      "Great Basin Desert",
      "Sonoran Desert",
      "Mojave Desert",
      "Chihuahuan Desert"
    ],
    correctOptions: "Great Basin Desert",
    slug: "largest-desert-in-usa"
  },
  {
    id: 286,
    name: "Which desert is found in Iran?",
    options: ["Dasht-e Kavir", "Gobi Desert", "Thar Desert", "Karakum Desert"],
    correctOptions: "Dasht-e Kavir",
    slug: "desert-in-iran"
  },
  {
    id: 287,
    name: "Which desert stretches across southern Mongolia and northern China?",
    options: [
      "Gobi Desert",
      "Thar Desert",
      "Taklamakan Desert",
      "Sonoran Desert"
    ],
    correctOptions: "Gobi Desert",
    slug: "desert-across-mongolia-and-china"
  },
  {
    id: 288,
    name: "Which desert is the coldest desert in the world?",
    options: [
      "Antarctic Desert",
      "Gobi Desert",
      "Arctic Desert",
      "Atacama Desert"
    ],
    correctOptions: "Antarctic Desert",
    slug: "coldest-desert-in-the-world"
  },
  {
    id: 289,
    name: "What percentage of the Earth's surface is covered by deserts?",
    options: ["10%", "20%", "30%", "40%"],
    correctOptions: "30%",
    slug: "percentage-earth-covered-by-deserts"
  },
  {
    id: 290,
    name: "Which desert in South America is known for being one of the driest places on Earth?",
    options: [
      "Atacama Desert",
      "Patagonian Desert",
      "Salar de Uyuni",
      "Gran Chaco"
    ],
    correctOptions: "Atacama Desert",
    slug: "driest-place-south-america"
  },
  {
    id: 291,
    name: "Which desert is the smallest desert in the world?",
    options: [
      "Carcross Desert",
      "Arabian Desert",
      "Patagonian Desert",
      "Karakum Desert"
    ],
    correctOptions: "Carcross Desert",
    slug: "smallest-desert-in-the-world"
  },
  {
    id: 292,
    name: "Which desert is located in southern Africa and is known for its red sand dunes?",
    options: [
      "Kalahari Desert",
      "Namib Desert",
      "Sahara Desert",
      "Gobi Desert"
    ],
    correctOptions: "Namib Desert",
    slug: "red-sand-dunes-southern-africa"
  },
  {
    id: 293,
    name: "Which desert has the highest recorded temperature on Earth?",
    options: [
      "Sahara Desert",
      "Death Valley",
      "Mojave Desert",
      "Kalahari Desert"
    ],
    correctOptions: "Death Valley",
    slug: "highest-recorded-temperature"
  },
  {
    id: 294,
    name: "Which desert is located between the Andes and the Pacific Ocean?",
    options: [
      "Atacama Desert",
      "Patagonian Desert",
      "Sahara Desert",
      "Namib Desert"
    ],
    correctOptions: "Atacama Desert",
    slug: "desert-between-andes-pacific"
  },
  {
    id: 295,
    name: "Which is the largest desert in Asia?",
    options: [
      "Gobi Desert",
      "Thar Desert",
      "Taklamakan Desert",
      "Dasht-e Kavir"
    ],
    correctOptions: "Gobi Desert",
    slug: "largest-desert-asia"
  },
  {
    id: 296,
    name: "Which desert is famous for its salt pans and unique wildlife, such as the Gemsbok?",
    options: [
      "Kalahari Desert",
      "Namib Desert",
      "Atacama Desert",
      "Patagonian Desert"
    ],
    correctOptions: "Kalahari Desert",
    slug: "salt-pans-unique-wildlife"
  },
  {
    id: 297,
    name: "Which desert is located in northwest China and is known for its harsh climate?",
    options: [
      "Taklamakan Desert",
      "Gobi Desert",
      "Karakum Desert",
      "Arabian Desert"
    ],
    correctOptions: "Taklamakan Desert",
    slug: "desert-northwest-china"
  },
  {
    id: 298,
    name: "Which desert is often referred to as the 'Sea of Death' due to its extreme conditions?",
    options: [
      "Taklamakan Desert",
      "Atacama Desert",
      "Thar Desert",
      "Gobi Desert"
    ],
    correctOptions: "Taklamakan Desert",
    slug: "sea-of-death-desert"
  },
  {
    id: 299,
    name: "Which desert is located in southwestern United States and northern Mexico?",
    options: [
      "Sonoran Desert",
      "Chihuahuan Desert",
      "Mojave Desert",
      "Great Basin Desert"
    ],
    correctOptions: "Sonoran Desert",
    slug: "desert-in-us-and-mexico"
  },
  {
    id: 300,
    name: "Which desert is known for its towering saguaro cacti?",
    options: [
      "Sonoran Desert",
      "Mojave Desert",
      "Chihuahuan Desert",
      "Kalahari Desert"
    ],
    correctOptions: "Sonoran Desert",
    slug: "desert-saguaro-cacti"
  }
]

const RandomData4: any[] = [
  {
    id: 301,
    name: "Which river touches the most countries?",
    options: ["Danube River", "Amazon River", "Nile River", "Yangtze River"],
    correctOptions: "Danube River",
    slug: "which-river-touches-the-most-countries"
  },
  {
    id: 302,
    name: "Which desert is located in central Australia and covers a vast area?",
    options: [
      "Great Victoria Desert",
      "Simpson Desert",
      "Gibson Desert",
      "Kalahari Desert"
    ],
    correctOptions: "Simpson Desert",
    slug: "desert-in-central-australia"
  },
  {
    id: 303,
    name: "Which desert is known for the famous Uluru rock formation?",
    options: [
      "Simpson Desert",
      "Great Victoria Desert",
      "Kalahari Desert",
      "Gobi Desert"
    ],
    correctOptions: "Simpson Desert",
    slug: "uluru-rock-desert"
  },
  {
    id: 304,
    name: "Which desert in southern South America is known for its strong winds?",
    options: [
      "Patagonian Desert",
      "Atacama Desert",
      "Salar de Uyuni",
      "Kalahari Desert"
    ],
    correctOptions: "Patagonian Desert",
    slug: "windy-desert-south-america"
  },
  {
    id: 305,
    name: "Which desert is the coldest in Africa?",
    options: [
      "Namib Desert",
      "Kalahari Desert",
      "Sahara Desert",
      "Libyan Desert"
    ],
    correctOptions: "Namib Desert",
    slug: "coldest-desert-africa"
  },
  {
    id: 306,
    name: "Which desert spans most of the western United States?",
    options: [
      "Great Basin Desert",
      "Sonoran Desert",
      "Mojave Desert",
      "Chihuahuan Desert"
    ],
    correctOptions: "Great Basin Desert",
    slug: "desert-western-us"
  },
  {
    id: 307,
    name: "Which desert is known for the famous Death Valley?",
    options: [
      "Mojave Desert",
      "Great Basin Desert",
      "Sonoran Desert",
      "Kalahari Desert"
    ],
    correctOptions: "Mojave Desert",
    slug: "death-valley-desert"
  },
  {
    id: 308,
    name: "Which desert in Asia is known for its bitterly cold winters?",
    options: [
      "Gobi Desert",
      "Thar Desert",
      "Karakum Desert",
      "Taklamakan Desert"
    ],
    correctOptions: "Gobi Desert",
    slug: "cold-winter-desert"
  },
  {
    id: 309,
    name: "Which desert is the largest in South America?",
    options: ["Patagonian Desert", "Atacama Desert", "Gran Chaco", "Pantanal"],
    correctOptions: "Patagonian Desert",
    slug: "largest-desert-south-america"
  },
  {
    id: 310,
    name: "Which desert is home to the driest place on Earth?",
    options: [
      "Atacama Desert",
      "Sahara Desert",
      "Kalahari Desert",
      "Namib Desert"
    ],
    correctOptions: "Atacama Desert",
    slug: "driest-place-earth"
  },
  {
    id: 311,
    name: "Which desert is found primarily in Iran and is known for its salt flats?",
    options: ["Dasht-e Kavir", "Thar Desert", "Sahara Desert", "Namib Desert"],
    correctOptions: "Dasht-e Kavir",
    slug: "desert-iran-salt-flats"
  },
  {
    id: 312,
    name: "Which desert spans parts of Algeria, Chad, and Sudan?",
    options: [
      "Sahara Desert",
      "Kalahari Desert",
      "Libyan Desert",
      "Sonoran Desert"
    ],
    correctOptions: "Sahara Desert",
    slug: "desert-in-africa"
  },
  {
    id: 313,
    name: "Which bone is known as the collarbone?",
    options: ["Scapula", "Clavicle", "Sternum", "Femur"],
    correctOptions: "Clavicle",
    slug: "which-bone-is-known-as-the-collarbone"
  },
  {
    id: 314,
    name: "Which is the longest bone in the human body?",
    options: ["Tibia", "Fibula", "Femur", "Humerus"],
    correctOptions: "Femur",
    slug: "which-is-the-longest-bone-in-the-human-body"
  },
  {
    id: 315,
    name: "Which bone protects the brain?",
    options: ["Ribcage", "Femur", "Skull", "Pelvis"],
    correctOptions: "Skull",
    slug: "which-bone-protects-the-brain"
  },
  {
    id: 316,
    name: "Which bone is part of the shoulder blade?",
    options: ["Clavicle", "Scapula", "Humerus", "Radius"],
    correctOptions: "Scapula",
    slug: "which-bone-is-part-of-the-shoulder-blade"
  },
  {
    id: 317,
    name: "What type of bone is the patella?",
    options: ["Flat", "Irregular", "Sesamoid", "Long"],
    correctOptions: "Sesamoid",
    slug: "what-type-of-bone-is-the-patella"
  },
  {
    id: 318,
    name: "Which bone is the smallest bone in the human body?",
    options: ["Stapes", "Incus", "Malleus", "Hyoid"],
    correctOptions: "Stapes",
    slug: "which-bone-is-the-smallest-bone-in-the-human-body",
    relatedQuizzes: [319, 320, 321, 9]
  },
  {
    id: 319,
    name: "Where are the smallest bones in the human body located?",
    options: ["Ear", "Hand", "Foot", "Skull"],
    correctOptions: "Ear",
    slug: "where-are-the-smallest-bones-in-the-human-body-located",
    relatedQuizzes: [318, 320, 321, 9]
  },
  {
    id: 320,
    name: "What are the four smallest bones in the human body?",
    options: [
      "Stapes, Incus, Malleus, Hyoid",
      "Stapes, Incus, Malleus, Femur",
      "Stapes, Incus, Malleus, Patella",
      "Stapes, Incus, Malleus, Tibia"
    ],
    correctOptions: "Stapes, Incus, Malleus, Hyoid",
    slug: "what-are-the-four-smallest-bones-in-the-human-body",
    relatedQuizzes: [318, 319, 321, 9]
  },
  {
    id: 321,
    name: "Where are the three smallest bones in the human body located?",
    options: ["Inner ear", "Forearm", "Leg", "Pelvis"],
    correctOptions: "Inner ear",
    slug: "where-are-the-three-smallest-bones-in-the-human-body-located",
    relatedQuizzes: [318, 319, 320, 321, 9]
  },
  {
    id: 322,
    name: "What is the velocity of a river?",
    options: [
      "Speed of the water flow",
      "Depth of the river",
      "Width of the river",
      "Temperature of the water"
    ],
    correctOptions: "Speed of the water flow",
    slug: "what-is-the-velocity-of-a-river"
  },
  {
    id: 323,
    name: "What is the world's largest river by discharge volume?",
    options: ["Amazon River", "Nile River", "Yangtze River", "Congo River"],
    correctOptions: "Amazon River",
    slug: "what-is-the-worlds-largest-river-by-discharge-volume"
  },
  {
    id: 324,
    name: "What is the biggest river in Asia?",
    options: ["Yangtze River", "Ganges River", "Mekong River", "Yellow River"],
    correctOptions: "Yangtze River",
    slug: "what-is-the-biggest-river-in-asia"
  },
  {
    id: 325,
    name: "What is the deepest river in the world?",
    options: [
      "Congo River",
      "Amazon River",
      "Yangtze River",
      "Mississippi River"
    ],
    correctOptions: "Congo River",
    slug: "what-is-the-deepest-river-in-the-world"
  },
  {
    id: 326,
    name: "Which is the smallest river in the world?",
    options: ["Roe River", "Amazon River", "Yangtze River", "Ganges River"],
    correctOptions: "Roe River",
    slug: "which-is-the-smallest-river-in-the-world"
  },
  {
    id: 327,
    name: "How deep is the Mekong River?",
    options: ["10 meters", "20 meters", "30 meters", "50 meters"],
    correctOptions: "20 meters",
    slug: "how-deep-is-the-mekong-river"
  },
  {
    id: 328,
    name: "How to keep hair dry in the pool?",
    options: [
      "Wear a swim cap",
      "Use waterproof hair products",
      "Avoid getting your head wet",
      "All of the above"
    ],
    correctOptions: "Wear a swim cap",
    slug: "how-to-keep-hair-dry-in-the-pool"
  },
  {
    id: 329,
    name: "How to swim in a pool for beginners?",
    options: [
      "Start with floating",
      "Learn to kick and move arms",
      "Practice breathing techniques",
      "All of the above"
    ],
    correctOptions: "All of the above",
    slug: "how-to-swim-in-a-pool-for-beginners"
  },
  {
    id: 330,
    name: "Is it safe to swim in a pond?",
    options: [
      "Yes, always",
      "No, it can be unsafe",
      "Depends on the pond",
      "Not sure"
    ],
    correctOptions: "Depends on the pond",
    slug: "is-it-safe-to-swim-in-a-pond"
  },
  {
    id: 331,
    name: "Is it safe to swim in the ocean?",
    options: [
      "Yes, always",
      "No, it can be unsafe",
      "Depends on the conditions",
      "Not sure"
    ],
    correctOptions: "Depends on the conditions",
    slug: "is-it-safe-to-swim-in-the-ocean"
  },
  {
    id: 332,
    name: "What is a natural swimming pool?",
    options: [
      "A pool with natural filtration",
      "A pool filled with spring water",
      "A pool without chemicals",
      "All of the above"
    ],
    correctOptions: "All of the above",
    slug: "what-is-a-natural-swimming-pool"
  },
  {
    id: 333,
    name: "What is the definition of a river?",
    options: [
      "A flowing body of water",
      "A large lake",
      "A small stream",
      "An ocean current"
    ],
    correctOptions: "A flowing body of water",
    slug: "what-is-the-definition-of-a-river"
  },
  {
    id: 334,
    name: "What is the longest river in Southeast Asia?",
    options: [
      "Mekong River",
      "Red River",
      "Chao Phraya River",
      "Irrawaddy River"
    ],
    correctOptions: "Mekong River",
    slug: "what-is-the-longest-river-in-southeast-asia",
    relatedQuizzes: [119, 122, 403, 360, 362]
  },
  {
    id: 335,
    name: "What was the religion of ancient China?",
    options: ["Confucianism", "Buddhism", "Taoism", "All of the above"],
    correctOptions: "All of the above",
    slug: "what-was-the-religion-of-ancient-china"
  },
  {
    id: 336,
    name: "Where is the deepest river in the world?",
    options: [
      "Congo River",
      "Amazon River",
      "Yangtze River",
      "Mississippi River"
    ],
    correctOptions: "Congo River",
    slug: "where-is-the-deepest-river-in-the-world"
  },
  {
    id: 337,
    name: "Why is the Yellow River called China's sorrow?",
    options: [
      "Due to frequent floods",
      "Because of pollution",
      "For its long course",
      "Due to its length"
    ],
    correctOptions: "Due to frequent floods",
    slug: "why-is-the-yellow-river-called-chinas-sorrow"
  },
  {
    id: 338,
    name: "How did Chinese writing develop?",
    options: [
      "From pictograms to ideograms",
      "From ideograms to phonograms",
      "From phonograms to alphabets",
      "From alphabets to pictograms"
    ],
    correctOptions: "From pictograms to ideograms",
    slug: "how-did-chinese-writing-develop"
  },
  {
    id: 339,
    name: "How do I add liquid chlorine to my pool?",
    options: [
      "Directly into the skimmer",
      "Into the pool water",
      "Diluted with water first",
      "All of the above"
    ],
    correctOptions: "Diluted with water first",
    slug: "how-do-i-add-liquid-chlorine-to-my-pool"
  },
  {
    id: 340,
    name: "How does pool solar work?",
    options: [
      "Uses solar panels to heat water",
      "Uses solar heaters",
      "Uses solar covers",
      "All of the above"
    ],
    correctOptions: "Uses solar panels to heat water",
    slug: "how-does-pool-solar-work"
  },
  {
    id: 341,
    name: "How does water conditioner work?",
    options: [
      "Neutralizes metals",
      "Balances pH",
      "Clears cloudy water",
      "All of the above"
    ],
    correctOptions: "Neutralizes metals",
    slug: "how-does-water-conditioner-work"
  },
  {
    id: 342,
    name: "How to add chemicals to an above ground pool?",
    options: [
      "Dissolve in water first",
      "Directly into the skimmer",
      "Broadcast over the surface",
      "All of the above"
    ],
    correctOptions: "Dissolve in water first",
    slug: "how-to-add-chemicals-to-an-above-ground-pool"
  },
  {
    id: 343,
    name: "How to add chlorine to water?",
    options: [
      "Use chlorine tablets",
      "Add liquid chlorine",
      "Use chlorine granules",
      "All of the above"
    ],
    correctOptions: "All of the above",
    slug: "how-to-add-chlorine-to-water"
  },
  {
    id: 344,
    name: "How to add sunscreen to a pool?",
    options: [
      "Directly into the water",
      "Apply to skin before swimming",
      "Mix with pool chemicals",
      "Not recommended"
    ],
    correctOptions: "Apply to skin before swimming",
    slug: "how-to-add-sunscreen-to-a-pool"
  },
  {
    id: 345,
    name: "How to care for a swimming pool?",
    options: [
      "Regular cleaning",
      "Balancing chemicals",
      "Maintaining water levels",
      "All of the above"
    ],
    correctOptions: "All of the above",
    slug: "how-to-care-for-a-swimming-pool"
  },
  {
    id: 346,
    name: "How to lower total chlorine in a pool?",
    options: [
      "Use a chlorine neutralizer",
      "Increase filtration",
      "Add fresh water",
      "All of the above"
    ],
    correctOptions: "All of the above",
    slug: "how-to-lower-total-chlorine-in-a-pool"
  },
  {
    id: 347,
    name: "Is it ok to drink river water?",
    options: [
      "Yes, always",
      "No, it may be unsafe",
      "Depends on the river",
      "Not sure"
    ],
    correctOptions: "Depends on the river",
    slug: "is-it-ok-to-drink-river-water"
  },
  {
    id: 348,
    name: "What animals live in the Yellow River?",
    options: ["Fish", "Birds", "Mammals", "All of the above"],
    correctOptions: "All of the above",
    slug: "what-animals-live-in-the-yellow-river"
  },
  {
    id: 349,
    name: "What is another name for the Yellow River?",
    options: ["Huang He", "Yangtze", "Mekong", "Ganges"],
    correctOptions: "Huang He",
    slug: "what-is-another-name-for-the-yellow-river"
  },
  {
    id: 350,
    name: "What is the main river in Vietnam?",
    options: ["Mekong River", "Red River", "Yangtze River", "Ganges River"],
    correctOptions: "Mekong River",
    slug: "what-is-the-main-river-in-vietnam"
  },
  {
    id: 351,
    name: "What is the Mekong River famous for?",
    options: ["Its biodiversity", "Its length", "Its depth", "Its source"],
    correctOptions: "Its biodiversity",
    slug: "what-is-the-mekong-river-famous-for"
  },
  {
    id: 352,
    name: "What is the Yangtze River used for?",
    options: [
      "Transportation",
      "Agriculture",
      "Hydroelectric power",
      "All of the above"
    ],
    correctOptions: "All of the above",
    slug: "what-is-the-yangtze-river-used-for"
  },
  {
    id: 353,
    name: "What was the characteristic of the Yellow River?",
    options: [
      "It was prone to flooding",
      "It was a major trade route",
      "It was the longest river",
      "It was the deepest river"
    ],
    correctOptions: "It was prone to flooding",
    slug: "what-was-the-characteristic-of-the-yellow-river"
  },
  {
    id: 354,
    name: "Which river is known as the Yellow River?",
    options: ["Yangtze River", "Mekong River", "Ganges River", "Yellow River"],
    correctOptions: "Yellow River",
    slug: "which-river-is-known-as-the-yellow-river",
    relatedQuizzes: [116, 377]
  },
  {
    id: 355,
    name: "Who is the king of rivers?",
    options: [
      "Nile River",
      "Amazon River",
      "Yangtze River",
      "Mississippi River"
    ],
    correctOptions: "Amazon River",
    slug: "who-is-the-king-of-rivers"
  },
  {
    id: 356,
    name: "What is the delta of a river?",
    options: [
      "The end where the river meets the sea",
      "The source of the river",
      "The middle part of the river",
      "The beginning of the river"
    ],
    correctOptions: "The end where the river meets the sea",
    slug: "what-is-the-delta-of-a-river"
  },
  {
    id: 357,
    name: "What is the strongest country?",
    options: ["United States", "China", "Russia", "India"],
    correctOptions: "United States",
    slug: "what-is-the-strongest-country"
  },
  {
    id: 358,
    name: "How deep is the Nile River?",
    options: [
      "About 10 meters",
      "About 20 meters",
      "About 30 meters",
      "About 40 meters"
    ],
    correctOptions: "About 30 meters",
    slug: "how-deep-is-the-nile-river"
  },
  {
    id: 359,
    name: "How long is the Nile River?",
    options: [
      "About 4,135 miles",
      "About 4,345 miles",
      "About 4,567 miles",
      "About 4,800 miles"
    ],
    correctOptions: "About 4,135 miles",
    slug: "how-long-is-the-nile-river"
  },
  {
    id: 360,
    name: "What is the second longest river in the world?",
    options: [
      "Amazon River",
      "Yangtze River",
      "Mississippi-Missouri River",
      "Nile River"
    ],
    correctOptions: "Amazon River",
    slug: "what-is-the-second-longest-river-in-the-world",
    relatedQuizzes: [119, 122, 403, 362, 334]
  },
  {
    id: 361,
    name: "What is the source of a river?",
    options: [
      "The point where the river starts",
      "The end where the river meets the sea",
      "The middle of the river",
      "The place where the river splits"
    ],
    correctOptions: "The point where the river starts",
    slug: "what-is-the-source-of-a-river"
  },
  {
    id: 362,
    name: "What is the world's longest river?",
    options: [
      "Amazon River",
      "Nile River",
      "Yangtze River",
      "Mississippi River"
    ],
    correctOptions: "Amazon River",
    slug: "what-is-the-worlds-longest-river",
    relatedQuizzes: [119, 122, 403, 360, 334]
  },
  {
    id: 363,
    name: "Which is the deepest river in the world?",
    options: [
      "Congo River",
      "Amazon River",
      "Yangtze River",
      "Mississippi River"
    ],
    correctOptions: "Congo River",
    slug: "which-is-the-deepest-river-in-the-world"
  },
  {
    id: 364,
    name: "How many rivers are there in Pakistan?",
    options: ["Five", "Seven", "Nine", "Twelve"],
    correctOptions: "Seven",
    slug: "how-many-rivers-are-there-in-pakistan"
  },
  {
    id: 365,
    name: "Is the Amazon the largest river in the world?",
    options: ["Yes", "No", "Depends on the measurement", "Not sure"],
    correctOptions: "Yes",
    slug: "is-the-amazon-the-largest-river-in-the-world"
  },
  {
    id: 366,
    name: "Is river water safe to drink?",
    options: [
      "Yes, always",
      "No, it may be unsafe",
      "Depends on the river",
      "Not sure"
    ],
    correctOptions: "Depends on the river",
    slug: "is-river-water-safe-to-drink"
  },
  {
    id: 367,
    name: "Is the Nile or Amazon longer?",
    options: [
      "Nile River",
      "Amazon River",
      "Both are the same length",
      "Not sure"
    ],
    correctOptions: "Amazon River",
    slug: "is-the-nile-or-amazon-longer"
  },
  {
    id: 368,
    name: "What is the dirtiest river in the world?",
    options: [
      "Ganges River",
      "Yangtze River",
      "Yellow River",
      "Mississippi River"
    ],
    correctOptions: "Ganges River",
    slug: "what-is-the-dirtiest-river-in-the-world"
  },
  {
    id: 369,
    name: "What is the oldest river in the world?",
    options: ["Finke River", "Nile River", "Amazon River", "Yangtze River"],
    correctOptions: "Finke River",
    slug: "what-is-the-oldest-river-in-the-world"
  },
  {
    id: 370,
    name: "What is the smallest river in the world?",
    options: ["Roe River", "Amazon River", "Yangtze River", "Ganges River"],
    correctOptions: "Roe River",
    slug: "what-is-the-smallest-river-in-the-world"
  },
  {
    id: 371,
    name: "What is the start of a river called?",
    options: ["Source", "Mouth", "Delta", "Estuary"],
    correctOptions: "Source",
    slug: "what-is-the-start-of-a-river-called"
  },
  {
    id: 372,
    name: "Which is the deepest river on earth?",
    options: [
      "Congo River",
      "Amazon River",
      "Yangtze River",
      "Mississippi River"
    ],
    correctOptions: "Congo River",
    slug: "which-is-the-deepest-river-on-earth"
  },
  {
    id: 373,
    name: "Which is longer: Nile or Amazon?",
    options: [
      "Nile River",
      "Amazon River",
      "Both are the same length",
      "Not sure"
    ],
    correctOptions: "Amazon River",
    slug: "which-is-longer-nile-or-amazon"
  },
  {
    id: 374,
    name: "Which is the cleanest river in the world?",
    options: [
      "Thames River",
      "Mississippi River",
      "Ganges River",
      "Yangtze River"
    ],
    correctOptions: "Thames River",
    slug: "which-is-the-cleanest-river-in-the-world"
  },
  {
    id: 375,
    name: "Which is the widest river in the world?",
    options: [
      "Amazon River",
      "Yangtze River",
      "Mississippi River",
      "Congo River"
    ],
    correctOptions: "Amazon River",
    slug: "which-is-the-widest-river-in-the-world"
  },
  {
    id: 376,
    name: "How to read a river?",
    options: [
      "Look at the flow direction",
      "Examine the water depth",
      "Check the surrounding vegetation",
      "All of the above"
    ],
    correctOptions: "All of the above",
    slug: "how-to-read-a-river"
  },
  {
    id: 377,
    name: "Which river is known as the Nile or Amazon?",
    options: ["Nile River", "Amazon River", "Both", "None"],
    correctOptions: "Both",
    slug: "which-river-is-known-as-the-nile-or-amazon",
    relatedQuizzes: [116, 354]
  },
  {
    id: 378,
    name: "What are the 4 types of river erosion?",
    options: [
      "Hydraulic action, abrasion, attrition, solution",
      "Weathering, erosion, deposition, transportation",
      "Sedimentation, transport, chemical weathering, biological weathering",
      "None of the above"
    ],
    correctOptions: "Hydraulic action, abrasion, attrition, solution",
    slug: "what-are-the-4-types-of-river-erosion"
  },
  {
    id: 379,
    name: "What are the four stages of a river?",
    options: [
      "Source, tributary, river, estuary",
      "Youth, maturity, old age, rejuvenation",
      "Headwater, flow, mouth, delta",
      "Source, floodplain, estuary, delta"
    ],
    correctOptions: "Youth, maturity, old age, rejuvenation",
    slug: "what-are-the-four-stages-of-a-river"
  },
  {
    id: 380,
    name: "What are the three stages of a river?",
    options: [
      "Youth, middle age, old age",
      "Source, flow, mouth",
      "Upper, middle, lower",
      "Headwater, floodplain, delta"
    ],
    correctOptions: "Upper, middle, lower",
    slug: "what-are-the-three-stages-of-a-river"
  },
  {
    id: 381,
    name: "What is the fastest river in the world?",
    options: [
      "Amazon River",
      "Yangtze River",
      "Mississippi River",
      "Congo River"
    ],
    correctOptions: "Congo River",
    slug: "what-is-the-fastest-river-in-the-world"
  },
  {
    id: 382,
    name: "What is the most powerful river in the world?",
    options: [
      "Amazon River",
      "Yangtze River",
      "Mississippi River",
      "Congo River"
    ],
    correctOptions: "Amazon River",
    slug: "what-is-the-most-powerful-river-in-the-world"
  },
  {
    id: 383,
    name: "What is the slope of a river called?",
    options: ["Gradient", "Flow", "Current", "Velocity"],
    correctOptions: "Gradient",
    slug: "what-is-the-slope-of-a-river-called"
  },
  {
    id: 384,
    name: "How many countries are there in the world?",
    options: ["195", "196", "197", "198"],
    correctOptions: "195",
    slug: "how-many-countries-are-there-in-the-world"
  },
  {
    id: 385,
    name: "What is the largest city on Earth?",
    options: ["Tokyo", "New York", "Shanghai", "São Paulo"],
    correctOptions: "Tokyo",
    slug: "what-is-the-largest-city-on-earth",
    relatedQuizzes: [111, 136, 177, 189, 394, 396, 412, 438, 446, 448, 449, 453, 456, 457, 459]
  },
  {
    id: 386,
    name: "What is the oldest country?",
    options: ["San Marino", "Egypt", "China", "Iran"],
    correctOptions: "San Marino",
    slug: "what-is-the-oldest-country"
  },
  {
    id: 387,
    name: "What is the smallest country in the world?",
    options: ["Vatican City", "Monaco", "Nauru", "San Marino"],
    correctOptions: "Vatican City",
    slug: "what-is-the-smallest-country-in-the-world"
  },
  {
    id: 388,
    name: "What's the richest country in the world?",
    options: ["Luxembourg", "Switzerland", "Norway", "Singapore"],
    correctOptions: "Luxembourg",
    slug: "whats-the-richest-country-in-the-world"
  },
  {
    id: 389,
    name: "Where is the Nile?",
    options: ["Africa", "Asia", "South America", "Europe"],
    correctOptions: "Africa",
    slug: "where-is-the-nile"
  },
  {
    id: 390,
    name: "Which is the largest country in the world?",
    options: ["Russia", "Canada", "China", "United States"],
    correctOptions: "Russia",
    slug: "which-is-the-largest-country-in-the-world"
  },
  {
    id: 391,
    name: "Which is the poorest country?",
    options: ["Burundi", "Central African Republic", "Mozambique", "Niger"],
    correctOptions: "Burundi",
    slug: "which-is-the-poorest-country",
  },
  {
    id: 392,
    name: "Who is the father of mathematics?",
    options: ["Pythagoras", "Euclid", "Archimedes", "Leonhard Euler"],
    correctOptions: "Pythagoras",
    slug: "who-is-the-father-of-mathematics",
    relatedQuizzes: [393, 399, 400, 419, 420, 436]
  },
  {
    id: 393,
    name: "Who is the father of physics?",
    options: [
      "Isaac Newton",
      "Galileo Galilei",
      "Albert Einstein",
      "Michael Faraday"
    ],
    correctOptions: "Isaac Newton",
    slug: "who-is-the-father-of-physics",
    relatedQuizzes: [392, 399, 400, 419, 420, 436]
  },
  {
    id: 394,
    name: "What is the smallest city in the world?",
    options: ["Vatican City", "San Marino", "Monaco", "Nauru"],
    correctOptions: "Vatican City",
    slug: "what-is-the-smallest-city-in-the-world",
    relatedQuizzes: [111, 136, 137, 177, 189, 385, 396, 412, 438, 446, 448, 449, 453, 456, 457, 459]
  },
  {
    id: 395,
    name: "What is the full form of science?",
    options: [
      "Systematic Investigation of Nature",
      "Scientific Inquiry and Knowledge of Everything",
      "Study of Intellectual Nature and Creative Endeavors",
      "Scientific Investigation and Exploration of Natural Elements"
    ],
    correctOptions: "Systematic Investigation of Nature",
    slug: "what-is-the-full-form-of-science",
    relatedQuizzes: [482, 467, 479, 481]
  },
  {
    id: 396,
    name: "What is the richest city in the world?",
    options: ["New York", "Tokyo", "Shanghai", "London"],
    correctOptions: "New York",
    slug: "what-is-the-richest-city-in-the-world",
    relatedQuizzes: [111, 136, 137, 177, 189, 385, 394, 412, 438, 446, 448, 449, 453, 456, 457, 459]
  },
  {
    id: 397,
    name: "How long is the Congo River?",
    options: ["2,900 miles", "3,200 miles", "2,700 miles", "3,500 miles"],
    correctOptions: "2,900 miles",
    slug: "how-long-is-the-congo-river"
  },
  {
    id: 398,
    name: "Where is the Nile river?",
    options: ["Africa", "Asia", "Europe", "Australia"],
    correctOptions: "Africa",
    slug: "where-is-the-nile-river"
  },
  {
    id: 399,
    name: "Who is the father of modern science?",
    options: [
      "Galileo Galilei",
      "Isaac Newton",
      "Albert Einstein",
      "Charles Darwin"
    ],
    correctOptions: "Galileo Galilei",
    slug: "who-is-the-father-of-modern-science",
    relatedQuizzes: [392, 393, 400, 419, 420, 436]
  },
  {
    id: 400,
    name: "Who is called the father of chemistry?",
    options: [
      "Antoine Lavoisier",
      "Isaac Newton",
      "Albert Einstein",
      "Dmitri Mendeleev"
    ],
    correctOptions: "Antoine Lavoisier",
    slug: "who-is-called-the-father-of-chemistry",
    relatedQuizzes: [392, 393, 399, 419, 420, 436]
  }
]

const RandomData5: any[] = [
  {
    id: 401,
    name: "How many billionaires are there in Pakistan?",
    options: ["5", "10", "15", "20"],
    correctOptions: "10",
    slug: "how-many-billionaires-are-there-in-pakistan"
  },
  {
    id: 402,
    name: "Is Pakistan a powerful country?",
    options: ["Yes", "No"],
    correctOptions: "Yes",
    slug: "is-pakistan-a-powerful-country"
  },
  {
    id: 403,
    name: "What are the 5 longest rivers in the world?",
    options: [
      "Nile, Amazon, Yangtze, Mississippi, Yenisei",
      "Amazon, Nile, Mississippi, Yangtze, Congo"
    ],
    correctOptions: "Nile, Amazon, Yangtze, Mississippi, Yenisei",
    slug: "what-are-the-5-longest-rivers-in-the-world",
    relatedQuizzes: [119, 122, 360, 362, 334]
  },
  {
    id: 404,
    name: "What country has the most rivers?",
    options: ["Russia", "Brazil", "Canada", "China"],
    correctOptions: "Russia",
    slug: "what-country-has-the-most-rivers"
  },
  {
    id: 405,
    name: "What is the biggest capital in the world?",
    options: ["Tokyo", "Beijing", "Cairo", "New Delhi"],
    correctOptions: "Tokyo",
    slug: "what-is-the-biggest-capital-in-the-world"
  },
  {
    id: 406,
    name: "What are the 7 major rivers of India?",
    options: [
      "Ganga, Yamuna, Godavari, Krishna, Narmada, Indus, Brahmaputra",
      "Cauvery, Tapti, Sabarmati, Saraswati, Bhima, Sutlej, Gandak"
    ],
    correctOptions:
      "Ganga, Yamuna, Godavari, Krishna, Narmada, Indus, Brahmaputra",
    slug: "what-are-the-7-major-rivers-of-india"
  },
  {
    id: 407,
    name: "What is the language of chemistry?",
    options: ["Symbols", "Equations", "Formulas", "Elements"],
    correctOptions: "Symbols",
    slug: "what-is-the-language-of-chemistry"
  },
  {
    id: 408,
    name: "What is the richest country in Asia?",
    options: ["Japan", "China", "Singapore", "Qatar"],
    correctOptions: "Qatar",
    slug: "what-is-the-richest-country-in-asia"
  },
  {
    id: 409,
    name: "What is the widest river?",
    options: ["Amazon", "Congo", "Yangtze", "Mississippi"],
    correctOptions: "Amazon",
    slug: "what-is-the-widest-river"
  },
  {
    id: 410,
    name: "What is the world's largest river by volume?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    correctOptions: "Amazon",
    slug: "what-is-the-worlds-largest-river-by-volume"
  },
  {
    id: 411,
    name: "Which country has no airport?",
    options: ["Vatican City", "Monaco", "Liechtenstein", "San Marino"],
    correctOptions: "Vatican City",
    slug: "which-country-has-no-airport"
  },
  {
    id: 412,
    name: "Which country has no capital city?",
    options: ["Nauru", "Vatican City", "Liechtenstein", "San Marino"],
    correctOptions: "Nauru",
    slug: "which-country-has-no-capital-city",
    relatedQuizzes: [111, 136, 137, 177, 189, 385, 394, 396, 438, 446, 448, 449, 453, 456, 457, 459]
  },
  {
    id: 413,
    name: "Which country has the most water?",
    options: ["Brazil", "Russia", "Canada", "United States"],
    correctOptions: "Brazil",
    slug: "which-country-has-the-most-water"
  },
  {
    id: 414,
    name: "Which country has two capitals?",
    options: ["South Africa", "Bolivia", "Netherlands", "Chile"],
    correctOptions: "South Africa",
    slug: "which-country-has-two-capitals",
  },
  {
    id: 415,
    name: "Which is longer: the Amazon or the Nile?",
    options: ["Amazon", "Nile"],
    correctOptions: "Nile",
    slug: "which-is-longer"
  },
  {
    id: 416,
    name: "Which is the oldest river in India?",
    options: ["Ganga", "Saraswati", "Godavari", "Narmada"],
    correctOptions: "Narmada",
    slug: "which-is-the-oldest-river-in-india"
  },
  {
    id: 417,
    name: "Which is the shortest river in the world?",
    options: ["Roe River", "D River", "Tamberine River", "Aril River"],
    correctOptions: "Roe River",
    slug: "which-is-the-shortest-river-in-the-world"
  },
  {
    id: 418,
    name: "Who is the King of Chemistry?",
    options: [
      "Antoine Lavoisier",
      "Dmitri Mendeleev",
      "Marie Curie",
      "Robert Boyle"
    ],
    correctOptions: "Antoine Lavoisier",
    slug: "who-is-the-king-of-chemistry"
  },
  {
    id: 419,
    name: "Who is the father of the cell?",
    options: [
      "Robert Hooke",
      "Theodor Schwann",
      "Anton van Leeuwenhoek",
      "Rudolf Virchow"
    ],
    correctOptions: "Robert Hooke",
    slug: "who-is-the-father-of-cell",
    relatedQuizzes: [392, 393, 399, 480, 420, 436]
  },
  {
    id: 420,
    name: "Who is the father of gravity?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Galileo Galilei",
      "Nikola Tesla"
    ],
    correctOptions: "Isaac Newton",
    slug: "who-is-the-father-of-gravity",
    relatedQuizzes: [392, 393, 399, 480, 419, 436]
  },
  {
    id: 421,
    name: "What is the full name of science?",
    options: ["Natural Science", "Philosophy of Science", "Science", "None"],
    correctOptions: "None",
    slug: "what-is-the-full-name-of-science"
  },
  {
    id: 422,
    name: "How old is physics?",
    options: ["Around 2,500 years", "500 years", "1,000 years", "3,000 years"],
    correctOptions: "Around 2,500 years",
    slug: "how-old-is-physics"
  },
  {
    id: 423,
    name: "What is the oldest science?",
    options: ["Mathematics", "Astronomy", "Chemistry", "Physics"],
    correctOptions: "Mathematics",
    slug: "what-is-the-oldest-science"
  },
  {
    id: 424,
    name: "What is the top 1 country in the world?",
    options: ["United States", "China", "Germany", "Japan"],
    correctOptions: "United States",
    slug: "what-is-the-top-1-country-in-the-world"
  },
  {
    id: 425,
    name: "Which continent has the most rivers?",
    options: ["Africa", "Asia", "Europe", "South America"],
    correctOptions: "Asia",
    slug: "which-continent-has-the-most-rivers"
  },
  {
    id: 426,
    name: "Which country is best in biology?",
    options: ["United States", "Germany", "United Kingdom", "Sweden"],
    correctOptions: "United States",
    slug: "which-country-is-best-in-biology"
  },
  {
    id: 427,
    name: "Which country is best for study?",
    options: ["United States", "United Kingdom", "Germany", "Canada"],
    correctOptions: "United States",
    slug: "which-country-is-best-for-study"
  },
  {
    id: 428,
    name: "Which country is number 1 in math?",
    options: ["China", "United States", "South Korea", "Singapore"],
    correctOptions: "China",
    slug: "which-country-is-number-1-in-math"
  },
  {
    id: 429,
    name: "Which country is number 1 in science?",
    options: ["United States", "China", "Germany", "United Kingdom"],
    correctOptions: "United States",
    slug: "which-country-is-number-1-in-science"
  },
  {
    id: 430,
    name: "Which is the biggest river in Europe?",
    options: ["Volga River", "Danube River", "Rhine River", "Elbe River"],
    correctOptions: "Volga River",
    slug: "which-is-the-biggest-river-in-europe"
  },
  {
    id: 431,
    name: "Which is the busiest river in the world?",
    options: ["Yangtze River", "Amazon River", "Ganges River", "Nile River"],
    correctOptions: "Yangtze River",
    slug: "which-is-the-busiest-river-in-the-world"
  },
  {
    id: 432,
    name: "Which river flows through 10 countries?",
    options: ["Danube River", "Amazon River", "Nile River", "Ganges River"],
    correctOptions: "Danube River",
    slug: "which-river-flows-through-10-countries"
  },
  {
    id: 433,
    name: "Which river is also called Salt River?",
    options: ["Colorado River", "Ganges River", "Mekong River", "Amazon River"],
    correctOptions: "Colorado River",
    slug: "which-river-is-also-called-salt-river"
  },
  {
    id: 434,
    name: "Who discovered physics first?",
    options: [
      "Isaac Newton",
      "Galileo Galilei",
      "Albert Einstein",
      "Aristotle"
    ],
    correctOptions: "Aristotle",
    slug: "who-discovered-physics-first"
  },
  {
    id: 435,
    name: "Who first discovered chemistry?",
    options: [
      "Antoine Lavoisier",
      "Robert Boyle",
      "Dmitri Mendeleev",
      "John Dalton"
    ],
    correctOptions: "Antoine Lavoisier",
    slug: "who-first-discovered-chemistry"
  },
  {
    id: 436,
    name: "Who is the father of biology?",
    options: ["Aristotle", "Charles Darwin", "Gregor Mendel", "Louis Pasteur"],
    correctOptions: "Aristotle",
    slug: "who-is-the-father-of-biology",
    relatedQuizzes: [392, 393, 399, 480, 419, 420]
  },
  {
    id: 437,
    name: "How many floors are in Burj Khalifa?",
    options: ["108", "124", "160", "163"],
    correctOptions: "163",
    slug: "how-many-floors-are-in-burj-khalifa"
  },
  {
    id: 438,
    name: "What is the largest city in the world?",
    options: ["Tokyo", "New York", "Shanghai", "Delhi"],
    correctOptions: "Tokyo",
    slug: "what-is-the-largest-city-in-the-world",
    relatedQuizzes: [111, 136, 137, 177, 189, 385, 394, 396, 412, 446, 448, 449, 453, 456, 457, 459]
  },
  {
    id: 439,
    name: "What is the tallest building in the world?",
    options: [
      "Burj Khalifa",
      "Shanghai Tower",
      "Abraj Al-Bait Clock Tower",
      "Ping An Finance Centre"
    ],
    correctOptions: "Burj Khalifa",
    slug: "what-is-the-tallest-building-in-the-world"
  },
  {
    id: 440,
    name: "How many capitals are there in the world?",
    options: ["150", "195", "195", "200"],
    correctOptions: "195",
    slug: "how-many-capitals-are-there-in-the-world"
  },
  {
    id: 441,
    name: "What is the state animal of Texas?",
    options: ["Armadillo", "Bison", "Longhorn", "Coyote"],
    correctOptions: "Longhorn",
    slug: "what-is-the-state-animal-of-texas"
  },
  {
    id: 442,
    name: "What is the world's longest name?",
    options: [
      "Hubert Wolfeschlegelsteinhausenbergerdorff",
      "Adolph Blaine",
      "Maximilian III",
      "Alexander III"
    ],
    correctOptions: "Hubert Wolfeschlegelsteinhausenbergerdorff",
    slug: "what-is-the-worlds-longest-name"
  },
  {
    id: 443,
    name: "How did Texas get its name?",
    options: [
      "From a Native American word meaning 'friend'",
      "From the Spanish explorer's name",
      "From the name of the first settler",
      "From a French origin"
    ],
    correctOptions: "From a Native American word meaning 'friend'",
    slug: "how-did-texas-get-its-name"
  },
  {
    id: 444,
    name: "What is Texas' nickname?",
    options: [
      "The Lone Star State",
      "The Sunshine State",
      "The Golden State",
      "The Empire State"
    ],
    correctOptions: "The Lone Star State",
    slug: "what-is-texas-nickname"
  },
  {
    id: 445,
    name: "What is the biggest capital in the world?",
    options: ["Tokyo", "New York", "Beijing", "Jakarta"],
    correctOptions: "Jakarta",
    slug: "what-is-the-biggest-capital-in-the-world"
  },
  {
    id: 446,
    name: "What is the coldest capital city in the world?",
    options: ["Moscow", "Helsinki", "Ulaanbaatar", "Oslo"],
    correctOptions: "Ulaanbaatar",
    slug: "what-is-the-coldest-capital-city-in-the-world",
    relatedQuizzes: [111, 136, 137, 177, 189, 385, 394, 396, 412, 438, 448, 449, 453, 456, 457, 459]

  },
  {
    id: 447,
    name: "What is the difference between capital and capitol?",
    options: [
      "Capital is a city; capitol is a building",
      "Capitol is a city; capital is a building",
      "They are the same",
      "Capitol is related to finance; capital to politics"
    ],
    correctOptions: "Capital is a city; capitol is a building",
    slug: "what-is-the-difference-between-capital-and-capitol"
  },
  {
    id: 448,
    name: "What is the highest city in the world?",
    options: ["La Paz", "Quito", "Lhasa", "Kathmandu"],
    correctOptions: "La Paz",
    slug: "what-is-the-highest-city-in-the-world",
    relatedQuizzes: [111, 136, 137, 177, 189, 385, 394, 396, 412, 438, 446, 449, 453, 456, 457, 459]

  },
  {
    id: 449,
    name: "What is the northernmost capital city in the world?",
    options: ["Reykjavik", "Oslo", "Helsinki", "Stockholm"],
    correctOptions: "Reykjavik",
    slug: "what-is-the-northernmost-capital-city-in-the-world",
    relatedQuizzes: [111, 136, 137, 177, 189, 385, 394, 396, 412, 438, 446, 448, 453, 456, 457, 459]
  },
  {
    id: 450,
    name: "What is the smallest capital in the world?",
    options: ["San Marino", "Vaduz", "Monaco", "Ngerulmud"],
    correctOptions: "Ngerulmud",
    slug: "what-is-the-smallest-capital-in-the-world"
  },
  {
    id: 451,
    name: "What is the tallest building in Los Angeles?",
    options: [
      "Wilshire Grand Center",
      "US Bank Tower",
      "The Capitol Records Building",
      "Los Angeles City Hall"
    ],
    correctOptions: "Wilshire Grand Center",
    slug: "what-is-the-tallest-building-in-los-angeles"
  },
  {
    id: 452,
    name: "What is the tallest building in the USA?",
    options: [
      "One World Trade Center",
      "Willis Tower",
      "Burj Khalifa",
      "Empire State Building"
    ],
    correctOptions: "One World Trade Center",
    slug: "what-is-the-tallest-building-in-the-usa"
  },
  {
    id: 453,
    name: "Which is the largest city in Pakistan?",
    options: ["Lahore", "Karachi", "Islamabad", "Faisalabad"],
    correctOptions: "Karachi",
    slug: "which-is-the-largest-city-in-pakistan",
    relatedQuizzes: [111, 136, 137, 177, 189, 385, 394, 396, 412, 438, 446, 448, 449, 456, 457, 459]
  },
  {
    id: 454,
    name: "How tall is the Texas Capitol?",
    options: ["268 feet", "300 feet", "312 feet", "350 feet"],
    correctOptions: "312 feet",
    slug: "how-tall-is-the-texas-capitol"
  },
  {
    id: 455,
    name: "Is there a building taller than the Burj Khalifa?",
    options: ["Yes", "No", "Not yet", "Uncertain"],
    correctOptions: "No",
    slug: "is-there-a-building-taller-than-the-burj-khalifa"
  },
  {
    id: 456,
    name: "What capital city is 7200 feet above sea level?",
    options: ["La Paz", "Quito", "Lhasa", "Kathmandu"],
    correctOptions: "La Paz",
    slug: "what-capital-city-is-7200-feet-above-sea-level",
    relatedQuizzes: [111, 136, 137, 177, 189, 385, 394, 396, 412, 438, 446, 448, 449, 453, 457, 459]
  },
  {
    id: 457,
    name: "What is Europe's highest capital city?",
    options: ["Vienna", "Bern", "Madrid", "Andorra la Vella"],
    correctOptions: "Andorra la Vella",
    slug: "what-is-europes-highest-capital-city",
    relatedQuizzes: [111, 136, 137, 177, 189, 385, 394, 396, 412, 438, 446, 448, 449, 453, 456, 459]

  },
  {
    id: 458,
    name: "What is Texas' capital known as?",
    options: ["Austin", "Houston", "Dallas", "San Antonio"],
    correctOptions: "Austin",
    slug: "what-is-texas-capital-known-as"
  },
  {
    id: 459,
    name: "What is the highest city in Europe?",
    options: ["Zurich", "Vienna", "Andorra la Vella", "Madrid"],
    correctOptions: "Andorra la Vella",
    slug: "what-is-the-highest-city-in-europe",
    relatedQuizzes: [111, 136, 137, 177, 189, 385, 394, 396, 412, 438, 446, 448, 449, 453, 456, 457]
  },
  {
    id: 460,
    name: "What is the highest state capital?",
    options: ["Santa Fe", "Denver", "Phoenix", "Salt Lake City"],
    correctOptions: "Santa Fe",
    slug: "what-is-the-highest-state-capital"
  },
  {
    id: 461,
    name: "What is the highest town in the world?",
    options: ["La Rinconada", "El Alto", "Quito", "Lhasa"],
    correctOptions: "La Rinconada",
    slug: "what-is-the-highest-town-in-the-world"
  },
  {
    id: 462,
    name: "What is the smallest state capital?",
    options: ["Montpelier", "Providence", "Augusta", "Little Rock"],
    correctOptions: "Montpelier",
    slug: "what-is-the-smallest-state-capital"
  },
  {
    id: 463,
    name: "What are the top 10 most populated cities?",
    options: [
      "Tokyo, Delhi, Shanghai, Sao Paulo, Mexico City, Cairo, Mumbai, Beijing, Dhaka, Osaka",
      "New York, Los Angeles, Chicago, Houston, Philadelphia, San Antonio, San Diego, Dallas, Austin, Jacksonville",
      "London, Paris, Berlin, Rome, Madrid, Vienna, Budapest, Warsaw, Prague, Copenhagen",
      "Bangkok, Kuala Lumpur, Singapore, Hong Kong, Jakarta, Manila, Ho Chi Minh City, Taipei, Seoul, Sydney"
    ],
    correctOptions:
      "Tokyo, Delhi, Shanghai, Sao Paulo, Mexico City, Cairo, Mumbai, Beijing, Dhaka, Osaka",
    slug: "what-are-the-top-10-most-populated-cities"
  },
  {
    id: 464,
    name: "Which is the highest town?",
    options: ["La Rinconada", "El Alto", "Quito", "Lhasa"],
    correctOptions: "La Rinconada",
    slug: "which-is-the-highest-town"
  },
  {
    id: 465,
    name: "How much sugar a day?",
    options: [
      "Less than 25 grams",
      "25-50 grams",
      "50-75 grams",
      "More than 75 grams"
    ],
    correctOptions: "Less than 25 grams",
    slug: "how-much-sugar-a-day"
  },
  {
    id: 466,
    name: "How to stop eating sugar?",
    options: [
      "Replace with fruits",
      "Increase water intake",
      "Read labels carefully",
      "All of the above"
    ],
    correctOptions: "All of the above",
    slug: "how-to-stop-eating-sugar"
  },
  {
    id: 467,
    name: "What is the full form of DNA?",
    options: [
      "Deoxyribonucleic Acid",
      "Deoxyribose Nucleic Acid",
      "Deoxyribonucleic Agent",
      "Deoxyribose Nucleotide Acid"
    ],
    correctOptions: "Deoxyribonucleic Acid",
    slug: "what-is-the-full-form-of-dna",
    relatedQuizzes: [482, 479, 481, 395]
  },
  {
    id: 468,
    name: "Who named Earth?",
    options: ["Ancient Greeks", "Romans", "Egyptians", "Chinese"],
    correctOptions: "Ancient Greeks",
    slug: "who-named-earth"
  },
  {
    id: 469,
    name: "How many rivers are in Pakistan?",
    options: ["Five", "Seven", "Nine", "Twelve"],
    correctOptions: "Seven",
    slug: "how-many-rivers-are-in-pakistan"
  },
  {
    id: 470,
    name: "How many rivers are in Punjab?",
    options: ["Three", "Five", "Seven", "Nine"],
    correctOptions: "Five",
    slug: "how-many-rivers-are-in-punjab"
  },
  {
    id: 471,
    name: "How to reduce sugar intake?",
    options: [
      "Eat whole fruits",
      "Choose unsweetened drinks",
      "Avoid processed foods",
      "All of the above"
    ],
    correctOptions: "All of the above",
    slug: "how-to-reduce-sugar-intake"
  },
  {
    id: 472,
    name: "How to treat a fracture?",
    options: [
      "Rest and immobilize",
      "Apply ice",
      "Seek medical attention",
      "All of the above"
    ],
    correctOptions: "All of the above",
    slug: "how-to-treat-a-fracture"
  },
  {
    id: 473,
    name: "Is milk good for bones?",
    options: ["Yes", "No", "Depends on the type of milk", "Not sure"],
    correctOptions: "Yes",
    slug: "is-milk-good-for-bones"
  },
  {
    id: 474,
    name: "Is money countable or uncountable?",
    options: ["Countable", "Uncountable", "Both", "Depends on the currency"],
    correctOptions: "Uncountable",
    slug: "is-money-countable-or-uncountable"
  },
  {
    id: 475,
    name: "Is sugar bad for health?",
    options: ["Yes", "No", "Depends on the amount", "Not sure"],
    correctOptions: "Depends on the amount",
    slug: "is-sugar-bad-for-health"
  },
  {
    id: 476,
    name: "Is sugar in milk bad?",
    options: ["Yes", "No", "Depends on the amount", "Not sure"],
    correctOptions: "Depends on the amount",
    slug: "is-sugar-in-milk-bad"
  },
  {
    id: 477,
    name: "What is a closed fracture?",
    options: [
      "A fracture where the bone does not break the skin",
      "A fracture where the bone breaks through the skin",
      "A fracture in which the bone is only partially broken",
      "A fracture with multiple bone fragments"
    ],
    correctOptions: "A fracture where the bone does not break the skin",
    slug: "what-is-a-closed-fracture"
  },
  {
    id: 478,
    name: "What is the full form of WiFi?",
    options: [
      "Wireless Fidelity",
      "Wide Fidelity",
      "Wireless Frequency",
      "Wide Frequency"
    ],
    correctOptions: "Wireless Fidelity",
    slug: "what-is-the-full-form-of-wifi",
    relatedQuizzes: [482, 467, 479, 481, 395]
  },
  {
    id: 479,
    name: "What is the full form of SIM?",
    options: [
      "Subscriber Identity Module",
      "Subscriber Information Module",
      "Subscriber Identification Method",
      "Subscriber Information Method"
    ],
    correctOptions: "Subscriber Identity Module",
    slug: "what-is-sim-full-form",
    relatedQuizzes: [482, 467, 478, 481, 395]
  },
  {
    id: 480,
    name: "What is the best medicine for broken bones?",
    options: [
      "Pain relievers",
      "Antibiotics",
      "Bone supplements",
      "Medical consultation"
    ],
    correctOptions: "Medical consultation",
    slug: "what-is-the-best-medicine-for-broken-bones"
  },
  {
    id: 481,
    name: "What is the full form of Google?",
    options: [
      "Global Organization of Oriented Group Language Equipment",
      "Global Online Organization for Learning",
      "General Object Oriented Group Language Equipment",
      "None of the above"
    ],
    correctOptions: "None of the above",
    slug: "what-is-the-full-form-of-google",
    relatedQuizzes: [482, 467, 478, 479, 395]
  },
  {
    id: 482,
    name: "What is the full form of OK?",
    options: ["Oll Korrect", "Okay", "Optical Knowledge", "None of the above"],
    correctOptions: "Oll Korrect",
    slug: "what-is-the-full-form-of-ok",183, 184, 185, 191, 192, 208, 357, 386, 387, 388, 389, 390, 391, 402, 404, 408, 411, 412, 413, 414, 424, 426, 429]
    relatedQuizzes: [467, 478, 479, 481, 395],
    relatedQuizzes: [31, 46, 60, 68, 69, 70, 71, 84, 92, 93, 94, 95, 96, 97, 98, 137, 138, 139, 148, 153, 156, 158, 160, 170, 172, 

  }
]

export const combinedMcqs = [
  ...RandomData1,
  ...RandomData2,
  ...RandomData3,
  ...RandomData4,
  ...RandomData5
]
