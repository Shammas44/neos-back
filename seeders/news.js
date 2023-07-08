import faker from './config.js'
import { SITES_OBJECT, ROLES_OBJECT } from '../data/common.js'
import { randomNumber } from '../utils/common.js';
import allNews from '../data/news.js'
import generateTemplate from '../data/newsTemplate.js'

const Priority = ['high', 'normal']
let lastId = 0;

const headers = []
const body = []

for (const news of allNews) {
  const currentMonth = new Date().getDate()
  const date = (faker.date.between({
    from: new Date().setDate(currentMonth - 30),
    to: new Date().setDate(currentMonth)
  })).getTime()
  const oneWeek = 1000 * 60 * 60 * 24 * 7
  const term = date + oneWeek
  lastId++

  const sites = [SITES_OBJECT.MORGES, SITES_OBJECT.ALL]
  const roles = [ROLES_OBJECT.ALL, ROLES_OBJECT.DC, ROLES_OBJECT.MSP]

  headers.push({
    id: String(lastId),
    isNew: String(Boolean(randomNumber(0, 1))),
    object: news.title,
    priority: Priority[randomNumber(0, 1)],
    tags: news.tag,
    date: String(date),
    _bodyId: String(lastId),
    term: String(term),
    sites: [sites[randomNumber(0, 1)]],
    role: [roles[randomNumber(0, 2)]],
  })

  const n = news.content
  const content = generateTemplate(n.greeting, n.body, n.goodbye, news.title)

  body.push({
    id: String(lastId),
    body: content,
  })

}

const newsObject = { headers, body }

export default newsObject
