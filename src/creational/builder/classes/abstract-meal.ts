import { MealCompositeProtocol } from '../interfaces/meal-composite-protocol';

export abstract class AbstractMeal implements MealCompositeProtocol {
  constructor(private nome: string, private price: number) {}

  getPrice(): number {
    return this.price;
  }
}
