export type Locale = "en" | "id"

export type Dictionary = {
  greeting: {
    salutation: string
    headerLabel: string
    dialogTitle: string
    quranicVerse: string
    quranicRef: string
    narrativeLines: string[]
    closingLines: string[]
    cta: string
  }

  couple: {
    title: string
    subtitle: string
    theGroom: string
    theBride: string
    sonOf: string
    daughterOf: string
    groomQuote: string
    brideQuote: string
    ourGallery: string
  }

  page: {
    gettingMarried: string
    twoHearts: string
    saveTheDate: string
    garutTitle: string
    garutDescription: string
  }

  venue: {
    schedule: string
    dressCode: string
    food: string
    parking: string
    contact: string
    gift: string
    giftMessage: string
    getDirections: string
    addCalendar: string
    googleCalendar: string
    downloadIcs: string
    akad: string
    resepsi: string
    parkingInfo: string
  }

  garut: {
    title: string
    description: string
    categories: {
      all: string
      nature: string
      food: string
      culture: string
    }
    directions: string
    footerQuote: string
    places: Array<{
      name: string
      description: string
    }>
  }

  langToggle: {
    label: string
  }
}
