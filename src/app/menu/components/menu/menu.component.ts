import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/shared/services/data.service";

@Component({
    selector: "menu",
    templateUrl: "./menu.component.html",
    styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
    constructor(private dataService: DataService) {}
    ngOnInit(): void {
        this.dataService.getAllDishes()
    }
}
