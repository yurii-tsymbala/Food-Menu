import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuRoutingModule } from "./menu-routing.module";
import { MainComponent } from "./components/main/main.component";
import { CategoriesComponent } from './components/categories/categories.component';
import { DishesComponent } from './components/dishes/dishes.component';

@NgModule({
    declarations: [MainComponent, CategoriesComponent, DishesComponent],
    imports: [CommonModule, MenuRoutingModule],
    exports: [MainComponent, CategoriesComponent, DishesComponent],
})
export class MenuModule {}
