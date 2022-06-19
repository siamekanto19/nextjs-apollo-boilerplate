import user from 'graphql/user'

export default {
  Query: {
    ...user.queries,
  },
  Mutation: {
    ...user.mutations,
  },
}
