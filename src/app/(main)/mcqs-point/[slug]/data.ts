interface Quiz {
  id: number
  name: string
  options: string[]
  correctOptions: string
  slug: string
  relatedQuizzes?: number[] // Array of related quiz IDs
}

export const RandomData: any[] = [
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
    relatedQuizzes: [2, 4]
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
    slug: "what-blood-type-do-mosquitoes-like"
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
    slug: "which-blood-group-is-rare"
  },
  {
    id: 8,
    name: "Which is the strongest blood group?",
    options: ["O-", "A+", "B-", "AB+"],
    correctOptions: "O-",
    slug: "which-is-the-strongest-blood-group"
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
    slug: "can-blood-type-change"
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
    slug: "how-many-blood-tests-during-pregnancy"
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
    slug: "is-ab-plus-blood-rare"
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
    slug: "what-blood-type-am-i"
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
    slug: "what-blood-type-rejects-pregnancy"
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
    slug: "is-greenland-a-country"
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
    slug: "is-greenland-a-country-yes-or-no"
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
    slug: "which-countrys-flag-is-blue-white-and-red"
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
    slug: "which-countrys-flag-has-red-in-it"
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
  },
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
    slug: "what-is-the-total-length-of-ravi-river"
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
    slug: "in-which-countries-does-the-ravi-river-flow"
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
    slug: "what-is-the-primary-source-of-the-ravi-river"
  },
  {
    id: 111,
    name: "Which major city is located near the Ravi River?",
    options: ["Lahore", "Karachi", "Delhi", "Islamabad"],
    correctOptions: "Lahore",
    slug: "which-major-city-is-located-near-the-ravi-river"
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
    slug: "what-type-of-river-is-the-ravi-river-classified-as"
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
    slug: "which-river-is-known-as-the-sorrow-of-punjab"
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
    slug: "what-is-the-longest-river-in-the-world"
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
    slug: "which-is-the-longest-river-in-asia"
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
    slug: "what-city-has-the-most-gun-violence"
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
    slug: "which-country-has-the-most-rivers"
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
    slug: "what-country-has-the-worst-gun-violence"
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
    slug: "what-is-the-coldest-city-in-the-us"
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
    slug: "kabaddi-is-the-national-game-of-which-country"
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
    slug: "what-is-the-coldest-city-on-earth"
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
  },
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
    slug: "which-country-has-two-national-anthems"
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
    slug: "average-life-span-of-red-blood-cells"
  },
  {
    id: 219,
    name: "Where are red blood cells produced in the body?",
    options: ["Heart", "Liver", "Bone marrow", "Lungs"],
    correctOptions: "Bone marrow",
    slug: "red-blood-cells-produced"
  },
  {
    id: 220,
    name: "Which organ is responsible for the destruction of old red blood cells?",
    options: ["Kidneys", "Spleen", "Lungs", "Pancreas"],
    correctOptions: "Spleen",
    slug: "organ-responsible-for-red-blood-cells-destruction"
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
    slug: "main-function-of-red-blood-cells"
  },
  {
    id: 222,
    name: "What protein in red blood cells binds to oxygen?",
    options: ["Albumin", "Hemoglobin", "Fibrinogen", "Myosin"],
    correctOptions: "Hemoglobin",
    slug: "protein-in-red-blood-cells-that-binds-oxygen"
  },
  {
    id: 223,
    name: "What is the shape of a typical red blood cell?",
    options: ["Biconcave", "Spherical", "Cylindrical", "Oval"],
    correctOptions: "Biconcave",
    slug: "shape-of-red-blood-cell"
  },
  {
    id: 224,
    name: "Which vitamin is essential for the production of red blood cells?",
    options: ["Vitamin A", "Vitamin B12", "Vitamin D", "Vitamin E"],
    correctOptions: "Vitamin B12",
    slug: "vitamin-essential-for-red-blood-cells-production"
  },
  {
    id: 225,
    name: "What condition is caused by a low red blood cell count?",
    options: ["Leukemia", "Hemophilia", "Anemia", "Thrombosis"],
    correctOptions: "Anemia",
    slug: "condition-caused-by-low-red-blood-cell-count"
  },
  {
    id: 226,
    name: "What is the typical count of red blood cells per microliter of blood?",
    options: ["1-2 million", "3-4 million", "4-6 million", "7-8 million"],
    correctOptions: "4-6 million",
    slug: "typical-count-of-red-blood-cells"
  },
  {
    id: 227,
    name: "How much of the human blood volume is made up of red blood cells?",
    options: ["10%", "25%", "45%", "60%"],
    correctOptions: "45%",
    slug: "percentage-of-blood-volume-red-blood-cells"
  },
  {
    id: 228,
    name: "Which organ produces erythropoietin, a hormone that stimulates red blood cell production?",
    options: ["Liver", "Spleen", "Kidneys", "Pancreas"],
    correctOptions: "Kidneys",
    slug: "organ-produces-erythropoietin"
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
    slug: "normal-ph-range-of-blood"
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
    slug: "blood-cells-responsible-for-clotting"
  },
  {
    id: 233,
    name: "What percentage of human blood is plasma?",
    options: ["20%", "40%", "55%", "70%"],
    correctOptions: "55%",
    slug: "percentage-of-blood-that-is-plasma"
  },
  {
    id: 234,
    name: "What blood type is known as the universal donor?",
    options: ["Type A", "Type B", "Type AB", "Type O"],
    correctOptions: "Type O",
    slug: "universal-donor-blood-type"
  },
  {
    id: 235,
    name: "Which blood type is known as the universal recipient?",
    options: ["Type A", "Type B", "Type AB", "Type O"],
    correctOptions: "Type AB",
    slug: "universal-recipient-blood-type"
  },
  {
    id: 236,
    name: "Which of the following is a hereditary disorder affecting red blood cells?",
    options: ["Hemophilia", "Sickle cell anemia", "Leukemia", "Thalassemia"],
    correctOptions: "Sickle cell anemia",
    slug: "hereditary-disorder-affecting-red-blood-cells"
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
    slug: "oxygen-carrying-capacity-of-hemoglobin"
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
    slug: "condition-caused-by-excess-of-red-blood-cells"
  },
  {
    id: 239,
    name: "Which of the following blood components is primarily involved in immune responses?",
    options: ["Platelets", "White blood cells", "Red blood cells", "Plasma"],
    correctOptions: "White blood cells",
    slug: "blood-component-involved-in-immune-response"
  },
  {
    id: 240,
    name: "Which organ filters and recycles red blood cells?",
    options: ["Liver", "Spleen", "Heart", "Kidneys"],
    correctOptions: "Spleen",
    slug: "organ-filters-recycles-red-blood-cells"
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
    slug: "characteristic-feature-of-mature-red-blood-cells"
  },
  {
    id: 242,
    name: "What is the color of oxygenated blood?",
    options: ["Red", "Blue", "Purple", "Yellow"],
    correctOptions: "Red",
    slug: "color-of-oxygenated-blood"
  },
  {
    id: 243,
    name: "What is the condition where red blood cells become abnormally shaped, leading to blockages in blood vessels?",
    options: ["Sickle cell anemia", "Leukemia", "Hemophilia", "Polycythemia"],
    correctOptions: "Sickle cell anemia",
    slug: "condition-abnormally-shaped-red-blood-cells"
  },
  {
    id: 244,
    name: "What is the average diameter of a red blood cell?",
    options: ["4-5 µm", "6-7 µm", "8-9 µm", "10-12 µm"],
    correctOptions: "6-7 µm",
    slug: "average-diameter-of-red-blood-cell"
  },
  {
    id: 245,
    name: "Which element is crucial for the formation of hemoglobin in red blood cells?",
    options: ["Zinc", "Copper", "Iron", "Magnesium"],
    correctOptions: "Iron",
    slug: "element-crucial-for-hemoglobin-formation"
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
    slug: "blood-disorder-abnormal-increase-in-white-blood-cells"
  },
  {
    id: 248,
    name: "Which condition causes bone marrow failure and affects the production of red blood cells?",
    options: ["Hemophilia", "Aplastic anemia", "Leukemia", "Thrombocytopenia"],
    correctOptions: "Aplastic anemia",
    slug: "bone-marrow-failure-affects-red-blood-cells"
  },
  {
    id: 249,
    name: "What is the term for the production of red blood cells?",
    options: ["Hemolysis", "Erythropoiesis", "Leukopoiesis", "Thrombopoiesis"],
    correctOptions: "Erythropoiesis",
    slug: "production-of-red-blood-cells"
  },
  {
    id: 250,
    name: "Which blood component is primarily responsible for transporting carbon dioxide from the tissues to the lungs?",
    options: ["Plasma", "Platelets", "Red blood cells", "White blood cells"],
    correctOptions: "Red blood cells",
    slug: "component-transports-carbon-dioxide"
  },
  {
    id: 251,
    name: "What percentage of carbon dioxide in the blood is transported by red blood cells?",
    options: ["5%", "23%", "70%", "90%"],
    correctOptions: "23%",
    slug: "percentage-of-carbon-dioxide-transported-by-red-blood-cells"
  },
  {
    id: 252,
    name: "What is the primary gas transported by red blood cells?",
    options: ["Nitrogen", "Carbon dioxide", "Oxygen", "Hydrogen"],
    correctOptions: "Oxygen",
    slug: "primary-gas-transported-by-red-blood-cells"
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
    slug: "what-happens-to-red-blood-cells-after-lifespan"
  },
  {
    id: 254,
    name: "Which cells in the spleen are responsible for breaking down old red blood cells?",
    options: ["Macrophages", "Lymphocytes", "Neutrophils", "Eosinophils"],
    correctOptions: "Macrophages",
    slug: "cells-in-spleen-break-down-red-blood-cells"
  },
  {
    id: 255,
    name: "Which genetic condition leads to crescent-shaped red blood cells?",
    options: ["Thalassemia", "Sickle cell anemia", "Hemophilia", "Leukemia"],
    correctOptions: "Sickle cell anemia",
    slug: "genetic-condition-crescent-shaped-red-blood-cells"
  },
  {
    id: 256,
    name: "What is the primary waste product carried by red blood cells to the lungs?",
    options: ["Ammonia", "Carbon dioxide", "Nitrogen", "Urea"],
    correctOptions: "Carbon dioxide",
    slug: "primary-waste-product-carried-by-red-blood-cells"
  },
  {
    id: 257,
    name: "Which organ is responsible for detecting low oxygen levels and increasing red blood cell production?",
    options: ["Liver", "Lungs", "Kidneys", "Spleen"],
    correctOptions: "Kidneys",
    slug: "organ-detects-low-oxygen-levels"
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
    slug: "life-span-of-white-blood-cells"
  },
  {
    id: 262,
    name: "What is the liquid portion of blood called?",
    options: ["Plasma", "Serum", "Lymph", "Hemoglobin"],
    correctOptions: "Plasma",
    slug: "liquid-portion-of-blood"
  },
  {
    id: 263,
    name: "Which component of the blood is responsible for fighting infections?",
    options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
    correctOptions: "White blood cells",
    slug: "blood-component-fighting-infections"
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
    slug: "cause-reduction-red-blood-cell-count"
  },
  {
    id: 265,
    name: "What happens if red blood cells are destroyed too quickly in the body?",
    options: ["Anemia", "Leukocytosis", "Polycythemia", "Thrombocytopenia"],
    correctOptions: "Anemia",
    slug: "red-blood-cells-destroyed-too-quickly"
  },
  {
    id: 266,
    name: "What is the typical lifespan of a red blood cell in newborns?",
    options: ["60 days", "90 days", "120 days", "150 days"],
    correctOptions: "90 days",
    slug: "lifespan-of-red-blood-cell-in-newborns"
  },
  {
    id: 267,
    name: "What is the main energy source for red blood cells?",
    options: ["Oxygen", "Glucose", "Lipids", "Proteins"],
    correctOptions: "Glucose",
    slug: "main-energy-source-for-red-blood-cells"
  },
  {
    id: 268,
    name: "What is the average lifespan of red blood cells in a patient with sickle cell anemia?",
    options: ["30 days", "60 days", "90 days", "120 days"],
    correctOptions: "30 days",
    slug: "average-lifespan-of-red-blood-cells-sickle-cell-anemia"
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
    id: 296,
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
    id: 297,
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
    id: 298,
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
    id: 299,
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
    id: 300,
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
    id: 301,
    name: "Which desert is known for its towering saguaro cacti?",
    options: [
      "Sonoran Desert",
      "Mojave Desert",
      "Chihuahuan Desert",
      "Kalahari Desert"
    ],
    correctOptions: "Sonoran Desert",
    slug: "desert-saguaro-cacti"
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
  }
]
