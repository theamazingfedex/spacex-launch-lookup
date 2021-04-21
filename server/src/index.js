import { ApolloServer } from 'apollo-server'
import { typeDefs } from './typeDefs.js'
import { resolvers } from './resolvers.js'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  tracing: true,
})

server.listen().then(({url}) => console.log(`Server is running on ${url}`))
