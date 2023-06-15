import faker from './config.js'
import { subtractYears } from './../utils/common.js'
const MAX = 100

const collaborators = []

for (let i = 0; i < MAX; i++) {

  function getCollaborator() {
    const id = `${this.firstName[0]}${this.firstName[1]}${this.lastName[0]}${this.lastName[1]}`.toLowerCase()
    return {
      id: id,
      firstName: this.firstName,
      lastName: this.lastName,
      telephone: faker.phone.number(),
      _password: id,
      email: `${this.firstName}.${this.lastName}@orif.ch`,
      birthday: subtractYears(new Date(faker.date.past({ years: 40 })), 20),
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
