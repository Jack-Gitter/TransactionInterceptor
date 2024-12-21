import { pool } from './pool';

pool.query(
  `CREATE TABLE "invoice" ("id" SERIAL NOT NULL, "user" character varying NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_15d25c200d9bcd8a33f698daf18" PRIMARY KEY ("id"))`,
);
pool.query(
  `CREATE TABLE "inventory" ("id" SERIAL NOT NULL, "itemName" character varying NOT NULL, "count" integer NOT NULL, CONSTRAINT "PK_82aa5da437c5bbfb80703b08309" PRIMARY KEY ("id"))`,
);
pool.query(
  `CREATE TABLE "account_balance" ("id" SERIAL NOT NULL, "user" character varying NOT NULL, "balance" integer NOT NULL, CONSTRAINT "PK_bd893045760f719e24a95a42562" PRIMARY KEY ("id"))`,
);
