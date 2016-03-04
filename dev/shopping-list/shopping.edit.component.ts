import {Component, Input, EventEmitter, Output} from "angular2/core";
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {ListItems} from "./listModel";
import {ShoppingListService} from "./services/shopping-list.service";

@Component({
    selector: 'shopping-list-edit',
    directives:[MATERIAL_DIRECTIVES],
    template:`
    <md-subheader class="md-no-sticky">Edit Item</md-subheader>
    <br>
    <div class="editForm" >
        <div layout-gt-sm="row">
            <md-input-container class="md-block"  flex-gt-sm>
                <label>Edit Item</label>
                <input md-input [value]="item.todo.name" #editName>
            </md-input-container>
            <md-input-container class="md-block" flex-gt-sm>
                <label>Amount</label>
                <input md-input type="number" step="any" [value]="item.todo.amount" #editAmount/>
            </md-input-container>
        </div>
        <button md-raised-button class="md-accent md-hue-1" (click)="saveItem(editName, editAmount, item.index)">Save Item</button>
        <button md-raised-button class="md-accent md-hue-1" (click)="onDelete(item)">Delete Item</button>
    </div>
    `
})

export class ShoppingListEditComponent{

    //bind input item to this.item
    @Input() item: Object;

    //out save and delete change events
    //outputs are kept here to communicate to the other components state
    @Output() isEditing = new EventEmitter();

    constructor(private _shoppingListService: ShoppingListService){
        this.item = {
            todo: {
                name:'',
                amount:0
            },
            index: ''
        };
    }
    saveItem(name, amount, index):void {
        //this.item = {
        //    todo: {
        //        name:name.value,
        //        amount:amount.value
        //    },
        //    index: index
        //};
        //emit item to save
        //this.savedItem.emit(this.item);

        this._shoppingListService.updateItems({name: name.value, amount: amount.value}, index);
        this.isEditing.emit(false);
    }
    onDelete(item): void{

        //because we are using a service we don't need emitters
        this._shoppingListService.deleteItems(item);
        this.isEditing.emit(false);
    }
}