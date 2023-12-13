import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/shared/services/data.service";
import { Dish } from "src/app/shared/classes/Dish";
import { MatDialog } from "@angular/material/dialog";
import { DishDialogComponent } from "../dish-dialog/dish-dialog.component";

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

    showDialog(dish: Dish) {
        const ingredients = dish.ingredients.map((ingredientId) => {   // Remove & Fix
            return this.dataService
                .getIngredientById(ingredientId)
                .subscribe((ingredient) => console.log(ingredient));
        });

        this.matDialog.open(DishDialogComponent, {
            data: { ...dish },
        });
    }

    fetchDishes(): void {
        this.dataService
            .getDishesByCategoryId("0")
            .subscribe((dishes) => (this.dishes = dishes));
    }
}
