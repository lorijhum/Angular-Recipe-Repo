import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  // when adding ingredients, they were not shown in the app because we are using slice(), which was
  // returning the original.  we could have just removed slice() and sent the original array but
  // we used event emitter instead
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
  new Ingredient('Flank Steak', 1),
  new Ingredient('Potatoes', 2),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  AddIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  AddIngredients(ingredients: Ingredient[]) {
    // using an ES6 feature (spread operator)
    // to turn an array of elements into a list of elements to push the list of ingredients to the array
    this.ingredients.push(...ingredients);
    // then we have to emit that our ingredients have changed, so we pass a copy of it
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
