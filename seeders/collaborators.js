import faker from './config.js'
import { ROLES_ARRAY, SITES_OBJECT } from '../data/common.js'

const MAX = 100
const PRESENCE = ['présent', 'absent', 'congé']

const collaborators = []

for (let i = 0; i < MAX; i++) {

  function getCollaborator() {
    const id = `${this.firstName[0]}${this.firstName[1]}${this.lastName[0]}${this.lastName[1]}`.toLowerCase()
    const birthday = faker.date.past({ years: 40,refDate: "2003-01-01T00:00:00.000Z" }).getTime()
    const role = ROLES_ARRAY[Math.floor(Math.random() * ROLES_ARRAY.length)]
    const presence = PRESENCE[Math.floor(Math.random() * PRESENCE.length)]
    const email = `${this.firstName}.${this.lastName}@orif.ch`

    return {
      id: id,
      firstName: this.firstName,
      lastName: this.lastName,
      phone: faker.phone.number('+41 ## ### ## ##'),
      __password: id,
      email: email,
      birthday: String(birthday),
      role: [role],
      presence: [presence],
      site: [SITES_OBJECT.MORGES],
    }
  }

  const collaboratorFactory = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    getCollaborator: getCollaborator,
  }

  collaborators.push(collaboratorFactory.getCollaborator())
}

export default collaborators
