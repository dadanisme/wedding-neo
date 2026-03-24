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
      "Explore nearby stays and attractions while you\u2019re here for the celebration.",
    categories: {
      all: "All",
      hotel: "Stay",
      wisata: "Explore",
    },
    directions: "Directions",
    footerQuote: "Garut \u2014 the Swiss Van Java",
    places: [
      {
        name: "Penginapan Legok Asri",
        description:
          "Closest lodging to the venue (~5km). Clean, affordable, a favorite among wedding guests.",
      },
      {
        name: "SAREMA Villa & Mancing",
        description:
          "Villa + pool + fishing in Cibatu (~4km west of venue). Great for families.",
      },
      {
        name: "OLA Homestay",
        description:
          "Cozy homestay in Leles near Candi Cangkuang. Has a kitchen, feels like home.",
      },
      {
        name: "Hotel Santika Premiere Garut",
        description:
          "Premium hotel in Cipanas area (~30 min from venue). Warm pool, Mt. Guntur views.",
      },
      {
        name: "Mercure Garut City Center",
        description:
          "Best hotel in downtown Garut (~30 min from venue). Infinity warm pool, near the mall.",
      },
      {
        name: "Villa Edelweiss",
        description:
          "Overwater villa on a fish pond, natural warm pool, mountain & rice field views. Peaceful and affordable.",
      },
      {
        name: "Kamasri View",
        description:
          "A scenic viewpoint right in Kersamanah. Cool breeze, peaceful, and Instagram-worthy.",
      },
      {
        name: "Pesona Lewo Water Park",
        description:
          "Water park near the venue. Tickets 10\u201325k IDR, perfect for kids.",
      },
      {
        name: "Gunung Ringgeung",
        description:
          "Camping ground + waterfall + pine forest in the Kersamanah/Malangbong area.",
      },
      {
        name: "Silayung Park",
        description: "Overlooking Cibatu town from above. Beautiful at sunset.",
      },
      {
        name: "Air Terjun Kancil",
        description:
          "A pristine waterfall in Cibatu, still untouched and natural.",
      },
      {
        name: "Situ Salawe",
        description:
          "A hidden gem lake in Malangbong. Has flying fox & camping ground.",
      },
      {
        name: "Puncak Indah Malangbong",
        description: "Panoramic views from the top, a light 15-minute hike.",
      },
      {
        name: "Sunset Pesona Jati Ciwangi",
        description:
          "Beautiful pine forest in Limbangan with hammocks for lounging.",
      },
      {
        name: "Situ Bagendit",
        description:
          "Garut\u2019s legendary lake. Raft rides and Mt. Guntur views. ~20 min from venue.",
      },
      {
        name: "Wisata Alam Batu Lempar",
        description:
          "Pine forest + small waterfall in Karangpawitan. Family-friendly.",
      },
      {
        name: "Nagara Hot Spring Experience",
        description:
          "Modern hot spring in Cipanas. VIP private cabins. A Garut signature!",
      },
      {
        name: "Darajat Pass",
        description:
          "Hot spring waterpark in the mountains. ATV, flying fox, bungalows. Worth the trip!",
      },
    ],
  },

  langToggle: {
    label: "English",
  },
} satisfies Dictionary

export default en
