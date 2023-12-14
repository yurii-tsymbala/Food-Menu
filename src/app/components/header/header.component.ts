import { Component, EventEmitter, Output } from "@angular/core";
import { Observable } from "rxjs";
import { Dish } from "src/app/shared/classes/Dish";

@Component({
    selector: "header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
    @Output() searchedDishes = new EventEmitter<Observable<Dish[]>>();

    updateDishes(dishes$: Observable<Dish[]>) {
        this.searchedDishes.emit(dishes$);
    }
}
