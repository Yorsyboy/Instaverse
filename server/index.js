import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'

const app = express()

dotenv.config()

app.use(bodyParser.json({ limit: "32mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "32mb", extended: true }))
app.use(cors())

app.use('/posts', postRoutes)
app.use('/user', userRoutes)

app.get('/', (req, res) => {
   res.send('Welcome to Instaverse API')
})


const PORT = process.env.PORT || 5001

const connectDB = async () => {
   try {
      await mongoose.connect(process.env.CONNECTION_URL);
      app.listen(PORT, () => console.log(`Server running on port:${PORT}`))
   } catch (error) {
      console.log("Connection MonngoDB Failed", error.message)
   }
}

connectDB();
mongoose.connection.on('connected', () => console.log("MongoDB Connected"));
mongoose.connection.on('error', (error) => console.log(error));