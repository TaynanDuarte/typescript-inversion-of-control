import { Product } from "../entities/product";
import { IProductRepository } from "../interfaces/iproduct.repository";

export class ProductService {
  constructor(private readonly productRepository: IProductRepository) {}

  async create(product: Product) {
    await this.productRepository.create(product);
  }

  async getById(id: string) {
    return await this.productRepository.getById(id);
  }

  async update(product: Product) {
    return await this.productRepository.update(product);
  }

  async delete(id: string) {
    await this.productRepository.delete(id);
  }
}
