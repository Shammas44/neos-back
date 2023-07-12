import faker from './config.js'
import { pickUniqRandom } from '../utils/common.js';
import { SITES_ARRAY } from '../data/common.js';

const STATUS3 = ["interne", "externe"]
const CIVILITY = ["Monsieur", "Madame"]
const ARTICLES = ["14a LAI", "15 LAI", "16 LAI", "17 LAI"]
const PERMIT = ['Aucun', 'A', 'B', 'C']
const OAI = ['Vaud', 'Genève', 'Neuchâtel', 'Fribourg', 'Valais']
const COUNTRY = ['Suisse', 'France', 'Italie', 'Allemagne', 'Autriche', 'Espagne', 'Portugal', 'Grèce', 'Turquie', 'Algérie', 'Maroc']
const MSP = [];
const RS = [];
const PSYCHOLOGIST = [];
const SI = [];
const COFOR = [];
const LEGALREPRESENTATIVE = [];
const ADVISOR = [];
const SECTION = ["Horlogerie", "Electricité", "Vente", "Mécanique", "Dessin architecture", "Dessin industriel", "Informatique", "Logistique", "Cuisine", "Restauration", "Boulangerie", "Pâtisserie", "Horticulture", "Maçonnerie", "Peinture", "Carrelage", "Menuiserie", "Soudure", "Mécanique automobile", "Mécanique agricole"]
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

function createAvsNumber() {
  return `${faker.number.int({ min: 100, max: 999 })}.${faker.number.int({ min: 1000, max: 9999 })}.${faker.number.int({ min: 100, max: 999 })}.${faker.number.int({ min: 100, max: 999 })}`
}

function createAccomodation() {
  const bool = faker.datatype.boolean()
  if (bool) return `Internat Ch. ${faker.number.int({ min: 100, max: 499 })}`
  return faker.location.streetAddress()
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
for (const site of SITES_ARRAY) {
  for (let i = 0; i < 100; i++) {

    const month = 1000 * 60 * 60 * 24 * 30
    const birthday = faker.date.past({ years: 30, refDate: "2005-01-01T00:00:00.000Z" }).getTime()
    const decision = faker.date.past({ years: 10, refDate: "2023-01-01T00:00:00.000Z" }).getTime()
    const startDate = decision + (month * 3)
    const endDate = startDate + (month * 36)
    const civility = pickUniqRandom(1, CIVILITY)[0]
    const name = civility == civility[0]
      ? `${faker.person.firstName('male')} ${faker.person.lastName()}`
      : `${faker.person.firstName('female')} ${faker.person.lastName()}`

    beneficiaries.push({
      id: String(i + 1000),
      name: name,
      phone: faker.phone.number('+41 ## ### ## ##'),
      status3: pickUniqRandom(1, STATUS3)[0],
      avs: createAvsNumber(),
      civility: civility,
      birthDay: String(birthday),
      decision: String(decision),
      article: pickUniqRandom(1, ARTICLES)[0],
      startDate: String(startDate),
      endDate: String(endDate),
      siteName: site,
      oai: pickUniqRandom(1, OAI)[0],
      orifProduct: pickUniqRandom(1, PRODUCT)[0],
      section: pickUniqRandom(1, SECTION)[0],
      accommodation: createAccomodation(),
      originCountry: pickUniqRandom(1, COUNTRY)[0],
      permit: pickUniqRandom(1, PERMIT)[0],
      msp: pickUniqRandom(1, MSP)[0],
      rs: pickUniqRandom(1, RS)[0],
      psychologist: pickUniqRandom(1, PSYCHOLOGIST)[0],
      si: pickUniqRandom(1, SI)[0],
      cofor: pickUniqRandom(1, COFOR)[0],
      legalRepresentative: pickUniqRandom(1, LEGALREPRESENTATIVE)[0],
      advisor: pickUniqRandom(1, ADVISOR)[0],
    })
  }
}

export default beneficiaries

