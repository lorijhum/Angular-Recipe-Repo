import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe-model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

   private recipes: Recipe[] = [
    new Recipe(
       'Flank Steak',
       'Flank Steak dinner',
     'http://images.media-allrecipes.com/userphotos/150x150/225844.jpg',
      [
      new Ingredient('Flank Steak', 1),
      new Ingredient('potatoes', 6)
      ]),
    new Recipe(
      'Pork Marsela',
      'Pork Marsela with mashed potatoes',
    'http://images.media-allrecipes.com/userphotos/150x150/1015177.jpg',
     [
      new Ingredient('Pork', 1),
      new Ingredient('potatoes', 6)
     ])
 ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    // this returns a new array that is an exact copy of the recipe array by using slice()
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.AddIngredients(ingredients);
  }
}
