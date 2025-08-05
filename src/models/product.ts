export class Product {
    id: number;
    name: string;
    description: string;
    ammount: number;

    constructor(id: number, name: string, description: string, ammount: number){
        this.id = id;
        this.name = name;
        this.description = description;
        this.ammount = ammount;
    }
}