import jsonServer from "json-server";
import config from './utils/config.js'
const server = jsonServer.create();
import data from './db.js'
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
import { removePrivateField }  from './utils/common.js'
import {authRoute} from './routes/auth.js'

server.use(jsonServer.bodyParser)

server.post('/auth', authRoute(router))

router.render = removePrivateField;

server.use(middlewares);
// server.use(auth);
server.use(`/${config.apiName}`,router);
server.listen(config.port, () => {
  console.log(`JSON Server is running on port ${config.port}`);
});
