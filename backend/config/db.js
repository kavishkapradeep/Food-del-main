import mongoose from "mongoose";

export const connectDB =async ()=>{
    await mongoose.connect(`mongodb+srv://kavishkapradeep903:Kavishka07@cluster0.qpox7.mongodb.net/food-del`).then(()=>
        console.log("DB Connected")
    );
}