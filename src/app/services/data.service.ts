import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "src/app/shared/classes/Category";
import { Dish } from "src/app/shared/classes/Dish";

@Injectable({
    providedIn: "root",
})
export class DataService {
    private CATEGORY_URL = "http://localhost:3000/categories";
    private DISH_URL = "http://localhost:3000/dishes";

    constructor(private http: HttpClient) {}

    addCategory(data: any): Observable<Category[]> {
        return this.http.post<Category[]>(this.CATEGORY_URL, data);
    }

    getCategoryById(id: string): Observable<Category> {
        return this.http.get<Category>(this.CATEGORY_URL + id);
    }

    getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(this.CATEGORY_URL);
    }

    addDish(data: any): Observable<Dish[]> {
        return this.http.post<Dish[]>(this.DISH_URL, data);
    }

    getDishById(id: string): Observable<Dish> {
        return this.http.get<Dish>(this.DISH_URL + id);
    }

    getDishesByCategoryId(id: string): Observable<Dish[]> {
        return this.http.get<Dish[]>(this.CATEGORY_URL + id + "dishes");
    }

    getDishesByTitle(title: string): Observable<Dish[]> {
        return this.http.get<Dish[]>(this.DISH_URL + "?q" + title);
    }

    getDishes(): Observable<Dish[]> {
        return this.http.get<Dish[]>(this.DISH_URL)
    }
}
