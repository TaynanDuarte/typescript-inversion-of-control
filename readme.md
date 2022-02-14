# A simple example of how to apply inversion of control using tsyringe lib

- To test it you just need to change IOC_CONTAINER.ts file. 
- Uncomment the code below "Using MySql" and comment the code below "Using MongoDb" to change the database.

```typescript

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


```

---

## NPM Package
  https://www.npmjs.com/package/tsyringe
