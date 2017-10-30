import { EventEmitter, Injectable } from '@angular/core'
import { Ingredient } from '../common/ingredient.model'
import { Recipe } from './recipe.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service'

@Injectable()
export class RecipeService {
   

    private recipes: Recipe[] = [
        new Recipe(' Best Burgers in Town',
            'Burger and chips',
            'http://ocdn.eu/pulscms-transforms/1/3WcktkpTURBXy83NDJlZDE0NjBkMTc1YzMwOWE5N2Y3MjYwNTRmNjJhMy5qcGeSlQMAAM0OQ80IBpMFzQNSzQHe',
            [
                new Ingredient('meat', 2),
                new Ingredient('fries', 20)
            ])
        ,
        new Recipe(' Best Burgers in Town',
            'Burger and chips',
            'http://ocdn.eu/pulscms-transforms/1/3WcktkpTURBXy83NDJlZDE0NjBkMTc1YzMwOWE5N2Y3MjYwNTRmNjJhMy5qcGeSlQMAAM0OQ80IBpMFzQNSzQHe',
            [
                new Ingredient('meat', 1),
                new Ingredient('fries', 50)
            ])
    ]

    constructor(private shoppingListService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id:number) {
        return this.recipes[id]
    }


    addIngredientsToSHoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients)
    }
}