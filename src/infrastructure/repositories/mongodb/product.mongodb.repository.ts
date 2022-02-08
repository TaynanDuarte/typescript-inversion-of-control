import { Product } from "../../../domain/entities/product";
import { IProductRepository } from "../../../domain/interfaces/iproduct.repository";

export class ProductMongoDbRepository implements IProductRepository {
  async create(obj: Product): Promise<void> {
    console.log(`create: Using MongoDb - product: ${obj.Name}`);
  }

  async getById(id: string): Promise<Product> {
    console.log(`getById: Using mongodb - id: ${id}`);
    return new Product(id, "smart phone", 3000.0);
  }

  async update(obj: Product): Promise<Product> {
    console.log(`update: Using mongodb - product: ${obj.Name}`);
    return obj;
  }

  async delete(id: string): Promise<void> {
    console.log(`delete: Using mongodb - id: ${id}`);
  }
}
