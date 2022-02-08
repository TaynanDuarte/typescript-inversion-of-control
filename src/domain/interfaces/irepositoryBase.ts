export interface IRepositoryBase<T> {
  create(obj: T): Promise<void>;
  getById(id: string): Promise<T>;
  update(obj: T): Promise<T>;
  delete(id: string): Promise<void>;
}
