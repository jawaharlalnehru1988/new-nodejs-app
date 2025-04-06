import express from 'express';
import userRouter from './Routes/userRouter';
import messageRouter from './Routes/messageRouter';
import referralRouter from './Routes/refferalRouter';
import appointmentRouter from './Routes/appointmentRouter';
import { Environment } from './utils/config';
import mongoose, { mongo } from 'mongoose';

const app = express();

const PORT = Environment.PORT || 3600;
const DB_URL = Environment.MONGODB_URI || 'mongodb://localhost:27017/referralDB';

mongoose.connect(DB_URL
).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

app.use(express.json());

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