import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';

import { RecepiesComponent } from './recepies/recepies.component'
import { ShoppingListComponent } from './shopping-list/shopping-list.component'
import {RecipeStartComponent} from './recepies/recipe-start/recipe-start.component'
import {RecepieDetailComponent} from './recepies/recepie-detail/recepie-detail.component'
import {RecipeEditComponent}  from './recepies/recipe-edit/recipe-edit.component'


const appRoutes = [
  {path: '', redirectTo:'/recipes', pathMatch:'full'},
  {path: 'recipes', component:RecepiesComponent, children : [
    {path: '', component:RecipeStartComponent},
    {path: 'new', component:RecipeEditComponent},
    {path: ':id', component:RecepieDetailComponent},
    {path: ':id/edit', component:RecipeEditComponent}

  ]},
  {path: 'shopping-list', component:ShoppingListComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
