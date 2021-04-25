import { MainDishBuilder } from './classes/main-dish-builder';
import { MealBox } from './classes/meal-box';
import { Beans, Meat, Rice } from './classes/meals';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

const rice = new Rice('Arroz', 9);
const beans = new Beans('Feijão', 6);
const meat = new Meat('Carne', 21);
const mealBox = new MealBox();

mealBox.add(rice, beans, meat);

/*console.log(mealBox);
console.log(mealBox.getPrice());*/

//Agora usando o padrão builder

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDessert();
/*console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());*/

mainDishBuilder.reset();

const mainDishBuilder2 = new MainDishBuilder();
mainDishBuilder2.makeBeverage();
/*console.log(mainDishBuilder2.getMeal());
console.log(mainDishBuilder2.getPrice());*/

const veganDishBuilder = new VeganDishBuilder();
const veganMeal = veganDishBuilder.makeMeal().getMeal();
console.log(veganMeal);
console.log(veganMeal.getPrice());
