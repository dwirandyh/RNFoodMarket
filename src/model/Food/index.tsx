export interface FoodModel {
    id: number
    picturePath: string
    name: string
    description: string
    ingredients: string
    price: number
    rate: number
    types: string
}

export class Convert {
    public static toFood(object: any): FoodModel {
        return {
            id: object.id,
            picturePath: object.picturePath,
            name: object.name,
            description: object.description,
            ingredients: object.ingredients,
            price: object.price,
            rate: object.rate,
            types: object.types
        }
    }
}