import { Component, EventEmitter, HostListener, Input, Output } from "@angular/core";
import { Dish } from "src/app/shared/classes/Dish";

@Component({
    selector: "dish",
    templateUrl: "./dish.component.html",
    styleUrls: ["./dish.component.scss"],
})
export class DishComponent {
    @Input() dish!: Dish;
    @Output() showDishDetail = new EventEmitter<Dish>();

    @HostListener("click")
    showDetail() {
        this.showDishDetail.emit(this.dish);
    }
}
