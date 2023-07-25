import faker from './config.js'
import config from '../utils/config.js'
import { pickUniqRandom } from '../utils/common.js';
import { SITES_ARRAY } from '../data/common.js';
import { SECTIONS } from '../data/common.js';

const STATUS3 = ["interne", "externe"]
const CIVILITY = ["Monsieur", "Madame"]
const ARTICLES = ["14a LAI", "15 LAI", "16 LAI", "17 LAI"]
const PERMIT = ['Aucun', 'A', 'B', 'C']
const CANTONS = ['Vaud', 'Genève', 'Neuchâtel', 'Fribourg', 'Valais']
const COUNTRY = ['Suisse', 'France', 'Italie', 'Allemagne', 'Autriche', 'Espagne', 'Portugal', 'Grèce', 'Turquie', 'Algérie', 'Maroc']
const MSP = [];
const RS = [];
const PSYCHOLOGIST = [];
const SI = [];
const COFOR = [];
const LEGALREPRESENTATIVE = [];
const ADVISOR = [];
const PRODUCT = [
  "4001 Pratique AFP",
  "4002 Pratique CFP",
  "4003 Entreprise CFP",
  "4004 Entreprise AFP",
  "4005 Prépa Ciblée",
  "4006 Réadaptation",
  "4007 Orientation",
  "4008 Préparatoire",
  "4009 Hebergement",
]

const SUPPORTED = [
  "Atteinte à la santé",
  "Atteinte physique",
  "Atteinte psychique",
  "Atteinte sociale",
  "Atteinte à l'intégration",
  "Atteinte à la formation",
  "Atteinte à l'emploi",
]

function createAvsNumber() {
  return `${faker.number.int({ min: 100, max: 999 })}.${faker.number.int({ min: 1000, max: 9999 })}.${faker.number.int({ min: 100, max: 999 })}.${faker.number.int({ min: 100, max: 999 })}`
}

function createAccomodation(canton) {
  const number = faker.number.int({ min: 1, max: 99 })
  if (number >= 70) return [`Internat Ch. ${faker.number.int({ min: 100, max: 499 })} ${canton}`, canton]
  canton = pickUniqRandom(CANTONS, 1)[0]
  return [`${faker.location.streetAddress()} ${canton}`, canton]
}

for (let i = 0; i < 20; i++) {
  MSP.push(`${faker.person.firstName()} ${faker.person.lastName()}`)
  RS.push(`${faker.person.firstName()} ${faker.person.lastName()}`)
  PSYCHOLOGIST.push(`${faker.person.firstName()} ${faker.person.lastName()}`)
  SI.push(`${faker.person.firstName()} ${faker.person.lastName()}`)
  COFOR.push(`${faker.person.firstName()} ${faker.person.lastName()}`)
  LEGALREPRESENTATIVE.push(`${faker.person.firstName()} ${faker.person.lastName()}`)
  ADVISOR.push(`${faker.person.firstName()} ${faker.person.lastName()}`)
}

const beneficiaries = [];
let j = 0
for (const site of SITES_ARRAY) {
  const availableSections = SECTIONS.filter((section) => {
    if (section[1] == site[0]) return true
    return false
  })

  for (let i = 0; i < 100; i++) {
    j++
    const address = createAccomodation(site[1])
    const month = 1000 * 60 * 60 * 24 * 30
    const birthday = faker.date.past({ years: 30, refDate: "2005-01-01T00:00:00.000Z" }).getTime()
    const decision = faker.date.past({ years: 10, refDate: "2023-01-01T00:00:00.000Z" }).getTime()
    const startDate = decision + (month * 3)
    const endDate = startDate + (month * 36)
    const supportedNumber = faker.number.int({ min: 0, max: 3 })
    const supported = pickUniqRandom(SUPPORTED, supportedNumber)
    const civility = pickUniqRandom(CIVILITY, 1)[0]
    const pictureId = faker.number.int({ min: 1, max: 12 })
    const picture = civility == 'Monsieur' 
      ? `${config.domain}avatars/avatar-m-${pictureId}@2x.png` 
      : `${config.domain}avatars/avatar-f-${pictureId}@2x.png`
    const name = civility == 'Monsieur'
      ? `${faker.person.firstName('male')} ${faker.person.lastName()}`
      : `${faker.person.firstName('female')} ${faker.person.lastName()}`

    beneficiaries.push({
      id: String(j + 1000),
      name: name,
      phone: faker.phone.number('+41 ## ### ## ##'),
      status3: pickUniqRandom(STATUS3, 1)[0],
      avs: createAvsNumber(),
      civility: civility,
      birthDay: String(birthday),
      decision: String(decision),
      article: pickUniqRandom(ARTICLES, 1)[0],
      startDate: String(startDate),
      endDate: String(endDate),
      siteName: site[0],
      oai: address[1],
      orifProduct: pickUniqRandom(PRODUCT, 1)[0],
      section: pickUniqRandom(availableSections, 1)[0][0],
      accommodation: address[0],
      originCountry: pickUniqRandom(COUNTRY, 1)[0],
      permit: pickUniqRandom(PERMIT, 1)[0],
      msp: pickUniqRandom(MSP, 1)[0],
      rs: pickUniqRandom(RS, 1)[0],
      psychologist: pickUniqRandom(PSYCHOLOGIST, 1)[0],
      si: pickUniqRandom(SI, 1)[0],
      cofor: pickUniqRandom(COFOR, 1)[0],
      legalRepresentative: pickUniqRandom(LEGALREPRESENTATIVE, 1)[0],
      advisor: pickUniqRandom(ADVISOR, 1)[0],
      supported: supported,
      picture: picture
    })
  }
}

export default beneficiaries

