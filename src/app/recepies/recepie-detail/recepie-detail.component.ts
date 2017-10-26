import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service'

import {ActivatedRoute, Params, Router} from '@angular/router'

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit {

  recipe: Recipe
  id: number

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router              
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params)=>{
        this.id=+params['id'];
        this.recipe=this.recipeService.getRecipe(this.id);
      }
    );
  }

  onAddToShopingList() {
    this.recipeService.addIngredientsToSHoppingList(this.recipe.ingredients)
  }

  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.route})
  }

}
