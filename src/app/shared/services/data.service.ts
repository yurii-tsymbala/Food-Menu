import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, forkJoin, map } from "rxjs";
import { Category } from "src/app/shared/classes/Category";
import { Ingredient } from "src/app/shared/classes/Ingredient";
import { Dish } from "src/app/shared/classes/Dish";
import { Links } from "../classes/Links";

@Injectable({
    providedIn: "root",
})
export class DataService {
    private dishes$ = new BehaviorSubject<Dish[]>([]);
    readonly updatedDishes$ = this.dishes$.asObservable();

    constructor(private http: HttpClient) {}

    updateDishesByCategoryId(id: string): void {
        this.getDishesByCategoryId(id).subscribe((dishes) =>
            this.dishes$.next(dishes)
        );
    }

    updateDishesByTitle(title: string): void {
        this.getDishesByTitle(title).subscribe((dishes) =>
            this.dishes$.next(dishes)
        );
    }

    getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(Links.CATEGORY_URL);
    }

    getIngredientsByDish(dish: Dish): Observable<string[]> {
        const ingredients$ = dish.ingredients.map((ingredientId) => {
            return this.getIngredientById(ingredientId).pipe(
                map((ingredient) => ingredient.title)
            );
        });
        return forkJoin(ingredients$);
    }

    private getDishesByCategoryId(id: string): Observable<Dish[]> {
        if (id === "-1") {
            return this.getDishes();
        }
        return this.http.get<Dish[]>(`${Links.CATEGORY_URL}/${id}/dishes`);
    }

    private getDishesByTitle(title: string): Observable<Dish[]> {
        if (title) {
            return this.http.get<Dish[]>(`${Links.DISH_URL}?q=${title}`);
        }
        return this.getDishes();
    }

    private getDishes(): Observable<Dish[]> {
        return this.http.get<Dish[]>(Links.DISH_URL);
    }

    private getIngredientById(id: string): Observable<Ingredient> {
        return this.http.get<Ingredient>(`${Links.INGREDIENT_URL}/${id}`);
    }

    private addCategory(data: any): Observable<Category[]> {
        return this.http.post<Category[]>(Links.CATEGORY_URL, data);
    }

    private getCategoryById(id: string): Observable<Category> {
        return this.http.get<Category>(`${Links.CATEGORY_URL}/${id}`);
    }

    private addDish(data: any): Observable<Dish[]> {
        return this.http.post<Dish[]>(Links.DISH_URL, data);
    }

    private getDishById(id: string): Observable<Dish> {
        return this.http.get<Dish>(`${Links.DISH_URL}/${id}`);
    }
}
