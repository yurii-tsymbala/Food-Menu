import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/shared/services/data.service";
import { Dish } from "src/app/shared/classes/Dish";
import { DishDialogComponent } from "../dish-dialog/dish-dialog.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
    selector: "dishes",
    templateUrl: "./dishes.component.html",
    styleUrls: ["./dishes.component.scss"],
})
export class DishesComponent implements OnInit {
    dishes: Dish[] = [];

    constructor(
        private dataService: DataService,
        private matDialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.fetchDishes();
    }

    showDialog() {
        this.matDialog.open(DishDialogComponent);
    }

    fetchDishes(): void {
        this.dataService
            .getDishes()
            .subscribe((dishes) => (this.dishes = dishes));
    }
}
