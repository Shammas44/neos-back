import jsonServer from "json-server";
import config from './utils/config.js'
import data from './db.js'
import { removePrivateField }  from './utils/common.js'
import {authRoute} from './routes/auth.js'
import cors from 'cors'

const corsOptions = {
  origin: ['https://neos.sebastientraber.com'],
}

const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();

server.use(cors(corsOptions))
server.use(jsonServer.bodyParser)

server.post('/auth', authRoute(router))

router.render = removePrivateField;

server.use(middlewares);
// server.use(auth);
server.use(`/${config.apiName}`,router);
server.listen(config.port, () => {
  console.log(`JSON Server is running on port ${config.port}`);
});
