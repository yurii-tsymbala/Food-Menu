import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { Dish } from 'src/app/shared/classes/Dish';

@Component({
  selector: 'dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit {
  dishes: Dish[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
      this.fetchDishes();
  }

  fetchDishes(): void {
      this.dataService
          .getDishes()
          .subscribe((dishes) => (this.dishes = dishes));
  }
}
