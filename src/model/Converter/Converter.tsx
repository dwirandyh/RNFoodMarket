import { FoodModel } from "../Food"
import { TransactionModel, TransactionStatus } from "../Transaction"
import { UserModel } from "../User"

export class Converter {
    public static toTransaction(object: any): TransactionModel {
        return {
            id: object.id,
            foodId: object.food_id,
            userId: object.user_id,
            quantity: object.quantity,
            total: object.total,
            status: object.status as TransactionStatus,
            paymentUrl: object.paymentUrl,
            food: this.toFood(object.food),
            user: this.toUser(object.user),
            createdAt: object.created_at
        }
    }

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

    public static toUser(object: any): UserModel {
        return {
            id: object.id,
            name: object.name,
            phoneNumber: object.phoneNumber,
            profilePhotoPath: object.profile_photo_path,
            profilePhotoUrl: object.profile_photo_url,
            address: object.address,
            city: object.city,
            email: object.email,
            houseNumber: object.houseNumber
        }
    }
}