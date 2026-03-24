import type { Dictionary } from "./types"

// Indonesian dictionary
// garut.places[] must stay in sync with GARUT_PLACES in constants.ts (same order)
const id = {
  greeting: {
    salutation: "{guest} yang terhormat, Anda diundang dengan hormat!",
    headerLabel: "Sebuah Undangan",
    dialogTitle: "Kepada {guest}",
    quranicVerse:
      "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya.",
    quranicRef: "QS. Ar-Rum: 21",
    narrativeLines: [
      "Beberapa perjalanan dimulai dengan tenang.",
      "Perjalanan kami berawal dari pertemuan sederhana,",
      "sebuah percakapan,",
      "dan rasa nyaman yang tak pernah kami duga.",
      "",
      "Seiring waktu, kenyamanan menjadi kepercayaan.",
      "Kepercayaan menjadi cinta.",
      "Dan cinta membawa kami ke sini \u2014",
      "siap untuk berjanji selamanya.",
    ],
    closingLines: [
      "Dengan hati yang penuh syukur dan restu keluarga,",
      "kami merasa terhormat mengundang Anda",
      "untuk menyaksikan awal dari babak baru kami.",
      "",
      "Kehadiran Anda akan sangat berarti bagi kami.",
    ],
    cta: "Buka Undangan",
  },

  couple: {
    title: "Calon Pengantin",
    subtitle: "Dua hati, satu perjalanan.",
    theGroom: "Mempelai Pria",
    theBride: "Mempelai Wanita",
    sonOf: "Putra dari",
    daughterOf: "Putri dari",
    groomQuote:
      "Dengan kekuatan yang tenang dan kesetiaan yang teguh, ia percaya cinta adalah memilih orang yang sama setiap hari.",
    brideQuote:
      "Dengan hati yang lembut dan iman yang kuat, ia percaya cinta tumbuh dalam kesabaran dan mekar dalam ketulusan.",
    ourGallery: "Galeri Kami",
  },

  page: {
    gettingMarried: "Kami akan menikah",
    twoHearts: "Dua hati, satu perjalanan.",
    saveTheDate: "Simpan Tanggalnya",
    garutTitle: "Jelajahi Garut",
    garutDescription:
      "Jelajahi pemandian air panas, perkebunan teh, dan kuliner lokal selama Anda di sini.",
  },

  venue: {
    schedule: "Jadwal",
    dressCode: "Dress Code",
    food: "Hidangan",
    parking: "Parkir",
    contact: "Kontak",
    gift: "Hadiah",
    giftMessage: "Kehadiran Anda adalah hadiah terbesar kami",
    getDirections: "Petunjuk Arah",
    addCalendar: "+ Kalender",
    googleCalendar: "Google Calendar",
    downloadIcs: "Unduh .ics",
    akad: "Akad",
    resepsi: "Resepsi",
    parkingInfo: "50+ tempat tersedia",
  },

  garut: {
    title: "Jelajahi Garut",
    description:
      "Cari penginapan dan jelajahi wisata sekitar selama Anda di sini untuk merayakan bersama kami.",
    categories: {
      all: "Semua",
      hotel: "Penginapan",
      wisata: "Wisata",
    },
    directions: "Petunjuk Arah",
    footerQuote: "Garut \u2014 Swiss Van Java",
    places: [
      {
        name: "Penginapan Legok Asri",
        description:
          "Penginapan terdekat dari lokasi acara (~5km). Bersih, murah, favorit tamu kondangan.",
      },
      {
        name: "SAREMA Villa & Mancing",
        description:
          "Villa + kolam + mancing di Cibatu (~4km barat lokasi acara). Cocok keluarga.",
      },
      {
        name: "OLA Homestay",
        description:
          "Homestay homey di Leles dekat Candi Cangkuang. Ada dapur, berasa rumah sendiri.",
      },
      {
        name: "Hotel Santika Premiere Garut",
        description:
          "Hotel premium area Cipanas (~30 menit dari lokasi acara). Warm pool, view Gunung Guntur.",
      },
      {
        name: "Mercure Garut City Center",
        description:
          "Hotel terbaik di pusat kota Garut (~30 menit dari lokasi acara). Infinity pool air hangat, dekat mall.",
      },
      {
        name: "Villa Edelweiss",
        description:
          "Villa overwater di atas kolam ikan, kolam renang air hangat alami, view gunung & sawah. Suasana tenang, harga terjangkau.",
      },
      {
        name: "Kamasri View",
        description:
          "Spot view di Kersamanah sendiri. Adem, tenang, foto-friendly.",
      },
      {
        name: "Pesona Lewo Water Park",
        description:
          "Water park dekat lokasi acara. Tiket 10\u201325rb, cocok buat anak-anak.",
      },
      {
        name: "Gunung Ringgeung",
        description:
          "Camping ground + air terjun + hutan pinus. Area Kersamanah/Malangbong.",
      },
      {
        name: "Silayung Park",
        description: "View kota Cibatu dari atas. Bagus waktu sunset.",
      },
      {
        name: "Air Terjun Kancil",
        description: "Air terjun virgin di Cibatu, masih alami.",
      },
      {
        name: "Situ Salawe",
        description:
          "Danau hidden gem di Malangbong. Ada flying fox & camping ground.",
      },
      {
        name: "Puncak Indah Malangbong",
        description: "Panorama dari atas, hiking ringan ~15 menit.",
      },
      {
        name: "Sunset Pesona Jati Ciwangi",
        description: "Hutan pinus cantik di Limbangan, ada hammock.",
      },
      {
        name: "Situ Bagendit",
        description:
          "Danau legendaris Garut. Naik rakit, view Gunung Guntur. ~20 menit dari lokasi acara.",
      },
      {
        name: "Wisata Alam Batu Lempar",
        description:
          "Hutan pinus + air terjun kecil di Karangpawitan. Family-friendly.",
      },
      {
        name: "Nagara Hot Spring Experience",
        description:
          "Pemandian air panas modern di Cipanas. VIP private cabin. Signature Garut!",
      },
      {
        name: "Darajat Pass",
        description:
          "Waterpark air panas di pegunungan. ATV, flying fox, bungalow. Worth the trip!",
      },
    ],
  },

  langToggle: {
    label: "Bahasa Indonesia",
  },
} satisfies Dictionary

export default id
