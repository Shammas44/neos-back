import faker from './config.js'
import { SITES_OBJECT, ROLES_OBJECT } from '../data/common.js'
import { randomNumber } from '../utils/common.js';
const TAG = {
  SUPPORT: 'support',
  INVITATION: 'invitation',
  FORMATION: 'formation',
  INFORMATION: 'information',
  EMPLOI: 'emploi',
  EQUIPE: 'équipe',
  BLUEWORD: 'mots bleu'
}

const rawNews = [
  {
    title: "Nouveau projet",
    tag: [TAG.BLUEWORD]
  },
  {
    title: "Réunion d'équipe",
    tag: [TAG.EQUIPE]
  },
  {
    title: "Rappel de réunion",
    tag: [TAG.SUPPORT]
  },
  {
    title: "Rapport mensuel",
    tag: [TAG.INFORMATION]
  },
  {
    title: "Information importante",
    tag: [TAG.INFORMATION]
  },
  {
    title: "Changement de politique interne",
    tag: [TAG.INFORMATION]
  },
  {
    title: "Invitation à l'événement",
    tag: [TAG.INVITATION]
  },
  {
    title: "Maintenance des serveurs",
    tag: [TAG.SUPPORT]
  },
  {
    title: "Information sur les avantages sociaux",
    tag: [TAG.INFORMATION]
  }
];

const Priority = ['high', 'normal']
let lastId = 0;

const headers = []
const html = []

for (const rawNew of rawNews) {
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
    object: rawNew.title,
    priority: Priority[randomNumber(0, 1)],
    tags: rawNew.tag,
    date: String(date),
    newsId: String(lastId),
    term: String(term),
    sites: [sites[randomNumber(0, 1)]],
    role: [roles[randomNumber(0, 2)]],
  })

}

const news = { headers }

export default news
