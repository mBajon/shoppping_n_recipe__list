import { EventEmitter} from '@angular/core' 

import { Recipe } from './recipe.model'

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>()

    private recipes: Recipe[] = [new Recipe(' Best Burgers in Town', 'Burger and chips', 'http://ocdn.eu/pulscms-transforms/1/3WcktkpTURBXy83NDJlZDE0NjBkMTc1YzMwOWE5N2Y3MjYwNTRmNjJhMy5qcGeSlQMAAM0OQ80IBpMFzQNSzQHe'),
    new Recipe(' Best Burgers in Town', 'Burger and chips', 'http://ocdn.eu/pulscms-transforms/1/3WcktkpTURBXy83NDJlZDE0NjBkMTc1YzMwOWE5N2Y3MjYwNTRmNjJhMy5qcGeSlQMAAM0OQ80IBpMFzQNSzQHe')
    ]

    getRecipes() {
        return this.recipes.slice();
    }
}