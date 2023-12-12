import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuRoutingModule } from "./menu-routing.module";
import { CategoriesComponent } from './components/categories/categories.component';
import { DishesComponent } from './components/dishes/dishes.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
    declarations: [CategoriesComponent, DishesComponent, WelcomeComponent, MenuComponent],
    imports: [CommonModule, MenuRoutingModule],
    exports: [MenuComponent, CategoriesComponent, DishesComponent, WelcomeComponent],
})
export class MenuModule {}
