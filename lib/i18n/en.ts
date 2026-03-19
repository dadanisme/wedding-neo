import type { Dictionary } from "./types"

// English dictionary — extracted from the original hardcoded strings
// garut.places[] must stay in sync with GARUT_PLACES in constants.ts (same order)
const en = {
  greeting: {
    salutation: "Dear {guest}, you are cordially invited!",
    headerLabel: "A Gentle Invitation",
    dialogTitle: "Dear {guest}",
    quranicVerse:
      "And of His signs is that He created for you from yourselves mates that you may find tranquillity in them.",
    quranicRef: "QS. Ar-Rum: 21",
    narrativeLines: [
      "Some journeys begin quietly.",
      "Ours started with a simple meeting,",
      "a conversation,",
      "and a sense of comfort we never expected.",
      "",
      "Over time, comfort became trust.",
      "Trust became love.",
      "And love brought us here \u2014",
      "ready to promise forever.",
    ],
    closingLines: [
      "With grateful hearts and the blessings of our families,",
      "we are honored to invite you",
      "to witness the beginning of our new chapter.",
      "",
      "Your presence would truly mean so much to us.",
    ],
    cta: "Take Me In",
  },

  couple: {
    title: "The Happy Couple",
    subtitle: "Two hearts, one journey.",
    theGroom: "The Groom",
    theBride: "The Bride",
    sonOf: "Son of",
    daughterOf: "Daughter of",
    groomQuote:
      "With calm strength and steady devotion, he believes love is choosing the same person every single day.",
    brideQuote:
      "With a gentle heart and strong faith, she believes love grows in patience and blossoms in sincerity.",
    ourGallery: "Our Gallery",
  },

  page: {
    gettingMarried: "We\u2019re getting married",
    twoHearts: "Two hearts, one journey.",
    saveTheDate: "Save the Date",
    garutTitle: "Where to Go in Garut",
    garutDescription:
      "Explore hot springs, tea plantations, and local cuisine while you\u2019re here.",
  },

  venue: {
    schedule: "Schedule",
    dressCode: "Dress Code",
    food: "Food",
    parking: "Parking",
    contact: "Contact",
    gift: "Gift",
    giftMessage: "Your presence is our greatest gift",
    getDirections: "Get Directions",
    addCalendar: "+ Calendar",
    googleCalendar: "Google Calendar",
    downloadIcs: "Download .ics",
    akad: "Akad",
    resepsi: "Resepsi",
    parkingInfo: "50+ spots available",
  },

  garut: {
    title: "Where to Go in Garut",
    description:
      "Explore Garut\u2019s famous hot springs, tea plantations, and local cuisine while you\u2019re here for the celebration.",
    categories: {
      all: "All",
      nature: "Nature",
      food: "Food",
      culture: "Culture",
    },
    directions: "Directions",
    footerQuote: "Garut \u2014 the Swiss Van Java",
    places: [
      {
        name: "Cipanas Hot Springs",
        description:
          "Natural hot springs resort surrounded by lush greenery. Perfect for relaxing after a long journey.",
      },
      {
        name: "Situ Bagendit",
        description:
          "A scenic lake steeped in local legend. Enjoy paddle boats and lakeside snacks.",
      },
      {
        name: "Kawah Darajat",
        description:
          "Volcanic crater with steaming fumaroles and a geothermal-heated swimming pool.",
      },
      {
        name: "Kampung Sampireun",
        description:
          "An award-winning eco-resort with floating villas on a private lake surrounded by tea plantations.",
      },
      {
        name: "Papandayan Volcano",
        description:
          "One of Java\u2019s most accessible volcanoes. A moderate hike reveals stunning sulfur craters and edelweiss fields.",
      },
      {
        name: "Dodol Picnic",
        description:
          "The most iconic Garut souvenir \u2014 chewy, sweet dodol in countless flavors. A must-buy for the trip home.",
      },
      {
        name: "Sate Maranggi",
        description:
          "Succulent beef satay marinated in sweet soy and spices, grilled over charcoal. A West Java specialty.",
      },
      {
        name: "Baso Aci",
        description:
          "Chewy tapioca meatballs in a spicy, savory broth. Garut\u2019s beloved street food comfort dish.",
      },
      {
        name: "Candi Cangkuang",
        description:
          "An 8th-century Hindu temple on a small island, accessible by traditional bamboo raft.",
      },
      {
        name: "Kampung Dukuh",
        description:
          "A traditional Sundanese village preserving centuries-old customs and architecture.",
      },
    ],
  },

  langToggle: {
    label: "English",
  },
} satisfies Dictionary

export default en
