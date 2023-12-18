import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
    BehaviorSubject,
    Observable,
    forkJoin,
    map,
    switchMap,
    tap,
} from "rxjs";
import { Category } from "src/app/shared/classes/Category";
import { Ingredient } from "src/app/shared/classes/Ingredient";
import { Dish } from "src/app/shared/classes/Dish";
import { Links } from "../classes/Links";

@Injectable({
    providedIn: "root",
})
export class DataService {
    private dishes$ = new BehaviorSubject<Dish[]>([]);
    private categories$ = new BehaviorSubject<Category[]>([]);
    readonly updatedDishes$ = this.dishes$.asObservable();
    readonly updatedCategories$ = this.categories$.asObservable();

    constructor(private http: HttpClient) {}

    getIngredientsByDish(dish: Dish): Observable<string[]> {
        const ingredients$ = dish.ingredients.map((ingredientId) => {
            return this.getIngredientById(ingredientId).pipe(
                map((ingredient) => ingredient.title)
            );
        });
        return forkJoin(ingredients$);
    }

    getDishesByCategoryId(id: string): Observable<Dish[]> {
        return this.http.get<Dish[]>(`${Links.CATEGORY_URL}/${id}/dishes`).pipe(
            tap((value) => {
                this.dishes$.next(value);
            })
        );
    }

    getDishesByTitle(title: string): Observable<Dish[]> {
        return this.http.get<Dish[]>(`${Links.DISH_URL}?q=${title}`).pipe(
            tap((value) => {
                this.dishes$.next(value);
            })
        );
    }

    getDishes(): Observable<Dish[]> {
        return this.http.get<Dish[]>(Links.DISH_URL).pipe(
            tap((value) => {
                this.dishes$.next(value);
            })
        );
    }

    getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(Links.CATEGORY_URL).pipe(
            tap((value) => {
                this.categories$.next(value);
            })
        );
    }

    addCategory(data: Category): Observable<Category[]> {
        return this.http.post<Category[]>(Links.CATEGORY_URL, data)
            .pipe(switchMap(() => this.getCategories()));
    }

    private getIngredientById(id: string): Observable<Ingredient> {
        return this.http.get<Ingredient>(`${Links.INGREDIENT_URL}/${id}`);
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
