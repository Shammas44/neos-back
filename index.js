import jsonServer from "json-server";
import config from './utils/config.js'
import data from './db.js'
import { removePrivateField } from './utils/common.js'
import { authRoute } from './routes/auth.js'
import cors from 'cors'
import authMiddleware from './middlewares/auth.js'


const corsOptions = {
  origin: ['http://localhost:4200', 'https//neos.sebastientraber.com']
}
const apiPrefix = `/${config.apiName}`

const server = jsonServer.create();
server.use(cors(corsOptions))
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser)

server.post(`${apiPrefix}/auth`, authRoute(router))

router.render = (req, res) => {
  let data = res.locals.data
  data = removePrivateField(data)
  res.jsonp(data)
};

server.use(middlewares);
server.use(authMiddleware);
server.use(apiPrefix, router);
server.listen(config.port, () => {
  console.log(`JSON Server is running on port ${config.port}`);
});
