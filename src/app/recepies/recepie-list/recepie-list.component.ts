import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service'

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes: Recipe[]
  constructor(private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes()
  }

  onNewRecipe() {
    this.router.navigate(['new'],{relativeTo:this.route})
  }

}
