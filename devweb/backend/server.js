import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
dotenv.config()
const app = express()
app.use(cors({
    origin: process.env.FRONTENDURL,
    credentials: true,
}));
app.use(express.json())

mongoose.connect("mongodb+srv://vidtubeuser:vidtubeuser12@cluster0.gsfsr.mongodb.net/vidtube", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error(err));

// Define the schema and model
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});
const Contact = mongoose.model('Contact', contactSchema);

app.post('/', async (req, res) => {
    try {
        const { name, message, email } = req.body;
        
        // Create a new document using the model
        const contact = new Contact({ name, email, message });
        await contact.save();
        
        res.status(201).json({ message: "Contact saved successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});