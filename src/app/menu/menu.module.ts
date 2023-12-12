import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuRoutingModule } from "./menu-routing.module";
import { MainComponent } from "./components/main/main.component";
import { CategoriesComponent } from './components/categories/categories.component';
import { DishesComponent } from './components/dishes/dishes.component';
import { WelcomeComponent } from './pages/welcome/welcome/welcome.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
    declarations: [MainComponent, CategoriesComponent, DishesComponent, WelcomeComponent, MenuComponent],
    imports: [CommonModule, MenuRoutingModule],
    exports: [MainComponent, MenuComponent, CategoriesComponent, DishesComponent, WelcomeComponent],
})
export class MenuModule {}
