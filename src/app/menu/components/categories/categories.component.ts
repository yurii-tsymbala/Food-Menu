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
    protected selectedIndex = 0;

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        this.observeCategories();
    }

    private observeCategories(): void {
        this.categories$ = this.dataService.updatedCategories$;
    }

    protected updateDishes(category: Category): void {
        if (category.id) {
            this.selectedIndex = Number(category.id) + 1;
            
            this.dataService
                .getDishesByCategoryId(category.id)
                .pipe(take(1))
                .subscribe();
        } else {
            this.selectedIndex = 0;
            this.dataService.getDishes().pipe(take(1)).subscribe();
        }
    }
}
