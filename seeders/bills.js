import accounts from './accounts.js'
import faker from './config.js'
import { pickUniqRandom } from '../utils/common.js'
import cdaList from './cda.js'
import { SITES_ARRAY } from '../data/common.js'
import { SECTIONS } from '../data/common.js';

function createParties() {
  const bool = faker.datatype.boolean()
  const company = faker.company.name()
  let parties = { debtor: company, creditor: company }
  bool ? parties.debtor = 'Orif' : parties.creditor = 'Orif'
  return parties
}

function createBill(i, site) {
  const account = pickUniqRandom(accounts, 1)[0]
  const cda = pickUniqRandom(cdaList, 1)[0]

  const sum = cda.name.startsWith('Section ')
    ? faker.finance.amount(100, 400, 2)
    : faker.finance.amount(100, 8000, 2)

  const parties = createParties()
  const days = faker.number.int({ min: 1, max: 60 })
  const term = faker.datatype.boolean()
    ? faker.date.recent({ days: days }).getTime()
    : faker.date.soon({ days: days }).getTime()
  const date = term - faker.number.int({ min: 1, max: 60 }) * 24 * 60 * 60 * 1000
  let acquittedOn = faker.number.int({ min: 1, max: 100 })
  acquittedOn = acquittedOn < 10 ? String(term) : 'null'
  let section = faker.number.int({ min: 1, max: 100 })
  section = section < 20 ? pickUniqRandom(SECTIONS, 1) : ''
  return {
    id: String(i),
    accountId: account.id,
    cda: cda.id,
    cdaName: cda.name,
    site: site,
    accountDescription: account.name,
    creditor: parties.creditor,
    debtor: parties.debtor,
    date: String(date),
    term: String(term),
    description: faker.lorem.lines(1),
    sum: sum,
    acquittedOn: acquittedOn,
    section: cda.name.startsWith('Section ') ? cda.name : ''
  }
}
const bills = []
for (const [key, site] of SITES_ARRAY.entries()) {
  for (let i = 0; i < 500; i++) {
    bills.push(createBill((1000 * key) + i, site[0]))
  }
}

export default bills
