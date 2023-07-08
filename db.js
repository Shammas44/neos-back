import collaborators from './seeders/collaborators.js'
import cda from './seeders/cda.js'
import getTask from './seeders/tasks.js'
import getFavorite from './seeders/favorites.js'
import news from './seeders/news.js'

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
  newsheaders: news.headers,
  newsbody: news.body
}
