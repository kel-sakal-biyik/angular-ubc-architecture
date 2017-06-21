import { GraphQLSchema } from 'graphql';

import {
  addResolveFunctionsToSchema,
  makeExecutableSchema
} from 'graphql-tools';

import { resolvers } from './resolvers';

const rootSchema = [ `
  type Location {
    latitude: Float
    longitude: Float
  }

  type Query {
    location: Location
  }

  schema {
    query: Query
  }
` ];

export default function getSchema(): any {
  const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: rootSchema
  });

  addResolveFunctionsToSchema(schema, resolvers);

  return schema;
}
