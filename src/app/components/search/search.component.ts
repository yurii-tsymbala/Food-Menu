import { Component } from "@angular/core";
import { take } from "rxjs";
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
            this.dataService.getDishesByTitle(this.dishInputValue).pipe(take(1)).subscribe();
        } else {
            this.dataService.getDishes().pipe(take(1)).subscribe();
        }
    }
}
