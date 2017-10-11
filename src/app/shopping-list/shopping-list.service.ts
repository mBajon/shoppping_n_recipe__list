import { Ingredient } from '../common/ingredient.model'

export class ShoppingListService {
   private  ingredients: Ingredient[] = [new Ingredient("Apple", 5), new Ingredient("Banana", 5)]

   getIngredients(){
       return this.ingredients.slice();
   }

   addIngredient(ingredient : Ingredient){
       this.ingredients.push(ingredient)
   }

}