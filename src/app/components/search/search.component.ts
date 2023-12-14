import { Component } from "@angular/core";
import { DataService } from "src/app/shared/services/data.service";

@Component({
    selector: "search",
    templateUrl: "./search.component.html",
    styleUrls: ["./search.component.scss"],
})
export class SearchComponent {
    dishInputValue = "";

    constructor(private dataService: DataService) {}

    getDish() {
        const data$ = this.dataService.getDishesByTitle(this.dishInputValue);
        this.dataService.updateDishes(data$);
    }
}
