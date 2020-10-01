
/**
 * yarn tsc = compila
 * yarn dev = roda nodemon (pre configurado no package.json)
 */

import prisma from 'prisma/client'
import server from './graphql'


server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});



prisma.user.count().then(console.log)

