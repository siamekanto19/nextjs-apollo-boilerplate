import { ApolloServerPluginLandingPageGraphQLPlayground, ApolloServerPluginLandingPageDisabled } from 'apollo-server-core'

const graphqlPlayground = () => {
  if (process.env.NODE_ENV !== 'production') {
    return [ApolloServerPluginLandingPageGraphQLPlayground()]
  }

  return [ApolloServerPluginLandingPageDisabled()]
}

export default graphqlPlayground
