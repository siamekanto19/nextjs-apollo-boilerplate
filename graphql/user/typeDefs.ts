import { gql } from 'apollo-server-micro'

export default gql`
  extend type Query {
    user: User!
    users: [User]!
    authenticatedUser: User
  }

  extend type Mutation {
    createUser(input: UserCreateInput): User!
    updateUser: User!
    deleteUser: User!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    role: Role!
  }

  input UserCreateInput {
    name: String!
    email: String!
    password: String!
    role: String
  }

  enum Role {
    admin
    editor
    author
    user
  }
`
