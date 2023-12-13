import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Category } from 'src/app/shared/classes/Category';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  @Input() category!: Category;
  @Output() showDishes = new EventEmitter<Category>();

  @HostListener("click")
  onShowDishes() {
      this.showDishes.emit(this.category);
  }

}
