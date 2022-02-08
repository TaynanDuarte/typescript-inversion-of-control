export class Product {
  constructor(
    private readonly id: string,
    private readonly name: string,
    private readonly price: number
  ) {}

  get Id() {
    return this.id;
  }

  get Name() {
    return this.name;
  }

  get Price() {
    return this.price;
  }
}
