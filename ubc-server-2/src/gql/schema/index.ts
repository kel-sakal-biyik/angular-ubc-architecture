import { GraphQLSchema } from 'graphql';
import {
  addResolveFunctionsToSchema,
  makeExecutableSchema
} from 'graphql-tools';

import { resolvers } from './resolvers';

const rootSchema = [ `
  type Address {
    country: String              
    city: String                 
    zip: String 
    street: String               
    address: String              
  }

  type Query {
    address: Address
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
