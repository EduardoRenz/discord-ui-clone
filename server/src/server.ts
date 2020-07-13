
/**
 * yarn tsc = compila
 * yarn dev = roda nodemon (pre configurado no package.json)
 */

import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
import server from './graphql'


server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});



prisma.user.count().then(console.log)

