import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


prisma.user.count().then(console.log)

