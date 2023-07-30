import beneficiaries from './beneficiaries.js';
import faker from './config.js'
import { pickUniqRandom } from '../utils/common.js';
import collaborators from './collaborators.js';


const METHODES = [
  'Aspects psychociaux',
  'Adéquation du domaine d\'acitivité',
  'Démarche d\'orientation professionnelle',
  'Aspects professionnels',
  'Performance au travail',
];

const SEVERITY = [
  'apptitude normale',
  'appitude légèrement limitée',
  'appitude moyennement limitée',
  'appitude fortement limitée',
  'appitude très fortement limitée',
]

const PRIORITY = ['important - urgent', 'normal', 'important - pas urgent']
const TYPE = ['intervention', 'suivis', 'evaluation', 'incident']
const msp = collaborators.filter(collaborator => collaborator.role.includes('msp'))

function pickCollaborators() {
  const numberOfCollaborators = faker.number.int({ min: 0, max: 4 })
  const list = pickUniqRandom(msp, numberOfCollaborators);
  return list.map((collaborator) => {
    return `${collaborator.firstName} ${collaborator.lastName}`
  })
}

function pickMsp() {
  const number = faker.number.int({ min: 0, max: msp.length -1 })
  const choosen = msp[number]
  return `${choosen.firstName} ${choosen.lastName}`
}

const logbookEvents = [];
let id = 1000;
for (const beneficiary of beneficiaries) {
  const numberOfEvent = faker.number.int({ min: 0, max: 8 })

  for (let i = 0; i < numberOfEvent; i++) {

    const currentMonth = new Date().getDate()
    const date = (faker.date.between({
      from: new Date().setDate(currentMonth - 30),
      to: new Date().setDate(currentMonth)
    })).getTime()

    logbookEvents.push({
      id: String(id++),
      beneficiaryId: beneficiary.id,
      type: pickUniqRandom(TYPE, 1)[0],
      author: pickMsp(),
      date: String(date),
      priority: pickUniqRandom(PRIORITY, 1)[0],
      description: faker.lorem.paragraphs(1, 5),
      severity: pickUniqRandom(SEVERITY, 1)[0],
      method: pickUniqRandom(METHODES, 1)[0],
      concernedCollaborators: pickCollaborators(),
      notification: String(faker.datatype.boolean())
    })
  }
}

export default logbookEvents;
