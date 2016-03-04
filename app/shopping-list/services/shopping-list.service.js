System.register(['angular2/core', "../services/mock-data"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, mock_data_1;
    var ShoppingListService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_data_1_1) {
                mock_data_1 = mock_data_1_1;
            }],
        execute: function() {
            ShoppingListService = (function () {
                function ShoppingListService() {
                }
                ShoppingListService.prototype.getItems = function () {
                    return mock_data_1.shopping_list;
                };
                ShoppingListService.prototype.insertItems = function (item) {
                    mock_data_1.shopping_list.push(item);
                };
                ShoppingListService.prototype.deleteItems = function (item) {
                    mock_data_1.shopping_list.splice(mock_data_1.shopping_list.indexOf(item), 1);
                };
                ShoppingListService.prototype.updateItems = function (item, index) {
                    mock_data_1.shopping_list[index] = item;
                };
                ShoppingListService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListService);
                return ShoppingListService;
            })();
            exports_1("ShoppingListService", ShoppingListService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2VydmljZXMvc2hvcHBpbmctbGlzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIlNob3BwaW5nTGlzdFNlcnZpY2UiLCJTaG9wcGluZ0xpc3RTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiU2hvcHBpbmdMaXN0U2VydmljZS5nZXRJdGVtcyIsIlNob3BwaW5nTGlzdFNlcnZpY2UuaW5zZXJ0SXRlbXMiLCJTaG9wcGluZ0xpc3RTZXJ2aWNlLmRlbGV0ZUl0ZW1zIiwiU2hvcHBpbmdMaXN0U2VydmljZS51cGRhdGVJdGVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBR0lBO2dCQUVBQyxDQUFDQTtnQkFDREQsc0NBQVFBLEdBQVJBO29CQUNJRSxNQUFNQSxDQUFDQSx5QkFBYUEsQ0FBQ0E7Z0JBQ3pCQSxDQUFDQTtnQkFDREYseUNBQVdBLEdBQVhBLFVBQVlBLElBQWVBO29CQUN2QkcseUJBQWFBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUM3QkEsQ0FBQ0E7Z0JBQ0RILHlDQUFXQSxHQUFYQSxVQUFZQSxJQUFlQTtvQkFDdkJJLHlCQUFhQSxDQUFDQSxNQUFNQSxDQUFDQSx5QkFBYUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3hEQSxDQUFDQTtnQkFDREoseUNBQVdBLEdBQVhBLFVBQVlBLElBQWNBLEVBQUVBLEtBQVlBO29CQUNwQ0sseUJBQWFBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBO2dCQUNoQ0EsQ0FBQ0E7Z0JBakJMTDtvQkFBQ0EsaUJBQVVBLEVBQUVBOzt3Q0FrQlpBO2dCQUFEQSwwQkFBQ0E7WUFBREEsQ0FsQkEsQUFrQkNBLElBQUE7WUFsQkQscURBa0JDLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC9zZXJ2aWNlcy9zaG9wcGluZy1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtMaXN0SXRlbXN9IGZyb20gXCIuLi9saXN0TW9kZWxcIjtcbmltcG9ydCB7c2hvcHBpbmdfbGlzdH0gZnJvbSBcIi4uL3NlcnZpY2VzL21vY2stZGF0YVwiO1xuXG5cbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdFNlcnZpY2V7XG4gICAgY29uc3RydWN0b3IoKXtcblxuICAgIH1cbiAgICBnZXRJdGVtcygpIHtcbiAgICAgICAgcmV0dXJuIHNob3BwaW5nX2xpc3Q7XG4gICAgfVxuICAgIGluc2VydEl0ZW1zKGl0ZW06IExpc3RJdGVtcyk6IHZvaWR7XG4gICAgICAgIHNob3BwaW5nX2xpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gICAgZGVsZXRlSXRlbXMoaXRlbTogTGlzdEl0ZW1zKTogdm9pZHtcbiAgICAgICAgc2hvcHBpbmdfbGlzdC5zcGxpY2Uoc2hvcHBpbmdfbGlzdC5pbmRleE9mKGl0ZW0pLDEpO1xuICAgIH1cbiAgICB1cGRhdGVJdGVtcyhpdGVtOkxpc3RJdGVtcyAsaW5kZXg6bnVtYmVyKTogdm9pZHtcbiAgICAgICAgc2hvcHBpbmdfbGlzdFtpbmRleF0gPSBpdGVtO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
