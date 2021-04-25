import { MyDatabaseFunction } from './db/my-database-function';
import { db1 } from './module-a';

const db2 = MyDatabaseFunction;
db1.add({ name: 'Alenxadre3', age: 24 });
db1.add({ name: 'Alenxadre4', age: 24 });

console.log(db1 === db2); //São iguais
