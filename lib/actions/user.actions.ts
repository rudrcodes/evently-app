// This file is a nextJS server actions file
//Which means the code will run on the server side

'use server'
import { revalidatePath } from 'next/cache'

import { CreateUserParams, UpdateUserParams } from "@/types"
import { handleError } from "../utils"
import { connectedToDatabase } from "../database"
import { UserModel } from "../database/models/user.model"
import { EventModel } from "../database/models/event.model"
import { OrderModel } from "../database/models/order.model"

export async function createUser(user: CreateUserParams) {
    try {
        await connectedToDatabase();
        const newUser = await UserModel.create(user)
        return JSON.parse(JSON.stringify(newUser))
    } catch (error) {
        handleError(error)
    }
}

export async function getUserById(userId: string) {
    try {
        await connectedToDatabase();
        const user = await UserModel.findById(userId);
        if (!user) throw new Error('User not found')
        return JSON.parse(JSON.stringify(user))
    } catch (error) {
        handleError(error)
    }
}

export async function updateUser(clerkId: string, user: UpdateUserParams) {
    try {
        await connectedToDatabase()

        const updatedUser = await UserModel.findOneAndUpdate({ clerkId }, user, { new: true })

        if (!updatedUser) throw new Error('User update failed')
        return JSON.parse(JSON.stringify(updatedUser))
    } catch (error) {
        handleError(error)
    }
}

export async function deleteUser(clerkId: string) {
    try {
        await connectedToDatabase()

        // Find user to delete
        const userToDelete = await UserModel.findOne({ clerkId })

        if (!userToDelete) {
            throw new Error('User not found')
        }

        // Unlink relationships
        await Promise.all([
            // Update the 'events' collection to remove references to the user
            EventModel.updateMany(
                { _id: { $in: userToDelete.events } },
                { $pull: { organizer: userToDelete._id } }
            ),

            // Update the 'orders' collection to remove references to the user
            OrderModel.updateMany({ _id: { $in: userToDelete.orders } }, { $unset: { buyer: 1 } }),
        ])

        // Delete user
        const deletedUser = await UserModel.findByIdAndDelete(userToDelete._id)
        revalidatePath('/')

        return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null
    } catch (error) {
        handleError(error)
    }
}