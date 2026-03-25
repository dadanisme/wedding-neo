import type { Dictionary } from "./types"

// Indonesian dictionary
// garut.places[] must stay in sync with GARUT_PLACES in constants.ts (same order)
const id = {
  greeting: {
    salutation: "Hai {guest}, kamu diundang!",
    headerLabel: "Kamu Diundang",
    dialogTitle: "Hai {guest}",
    quranicVerse:
      "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya.",
    quranicRef: "QS. Ar-Rum: 21",
    narrativeLines: [
      "Ada hal yang datang tanpa rencana.",
      "Cerita kami dimulai dari sapaan sederhana,",
      "beberapa obrolan,",
      "dan rasa nyaman yang nggak kami sangka.",
      "",
      "Nyaman itu pelan-pelan jadi percaya.",
      "Percaya jadi cinta.",
      "Dan cinta bawa kami ke sini —",
      "siap berjanji untuk selamanya.",
    ],
    closingLines: [
      "Dengan hati penuh syukur dan restu keluarga,",
      "kami pengen kamu ada di sana",
      "waktu kami memulai babak baru ini.",
      "",
      "Serius, kehadiranmu berarti banget buat kami.",
    ],
    cta: "Yuk Masuk",
  },

  couple: {
    title: "Yang Mau Nikah",
    subtitle: "Dua hati, satu perjalanan.",
    theGroom: "Mempelai Pria",
    theBride: "Mempelai Wanita",
    sonOf: "Putra dari",
    daughterOf: "Putri dari",
    groomQuote:
      "Tenang tapi setia. Baginya, cinta itu soal memilih orang yang sama setiap hari.",
    brideQuote:
      "Lembut hatinya, kuat imannya. Baginya, cinta tumbuh dalam kesabaran dan mekar dalam ketulusan.",
    ourGallery: "Galeri Kami",
  },

  page: {
    gettingMarried: "Kami mau nikah",
    twoHearts: "Dua hati, satu perjalanan.",
    saveTheDate: "Catat Tanggalnya",
    garutTitle: "Sekalian Jalan-Jalan di Garut",
    garutDescription:
      "Air panas, kebun teh, kuliner lokal — banyak yang bisa dijelajahi selagi di sini.",
  },

  venue: {
    schedule: "Jadwal",
    dressCode: "Dress Code",
    food: "Hidangan",
    parking: "Parkir",
    contact: "Kontak",
    gift: "Hadiah",
    giftMessage: "Jujur, kehadiranmu aja udah lebih dari cukup",
    getDirections: "Petunjuk Arah",
    addCalendar: "+ Kalender",
    googleCalendar: "Google Calendar",
    downloadIcs: "Unduh .ics",
    akad: "Akad",
    upacaraAdat: "Upacara Adat",
    resepsi: "Resepsi",
    parkingInfo: "50+ tempat tersedia",
  },

  garut: {
    title: "Sekalian Jalan-Jalan di Garut",
    description:
      "Cek penginapan dan tempat seru di sekitar lokasi acara. Lumayan kan sekalian liburan.",
    categories: {
      all: "Semua",
      hotel: "Penginapan",
      wisata: "Wisata",
    },
    directions: "Petunjuk Arah",
    footerQuote: "Garut — Swiss Van Java",
    places: [
      {
        name: "Penginapan Legok Asri",
        description:
          "Paling deket dari lokasi acara (~5km). Bersih, murah, langganan tamu kondangan.",
      },
      {
        name: "SAREMA Villa & Mancing",
        description:
          "Villa + kolam + mancing di Cibatu (~4km barat). Enak buat yang bawa keluarga.",
      },
      {
        name: "OLA Homestay",
        description:
          "Homestay cozy di Leles deket Candi Cangkuang. Ada dapur, kerasa kayak rumah sendiri.",
      },
      {
        name: "Hotel Santika Premiere Garut",
        description:
          "Hotel bagus di area Cipanas (~30 menit). Kolam air hangat, view Gunung Guntur.",
      },
      {
        name: "Mercure Garut City Center",
        description:
          "Hotel paling oke di pusat kota (~30 menit). Infinity pool air hangat, deket mall.",
      },
      {
        name: "Villa Edelweiss",
        description:
          "Villa di atas kolam ikan, kolam air hangat alami, view gunung & sawah. Adem dan ramah di kantong.",
      },
      {
        name: "Kamasri View",
        description:
          "Spot view di Kersamanah sendiri. Adem, santai, bagus buat foto.",
      },
      {
        name: "Pesona Lewo Water Park",
        description:
          "Waterpark deket lokasi acara. Tiket 10–25rb — anak-anak pasti suka.",
      },
      {
        name: "Gunung Ringgeung",
        description:
          "Camping + air terjun + hutan pinus. Area Kersamanah/Malangbong.",
      },
      {
        name: "Silayung Park",
        description: "View kota Cibatu dari atas. Cakep pas sunset.",
      },
      {
        name: "Air Terjun Kancil",
        description: "Air terjun di Cibatu yang masih perawan — alami banget.",
      },
      {
        name: "Situ Salawe",
        description:
          "Danau hidden gem di Malangbong. Ada flying fox & camping ground.",
      },
      {
        name: "Puncak Indah Malangbong",
        description: "Panorama dari atas, hiking santai ~15 menit doang.",
      },
      {
        name: "Sunset Pesona Jati Ciwangi",
        description:
          "Hutan pinus di Limbangan, ada hammock. Cocok buat rebahan.",
      },
      {
        name: "Situ Bagendit",
        description:
          "Danau legendaris Garut. Naik rakit, view Gunung Guntur. ~20 menit dari lokasi.",
      },
      {
        name: "Wisata Alam Batu Lempar",
        description:
          "Hutan pinus + air terjun kecil di Karangpawitan. Aman buat anak-anak.",
      },
      {
        name: "Nagara Hot Spring Experience",
        description:
          "Pemandian air panas modern di Cipanas. Ada VIP private cabin. Wajib coba!",
      },
      {
        name: "Darajat Pass",
        description:
          "Waterpark air panas di pegunungan. ATV, flying fox, bungalow — worth it!",
      },
    ],
  },

  music: {
    playMusic: "Putar musik",
    selectSong: "Pilih lagu",
  },

  wishes: {
    sectionTitle: "Ucapan & Doa",
    inputLabel: "Kirim ucapanmu, {guest}",
    placeholder: "Tulis ucapan terbaik untuk kedua mempelai...",
    send: "Kirim Ucapan",
    update: "Perbarui Ucapan",
    cancel: "Batal",
    empty: "Jadilah yang pertama mengirim ucapan!",
    timeAgo: {
      justNow: "baru saja",
      minutesAgo: "{n} menit lalu",
      hoursAgo: "{n} jam lalu",
      daysAgo: "{n} hari lalu",
    },
  },

  langToggle: {
    label: "Bahasa Indonesia",
  },
} satisfies Dictionary

export default id
