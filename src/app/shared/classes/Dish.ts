export class Dish {
    constructor(
        public id: string,
        public title: string,
        public categoryId: string,
        public ingredients: string[],
        public imgUrl:URL
    ) {}
}

