import mongoose, {Schema} from "mongoose";

const colorSchema = new Schema({
    nombreColor:{
        type: String,
        required: true,
        minLength: 3,
        maxLength:20,
        unique:true
    }
})

const Color = mongoose.model('color', colorSchema)

export default Color