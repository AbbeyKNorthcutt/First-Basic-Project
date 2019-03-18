import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/app/Header/header.component';
import { RecipeComponent } from './Header/Recipe-Book/Recipe/recipe.component';
import { RecipeDetailComponent } from 'src/app/Header/Recipe-Book/Recipe-Detail/recipe.component.detail';
import { RecipeItemComponent } from 'src/app/Header/Recipe-Book/Recipe-Item/recipe.component.item';
import { RecipeListComponent } from 'src/app/Header/Recipe-Book/Recipe-List/recipe.component.list';
import { IngredientsComponent } from 'src/app/Header/Shopping-List/Ingredients/ingredients.component';
import { ShoppingListComponent } from 'src/app/Header/Shopping-List/Shopping-List/shopping.list.component';
import { ShoppingListEditComponent } from 'src/app/Header/Shopping-List/Shopping-List-Edit/shopping.list.edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
    IngredientsComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
