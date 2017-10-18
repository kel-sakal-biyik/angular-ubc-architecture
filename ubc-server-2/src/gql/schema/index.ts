import { GraphQLSchema } from 'graphql';
import {
  addResolveFunctionsToSchema,
  makeExecutableSchema
} from 'graphql-tools';

import { resolvers } from './resolvers';

const rootSchema = [ `
  type Address {
    id: Int
    country: String
    city: String
    zip: String
    street: String
    address: String
  }

  type Info {
    firstname: String
    address: Address
  }

  type Query {
    info: Info
    address: Address
  }
  
  type Mutation {
    changeAddress: Address
  }

  schema {
    query: Query
    mutation: Mutation
  }
` ];

export default function getSchema(): any {
  const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: rootSchema
  });

  addResolveFunctionsToSchema(schema, resolvers);

  return schema;
}
