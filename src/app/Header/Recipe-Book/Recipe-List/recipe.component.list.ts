import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/Header/Recipe-Book/Recipe/recipe.model';

@Component ({
    selector: 'app-recipe-list',
    templateUrl: './recipe.component.list.html',
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
new Recipe('A Recipe of Delicious Testing', 'Complete the test and cake will be served.', 'https://bit.ly/2O2Nhv7')
];
    constructor() {

    }
    ngOnInit() {

    }
}
