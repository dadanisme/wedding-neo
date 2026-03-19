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
  time: "09:00",
  venue: "Lapang CLC",
  address: "Kersamanah, Garut",
  mapUrl: "https://maps.app.goo.gl/VPTKQVqquAdkayqA6",
  dressCode: "Earth Tones",
  schedule: {
    akad: "09:00",
    resepsi: "11:00",
  },
  food: "Sundanese Oriental",
  contacts: [{ name: "Sarah", phone: "081573690927" }],
  gift: {
    bank: "BNI",
    account: "0842755839",
    holder: "Sarah Amelia Nur W.A.",
  },
} as const

export type GarutPlace = {
  name: string
  category: "nature" | "food" | "culture"
  description: string
  image: string
  mapUrl: string
}

export const GARUT_PLACES: GarutPlace[] = [
  {
    name: "Cipanas Hot Springs",
    category: "nature",
    description:
      "Natural hot springs resort surrounded by lush greenery. Perfect for relaxing after a long journey.",
    image: "/garut/cipanas.jpg",
    mapUrl: "https://maps.app.goo.gl/placeholder-cipanas",
  },
  {
    name: "Situ Bagendit",
    category: "nature",
    description:
      "A scenic lake steeped in local legend. Enjoy paddle boats and lakeside snacks.",
    image: "/garut/situ-bagendit.jpg",
    mapUrl: "https://maps.app.goo.gl/placeholder-situ-bagendit",
  },
  {
    name: "Kawah Darajat",
    category: "nature",
    description:
      "Volcanic crater with steaming fumaroles and a geothermal-heated swimming pool.",
    image: "/garut/kawah-darajat.jpg",
    mapUrl: "https://maps.app.goo.gl/placeholder-kawah-darajat",
  },
  {
    name: "Kampung Sampireun",
    category: "nature",
    description:
      "An award-winning eco-resort with floating villas on a private lake surrounded by tea plantations.",
    image: "/garut/kampung-sampireun.jpg",
    mapUrl: "https://maps.app.goo.gl/placeholder-kampung-sampireun",
  },
  {
    name: "Papandayan Volcano",
    category: "nature",
    description:
      "One of Java's most accessible volcanoes. A moderate hike reveals stunning sulfur craters and edelweiss fields.",
    image: "/garut/papandayan.jpg",
    mapUrl: "https://maps.app.goo.gl/placeholder-papandayan",
  },
  {
    name: "Dodol Picnic",
    category: "food",
    description:
      "The most iconic Garut souvenir — chewy, sweet dodol in countless flavors. A must-buy for the trip home.",
    image: "/garut/dodol-picnic.jpg",
    mapUrl: "https://maps.app.goo.gl/placeholder-dodol-picnic",
  },
  {
    name: "Sate Maranggi",
    category: "food",
    description:
      "Succulent beef satay marinated in sweet soy and spices, grilled over charcoal. A West Java specialty.",
    image: "/garut/sate-maranggi.jpg",
    mapUrl: "https://maps.app.goo.gl/placeholder-sate-maranggi",
  },
  {
    name: "Baso Aci",
    category: "food",
    description:
      "Chewy tapioca meatballs in a spicy, savory broth. Garut's beloved street food comfort dish.",
    image: "/garut/baso-aci.jpg",
    mapUrl: "https://maps.app.goo.gl/placeholder-baso-aci",
  },
  {
    name: "Candi Cangkuang",
    category: "culture",
    description:
      "An 8th-century Hindu temple on a small island, accessible by traditional bamboo raft.",
    image: "/garut/candi-cangkuang.jpg",
    mapUrl: "https://maps.app.goo.gl/placeholder-candi-cangkuang",
  },
  {
    name: "Kampung Dukuh",
    category: "culture",
    description:
      "A traditional Sundanese village preserving centuries-old customs and architecture.",
    image: "/garut/kampung-dukuh.jpg",
    mapUrl: "https://maps.app.goo.gl/placeholder-kampung-dukuh",
  },
]
