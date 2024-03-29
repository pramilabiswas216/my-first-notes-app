import express from "express";
import cors from "cors";
import mongoose, {model, Schema} from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const connectDB = async()=>{
   await mongoose.connect(process.env.MONGODB_URL)
   console.log("database is connected")
}

connectDB();

const PORT = 5000;

const noteSchema = new Schema ({
    tittle: String,
    content: String,
    category: String
})

const Note = model("Note", noteSchema);


app.get("/health",(req, res)=>{
   res.json({
    success: true,
    message:"Server is running",
    data:null
   })
});

app.post("/notes", async(req, res)=>{
    const {tittle, content, category} = req.body;

   const newNote = await Note.create({
        "tittle":tittle,
        "content":content,
        "category":category
    })



    res.json({
        success:true,
        message:"Note added successfully",
        data:newNote
    })
});

app.get("/notes", async(req, res)=>{

    const notes = await Note.find();
    res.json({
        success:true,
        message:"Notes fetched successfully",
        data:notes
    })
});


app.get("/notes/:id", async (req, res)=>{
    const {id} = req.params;
    const note = await Note.findOne({
        _id: id
    })

    res.json({
       success:true,
       message:"Notes fetched successfully",
       data:note
    })
})

app.put("/notes/:id", async(req, res)=>{
     const {id} = req.params;

     const {tittle, content, category} =req.body;

     await Note.updateOne({_id:id}, {$set:{
        tittle:tittle,
        content:content,
        category:category
     }})

     res.json({
        success:true,
        message:"Note updated successfull",
        data:null
     })
})

app.delete("/notes/:id", async(req, res)=>{
   const {id} = req.params;

   await Note.deleteOne({_id: id})
   res.json({
    success:true,
    message:"Note delte succesfully",
    data:null
   })
   
})

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
});