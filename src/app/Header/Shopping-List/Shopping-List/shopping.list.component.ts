import { Component, OnInit } from '@angular/core';

import { Ingredient } from 'src/app/Shared/ingredient.model';

@Component ({
    selector: 'app-shopping-list',
    templateUrl: './shopping.list.component.html',
})
export class ShoppingListComponent implements OnInit {
ingredients = Ingredient[1] = [
new Ingredient('Apples', 5),
new Ingredient('Tomatoes', 10),
];

constructor() {

}

ngOnInit() {

}

}
