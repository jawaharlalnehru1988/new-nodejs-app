import express from 'express';
import userRouter from './Routes/userRouter';
import messageRouter from './Routes/messageRouter';
import referralRouter from './Routes/refferalRouter';
import appointmentRouter from './Routes/appointmentRouter';
import { Environment } from './utils/config';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

const PORT = Environment.PORT || 3600;
const DB_URL = Environment.MONGODB_URI ;

mongoose.connect(DB_URL
).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

app.use(express.json());
app.use(cors())

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Import routes
app.use('/api/users', userRouter);
app.use('/api/refferals', referralRouter); 
app.use('/api/appointments', appointmentRouter)
app.use('/api/messages', messageRouter);


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


