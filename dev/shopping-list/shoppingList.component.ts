import {Component} from "angular2/core";


@Component({
    selector: 'shopping-list',
    templateUrl:'dev/shopping-list/views/list-view.html',
    directives:[
        MATERIAL_DIRECTIVES,
        ShoppingAddItem,
        ShoppingListEditComponent],
    styleUrls:['src/css/list_item.css'],
    providers:[ShoppingListService],
})

export class ShoppingListComponent{

    listItems: ListItems[];

    selectedItem:Object;

    isEditing:boolean;

    constructor(
        private _shoppingListService: ShoppingListService
    ){
        //this.listItems = [
        //    {
        //        name:'item 1',
        //        amount:2
        //    }
        //];

        //hide
        this.isEditing=false;

    }
    ngOnInit():void{
        this.listItems = this._shoppingListService.getItems();
    }
    onSelect(item:ListItems, i:number){
        //pass local variable copy to editing component
        this.selectedItem = {
            todo: item,
            index: i
        };

        //show
        this.isEditing=true;

    }
    onItemEdit(isEditing:boolean){
        if(isEditing === false){
            this.isEditing = false;
        }
    }
}