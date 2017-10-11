import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model'
import {RecipeService} from '../../recipe.service'

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService ) { }

  ngOnInit() { }

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe)

  }
}
