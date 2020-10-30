import { ApolloServer, makeExecutableSchema } from 'apollo-server';
import { PrismaClient } from '@prisma/client'
import typeDefs from './typeDefs'
import resolvers from './resolvers'

const prisma = new PrismaClient()


// enables creation and manipulation of GraphQL schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
const server = new ApolloServer({
  schema,
  context: () => {
    return { prisma }
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}graphql`);
});
