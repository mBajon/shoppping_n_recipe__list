import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipies : Recipe[]=[new Recipe(' Best Burgers in Town','Burger and chips','http://ocdn.eu/pulscms-transforms/1/3WcktkpTURBXy83NDJlZDE0NjBkMTc1YzMwOWE5N2Y3MjYwNTRmNjJhMy5qcGeSlQMAAM0OQ80IBpMFzQNSzQHe'),new Recipe(' Best Burgers in Town','Burger and chips','http://ocdn.eu/pulscms-transforms/1/3WcktkpTURBXy83NDJlZDE0NjBkMTc1YzMwOWE5N2Y3MjYwNTRmNjJhMy5qcGeSlQMAAM0OQ80IBpMFzQNSzQHe')
]
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe)
    console.log(recipe)
  }

}
