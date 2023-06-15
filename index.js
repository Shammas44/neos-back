import jsonServer from "json-server";
import config from './utils/config.js'
const server = jsonServer.create();
import data from './db.js'
import MSG from './utils/msg.js'
const router = jsonServer.router(data);
import useAuth  from './utils/useAuth.js'
const middlewares = jsonServer.defaults();
import auth from './middlewares/auth.js'
import { send }  from './utils/common.js'

server.use(jsonServer.bodyParser)

server.post('/auth', (req, res) => {
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
})

router.render = (req, res) => {
  let data = res.locals.data
  data = data.map((obj) =>
    Object.entries(obj).reduce((acc, [key, value]) => {
      if (!key.startsWith('_')) {
        acc[key] = value;
      }
      return acc;
    }, {})
  );
  send(res, data)
};

server.use(middlewares);
// server.use(auth);
server.use(`/${config.apiName}`,router);
server.listen(config.port, () => {
  console.log(`JSON Server is running on port ${config.port}`);
});
