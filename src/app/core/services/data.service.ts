import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class DataService {
    private CATEGORY_URL = "http://localhost:3000/categories";
    private DISH_URL = "http://localhost:3000/dishes";

    constructor(private http: HttpClient) {}

    addCategory(data: any): Observable<any> {
        return this.http.post(this.CATEGORY_URL, data);
    }

    getCategoryById(id: string): Observable<any> {
        return this.http.get(this.CATEGORY_URL + id);
    }

    getCategories(): Observable<any> {
        return this.http.get(this.CATEGORY_URL);
    }

    addDish(data: any): Observable<any> {
        return this.http.post(this.DISH_URL, data);
    }

    getDishById(id: string): Observable<any> {
        return this.http.get(this.DISH_URL + id);
    }

    getDishesByCategoryId(id: string) {
        return this.http.get(this.CATEGORY_URL + id + "dishes");
    }

    getDishes(): Observable<any> {
        return this.http.get(this.DISH_URL);
    }
}
