import MSG from '../utils/msg.js'
import useAuth from '../utils/useAuth.js'
import { send } from '../utils/common.js'

export function authRoute(router) {
  return (req, res, next) => {
    const email = req.body?.email ?? ''
    const password = req.body?.password ?? ''
    if (!email && !password)
      return send(res, MSG.ERROR_CREDENTIALS_REQUIRED , 401)
    const user = router.db.get("collaborators").find({ email, _password: password }).value()
    if (!user)
      return send(res, MSG.ERROR_CREDENTIALS_VALIDATION , 401)
    const token = useAuth.generateJwtToken(user.id, false)
    if (!token)
      return send(res, MSG.ERROR_TOKEN_GENERATION , 500)
    const data = { ...token, ...user }
    res.locals.data = data
    next()
  }
}
