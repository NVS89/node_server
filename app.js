import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

//Router Handlers
import messagesRouter from './routes/messages/messages.routes.js';
import { config } from './config/config.js';

const server = express();
const port = process.env.PORT || 8080;

// form data handler
// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
server.use(bodyParser.json());


// enable CORS
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.header(
        'Access-Control-Allow-Headers',
        'Content-Type, Accept, Cache-Control, Content-Disposition, Authorization'
    );
    next();
});


// routes
// server.use('/auth', authRoutes);
// server.use('/user', userRoutes);
server.use('/dashboard', messagesRouter);

mongoose.set('useUnifiedTopology', true);
mongoose.connect(config.dbConnect, { useNewUrlParser: true }).then(
    ()=>{
        server.listen(port, () => {
            console.log('====================================');
            console.log(`server start on port ${port}`);
            console.log('====================================');
        });
    }
).catch(
    (error) => {
        throw new Error(error);
    }
);
