import accounts from './accounts.js'
import faker from './config.js'
import { pickUniqRandom } from '../utils/common.js'
import cdaList from './cda.js'
import { SITES_ARRAY } from '../data/common.js'


function createBill(i, site) {
  const account = pickUniqRandom(1, accounts)[0]
  const cda = pickUniqRandom(1, cdaList)[0]
  return {
    id: String(i),
    accountId: account.id,
    cda: cda.id,
    cdaName: cda.name,
    site: site,
    accountDescription: account.description,
    company: faker.company.name(),
    date: String(faker.date.past().getTime()),
    description: "null",
    sum: faker.finance.amount(100, 8000, 2),
  }
}
const bills = []
for (const [key, site] of SITES_ARRAY.entries()) {
  for (let i = 0; i < 500; i++) {
    bills.push(createBill((1000 * key) + i, site))
  }
}

export default bills
