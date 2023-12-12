import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MaterialModule } from "../shared/material.module";
import { RouterLink } from "@angular/router";

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, MaterialModule, RouterLink],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule { }
