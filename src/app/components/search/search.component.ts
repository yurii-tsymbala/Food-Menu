import { Component, EventEmitter, Output, ViewChild } from "@angular/core";
import { Observable } from "rxjs";
import { Dish } from "src/app/shared/classes/Dish";
import { DataService } from "src/app/shared/services/data.service";

@Component({
    selector: "search",
    templateUrl: "./search.component.html",
    styleUrls: ["./search.component.scss"],
})
export class SearchComponent {
    @Output() dishChanged = new EventEmitter<Observable<Dish[]>>();
    dishInputValue = "";

    constructor(private dataService: DataService) {}

    getDish() {
        const data$ = this.dataService.getDishesByTitle(this.dishInputValue);
        this.dishChanged.emit(data$);
    }
}
