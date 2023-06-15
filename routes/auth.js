import MSG from '../utils/msg.js'
import useAuth from '../utils/useAuth.js'
import { send } from '../utils/common.js'

export function authRoute(router) {
  return (req, res) => {
    const email = req.body?.email ?? ''
    const password = req.body?.password ?? ''
    if (!email && !password)
      return send(res, { error: MSG.ERROR_CREDENTIALS_REQUIRED }, 401)
    const user = router.db.get("collaborators").find({ email, _password: password }).value()
    const token = useAuth.generateJwtToken(user.id, false)
    if (!user)
      return send(res, { error: MSG.ERROR_CREDENTIALS_VALIDATION }, 401)
    if (!token)
      return send(res, { error: MSG.ERROR_TOKEN_GENERATION }, 500)
    send(res, token)
  }
}
