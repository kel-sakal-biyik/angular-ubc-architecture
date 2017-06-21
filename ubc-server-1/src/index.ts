import { createServer, Server } from 'http';
import * as os from 'os';

import app from './server';

const HTTP_PORT: number = 9001;
const server: Server = createServer(app);


server.listen(HTTP_PORT, () => {
    console.log(`graphQL service listening on ${os.hostname()}:${HTTP_PORT}`);
  }
);

export default server;
