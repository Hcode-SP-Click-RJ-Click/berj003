import { DataSource } from "typeorm";

export default new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "user_berj03",
    password: "root",
    database: "berj03",
    synchronize: true,
    logging: true,
    migrations: ["typeorm/migrations/*.ts"],
});