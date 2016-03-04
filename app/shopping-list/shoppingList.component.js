System.register(["angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent(_shoppingListService) {
                    //this.listItems = [
                    //    {
                    //        name:'item 1',
                    //        amount:2
                    //    }
                    //];
                    this._shoppingListService = _shoppingListService;
                    //hide
                    this.isEditing = false;
                }
                ShoppingListComponent.prototype.ngOnInit = function () {
                    this.listItems = this._shoppingListService.getItems();
                };
                ShoppingListComponent.prototype.onSelect = function (item, i) {
                    //pass local variable copy to editing component
                    this.selectedItem = {
                        todo: item,
                        index: i
                    };
                    //show
                    this.isEditing = true;
                };
                ShoppingListComponent.prototype.onItemEdit = function (isEditing) {
                    if (isEditing === false) {
                        this.isEditing = false;
                    }
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list',
                        templateUrl: 'dev/shopping-list/views/list-view.html',
                        directives: [
                            MATERIAL_DIRECTIVES,
                            ShoppingAddItem,
                            ShoppingListEditComponent],
                        styleUrls: ['src/css/list_item.css'],
                        providers: [ShoppingListService],
                    }), 
                    __metadata('design:paramtypes', [Object])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            })();
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmdMaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJTaG9wcGluZ0xpc3RDb21wb25lbnQiLCJTaG9wcGluZ0xpc3RDb21wb25lbnQuY29uc3RydWN0b3IiLCJTaG9wcGluZ0xpc3RDb21wb25lbnQubmdPbkluaXQiLCJTaG9wcGluZ0xpc3RDb21wb25lbnQub25TZWxlY3QiLCJTaG9wcGluZ0xpc3RDb21wb25lbnQub25JdGVtRWRpdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBbUJJQSwrQkFDWUEsb0JBQXlDQTtvQkFFakRDLG9CQUFvQkE7b0JBQ3BCQSxPQUFPQTtvQkFDUEEsd0JBQXdCQTtvQkFDeEJBLGtCQUFrQkE7b0JBQ2xCQSxPQUFPQTtvQkFDUEEsSUFBSUE7b0JBUElBLHlCQUFvQkEsR0FBcEJBLG9CQUFvQkEsQ0FBcUJBO29CQVNqREEsTUFBTUE7b0JBQ05BLElBQUlBLENBQUNBLFNBQVNBLEdBQUNBLEtBQUtBLENBQUNBO2dCQUV6QkEsQ0FBQ0E7Z0JBQ0RELHdDQUFRQSxHQUFSQTtvQkFDSUUsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0Esb0JBQW9CQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQTtnQkFDMURBLENBQUNBO2dCQUNERix3Q0FBUUEsR0FBUkEsVUFBU0EsSUFBY0EsRUFBRUEsQ0FBUUE7b0JBQzdCRywrQ0FBK0NBO29CQUMvQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0E7d0JBQ2hCQSxJQUFJQSxFQUFFQSxJQUFJQTt3QkFDVkEsS0FBS0EsRUFBRUEsQ0FBQ0E7cUJBQ1hBLENBQUNBO29CQUVGQSxNQUFNQTtvQkFDTkEsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBQ0EsSUFBSUEsQ0FBQ0E7Z0JBRXhCQSxDQUFDQTtnQkFDREgsMENBQVVBLEdBQVZBLFVBQVdBLFNBQWlCQTtvQkFDeEJJLEVBQUVBLENBQUFBLENBQUNBLFNBQVNBLEtBQUtBLEtBQUtBLENBQUNBLENBQUFBLENBQUNBO3dCQUNwQkEsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsS0FBS0EsQ0FBQ0E7b0JBQzNCQSxDQUFDQTtnQkFDTEEsQ0FBQ0E7Z0JBbkRMSjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxlQUFlQTt3QkFDekJBLFdBQVdBLEVBQUNBLHdDQUF3Q0E7d0JBQ3BEQSxVQUFVQSxFQUFDQTs0QkFDUEEsbUJBQW1CQTs0QkFDbkJBLGVBQWVBOzRCQUNmQSx5QkFBeUJBLENBQUNBO3dCQUM5QkEsU0FBU0EsRUFBQ0EsQ0FBQ0EsdUJBQXVCQSxDQUFDQTt3QkFDbkNBLFNBQVNBLEVBQUNBLENBQUNBLG1CQUFtQkEsQ0FBQ0E7cUJBQ2xDQSxDQUFDQTs7MENBMkNEQTtnQkFBREEsNEJBQUNBO1lBQURBLENBcERBLEFBb0RDQSxJQUFBO1lBcERELHlEQW9EQyxDQUFBIiwiZmlsZSI6InNob3BwaW5nLWxpc3Qvc2hvcHBpbmdMaXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2hvcHBpbmctbGlzdCcsXG4gICAgdGVtcGxhdGVVcmw6J2Rldi9zaG9wcGluZy1saXN0L3ZpZXdzL2xpc3Qtdmlldy5odG1sJyxcbiAgICBkaXJlY3RpdmVzOltcbiAgICAgICAgTUFURVJJQUxfRElSRUNUSVZFUyxcbiAgICAgICAgU2hvcHBpbmdBZGRJdGVtLFxuICAgICAgICBTaG9wcGluZ0xpc3RFZGl0Q29tcG9uZW50XSxcbiAgICBzdHlsZVVybHM6WydzcmMvY3NzL2xpc3RfaXRlbS5jc3MnXSxcbiAgICBwcm92aWRlcnM6W1Nob3BwaW5nTGlzdFNlcnZpY2VdLFxufSlcblxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdENvbXBvbmVudHtcblxuICAgIGxpc3RJdGVtczogTGlzdEl0ZW1zW107XG5cbiAgICBzZWxlY3RlZEl0ZW06T2JqZWN0O1xuXG4gICAgaXNFZGl0aW5nOmJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfc2hvcHBpbmdMaXN0U2VydmljZTogU2hvcHBpbmdMaXN0U2VydmljZVxuICAgICl7XG4gICAgICAgIC8vdGhpcy5saXN0SXRlbXMgPSBbXG4gICAgICAgIC8vICAgIHtcbiAgICAgICAgLy8gICAgICAgIG5hbWU6J2l0ZW0gMScsXG4gICAgICAgIC8vICAgICAgICBhbW91bnQ6MlxuICAgICAgICAvLyAgICB9XG4gICAgICAgIC8vXTtcblxuICAgICAgICAvL2hpZGVcbiAgICAgICAgdGhpcy5pc0VkaXRpbmc9ZmFsc2U7XG5cbiAgICB9XG4gICAgbmdPbkluaXQoKTp2b2lke1xuICAgICAgICB0aGlzLmxpc3RJdGVtcyA9IHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UuZ2V0SXRlbXMoKTtcbiAgICB9XG4gICAgb25TZWxlY3QoaXRlbTpMaXN0SXRlbXMsIGk6bnVtYmVyKXtcbiAgICAgICAgLy9wYXNzIGxvY2FsIHZhcmlhYmxlIGNvcHkgdG8gZWRpdGluZyBjb21wb25lbnRcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSB7XG4gICAgICAgICAgICB0b2RvOiBpdGVtLFxuICAgICAgICAgICAgaW5kZXg6IGlcbiAgICAgICAgfTtcblxuICAgICAgICAvL3Nob3dcbiAgICAgICAgdGhpcy5pc0VkaXRpbmc9dHJ1ZTtcblxuICAgIH1cbiAgICBvbkl0ZW1FZGl0KGlzRWRpdGluZzpib29sZWFuKXtcbiAgICAgICAgaWYoaXNFZGl0aW5nID09PSBmYWxzZSl7XG4gICAgICAgICAgICB0aGlzLmlzRWRpdGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
