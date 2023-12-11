import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/core/services/data.service";
import { Category } from "src/app/shared/classes/Category";

@Component({
    selector: "categories",
    templateUrl: "./categories.component.html",
    styleUrls: ["./categories.component.scss"],
})
export class CategoriesComponent implements OnInit {
    categories: Category[] = [];

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        this.fetchCategories();
    }

    fetchCategories(): void {
        this.dataService
            .getCategories()
            .subscribe((categories) => (this.categories = categories));
    }
}
