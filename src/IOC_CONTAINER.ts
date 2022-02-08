import { container } from "tsyringe";
import { IProductRepository } from "./domain/interfaces/iproduct.repository";
import { ProductMongoDbRepository } from "./infrastructure/repositories/mongodb/product.mongodb.repository";
import { ProductMysqlRepository } from "./infrastructure/repositories/mysql/product.mysql.repository";

export const IOC = {
  productRepository: "productRepository",
};

// ********** Using MongoDb **********
container.register<IProductRepository>(
  IOC.productRepository,
  ProductMongoDbRepository
);

// ********** Using MySql **********
// container.register<IProductRepository>(
//   IOC.productRepository,
//   ProductMysqlRepository
// );

export { container };
