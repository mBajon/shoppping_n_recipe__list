import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import {Recipe} from '../recipe.model'
import {RecipeService} from '../recipe.service'

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {
 // @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes : Recipe[]
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipes()
  } 

}
