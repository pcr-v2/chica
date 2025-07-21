/*
 * Prisma disconnect 는 명시적으로 하지 않는다.
 * 개발 환경에서 PrismaClient 인스턴스가 추가 되는 경우가 발생할 수 있어 아래와 같이 설정한다.
 * https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/databases-connections#do-not-explicitly-disconnect
 */
// import { PrismaClient as MysqlPrismaClient } from "../prisma/generated/prisma";
import { PrismaClient as MysqlPrismaClient } from "../prisma/generated";

const globalForPrisma = globalThis as unknown as {
  mysqlPrisma?: MysqlPrismaClient;
};

export const mysqlPrisma =
  globalForPrisma.mysqlPrisma ||
  new MysqlPrismaClient({
    // log: [
    //   {
    //     emit: "stdout",
    //     level: "query",
    //   },
    // ],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.mysqlPrisma = mysqlPrisma;
}
