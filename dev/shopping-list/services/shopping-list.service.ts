import {Injectable} from 'angular2/core';
import {ListItems} from "../listModel";
import {shopping_list} from "../services/mock-data";


@Injectable()

export class ShoppingListService{
    constructor(){

    }
    getItems() {
        return shopping_list;
    }
    insertItems(item: ListItems): void{
        shopping_list.push(item);
    }
    deleteItems(item: ListItems): void{
        shopping_list.splice(shopping_list.indexOf(item),1);
    }
    updateItems(item:ListItems ,index:number): void{
        shopping_list[index] = item;
    }
}