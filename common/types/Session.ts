import { SessionUser } from './SessionUser'

export type Session = {
  user: SessionUser | null
  isAdmin: boolean
}
