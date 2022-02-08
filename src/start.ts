import "reflect-metadata";
import { ProductServiceAdapter } from "./infrastructure/adapter/product.service.adapter";

const productService = ProductServiceAdapter.getServiceInstance();

productService.getById("123");
