import { ApolloError } from 'apollo-server-micro'
import { hashSync } from 'bcryptjs'
import { ResolversRecord } from 'common/types/Resolver'
import dataValidation from 'lib/dataValidation'
import UserCreateRules from 'lib/validators/UserCreateRules'

const queries: ResolversRecord = {
  user: async (parent, args, context) => {
    return context.db.user.findUnique({ where: { id: args.id } })
  },
  users: async (parent, args, context) => {
    return context.db.user.findMany()
  },
  authenticatedUser: async (parent, args, context) => {
    if (!context.session.user) return null
    return context.db.user.findUnique({ where: { id: context.session.user.id } })
  },
}

const mutations: ResolversRecord = {
  createUser: async (parent, args, context) => {
    const body = dataValidation(args.input, UserCreateRules)
    const oldUser = await context.db.user.findUnique({ where: { email: body.email } })
    if (oldUser) throw new ApolloError('Email is already in use')
    const user = await context.db.user.create({
      data: {
        ...body,
        password: hashSync(body.password, 10),
        role: context.session.isAdmin ? body.role : 'user',
      },
    })

    return user
  },
}

export default { queries, mutations }
