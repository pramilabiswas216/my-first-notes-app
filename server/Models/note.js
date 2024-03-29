import {model, Schema} from "mongoose";
const noteSchema = new Schema ({
    tittle: String,
    content: String,
    category: String
})

const Note = model("Note", noteSchema);

export default Note;