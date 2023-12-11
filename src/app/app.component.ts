import { Component, OnInit } from "@angular/core";
import { DataService } from "./core/services/data.service";
import { Dish } from "./shared/classes/Dish";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
    title = "food-menu";
    dishes: Dish[] = []

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        this.getMenu();
    }

    getMenu() {
        this.dataService.getDishes().subscribe({
            next: (fetchedDishes) => {
                this.dishes = fetchedDishes
                console.log(JSON.parse(JSON.stringify(this.dishes)));
            },
            error: (error) => {
                console.log(error);
            },
        });
    }
}
