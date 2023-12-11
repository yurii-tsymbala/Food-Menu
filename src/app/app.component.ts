import { Component, OnInit } from "@angular/core";
import { DataService } from "./core/services/data.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
    title = "food-menu";

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        this.getMenu();
    }

    getMenu() {
        this.dataService.getCategories().subscribe({
            next: (data) => {
                console.log(data);
            },
            error: (error) => {
                console.log(error);
            },
        });
    }
}
