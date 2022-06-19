import resolvers from './resolvers'
import typeDefs from './typeDefs'

export default {
  queries: resolvers.queries,
  mutations: resolvers.mutations,
  typeDefs,
}
