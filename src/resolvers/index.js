import { extractFragmentReplacements } from 'prisma-binding'
import Query from './Query'
import Mutation from './Mutation'
import Subscription from './Subscription'
import User from './User'
import Post from './Post'
import Comment from './Comment'
import Group from './Group'
import Menber from './Menber'
const resolvers = {
    Query,
    Mutation,
    Subscription,
    User,
    Post,
    Comment,
    Group,
    Menber
}

const fragmentReplacements = extractFragmentReplacements(resolvers)

export { resolvers, fragmentReplacements }