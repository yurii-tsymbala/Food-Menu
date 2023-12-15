import { Component } from "@angular/core";
import { DataService } from "src/app/shared/services/data.service";

@Component({
    selector: "search",
    templateUrl: "./search.component.html",
    styleUrls: ["./search.component.scss"],
})
export class SearchComponent {
    protected dishInputValue = "";

    constructor(private dataService: DataService) {}

    protected getDish(): void {
        if (this.dishInputValue) {
            this.dataService.updateDishesByTitle(this.dishInputValue);
        } else {
            this.dataService.getAllDishes();
        }
    }
}
