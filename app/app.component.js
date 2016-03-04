System.register(['angular2/core', 'ng2-material/all', "./shopping-list/shoppingList.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, all_1, shoppingList_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            },
            function (shoppingList_component_1_1) {
                shoppingList_component_1 = shoppingList_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [all_1.MATERIAL_DIRECTIVES, shoppingList_component_1.ShoppingListComponent],
                        template: "\n\n        <section class=\"app-content\" flex=\"\" layout=\"column\" layout-align=\"start center\">\n        <h1>Todo List</h1>\n\n        <md-content class=\"examples\" layout-padding=\"\" md-scroll-y=\"\">\n            <shopping-list></shopping-list>\n        </md-content>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFBQUE7Z0JBZ0JBQyxDQUFDQTtnQkFoQkREO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFFBQVFBO3dCQUNsQkEsVUFBVUEsRUFBQ0EsQ0FBQ0EseUJBQW1CQSxFQUFFQSw4Q0FBcUJBLENBQUNBO3dCQUN2REEsUUFBUUEsRUFBRUEsNlJBUVRBO3FCQUNKQSxDQUFDQTs7aUNBSURBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0FoQkEsQUFnQkNBLElBQUE7WUFoQkQsdUNBZ0JDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TUFURVJJQUxfRElSRUNUSVZFU30gZnJvbSAnbmcyLW1hdGVyaWFsL2FsbCc7XG5pbXBvcnQge1Nob3BwaW5nTGlzdENvbXBvbmVudH0gZnJvbSBcIi4vc2hvcHBpbmctbGlzdC9zaG9wcGluZ0xpc3QuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICBkaXJlY3RpdmVzOltNQVRFUklBTF9ESVJFQ1RJVkVTLCBTaG9wcGluZ0xpc3RDb21wb25lbnRdLFxuICAgIHRlbXBsYXRlOiBgXG5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJhcHAtY29udGVudFwiIGZsZXg9XCJcIiBsYXlvdXQ9XCJjb2x1bW5cIiBsYXlvdXQtYWxpZ249XCJzdGFydCBjZW50ZXJcIj5cbiAgICAgICAgPGgxPlRvZG8gTGlzdDwvaDE+XG5cbiAgICAgICAgPG1kLWNvbnRlbnQgY2xhc3M9XCJleGFtcGxlc1wiIGxheW91dC1wYWRkaW5nPVwiXCIgbWQtc2Nyb2xsLXk9XCJcIj5cbiAgICAgICAgICAgIDxzaG9wcGluZy1saXN0Pjwvc2hvcHBpbmctbGlzdD5cbiAgICAgICAgPC9tZC1jb250ZW50PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
