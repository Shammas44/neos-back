import MSG from '../utils/msg.js'
import useAuth from '../utils/useAuth.js'
import { send } from '../utils/common.js'
import { setRow, TYPES as T } from '../utils/common.js'

export function authRoute(router) {
  return (req, res, next) => {
    const email = req.body?.email ?? ''
    const password = req.body?.password ?? ''
    let id = ''
    if (!email && !password)
      return send(res, MSG.ERROR_CREDENTIALS_REQUIRED , 401)
    try {
    const names = email.split('@')[0].split('.')
      const [firstName, lastName] = [names[0], names[1]];
     id = `${firstName[0]}${firstName[1]}${lastName[0]}${lastName[1]}`.toLowerCase()
    } catch (error) {
      return send(res, MSG.ERROR_CREDENTIALS_VALIDATION , 401)
    }
    const emailField = setRow(email, 'email', T.EMAIL)
    const passwordField = setRow(password, '', T.STRING)
    const user = router.db.get("collaborators").find({ id }).value()
    if (!user)
      return send(res, MSG.ERROR_CREDENTIALS_VALIDATION , 401)
    if(user.data.email.value != emailField.value, user.data._password.value != passwordField.value)
      return send(res, MSG.ERROR_CREDENTIALS_VALIDATION , 401)
    const token = useAuth.generateJwtToken(user.id, false)
    if (!token)
      return send(res, MSG.ERROR_TOKEN_GENERATION , 500)
    const data = { ...token, ...user }
    res.locals.data = data
    next()
  }
}
