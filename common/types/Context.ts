import { PrismaClient } from '@prisma/client'
import { Session } from './Session'

export type Context = {
  db: PrismaClient
  session: Session
}
