import { Product } from "../../../domain/entities/product";
import { IProductRepository } from "../../../domain/interfaces/iproduct.repository";

export class ProductMysqlRepository implements IProductRepository {
  async create(obj: Product): Promise<void> {
    console.log(`create: Using MySql - product: ${obj.Name}`);
  }

  async getById(id: string): Promise<Product> {
    console.log(`getById: Using MySql - id: ${id}`);
    return new Product(id, "smart phone", 3000.0);
  }

  async update(obj: Product): Promise<Product> {
    console.log(`update: Using MySql - product: ${obj.Name}`);
    return obj;
  }

  async delete(id: string): Promise<void> {
    console.log(`delete: Using MySql - id: ${id}`);
  }
}
