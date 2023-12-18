import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AddDialogComponent } from "src/app/menu/components/add-dialog/add-dialog.component";

@Component({
    selector: "header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
    constructor(private matDialog: MatDialog) {}

    protected showAddDialog() {
        this.matDialog.open(AddDialogComponent, { autoFocus: true});
    }
}
