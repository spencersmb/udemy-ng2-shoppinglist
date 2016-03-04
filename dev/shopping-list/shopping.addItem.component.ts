import {Component, EventEmitter, Output} from "angular2/core";
import {ControlGroup} from "angular2/common";
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {ListItems} from "./listModel";
import {ChangeDetectorRef} from "angular2/src/core/change_detection/change_detector_ref";
import {ShoppingListService} from "./services/shopping-list.service";

@Component({
    selector: 'shopping-add-item',
    directives:[MATERIAL_DIRECTIVES],
    templateUrl:'dev/shopping-list/views/add-new-input.html'
})

export class ShoppingAddItem{

    myForm: ControlGroup;

    item: ListItems;

    //to send object to another controller
    //step 1 create event emitter
    //step 2 create click event to emit the new event
    //step 3 create output
    //step 4 create function to fire (itemAdded)="onItemAdded($event)"

    //Removed output because we are inserting items using a service
    //@Output() itemAdded = new EventEmitter<ListItems>();

    constructor(
        private cdr: ChangeDetectorRef,
        private _shoppingListService: ShoppingListService

    ){
        this.item = {
            name: '',
            amount: 0
        }
    }
    submitList(item: ListItems):void {

        if(item.name != ''){
            //could also just emit this.item instead of passing variable...
            //this.itemAdded.emit(item);

            //v2 - added service methods
            this._shoppingListService.insertItems(item);
            this.item = {
                name: '',
                amount: 0
            };
            //detect change of reset
            this.cdr.detectChanges();
        }
    }
}