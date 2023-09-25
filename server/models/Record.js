import mongoose from "mongoose";

const Record = new mongoose.Schema({
    name:    {type: String, required: true},
    email:   {type: String, required: true},
    address: {type: String, required: true},
    gender:  {type: String, required: false},
});

export default mongoose.model('Record', Record);
