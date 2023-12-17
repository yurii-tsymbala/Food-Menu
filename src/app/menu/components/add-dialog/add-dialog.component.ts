import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: "add-dialog",
    templateUrl: "./add-dialog.component.html",
    styleUrls: ["./add-dialog.component.scss"],
})
export class AddDialogComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA)
        public data: { ingredients: string[] }
    ) {}
}
