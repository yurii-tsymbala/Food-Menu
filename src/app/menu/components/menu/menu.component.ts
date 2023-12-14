import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "src/app/shared/classes/Category";
import { Dish } from "src/app/shared/classes/Dish";
import { DataService } from "src/app/shared/services/data.service";

@Component({
    selector: "menu",
    templateUrl: "./menu.component.html",
    styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
    @Input() dishes$!: Observable<Dish[]>;
    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        this.observeDishes();
    }

    private observeDishes() {
        this.dataService.updatedDishes$.subscribe((data$) => {
            this.dishes$ = data$;
        });
    }

    updateDishes(category: Category) {
        this.dishes$ = this.dataService.getDishesByCategoryId(category.id);
    }
}
