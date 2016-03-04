System.register(["angular2/core", 'ng2-material/all', "./services/shopping-list.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, all_1, shopping_list_service_1;
    var ShoppingListEditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            }],
        execute: function() {
            ShoppingListEditComponent = (function () {
                function ShoppingListEditComponent(_shoppingListService) {
                    this._shoppingListService = _shoppingListService;
                    //out save and delete change events
                    //outputs are kept here to communicate to the other components state
                    this.isEditing = new core_1.EventEmitter();
                    this.item = {
                        todo: {
                            name: '',
                            amount: 0
                        },
                        index: ''
                    };
                }
                ShoppingListEditComponent.prototype.saveItem = function (name, amount, index) {
                    //this.item = {
                    //    todo: {
                    //        name:name.value,
                    //        amount:amount.value
                    //    },
                    //    index: index
                    //};
                    //emit item to save
                    //this.savedItem.emit(this.item);
                    this._shoppingListService.updateItems({ name: name.value, amount: amount.value }, index);
                    this.isEditing.emit(false);
                };
                ShoppingListEditComponent.prototype.onDelete = function (item) {
                    //because we are using a service we don't need emitters
                    this._shoppingListService.deleteItems(item);
                    this.isEditing.emit(false);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ShoppingListEditComponent.prototype, "item", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ShoppingListEditComponent.prototype, "isEditing", void 0);
                ShoppingListEditComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list-edit',
                        directives: [all_1.MATERIAL_DIRECTIVES],
                        template: "\n    <md-subheader class=\"md-no-sticky\">Edit Item</md-subheader>\n    <br>\n    <div class=\"editForm\" >\n        <div layout-gt-sm=\"row\">\n            <md-input-container class=\"md-block\"  flex-gt-sm>\n                <label>Edit Item</label>\n                <input md-input [value]=\"item.todo.name\" #editName>\n            </md-input-container>\n            <md-input-container class=\"md-block\" flex-gt-sm>\n                <label>Amount</label>\n                <input md-input type=\"number\" step=\"any\" [value]=\"item.todo.amount\" #editAmount/>\n            </md-input-container>\n        </div>\n        <button md-raised-button class=\"md-accent md-hue-1\" (click)=\"saveItem(editName, editAmount, item.index)\">Save Item</button>\n        <button md-raised-button class=\"md-accent md-hue-1\" (click)=\"onDelete(item)\">Delete Item</button>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
                ], ShoppingListEditComponent);
                return ShoppingListEditComponent;
            })();
            exports_1("ShoppingListEditComponent", ShoppingListEditComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmcuZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiU2hvcHBpbmdMaXN0RWRpdENvbXBvbmVudCIsIlNob3BwaW5nTGlzdEVkaXRDb21wb25lbnQuY29uc3RydWN0b3IiLCJTaG9wcGluZ0xpc3RFZGl0Q29tcG9uZW50LnNhdmVJdGVtIiwiU2hvcHBpbmdMaXN0RWRpdENvbXBvbmVudC5vbkRlbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBZ0NJQSxtQ0FBb0JBLG9CQUF5Q0E7b0JBQXpDQyx5QkFBb0JBLEdBQXBCQSxvQkFBb0JBLENBQXFCQTtvQkFKN0RBLG1DQUFtQ0E7b0JBQ25DQSxvRUFBb0VBO29CQUMxREEsY0FBU0EsR0FBR0EsSUFBSUEsbUJBQVlBLEVBQUVBLENBQUNBO29CQUdyQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0E7d0JBQ1JBLElBQUlBLEVBQUVBOzRCQUNGQSxJQUFJQSxFQUFDQSxFQUFFQTs0QkFDUEEsTUFBTUEsRUFBQ0EsQ0FBQ0E7eUJBQ1hBO3dCQUNEQSxLQUFLQSxFQUFFQSxFQUFFQTtxQkFDWkEsQ0FBQ0E7Z0JBQ05BLENBQUNBO2dCQUNERCw0Q0FBUUEsR0FBUkEsVUFBU0EsSUFBSUEsRUFBRUEsTUFBTUEsRUFBRUEsS0FBS0E7b0JBQ3hCRSxlQUFlQTtvQkFDZkEsYUFBYUE7b0JBQ2JBLDBCQUEwQkE7b0JBQzFCQSw2QkFBNkJBO29CQUM3QkEsUUFBUUE7b0JBQ1JBLGtCQUFrQkE7b0JBQ2xCQSxJQUFJQTtvQkFDSkEsbUJBQW1CQTtvQkFDbkJBLGlDQUFpQ0E7b0JBRWpDQSxJQUFJQSxDQUFDQSxvQkFBb0JBLENBQUNBLFdBQVdBLENBQUNBLEVBQUNBLElBQUlBLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLEVBQUVBLE1BQU1BLEVBQUVBLE1BQU1BLENBQUNBLEtBQUtBLEVBQUNBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO29CQUN2RkEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQy9CQSxDQUFDQTtnQkFDREYsNENBQVFBLEdBQVJBLFVBQVNBLElBQUlBO29CQUVURyx1REFBdURBO29CQUN2REEsSUFBSUEsQ0FBQ0Esb0JBQW9CQSxDQUFDQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFDNUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO2dCQUMvQkEsQ0FBQ0E7Z0JBbENESDtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFDQSwyQ0FBSUEsVUFBU0E7Z0JBSXRCQTtvQkFBQ0EsYUFBTUEsRUFBRUE7O21CQUFDQSxnREFBU0EsVUFBc0JBO2dCQTlCN0NBO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLG9CQUFvQkE7d0JBQzlCQSxVQUFVQSxFQUFDQSxDQUFDQSx5QkFBbUJBLENBQUNBO3dCQUNoQ0EsUUFBUUEsRUFBQ0EsbzNCQWlCUkE7cUJBQ0pBLENBQUNBOzs4Q0F3Q0RBO2dCQUFEQSxnQ0FBQ0E7WUFBREEsQ0E3REEsQUE2RENBLElBQUE7WUE3REQsaUVBNkRDLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC9zaG9wcGluZy5lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge01BVEVSSUFMX0RJUkVDVElWRVN9IGZyb20gJ25nMi1tYXRlcmlhbC9hbGwnO1xuaW1wb3J0IHtMaXN0SXRlbXN9IGZyb20gXCIuL2xpc3RNb2RlbFwiO1xuaW1wb3J0IHtTaG9wcGluZ0xpc3RTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9zaG9wcGluZy1saXN0LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzaG9wcGluZy1saXN0LWVkaXQnLFxuICAgIGRpcmVjdGl2ZXM6W01BVEVSSUFMX0RJUkVDVElWRVNdLFxuICAgIHRlbXBsYXRlOmBcbiAgICA8bWQtc3ViaGVhZGVyIGNsYXNzPVwibWQtbm8tc3RpY2t5XCI+RWRpdCBJdGVtPC9tZC1zdWJoZWFkZXI+XG4gICAgPGJyPlxuICAgIDxkaXYgY2xhc3M9XCJlZGl0Rm9ybVwiID5cbiAgICAgICAgPGRpdiBsYXlvdXQtZ3Qtc209XCJyb3dcIj5cbiAgICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXIgY2xhc3M9XCJtZC1ibG9ja1wiICBmbGV4LWd0LXNtPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5FZGl0IEl0ZW08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBtZC1pbnB1dCBbdmFsdWVdPVwiaXRlbS50b2RvLm5hbWVcIiAjZWRpdE5hbWU+XG4gICAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXIgY2xhc3M9XCJtZC1ibG9ja1wiIGZsZXgtZ3Qtc20+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkFtb3VudDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IG1kLWlucHV0IHR5cGU9XCJudW1iZXJcIiBzdGVwPVwiYW55XCIgW3ZhbHVlXT1cIml0ZW0udG9kby5hbW91bnRcIiAjZWRpdEFtb3VudC8+XG4gICAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gbWQtcmFpc2VkLWJ1dHRvbiBjbGFzcz1cIm1kLWFjY2VudCBtZC1odWUtMVwiIChjbGljayk9XCJzYXZlSXRlbShlZGl0TmFtZSwgZWRpdEFtb3VudCwgaXRlbS5pbmRleClcIj5TYXZlIEl0ZW08L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBtZC1yYWlzZWQtYnV0dG9uIGNsYXNzPVwibWQtYWNjZW50IG1kLWh1ZS0xXCIgKGNsaWNrKT1cIm9uRGVsZXRlKGl0ZW0pXCI+RGVsZXRlIEl0ZW08L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdMaXN0RWRpdENvbXBvbmVudHtcblxuICAgIC8vYmluZCBpbnB1dCBpdGVtIHRvIHRoaXMuaXRlbVxuICAgIEBJbnB1dCgpIGl0ZW06IE9iamVjdDtcblxuICAgIC8vb3V0IHNhdmUgYW5kIGRlbGV0ZSBjaGFuZ2UgZXZlbnRzXG4gICAgLy9vdXRwdXRzIGFyZSBrZXB0IGhlcmUgdG8gY29tbXVuaWNhdGUgdG8gdGhlIG90aGVyIGNvbXBvbmVudHMgc3RhdGVcbiAgICBAT3V0cHV0KCkgaXNFZGl0aW5nID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2hvcHBpbmdMaXN0U2VydmljZTogU2hvcHBpbmdMaXN0U2VydmljZSl7XG4gICAgICAgIHRoaXMuaXRlbSA9IHtcbiAgICAgICAgICAgIHRvZG86IHtcbiAgICAgICAgICAgICAgICBuYW1lOicnLFxuICAgICAgICAgICAgICAgIGFtb3VudDowXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5kZXg6ICcnXG4gICAgICAgIH07XG4gICAgfVxuICAgIHNhdmVJdGVtKG5hbWUsIGFtb3VudCwgaW5kZXgpOnZvaWQge1xuICAgICAgICAvL3RoaXMuaXRlbSA9IHtcbiAgICAgICAgLy8gICAgdG9kbzoge1xuICAgICAgICAvLyAgICAgICAgbmFtZTpuYW1lLnZhbHVlLFxuICAgICAgICAvLyAgICAgICAgYW1vdW50OmFtb3VudC52YWx1ZVxuICAgICAgICAvLyAgICB9LFxuICAgICAgICAvLyAgICBpbmRleDogaW5kZXhcbiAgICAgICAgLy99O1xuICAgICAgICAvL2VtaXQgaXRlbSB0byBzYXZlXG4gICAgICAgIC8vdGhpcy5zYXZlZEl0ZW0uZW1pdCh0aGlzLml0ZW0pO1xuXG4gICAgICAgIHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UudXBkYXRlSXRlbXMoe25hbWU6IG5hbWUudmFsdWUsIGFtb3VudDogYW1vdW50LnZhbHVlfSwgaW5kZXgpO1xuICAgICAgICB0aGlzLmlzRWRpdGluZy5lbWl0KGZhbHNlKTtcbiAgICB9XG4gICAgb25EZWxldGUoaXRlbSk6IHZvaWR7XG5cbiAgICAgICAgLy9iZWNhdXNlIHdlIGFyZSB1c2luZyBhIHNlcnZpY2Ugd2UgZG9uJ3QgbmVlZCBlbWl0dGVyc1xuICAgICAgICB0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWNlLmRlbGV0ZUl0ZW1zKGl0ZW0pO1xuICAgICAgICB0aGlzLmlzRWRpdGluZy5lbWl0KGZhbHNlKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
