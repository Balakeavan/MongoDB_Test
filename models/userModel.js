// models/User.js
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:
    {
        type: String

    },
    email:
    {
        type: String
    },
    address:
    {
        type: String
    }
});
export default mongoose.model('my', userSchema);
let data =
{
    name: "heldddlo",
    email: "email",
    address: "add"
}

mongoose.model('Datas', userSchema).insertMany([data]) 