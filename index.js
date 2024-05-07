import express from 'express';


import testRoutes from './routes/test/testRoutes.js';


import { connectDB } from './utils/db/mongo.js';


const app = express();


app.use(express.json());
app.use(express.urlencoded());


app.use('/api', testRoutes);




const PORT = process.env.PORT || 3001


connectDB();


app.listen(PORT, () => {
    console.log('server is running on port 3001')
})
