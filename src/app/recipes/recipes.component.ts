import { Recipe } from './recipe-model';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    // subscribe is listening to any changes that happen
    // here I set the recipe to the one we got from the event
    // matches event in recipe service, testing making a change in git

    this.recipeService.recipeSelected.subscribe(
       (recipe: Recipe) => {
         this.selectedRecipe = recipe;
       }
     ) ;
  }

}
