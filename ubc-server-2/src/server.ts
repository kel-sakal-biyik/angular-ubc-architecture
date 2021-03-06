import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';

import { Application } from 'express';
import {
  graphqlExpress,
  graphiqlExpress
} from 'graphql-server-express';


import getSchema from './gql/schema';

const app: Application = express();
const APP_ROOT: string = '/gql-ubc-2';
const defaultQuery =
  `{
  address {
    country
    city
    zip
    street
    address
  }  
}`;
const schema: any = getSchema();

app
  .use(cookieParser())
  .use(bodyParser.json());


app
  .use('/graphiql', graphiqlExpress({
    endpointURL: APP_ROOT,
    query: defaultQuery
  }));

app
  .use(APP_ROOT, cors(), graphqlExpress(request => {
    const query = request.query.query || request.body.query;

    return {
      schema,
      context: {
        request
      }
    };

  }));

export default app;
