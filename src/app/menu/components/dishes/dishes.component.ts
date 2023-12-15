import { Component, OnDestroy, OnInit } from "@angular/core";
import { DataService } from "src/app/shared/services/data.service";
import { Dish } from "src/app/shared/classes/Dish";
import { MatDialog } from "@angular/material/dialog";
import { DishDialogComponent } from "../dish-dialog/dish-dialog.component";
import { Subscription } from "rxjs/internal/Subscription";

@Component({
    selector: "dishes",
    templateUrl: "./dishes.component.html",
    styleUrls: ["./dishes.component.scss"],
})
export class DishesComponent implements OnInit, OnDestroy {
    protected dishes!: Dish[];
    private subscription!: Subscription;

    constructor(
        private dataService: DataService,
        private matDialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.observeDishes();
    }

    private observeDishes(): void {
        this.dataService.updatedDishes$.subscribe((dishes) => {
            this.dishes = dishes;
        });
    }

    protected showDialog(dish: Dish): void {
        this.subscription = this.dataService
            .getIngredientsByDish(dish)
            .subscribe((ingredients) => {
                this.matDialog.open(DishDialogComponent, {
                    data: { ingredients },
                });
            });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
