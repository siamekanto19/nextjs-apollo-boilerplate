import { gql } from 'apollo-server-micro'
import baseTypeDefs from './baseTypeDefs'
import user from './user'

export default [baseTypeDefs, user.typeDefs]
