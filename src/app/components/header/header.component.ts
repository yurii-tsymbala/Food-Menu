import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AddDialogComponent } from "src/app/menu/components/add-dialog/add-dialog.component";
import { DataService } from "src/app/shared/services/data.service";

@Component({
    selector: "header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
    constructor(
        private dataService: DataService,
        private matDialog: MatDialog
    ) {}

    protected showAddDialog() {
        console.log("dialog showed!");
        this.matDialog.open(AddDialogComponent, {
            data: { bebe: "lele" },
        });
    }
}
