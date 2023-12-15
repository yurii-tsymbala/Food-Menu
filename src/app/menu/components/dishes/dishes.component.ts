import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/shared/services/data.service";
import { Dish } from "src/app/shared/classes/Dish";
import { MatDialog } from "@angular/material/dialog";
import { DishDialogComponent } from "../dish-dialog/dish-dialog.component";
import { Observable } from "rxjs/internal/Observable";
import { take } from "rxjs";

@Component({
    selector: "dishes",
    templateUrl: "./dishes.component.html",
    styleUrls: ["./dishes.component.scss"],
})
export class DishesComponent implements OnInit {
    protected dishes$!: Observable<Dish[]>;

    constructor(
        private dataService: DataService,
        private matDialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.observeDishes();
    }

    private observeDishes(): void {
        this.dishes$ = this.dataService.updatedDishes$
    }

    protected showDialog(dish: Dish): void {
         this.dataService
            .getIngredientsByDish(dish).pipe(take(1))
            .subscribe((ingredients) => {
                this.matDialog.open(DishDialogComponent, {
                    data: { ingredients },
                });
            });
    }
}
