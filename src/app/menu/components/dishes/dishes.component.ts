import { Component, OnDestroy, OnInit } from "@angular/core";
import { DataService } from "src/app/shared/services/data.service";
import { Dish } from "src/app/shared/classes/Dish";
import { MatDialog } from "@angular/material/dialog";
import { DishDialogComponent } from "../dish-dialog/dish-dialog.component";
import { Subscription } from "rxjs/internal/Subscription";
import { Observable } from "rxjs";

@Component({
    selector: "dishes",
    templateUrl: "./dishes.component.html",
    styleUrls: ["./dishes.component.scss"],
})
export class DishesComponent implements OnInit, OnDestroy {
    dishes: Dish[] = [];
    dishes$!: Observable<Dish[]>;
    subscription!: Subscription;

    constructor(
        private dataService: DataService,
        private matDialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.fetchDishes();
    }

    showDialog(dish: Dish) {
        this.subscription = this.dataService
            .getIngredientsByDish(dish)
            .subscribe((ingredients) => {
                this.matDialog.open(DishDialogComponent, {
                    data: { ingredients },
                });
            });
    }

    fetchDishes(): void {
        this.dishes$ = this.dataService.getDishesByCategoryId("0");
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
