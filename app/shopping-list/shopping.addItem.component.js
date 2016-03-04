System.register(["angular2/core", 'ng2-material/all', "angular2/src/core/change_detection/change_detector_ref", "./services/shopping-list.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, all_1, change_detector_ref_1, shopping_list_service_1;
    var ShoppingAddItem;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            },
            function (change_detector_ref_1_1) {
                change_detector_ref_1 = change_detector_ref_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            }],
        execute: function() {
            ShoppingAddItem = (function () {
                //to send object to another controller
                //step 1 create event emitter
                //step 2 create click event to emit the new event
                //step 3 create output
                //step 4 create function to fire (itemAdded)="onItemAdded($event)"
                //Removed output because we are inserting items using a service
                //@Output() itemAdded = new EventEmitter<ListItems>();
                function ShoppingAddItem(cdr, _shoppingListService) {
                    this.cdr = cdr;
                    this._shoppingListService = _shoppingListService;
                    this.item = {
                        name: '',
                        amount: 0
                    };
                }
                ShoppingAddItem.prototype.submitList = function (item) {
                    if (item.name != '') {
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
                };
                ShoppingAddItem = __decorate([
                    core_1.Component({
                        selector: 'shopping-add-item',
                        directives: [all_1.MATERIAL_DIRECTIVES],
                        templateUrl: 'dev/shopping-list/views/add-new-input.html'
                    }), 
                    __metadata('design:paramtypes', [change_detector_ref_1.ChangeDetectorRef, shopping_list_service_1.ShoppingListService])
                ], ShoppingAddItem);
                return ShoppingAddItem;
            })();
            exports_1("ShoppingAddItem", ShoppingAddItem);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmcuYWRkSXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiU2hvcHBpbmdBZGRJdGVtIiwiU2hvcHBpbmdBZGRJdGVtLmNvbnN0cnVjdG9yIiwiU2hvcHBpbmdBZGRJdGVtLnN1Ym1pdExpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQVlJQSxzQ0FBc0NBO2dCQUN0Q0EsNkJBQTZCQTtnQkFDN0JBLGlEQUFpREE7Z0JBQ2pEQSxzQkFBc0JBO2dCQUN0QkEsa0VBQWtFQTtnQkFFbEVBLCtEQUErREE7Z0JBQy9EQSxzREFBc0RBO2dCQUV0REEseUJBQ1lBLEdBQXNCQSxFQUN0QkEsb0JBQXlDQTtvQkFEekNDLFFBQUdBLEdBQUhBLEdBQUdBLENBQW1CQTtvQkFDdEJBLHlCQUFvQkEsR0FBcEJBLG9CQUFvQkEsQ0FBcUJBO29CQUdqREEsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0E7d0JBQ1JBLElBQUlBLEVBQUVBLEVBQUVBO3dCQUNSQSxNQUFNQSxFQUFFQSxDQUFDQTtxQkFDWkEsQ0FBQUE7Z0JBQ0xBLENBQUNBO2dCQUNERCxvQ0FBVUEsR0FBVkEsVUFBV0EsSUFBZUE7b0JBRXRCRSxFQUFFQSxDQUFBQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxJQUFJQSxFQUFFQSxDQUFDQSxDQUFBQSxDQUFDQTt3QkFDaEJBLCtEQUErREE7d0JBQy9EQSw0QkFBNEJBO3dCQUU1QkEsNEJBQTRCQTt3QkFDNUJBLElBQUlBLENBQUNBLG9CQUFvQkEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7d0JBQzVDQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQTs0QkFDUkEsSUFBSUEsRUFBRUEsRUFBRUE7NEJBQ1JBLE1BQU1BLEVBQUVBLENBQUNBO3lCQUNaQSxDQUFDQTt3QkFDRkEsd0JBQXdCQTt3QkFDeEJBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBO29CQUM3QkEsQ0FBQ0E7Z0JBQ0xBLENBQUNBO2dCQTlDTEY7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsbUJBQW1CQTt3QkFDN0JBLFVBQVVBLEVBQUNBLENBQUNBLHlCQUFtQkEsQ0FBQ0E7d0JBQ2hDQSxXQUFXQSxFQUFDQSw0Q0FBNENBO3FCQUMzREEsQ0FBQ0E7O29DQTJDREE7Z0JBQURBLHNCQUFDQTtZQUFEQSxDQS9DQSxBQStDQ0EsSUFBQTtZQS9DRCw2Q0ErQ0MsQ0FBQSIsImZpbGUiOiJzaG9wcGluZy1saXN0L3Nob3BwaW5nLmFkZEl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtDb250cm9sR3JvdXB9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcbmltcG9ydCB7TUFURVJJQUxfRElSRUNUSVZFU30gZnJvbSAnbmcyLW1hdGVyaWFsL2FsbCc7XG5pbXBvcnQge0xpc3RJdGVtc30gZnJvbSBcIi4vbGlzdE1vZGVsXCI7XG5pbXBvcnQge0NoYW5nZURldGVjdG9yUmVmfSBmcm9tIFwiYW5ndWxhcjIvc3JjL2NvcmUvY2hhbmdlX2RldGVjdGlvbi9jaGFuZ2VfZGV0ZWN0b3JfcmVmXCI7XG5pbXBvcnQge1Nob3BwaW5nTGlzdFNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL3Nob3BwaW5nLWxpc3Quc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Nob3BwaW5nLWFkZC1pdGVtJyxcbiAgICBkaXJlY3RpdmVzOltNQVRFUklBTF9ESVJFQ1RJVkVTXSxcbiAgICB0ZW1wbGF0ZVVybDonZGV2L3Nob3BwaW5nLWxpc3Qvdmlld3MvYWRkLW5ldy1pbnB1dC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIFNob3BwaW5nQWRkSXRlbXtcblxuICAgIG15Rm9ybTogQ29udHJvbEdyb3VwO1xuXG4gICAgaXRlbTogTGlzdEl0ZW1zO1xuXG4gICAgLy90byBzZW5kIG9iamVjdCB0byBhbm90aGVyIGNvbnRyb2xsZXJcbiAgICAvL3N0ZXAgMSBjcmVhdGUgZXZlbnQgZW1pdHRlclxuICAgIC8vc3RlcCAyIGNyZWF0ZSBjbGljayBldmVudCB0byBlbWl0IHRoZSBuZXcgZXZlbnRcbiAgICAvL3N0ZXAgMyBjcmVhdGUgb3V0cHV0XG4gICAgLy9zdGVwIDQgY3JlYXRlIGZ1bmN0aW9uIHRvIGZpcmUgKGl0ZW1BZGRlZCk9XCJvbkl0ZW1BZGRlZCgkZXZlbnQpXCJcblxuICAgIC8vUmVtb3ZlZCBvdXRwdXQgYmVjYXVzZSB3ZSBhcmUgaW5zZXJ0aW5nIGl0ZW1zIHVzaW5nIGEgc2VydmljZVxuICAgIC8vQE91dHB1dCgpIGl0ZW1BZGRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8TGlzdEl0ZW1zPigpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgcHJpdmF0ZSBfc2hvcHBpbmdMaXN0U2VydmljZTogU2hvcHBpbmdMaXN0U2VydmljZVxuXG4gICAgKXtcbiAgICAgICAgdGhpcy5pdGVtID0ge1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBhbW91bnQ6IDBcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdWJtaXRMaXN0KGl0ZW06IExpc3RJdGVtcyk6dm9pZCB7XG5cbiAgICAgICAgaWYoaXRlbS5uYW1lICE9ICcnKXtcbiAgICAgICAgICAgIC8vY291bGQgYWxzbyBqdXN0IGVtaXQgdGhpcy5pdGVtIGluc3RlYWQgb2YgcGFzc2luZyB2YXJpYWJsZS4uLlxuICAgICAgICAgICAgLy90aGlzLml0ZW1BZGRlZC5lbWl0KGl0ZW0pO1xuXG4gICAgICAgICAgICAvL3YyIC0gYWRkZWQgc2VydmljZSBtZXRob2RzXG4gICAgICAgICAgICB0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWNlLmluc2VydEl0ZW1zKGl0ZW0pO1xuICAgICAgICAgICAgdGhpcy5pdGVtID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgIGFtb3VudDogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vZGV0ZWN0IGNoYW5nZSBvZiByZXNldFxuICAgICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
