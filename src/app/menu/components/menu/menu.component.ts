import { Component, OnInit } from "@angular/core";
import { take } from "rxjs/internal/operators/take";
import { DataService } from "src/app/shared/services/data.service";

@Component({
    selector: "menu",
    templateUrl: "./menu.component.html",
    styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
    constructor(private dataService: DataService) {}
    ngOnInit(): void {
        this.dataService.getDishes().pipe(take(1)).subscribe()
        this.dataService.getCategories().pipe(take(1)).subscribe()
    }
}
