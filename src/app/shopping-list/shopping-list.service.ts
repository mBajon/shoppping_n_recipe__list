import { Ingredient } from '../common/ingredient.model'
import { EventEmitter } from '@angular/core'
import {Subject } from 'rxjs/Subject'

export class ShoppingListService {
    private ingredients: Ingredient[] = [new Ingredient("Apple", 5), new Ingredient("Banana", 5)]
    ingredientsChanged = new Subject<Ingredient[]>()

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
        this.ingredientsChanged.next(this.ingredients.slice())
    }
    addIngredients(ingredients: Ingredient[]) {
        // for (let ingredient of ingredients) {
        //   this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
      }

}