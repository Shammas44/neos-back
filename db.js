import collaborators from './seeders/collaborators.js'
import cda from './seeders/cda.js'
import getTask from './seeders/tasks.js'
import getFavorite from './seeders/favorites.js'
import news from './seeders/news.js'
import bills from './seeders/bills.js'
import accounts from './seeders/accounts.js'
import beneficiaries from './seeders/beneficiaries.js'
import logbookevents from './seeders/logbookEvents.js'

const tasks = []
const favorites = []
collaborators.forEach((c) => {
  tasks.push(...[...Array(25).keys()].map(() => getTask(c.id)))
  favorites.push(...getFavorite(c.id))
})

export default {
  collaborators: collaborators,
  cda,
  tasks,
  favorites,
  bills,
  newsheaders: news.headers,
  newsbody: news.body,
  accounts,
  beneficiaries,
  logbookevents,
}
