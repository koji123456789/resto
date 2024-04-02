import mongoose from"mongoose";
import validator  from "validator";

const reservationSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true,
        minLength: [2,"First name must contain at least 3 characters!"],
        maxLength: [30, "First name cannot exceed 30 characters!"],
    },
    lastName:{
        type:String,
        required: true,
        minLength: [1,"Last name must contain at least 3 characters!"],
        maxLength: [30, "Last name cannot exceed 30 characters!"],
    },
    email:{
        type: String,
        required: true,
        validate:[validator.isEmail,'Please provide a valid Email address!'],
    },
    phone: {
        type:String,
        required: true,
        minLength: [10,"Phone  number must be at least 10 digits!"],
        maxLength: [10, "Phone number must only contain 10 digits!"],
    },
    password:{
        type:String,
        required:true,
    },
    age:{
        type:String,
        required:true,
    },
});
export const Reservation = mongoose.model("Reservation",reservationSchema);