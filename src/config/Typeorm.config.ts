import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "quiz",
  entities: [__dirname + "/../**/*.entity{.ts,.js}"],
  synchronize: true,
  logging: true,
};
