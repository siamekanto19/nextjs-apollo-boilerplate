import { gql } from 'apollo-server-micro'

export default gql`
  extend type Mutation {
    userLogin(input: UserLoginInput): AuthSuccessResponse!
  }

  type AuthSuccessResponse {
    success: Boolean!
    jwt: String!
  }

  input UserLoginInput {
    email: String!
    password: String!
  }
`
