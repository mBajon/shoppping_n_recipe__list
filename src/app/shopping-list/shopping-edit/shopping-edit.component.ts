import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgModel} from '@angular/forms'
import { Ingredient } from '../../common/ingredient.model'
import { ShoppingListService } from '../shopping-list.service'
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  subscription : Subscription
  editMode=false
  editItemIndex:number
  editedIngredient: Ingredient
  @ViewChild('f') slForm: NgForm

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {

    this.subscription=this.shoppingListService.startedEditing.subscribe((index)=>{
      this.editMode=true
      this.editItemIndex=index
      this.editedIngredient=this.shoppingListService.getIngredient(index)
      this.slForm.setValue({
        name:this.editedIngredient.name,
        amount: this.editedIngredient.amount
      })
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

  onAddItem(form: NgForm) {
    console.log("222")
    const value = form.value
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode){
      this.shoppingListService.updateIngredient(this.editItemIndex,newIngredient)
    } else {
    this.shoppingListService.addIngredient(newIngredient)
  }
  this.editMode=false
  form.reset()
  }

  onClear(){
    this.slForm.reset()
    this.editMode=false
  }

  onDeleteItem() {
    this.shoppingListService.deleteIngredient(this.editItemIndex) 
    this.onClear()
   }

}
