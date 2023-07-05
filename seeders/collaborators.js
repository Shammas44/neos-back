import faker from './config.js'
import { subtractYears } from './../utils/common.js'
import { setRow, TYPES as T } from './../utils/common.js'

const MAX = 100
const ROLES = ['msp', 'dc']
const PRESENCE = ['présent', 'absent', 'congé']

const collaborators = []

for (let i = 0; i < MAX; i++) {

  function getCollaborator() {
    const id = `${this.firstName[0]}${this.firstName[1]}${this.lastName[0]}${this.lastName[1]}`.toLowerCase()
    const birthday = subtractYears(new Date(faker.date.past({ years: 40 })), 20)
    const role = ROLES[Math.floor(Math.random() * ROLES.length)]
    const presence = PRESENCE[Math.floor(Math.random() * PRESENCE.length)]
    const email = `${this.firstName}.${this.lastName}@orif.ch`

    return {
      id: id,
      data: {
        orifId: setRow(id, 'identifiant', T.STRING),
        firstName: setRow(this.firstName, 'prénom', T.STRING),
        lastName: setRow(this.lastName, 'nom', T.STRING),
        telephone: setRow(faker.phone.number(), 'téléphone', T.PHONE),
        _password: setRow(id, '', T.STRING),
        email: setRow(email, 'email', T.EMAIL),
        birthday: setRow(birthday, 'anniversaire', T.BIRTHDAY),
        role: setRow([role], 'rôle', T.TAGS),
        presence: setRow([presence], 'Présence', T.PRESENCE),
      }
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
