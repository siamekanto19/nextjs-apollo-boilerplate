import { ApolloServer } from 'apollo-server-micro'
import resolvers from 'graphql/resolvers'
import typeDefs from 'graphql/typeDefs'
import createContext from 'lib/createContext'
import { NextApiRequest, NextApiResponse } from 'next'

const apolloServer = new ApolloServer({ typeDefs, resolvers, context: createContext })
const startServer = apolloServer.start()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }
  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
}

export const config = {
  api: {
    bodyParser: false,
  },
}

export default handler
