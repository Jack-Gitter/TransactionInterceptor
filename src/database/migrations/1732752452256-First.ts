import { MigrationInterface, QueryRunner } from "typeorm";

export class First1732752452256 implements MigrationInterface {
    name = 'First1732752452256'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "invoice" ("id" SERIAL NOT NULL, "user" character varying NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_15d25c200d9bcd8a33f698daf18" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "inventory" ("id" SERIAL NOT NULL, "itemName" character varying NOT NULL, "count" integer NOT NULL, CONSTRAINT "PK_82aa5da437c5bbfb80703b08309" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "inventory"`);
        await queryRunner.query(`DROP TABLE "invoice"`);
    }

}