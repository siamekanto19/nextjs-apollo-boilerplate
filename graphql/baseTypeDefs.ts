import { gql } from 'apollo-server-micro'

const query = gql`
  type Query
`

const mutation = gql`
  type Mutation
`

export default [query, mutation]
