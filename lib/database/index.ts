// our environment is a serverless environment
import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI;
//* Meaning of (global as any) : 
//* In TypeScript, there are times when you might encounter situations where the type of a variable or value is not clear to the TypeScript compiler. When you use (global as any), you are essentially saying, "Hey TypeScript, don't worry about checking the type of this thing; just treat it as if it could be anything."

let cached = (global as any).mongoose || { conn: null, promise: null }

export const connectedToDatabase = async () => {
    if (cached.conn) return cached.conn;

    if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");
    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName: 'evently',
        //* 'Buffering' in mongoose : 
        /* All collection actions (insert, remove, queries, etc.) are queued until Mongoose successfully connects to MongoDB.
        In Mongoose 5.11, there is a bufferTimeoutMS option (set to 10000 by default) that configures how long Mongoose will allow an operation to stay buffered before throwing an error.
        If you want to opt out of Mongoose's buffering mechanism across your entire application, set the global bufferCommands option to false: */
        bufferCommands: false
    })

    cached.conn = await cached.promise

    return cached.conn
}