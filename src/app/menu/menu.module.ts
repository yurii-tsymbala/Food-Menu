import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuRoutingModule } from "./menu-routing.module";
import { CategoriesComponent } from "./components/categories/categories.component";
import { DishesComponent } from "./components/dishes/dishes.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { MenuComponent } from "./components/menu/menu.component";
import { DishDialogComponent } from "./components/dish-dialog/dish-dialog.component";
import { SharedModule } from "../shared/shared.module";
import { DishComponent } from "./components/dish/dish.component";
import { CategoryComponent } from "./components/category/category.component";

@NgModule({
    declarations: [
        CategoriesComponent,
        DishesComponent,
        WelcomeComponent,
        MenuComponent,
        DishDialogComponent,
        DishComponent,
        CategoryComponent,
    ],
    imports: [CommonModule, MenuRoutingModule, SharedModule],
    exports: [
        MenuComponent,
        CategoriesComponent,
        DishesComponent,
        WelcomeComponent,
        DishDialogComponent,
    ],
})
export class MenuModule {}
