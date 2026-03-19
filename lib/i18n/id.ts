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
      "Jelajahi pemandian air panas, perkebunan teh, dan kuliner lokal Garut yang terkenal selama Anda di sini untuk merayakan bersama kami.",
    categories: {
      all: "Semua",
      nature: "Alam",
      food: "Kuliner",
      culture: "Budaya",
    },
    directions: "Petunjuk Arah",
    footerQuote: "Garut \u2014 Swiss Van Java",
    places: [
      {
        name: "Pemandian Air Panas Cipanas",
        description:
          "Resor pemandian air panas alami dikelilingi pepohonan hijau. Sempurna untuk bersantai setelah perjalanan panjang.",
      },
      {
        name: "Situ Bagendit",
        description:
          "Danau indah yang kaya akan legenda lokal. Nikmati perahu dayung dan jajanan pinggir danau.",
      },
      {
        name: "Kawah Darajat",
        description:
          "Kawah vulkanik dengan fumarola beruap dan kolam renang bertenaga panas bumi.",
      },
      {
        name: "Kampung Sampireun",
        description:
          "Resor ramah lingkungan pemenang penghargaan dengan vila terapung di danau pribadi dikelilingi perkebunan teh.",
      },
      {
        name: "Gunung Papandayan",
        description:
          "Salah satu gunung berapi paling mudah dijangkau di Jawa. Pendakian sedang mengungkap kawah belerang dan ladang edelweis yang menakjubkan.",
      },
      {
        name: "Dodol Picnic",
        description:
          "Oleh-oleh khas Garut paling ikonik \u2014 dodol kenyal dan manis dalam berbagai rasa. Wajib dibeli untuk oleh-oleh.",
      },
      {
        name: "Sate Maranggi",
        description:
          "Sate daging sapi lezat yang dimarinasi kecap manis dan rempah, dibakar di atas arang. Spesialitas Jawa Barat.",
      },
      {
        name: "Baso Aci",
        description:
          "Bakso tapioka kenyal dalam kuah pedas gurih. Jajanan kaki lima kegemaran warga Garut.",
      },
      {
        name: "Candi Cangkuang",
        description:
          "Candi Hindu abad ke-8 di sebuah pulau kecil, dapat diakses dengan rakit bambu tradisional.",
      },
      {
        name: "Kampung Dukuh",
        description:
          "Desa tradisional Sunda yang melestarikan adat istiadat dan arsitektur berusia berabad-abad.",
      },
    ],
  },

  langToggle: {
    label: "Bahasa Indonesia",
  },
} satisfies Dictionary

export default id
