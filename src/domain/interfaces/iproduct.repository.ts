import { Product } from "../entities/product";
import { IRepositoryBase } from "./irepositoryBase";

export interface IProductRepository extends IRepositoryBase<Product> {}
