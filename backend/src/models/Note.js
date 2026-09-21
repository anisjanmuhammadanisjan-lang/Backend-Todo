import mongoose from "mongoose"

// create first schema
// model base of that schema

const noteSchema = new mongoose.Schema({
    title: {
        type:string,
        required : true
    },
    content:{
        type : string,
        required : true
    }
}, {timestamps : true})

const Note = mongoose.model("note" , noteSchema)

export default Note