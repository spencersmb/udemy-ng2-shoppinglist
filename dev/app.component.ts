import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {ShoppingListComponent} from "./shopping-list/shoppingList.component";

@Component({
    selector: 'my-app',
    directives:[MATERIAL_DIRECTIVES, ShoppingListComponent],
    template: `

        <section class="app-content" flex="" layout="column" layout-align="start center">
        <h1>Todo List</h1>

        <md-content class="examples" layout-padding="" md-scroll-y="">
            <shopping-list></shopping-list>
        </md-content>
    `
})

export class AppComponent {

}
