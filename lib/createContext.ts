import { Context } from 'common/types/Context'
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from './prisma'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from 'env'
import { SessionUser } from 'common/types/SessionUser'

type NextHttpEvent = {
  req: NextApiRequest
  res: NextApiResponse
}

const createContext = (event: NextHttpEvent): Context => {
  const context: Context = {
    db: prisma,
    session: { user: null, isAdmin: false },
  }

  const authHeader = event.req.headers.authorization

  const authHeaderError = !authHeader || !authHeader.startsWith('Bearer')
  if (authHeaderError) return context

  const token = authHeader.substring(7, authHeader.length)
  const decoded: SessionUser = jwt.verify(token, JWT_SECRET) as any

  if (!decoded) return context

  return {
    db: prisma,
    session: {
      user: decoded,
      isAdmin: decoded.role === 'admin',
    },
  }
}

export default createContext
