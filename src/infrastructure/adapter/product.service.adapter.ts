import { container, inject, injectable } from "tsyringe";
import { IProductRepository } from "../../domain/interfaces/iproduct.repository";
import { ProductService } from "../../domain/services/product.service";
import { IOC } from "../../IOC_CONTAINER";

@injectable()
export class ProductServiceAdapter {
  constructor(
    @inject(IOC.productRepository)
    private readonly productRepository: IProductRepository
  ) {}

  static getServiceInstance() {
    const repository = container.resolve(ProductServiceAdapter);
    return new ProductService(repository.productRepository);
  }
}
