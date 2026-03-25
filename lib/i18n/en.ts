import type { Dictionary } from "./types"

// English dictionary — extracted from the original hardcoded strings
// garut.places[] must stay in sync with GARUT_PLACES in constants.ts (same order)
const en = {
  greeting: {
    salutation: "Hey {guest}, you're invited!",
    headerLabel: "You're Invited",
    dialogTitle: "Hey {guest}",
    quranicVerse:
      "And of His signs is that He created for you from yourselves mates that you may find tranquillity in them.",
    quranicRef: "QS. Ar-Rum: 21",
    narrativeLines: [
      "Some things start without a plan.",
      "Ours began with a simple hello,",
      "a few conversations,",
      "and a comfort we didn't see coming.",
      "",
      "That comfort turned into trust.",
      "Trust turned into love.",
      "And love brought us here —",
      "ready to make it forever.",
    ],
    closingLines: [
      "With full hearts and our families' blessings,",
      "we'd love for you to be there",
      "as we start this new chapter together.",
      "",
      "It really would mean the world to us.",
    ],
    cta: "Let's Go",
  },

  couple: {
    title: "Meet the Couple",
    subtitle: "Two hearts, one journey.",
    theGroom: "The Groom",
    theBride: "The Bride",
    sonOf: "Son of",
    daughterOf: "Daughter of",
    groomQuote:
      "Quiet strength, steady heart. He believes love is showing up for the same person, every single day.",
    brideQuote:
      "Gentle soul, strong faith. She believes love grows in patience and blooms in sincerity.",
    ourGallery: "Our Gallery",
  },

  page: {
    gettingMarried: "We're getting married",
    twoHearts: "Two hearts, one journey.",
    saveTheDate: "Save the Date",
    garutTitle: "While You're in Garut",
    garutDescription:
      "Hot springs, tea fields, good food — there's plenty to see while you're here.",
  },

  venue: {
    schedule: "Schedule",
    dressCode: "Dress Code",
    food: "Food",
    parking: "Parking",
    contact: "Contact",
    gift: "Gift",
    giftMessage: "Honestly, just having you there is enough",
    getDirections: "Get Directions",
    addCalendar: "+ Calendar",
    googleCalendar: "Google Calendar",
    downloadIcs: "Download .ics",
    akad: "Holy Matrimony",
    upacaraAdat: "Traditional Ceremony",
    resepsi: "Reception",
    parkingInfo: "50+ spots available",
  },

  garut: {
    title: "While You're in Garut",
    description:
      "Check out some nearby stays and cool spots while you're here for the big day.",
    categories: {
      all: "All",
      hotel: "Stay",
      wisata: "Explore",
    },
    directions: "Directions",
    footerQuote: "Garut — the Swiss Van Java",
    places: [
      {
        name: "Penginapan Legok Asri",
        description:
          "Closest stay to the venue (~5km). Clean, budget-friendly, and a guest favorite.",
      },
      {
        name: "SAREMA Villa & Mancing",
        description:
          "Villa + pool + fishing in Cibatu (~4km west). Great if you're bringing the fam.",
      },
      {
        name: "OLA Homestay",
        description:
          "Cozy spot in Leles near Candi Cangkuang. Has a kitchen — feels like home.",
      },
      {
        name: "Hotel Santika Premiere Garut",
        description:
          "Nice hotel in the Cipanas area (~30 min out). Warm pool, Mt. Guntur views.",
      },
      {
        name: "Mercure Garut City Center",
        description:
          "Best hotel downtown (~30 min out). Infinity warm pool, right near the mall.",
      },
      {
        name: "Villa Edelweiss",
        description:
          "Overwater villa on a fish pond, warm pool, mountain & rice field views. Peaceful and easy on the wallet.",
      },
      {
        name: "Kamasri View",
        description:
          "Scenic viewpoint right in Kersamanah. Cool breeze, chill vibes, great for photos.",
      },
      {
        name: "Pesona Lewo Water Park",
        description:
          "Water park near the venue. 10–25k IDR — the kids will love it.",
      },
      {
        name: "Gunung Ringgeung",
        description:
          "Camping + waterfall + pine forest in the Kersamanah/Malangbong area.",
      },
      {
        name: "Silayung Park",
        description: "Overlooks Cibatu from above. Beautiful at sunset.",
      },
      {
        name: "Air Terjun Kancil",
        description:
          "A pristine waterfall in Cibatu — still untouched and worth the visit.",
      },
      {
        name: "Situ Salawe",
        description:
          "Hidden gem lake in Malangbong. Has flying fox & camping spots.",
      },
      {
        name: "Puncak Indah Malangbong",
        description: "Panoramic views from the top — just a quick 15-min hike.",
      },
      {
        name: "Sunset Pesona Jati Ciwangi",
        description:
          "Pine forest in Limbangan with hammocks. Perfect for doing nothing.",
      },
      {
        name: "Situ Bagendit",
        description:
          "Garut's legendary lake. Raft rides + Mt. Guntur views. ~20 min from venue.",
      },
      {
        name: "Wisata Alam Batu Lempar",
        description:
          "Pine forest + small waterfall in Karangpawitan. Family-friendly.",
      },
      {
        name: "Nagara Hot Spring Experience",
        description:
          "Modern hot spring in Cipanas with private VIP cabins. A Garut must-do.",
      },
      {
        name: "Darajat Pass",
        description:
          "Hot spring waterpark up in the mountains. ATV, flying fox, bungalows — worth the trip.",
      },
    ],
  },

  music: {
    playMusic: "Play music",
    selectSong: "Choose a song",
  },

  wishes: {
    sectionTitle: "Wishes & Prayers",
    inputLabel: "Send your wishes, {guest}",
    placeholder: "Write your heartfelt wishes for the couple...",
    send: "Send Wish",
    update: "Update Wish",
    cancel: "Cancel",
    empty: "Be the first to send your wishes!",
    timeAgo: {
      justNow: "just now",
      minutesAgo: "{n} min ago",
      hoursAgo: "{n} hours ago",
      daysAgo: "{n} days ago",
    },
  },

  langToggle: {
    label: "English",
  },
} satisfies Dictionary

export default en
