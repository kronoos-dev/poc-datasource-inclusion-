import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'dev' ? ['query'] : []
})

export { prisma };
