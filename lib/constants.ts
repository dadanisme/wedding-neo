export const WEDDING = {
  couple: {
    bride: {
      name: "Sarah Amelia Nur Wahidah",
      shortName: "Sarah",
      parents: "Mr. Ujang Rahmat & Mrs. Dedeh Setiasih",
    },
    groom: {
      name: "Muhamad Ramdan",
      shortName: "Ramdan",
      parents: "Mr. Samsudin & Mrs. Maesaroh",
    },
  },
  gallery: [
    "/gallery/1.jpg",
    "/gallery/2.jpg",
    "/gallery/3.jpg",
    "/gallery/4.jpg",
    "/gallery/5.jpg",
    "/gallery/6.jpg",
    "/gallery/7.jpg",
    "/gallery/8.jpg",
    "/gallery/9.jpg",
    "/gallery/10.jpg",
    "/gallery/11.jpg",
    "/gallery/12.jpg",
    "/gallery/13.jpg",
    "/gallery/14.jpg",
    "/gallery/15.jpg",
    "/gallery/16.jpg",
    "/gallery/17.jpg",
    "/gallery/18.jpg",
  ],
  date: "2026-05-02",
  time: "08:00",
  venue: "Lapang CLC",
  address: "Kersamanah, Garut",
  mapUrl: "https://maps.app.goo.gl/VPTKQVqquAdkayqA6",
  dressCode: "Earth Tones",
  schedule: {
    akad: "08:00",
    upacaraAdat: "09:00",
    resepsi: "11:00",
  },
  food: "Sundanese Oriental (Halal)",
  contacts: [{ name: "Sarah", phone: "081573690927" }],
  gift: {
    bank: "BNI",
    account: "0842755839",
    holder: "Sarah Amelia Nur W.A.",
  },
} as const

export type GarutPlace = {
  id: string
  name: string
  category: "hotel" | "wisata"
  rating: number
  ratingCount: number
  address: string
  phone: string | null
  notes: string
  images: string[]
  mapUrl: string
}

export const GARUT_PLACES: GarutPlace[] = [
  // Hotels
  {
    id: "legok-asri",
    name: "Penginapan Legok Asri",
    category: "hotel",
    rating: 4.8,
    ratingCount: 50,
    address: "Jl. Nasional III No.90, Malangbong, Garut",
    phone: "+62 852-2131-3603",
    notes:
      "Penginapan terdekat dari lokasi acara (~5km). Bersih, murah, favorit tamu kondangan.",
    images: [
      "/garut/hotels/legok-asri_1.jpg",
      "/garut/hotels/legok-asri_2.jpg",
      "/garut/hotels/legok-asri_3.jpg",
    ],
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.0613507,108.0851707",
  },
  {
    id: "sarema-villa",
    name: "SAREMA Villa & Mancing",
    category: "hotel",
    rating: 4.8,
    ratingCount: 13,
    address: "Mekarsari, Kec. Cibatu, Kabupaten Garut",
    phone: "+62 811-2269-975",
    notes:
      "Villa + kolam + mancing di Cibatu (~4km barat lokasi acara). Cocok keluarga.",
    images: [
      "/garut/hotels/sarema-villa_1.jpg",
      "/garut/hotels/sarema-villa_2.jpg",
      "/garut/hotels/sarema-villa_3.jpg",
    ],
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.0608672,107.9955608",
  },
  {
    id: "ola-homestay",
    name: "OLA Homestay",
    category: "hotel",
    rating: 4.5,
    ratingCount: 45,
    address: "Cangkuang, Leles, Garut",
    phone: "+62 813-2304-1350",
    notes:
      "Homestay homey di Leles dekat Candi Cangkuang. Ada dapur, berasa rumah sendiri.",
    images: [
      "/garut/hotels/ola-homestay_1.jpg",
      "/garut/hotels/ola-homestay_2.jpg",
      "/garut/hotels/ola-homestay_3.jpg",
    ],
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.1000603,107.9149909",
  },
  {
    id: "santika-premiere",
    name: "Hotel Santika Premiere Garut",
    category: "hotel",
    rating: 4.8,
    ratingCount: 9422,
    address: "Jl. Cipanas Baru, Pananjung, Tarogong Kaler, Garut",
    phone: null,
    notes:
      "Hotel premium area Cipanas (~30 menit dari lokasi acara). Warm pool, view Gunung Guntur.",
    images: [
      "/garut/hotels/santika-premiere_1.jpg",
      "/garut/hotels/santika-premiere_2.jpg",
      "/garut/hotels/santika-premiere_3.jpg",
    ],
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.1748061,107.8864724",
  },
  {
    id: "mercure-garut",
    name: "Mercure Garut City Center",
    category: "hotel",
    rating: 4.9,
    ratingCount: 2479,
    address: "Jl. Guntur No.02, Garut Kota, Garut",
    phone: "+62 262 5301111",
    notes:
      "Hotel terbaik di pusat kota Garut (~30 menit dari lokasi acara). Infinity pool air hangat, dekat mall.",
    images: [
      "/garut/hotels/mercure-garut_1.jpg",
      "/garut/hotels/mercure-garut_2.jpg",
      "/garut/hotels/mercure-garut_3.jpg",
    ],
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.211587,107.9002033",
  },
  {
    id: "villa-edelweiss",
    name: "Villa Edelweiss",
    category: "hotel",
    rating: 4.6,
    ratingCount: 80,
    address: "Pananjung, Tarogong Kaler, Garut 44151",
    phone: "+62 812-9099-5415",
    notes:
      "Villa overwater di atas kolam ikan, kolam renang air hangat alami, view gunung & sawah. Suasana tenang, harga terjangkau.",
    images: [
      "/garut/hotels/villa-edelweiss_1.jpg",
      "/garut/hotels/villa-edelweiss_2.jpg",
      "/garut/hotels/villa-edelweiss_3.jpg",
    ],
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.1799749,107.8790347",
  },
  // Wisata Dekat
  {
    id: "kamasri-view",
    name: "Kamasri View",
    category: "wisata",
    rating: 4.8,
    ratingCount: 27,
    address: "Girijaya, Kec. Kersamanah, Garut",
    phone: "+62 813-1953-1083",
    notes: "Spot view di Kersamanah sendiri. Adem, tenang, foto-friendly.",
    images: [
      "/garut/wisata/kamasri-view_1.jpg",
      "/garut/wisata/kamasri-view_2.jpg",
      "/garut/wisata/kamasri-view_3.jpg",
    ],
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.0660453,108.0172666",
  },
  {
    id: "pesona-lewo",
    name: "Pesona Lewo Water Park",
    category: "wisata",
    rating: 4.4,
    ratingCount: 120,
    address: "Sukarasa, Kec. Malangbong, Garut",
    phone: "+62 813-1343-9833",
    notes:
      "Water park dekat lokasi acara. Tiket 10-25rb, cocok buat anak-anak.",
    images: [
      "/garut/wisata/pesona-lewo_1.jpg",
      "/garut/wisata/pesona-lewo_2.jpg",
    ],
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.0517065,108.0439697",
  },
  {
    id: "gunung-ringgeung",
    name: "Gunung Ringgeung",
    category: "wisata",
    rating: 4.6,
    ratingCount: 5,
    address: "Kutanagara, Kec. Malangbong, Garut",
    phone: null,
    notes:
      "Camping ground + air terjun + hutan pinus. Area Kersamanah/Malangbong.",
    images: [
      "/garut/wisata/gunung-ringgeung_1.jpg",
      "/garut/wisata/gunung-ringgeung_2.jpg",
    ],
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.0985394,108.0482663",
  },
  {
    id: "silayung-park",
    name: "Silayung Park",
    category: "wisata",
    rating: 4.5,
    ratingCount: 49,
    address: "Karyamukti, Kec. Cibatu, Garut",
    phone: "+62 822-6246-1210",
    notes: "View kota Cibatu dari atas. Bagus waktu sunset.",
    images: [
      "/garut/wisata/silayung-park_1.jpg",
      "/garut/wisata/silayung-park_2.jpg",
    ],
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.0918863,108.0159302",
  },
  {
    id: "air-terjun-kancil",
    name: "Air Terjun Kancil",
    category: "wisata",
    rating: 4.2,
    ratingCount: 124,
    address: "Padasuka, Cibatu, Garut",
    phone: null,
    notes: "Air terjun virgin di Cibatu, masih alami.",
    images: [
      "/garut/wisata/air-terjun-kancil_1.jpg",
      "/garut/wisata/air-terjun-kancil_2.jpg",
    ],
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.0969777,108.0085756",
  },
  {
    id: "situ-salawe",
    name: "Situ Salawe",
    category: "wisata",
    rating: 4.7,
    ratingCount: 139,
    address: "Barudua, Malangbong, Garut",
    phone: null,
    notes: "Danau hidden gem di Malangbong. Ada flying fox & camping ground.",
    images: [
      "/garut/wisata/situ-salawe_1.jpg",
      "/garut/wisata/situ-salawe_2.jpg",
    ],
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.123035,108.0686139",
  },
  {
    id: "puncak-indah-malangbong",
    name: "Puncak Indah Malangbong",
    category: "wisata",
    rating: 4.5,
    ratingCount: 33,
    address: "Malangbong, Garut",
    phone: null,
    notes: "Panorama dari atas, hiking ringan ~15 menit.",
    images: [
      "/garut/wisata/puncak-indah-malangbong_1.jpg",
      "/garut/wisata/puncak-indah-malangbong_2.jpg",
    ],
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.0541529,108.1031896",
  },
  {
    id: "sunset-pesona-jati",
    name: "Sunset Pesona Jati Ciwangi",
    category: "wisata",
    rating: 4.2,
    ratingCount: 200,
    address: "Ciwangi, Kec. Balubur Limbangan, Garut",
    phone: null,
    notes: "Hutan pinus cantik di Limbangan, ada hammock.",
    images: [
      "/garut/wisata/sunset-pesona-jati_1.jpg",
      "/garut/wisata/sunset-pesona-jati_2.jpg",
    ],
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.0082105,107.963889",
  },
  // Wisata Garut
  {
    id: "situ-bagendit",
    name: "Situ Bagendit",
    category: "wisata",
    rating: 4.4,
    ratingCount: 570,
    address: "Sukaratu, Banyuresmi, Garut",
    phone: null,
    notes:
      "Danau legendaris Garut. Naik rakit, view Gunung Guntur. ~20 menit dari lokasi acara.",
    images: [
      "/garut/wisata/situ-bagendit_1.jpg",
      "/garut/wisata/situ-bagendit_2.jpg",
    ],
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.1641949,107.9445206",
  },
  {
    id: "batu-lempar",
    name: "Wisata Alam Batu Lempar",
    category: "wisata",
    rating: 4.6,
    ratingCount: 308,
    address: "Godog, Kec. Karangpawitan, Garut",
    phone: "+62 856-9869-685",
    notes: "Hutan pinus + air terjun kecil di Karangpawitan. Family-friendly.",
    images: [
      "/garut/wisata/batu-lempar_1.jpg",
      "/garut/wisata/batu-lempar_2.jpg",
    ],
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.255405,107.958849",
  },
  {
    id: "nagara-hot-spring",
    name: "Nagara Hot Spring Experience",
    category: "wisata",
    rating: 4.7,
    ratingCount: 778,
    address: "Jl. Raya Cipanas No.18, Rancabango, Tarogong Kaler, Garut",
    phone: "+62 821-1913-2650",
    notes:
      "Pemandian air panas modern di Cipanas. VIP private cabin. Signature Garut!",
    images: [
      "/garut/wisata/nagara-hot-spring_1.jpg",
      "/garut/wisata/nagara-hot-spring_2.jpg",
      "/garut/wisata/nagara-hot-spring_3.jpg",
    ],
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.1779611,107.8707794",
  },
  {
    id: "darajat-pass",
    name: "Darajat Pass",
    category: "wisata",
    rating: 4.4,
    ratingCount: 23580,
    address: "Jl. Puncak Darajat No.Km. 14, Karyamekar, Pasirwangi, Garut",
    phone: "+62 852-2316-5252",
    notes:
      "Waterpark air panas di pegunungan. ATV, flying fox, bungalow. Worth the trip!",
    images: [
      "/garut/wisata/darajat-pass_1.jpg",
      "/garut/wisata/darajat-pass_2.jpg",
      "/garut/wisata/darajat-pass_3.jpg",
    ],
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.2177854,107.745176",
  },
]
