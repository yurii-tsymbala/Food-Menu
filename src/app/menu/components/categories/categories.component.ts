import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/shared/services/data.service";
import { Category } from "src/app/shared/classes/Category";
import { Observable, take } from "rxjs";

@Component({
    selector: "categories",
    templateUrl: "./categories.component.html",
    styleUrls: ["./categories.component.scss"],
})
export class CategoriesComponent implements OnInit {
    protected categories$!: Observable<Category[]>;

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        this.getCategories();
    }

    private getCategories(): void {
        this.categories$ = this.dataService.getCategories();
    }

    protected updateDishes(category: Category): void {
        if (category.id) {
            this.dataService
                .getDishesByCategoryId(category.id)
                .pipe(take(1))
                .subscribe();
        } else {
            this.dataService.getDishes().pipe(take(1)).subscribe();
        }
    }
}
