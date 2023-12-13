import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: "dish-dialog",
    templateUrl: "./dish-dialog.component.html",
    styleUrls: ["./dish-dialog.component.scss"],
})
export class DishDialogComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA)
        public data: { ingredients: string[]}
    ) {}
}
