export interface UserModel {
    id: number
    name: string
    phoneNumber: string
    profilePhotoPath?: string
    profilePhotoUrl?: string
    address: string
    city: string
    email: string
    houseNumber: string
}

export class Convert {
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
