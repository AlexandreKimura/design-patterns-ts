import { MyDatabaseFunction } from './db/my-database-function';

const db1 = MyDatabaseFunction;
db1.add({ name: 'Alenxadre', age: 24 });
db1.add({ name: 'Alenxadre1', age: 24 });

export { db1 };
