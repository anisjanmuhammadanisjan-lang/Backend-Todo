import mongoose from "mongoose"

export const connectdb = async()=>{
    try {
       await mongoose.connect(process.env.MONGO_URI)
       console.log("MONGODB CONNECTED SUCESSFULLY !")
    } catch (error) {
        console.error("ERROR CONNECTED MONGODB !" , error)
        process.exit(1) // errors are failure
    }
}