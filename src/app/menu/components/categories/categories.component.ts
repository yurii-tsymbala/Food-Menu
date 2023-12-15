import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/shared/services/data.service";
import { Category } from "src/app/shared/classes/Category";
import { take } from "rxjs";

@Component({
    selector: "categories",
    templateUrl: "./categories.component.html",
    styleUrls: ["./categories.component.scss"],
})
export class CategoriesComponent implements OnInit {
    protected categories: Category[] = [];

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        this.getCategories();
    }

    private getCategories(): void {
        this.dataService
            .getCategories()
            .subscribe((categories) => (this.categories = categories));
    }

    protected updateDishes(category: Category): void {
        if (category.id) {
            this.dataService.getDishesByCategoryId(category.id).pipe(take(1)).subscribe()
        } else {
            this.dataService.getAllDishes();
        }
    }
}
