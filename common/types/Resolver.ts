import { Context } from './Context'
export type Resolver = (parent: { [key: string]: any }, args: { [key: string]: any }, context: Context) => Promise<any>
export type ResolversRecord = { [key: string]: Resolver }
