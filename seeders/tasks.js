import faker from './config.js'
import { setRow, TYPES as T, randomNumber, pickUniqRandom } from './../utils/common.js'

const tasks = [
  "Élaboration de programmes de formation",
  "Animation d'ateliers de formation",
  "Évaluation des compétences des apprenants",
  "Conception de supports pédagogiques",
  "Suivi individualisé des apprenants",
  "Organisation d'événements de formation",
  "Gestion administrative des dossiers d'apprentissage",
  "Coordination des stages en entreprise",
  "Animation de séances d'information sur les formations",
  "Accompagnement des apprenants dans leur parcours professionnel",
  "Mise à jour des contenus de formation",
  "Élaboration de tests d'évaluation",
  "Animation de formations en présentiel",
  "Développement de modules de formation en ligne",
  "Orientation des candidats vers les formations appropriées",
  "Conseil en orientation professionnelle",
  "Analyse des besoins en formation",
  "Élaboration de plans de formation",
  "Formation de formateurs",
  "Évaluation de l'efficacité des programmes de formation",
  "Gestion des ressources pédagogiques",
  "Conception de formations sur mesure",
  "Accompagnement à la recherche d'emploi",
  "Gestion de projets de formation",
  "Animation de séances d'autoformation",
  "Suivi et évaluation des résultats de formation",
  "Élaboration de référentiels de compétences",
  "Réalisation d'enquêtes de satisfaction des apprenants",
  "Coordination de projets européens de formation",
  "Conception de dispositifs d'évaluation des acquis",
  "Formation à l'utilisation des outils informatiques",
  "Création de partenariats avec les entreprises",
  "Veille pédagogique et technologique",
  "Conception de programmes d'alternance",
  "Accompagnement à la recherche de stage",
  "Formation en communication professionnelle",
  "Gestion des dossiers de financement de formation",
  "Animation de groupes de travail",
  "Élaboration de bilans de compétences",
  "Formation en gestion du temps",
  "Accompagnement à la validation des acquis de l'expérience",
  "Analyse des tendances du marché de l'emploi",
  "Formation en techniques de recherche d'emploi",
  "Élaboration de stratégies de recrutement",
  "Formation en gestion des conflits",
  "Accompagnement à la création d'entreprise",
  "Formation en développement personnel",
  "Élaboration de supports de communication pour les formations",
  "Animation de réunions pédagogiques",
  "Suivi de la qualité des formations",
  "Formation en gestion de projet professionnel",
  "Conception de formations sur la sécurité au travail",
];

const ROLES = ['msp', 'dc', 'rmg', 'dfa', 'rca']
let lastId = 0;

function getTask(userId) {
  const concerns = pickUniqRandom(randomNumber(1, 3), ROLES)
  const task = tasks[Math.floor(Math.random() * tasks.length)]
  const id = lastId++
  const currentMonth = new Date().getDate()
  const term = (faker.date.between({
    from: new Date().setDate(currentMonth - 10),
    to: new Date().setDate(currentMonth + 30)
  })).getTime()

  return {
    id: setRow(id, 'identifiant', T.STRING),
    collaboratorId: setRow(userId, 'identifiant du collaborateur', T.STRING),
    description: setRow(task, 'description', T.STRING),
    concerns: setRow(concerns, 'personnes impliquée', T.TAGS),
    term: setRow(term, 'échéances', T.TERM),
    completionTimestamp: setRow('null', 'date de complétion', T.TIMESTAMP)
  }
}

export default getTask
