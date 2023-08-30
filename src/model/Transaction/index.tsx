import { FoodModel } from "../Food"
import { UserModel } from "../User"

export enum TransactionStatus {
    pending = 'PENDING',
    success = 'SUCCESS',
    onDelivery = 'ON_DELIVERY',
    delivered = 'DELIVERED',
    cancelled = 'CANCELLED'
}

export interface TransactionModel {
    id: number
    foodId: number
    userId: number
    quantity: number
    total: number
    status: TransactionStatus
    paymentUrl: string
    food: FoodModel
    user: UserModel
    createdAt: number
}