import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WelcomeComponent } from "./menu/components/welcome/welcome.component";
import { MenuComponent } from "./menu/components/menu/menu.component";

const routes: Routes = [
    { path: "", component: WelcomeComponent },
    { path: "menu", component: MenuComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
