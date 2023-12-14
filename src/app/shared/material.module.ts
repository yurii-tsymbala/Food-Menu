import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [],
    imports: [CommonModule, MatDialogModule],
    exports: [MatDialogModule, MatInputModule, MatSelectModule, FormsModule],
})
export class MaterialModule {}
