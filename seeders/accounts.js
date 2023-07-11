import cdaList from './cda.js'
import faker from './config.js'

const accounts = [];
const prefixes = ["Compte", "Caisse", "Banque", "Dettes", "Créanciers",];
const suffixes = ["Principal", "Secondaire", "Fiscal", "Social", "Commercial",];

for (const [p_key, prefixe] of prefixes.entries()) {
  for (const [s_key, suffix] of suffixes.entries()) {
    accounts.push(
      {
        id: String((p_key * 1000) + s_key + 1000),
        name: `${prefixe} ${suffix}`,
        budget: getBudget(),
      }
    );
  }
}

function getBudget() {
  const obj = {}
  cdaList.forEach((cda) => {
    obj[cda.id] = {
      sum: faker.finance.amount({ min: 5000, max: 10000, precision: 2 })
    }
  })
  return obj
}
export default accounts
