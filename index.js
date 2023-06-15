import jsonServer from "json-server";
import config from './utils/config.js'
import data from './db.js'
import { removePrivateField } from './utils/common.js'
import { authRoute } from './routes/auth.js'
import cors from 'cors'


const corsOptions = {
  origin: 'https://neos.sebastientraber.com',
}
const apiPrefix = `/${config.apiName}`

const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser)

server.post(`${apiPrefix}/auth`, authRoute(router))

router.render = (req, res) => {
  let data = res.locals.data
  if (data?.length ?? 0 > 0) data = removePrivateField(data)
   res.jsonp(data)
};

server.use(cors(corsOptions))
server.use(middlewares);
// server.use(auth);
server.use(apiPrefix,router);
server.listen(config.port, () => {
  console.log(`JSON Server is running on port ${config.port}`);
});
