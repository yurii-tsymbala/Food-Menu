import { Component, ViewEncapsulation } from "@angular/core";
import { debounce, interval, take } from "rxjs";
import { DataService } from "src/app/shared/services/data.service";

@Component({
    selector: "search",
    templateUrl: "./search.component.html",
    styleUrls: ["./search.component.scss"],
    encapsulation: ViewEncapsulation.None
})
export class SearchComponent {
    protected dishInputValue = "";

    constructor(private dataService: DataService) {}

    protected getDish(): void {
        if (this.dishInputValue) {
            this.dataService.getDishesByTitle(this.dishInputValue).pipe(debounce((value)=> interval(3000))).subscribe();
        } else {
            this.dataService.getDishes().pipe(take(1)).subscribe();
        }
    }
}
