import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuRoutingModule } from "./menu-routing.module";
import { MainComponent } from "./components/main/main.component";

@NgModule({
    declarations: [MainComponent],
    imports: [CommonModule, MenuRoutingModule],
    exports: [MainComponent],
})
export class MenuModule {}
